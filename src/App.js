import { useState, useEffect } from 'react'

import TodoInput  from './components/TodoInput'
import TodoList from './components/TodoList'
import './App.less'

function App() {
  const [list, setList] = useState([
    { id: 1, text: '学习 HTML CSS JS', completed: true },
    { id: 2, text: '学习 Vue React 框架', completed: false },
    { id: 3, text: '学习 Node.js 服务端，全栈开发', completed: false }
  ])
  function addTodo(item) {
    const newOne = {
      text: item,
      id: list.length + '-' + Math.random().toString().slice(-4),
      done: false
    }
    setList([...list, newOne])
  }
  function handleDel() {

  }
  return (
    <div className="App">
      <h3 className='title'>Todo List</h3>
      <div className='content'>
        <TodoInput addTodo={addTodo}></TodoInput>
        <TodoList list={list} handleDel={handleDel}></TodoList>
      </div>
    </div>
  )
}

export default App
