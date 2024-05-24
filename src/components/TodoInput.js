import { useState } from 'react'
function TodoInput(props) {
  const { addTodo } = props
  const [val, setVal] = useState('')
  function addTodoHandler() {
    if(!val) {
      return
    }
    addTodo(val)
    setVal('')
  }
  function handleChange(e) {
    setVal(e.target.value)
  }
  return (
    <div>
      <input
        value={val}
        onChange={handleChange}
      />
      <p onClick={addTodoHandler}>新增</p>
    </div>
  )
}
export default TodoInput