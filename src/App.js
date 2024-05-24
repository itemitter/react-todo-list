import { useState, useEffect } from 'react'

import TodoInput  from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  const [list, setList] = useState([])
  function addTodo(item) {
    const newOne = {
      text: item,
      id: list.length + '-' + Math.random().toString().slice(-4),
      done: false
    }
    setList([...list, newOne])
  }
  return (
    <div className="App">
      <TodoInput addTodo={addTodo}></TodoInput>
      <TodoList list={list}></TodoList>
    </div>
  )
}

export default App
