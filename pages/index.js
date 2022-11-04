import Head from 'next/head';
import Image from 'next/image';
import cx from 'classnames';
import { useState }  from 'react';
import styles from '../styles/Home.module.css';
import { v4 as uuidv4 } from "uuid";
import {useForm} from "react-hook-form";



export default function Home() {

  const [items, setItems] = useState([
   { id: 'uuidv4',
     task: "Buy Milk",
     done: false,
 },
]);
  const [todoItem, setTodoItem] = useState('');

  const handleAdd = () => {
    if(todoItem) {
      setItems([{
        id: 'uuidv4',
        task: todoItem,
        done: false
      }, ...items]);
      setTodoItem('');
    };
  };

  const handleToggle = () => {
    const _items = items.map((item) =>{
      if(item.id == item.id) {
        return {
          ...item,
          done: !item.done,
        };
      }
      return item;
    } );
    setItems(_items);
  }

  const handleEnter =(e) => {
    e.preventDefault();
    if(e.key == 'Enter'){
      handleAdd();

    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>TODO APP</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          TODO APP
        </h1>

        <p className={styles.description}>
          Get started By Adding a Task
        </p>
        <div>
          <form>
            <input type='text' value={todoItem} onKeyDown={handleEnter} 
            onChange={(e) => setTodoItem(e.target.value)} 
            ></input>
            <button type='button'>Add</button>
          </form>
          <div>
            <ul>
              {items.map(({id, task, done}) => (
                <li 
                key={id}
                onClick = {() => handleToggle(id)}
                className= {cx('item', {done})}
                >{task}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      <footer>
        
      </footer>
    </div>
  )
}
