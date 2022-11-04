import task from '.';
import prisma from '../../../lib/prisma';
import dbConnect from '../../../utils/dbConnect';

export default async (req, res) => {
    const{ method } = req;
    const { id } = req.query;

    await dbConnect();

    //Update Tasks
    if(method === "PUT") {
        try {
            const result = await task.findByIdAndUpdate(id, {$set: req.body},{new: true});
            res.statues(200).json({data: result, message: 'Task updated successfully'});
        } catch (error) {
           res.status(500).json({ message: "Internal Server Error"})
           console.log(error); 
        };
    };

    //Delete Task
    if(method === "DELETE") {
        try {
           await Task.findByIdAndDelete(id);
           res.status(200).json({ message: 'Task Deleted'});
        } catch (error) {
            res.status(500).json({ message: "Internal Server Error"})
            console.log(error)
        }
    }
}