import { useState } from 'react';
import './App.scss';
import TodoBody from './components/todobody/TodoBody';
import TodoHeader from './components/todoheader/TodoHeader';

function App() {
  const [items,setItems] = useState([{id:1,title:"Learn React",isCompleted:false}]);

  return (
    <div className="todo">
      <h1>Completed {items.filter((item)=> item.isCompleted).length}/{items.length} {items.length===items.filter((item)=> item.isCompleted).length && items.length!==0 && <span>Excellent</span>} </h1>
      <TodoHeader setItems={setItems}/>
      <TodoBody items={items} setItems={setItems}/>
    </div>
  );
}

export default App;
