import { PrismaClient } from '@prisma/client';

const DATABASE_URL = process.env.DATABASE_URL;

if(!DATABSE_URL) {
    throw new Error (
        "Please define the DATABASE_URL environment variale inside.env"

    );

}

let cached = gloabal.prisma;

if(!cached){
    cached = global.prisma = {conn:null, Promise: null}
}

const dbConnect = async () => {
    if(cached.conn) {
        return cached.conn;
    }

    if(!cached.promise){
        const options = {
            useNewUrlParser:true,
            useUnifiedTopology:true,
        };

        cached.promise = prisma.connect(DATABASE_URL, options).then((prisma) =>{
            return prisma
        })
    
    };

    cached.conn = await cached.promise;
    return cached.conn;
}

export default dbConnect;