import '../style/TodoInput.less'
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
    <div className='input-wrapper'>
      <p className='input-text'> 待办事项 </p>
      <input
        className='input-self'
        value={val}
        onChange={handleChange}
      />
      <button className='input-add' onClick={addTodoHandler}> 新增 </button>
    </div>
  )
}
export default TodoInput