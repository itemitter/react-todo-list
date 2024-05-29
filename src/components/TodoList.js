import '../style/TodoList.less'
function TodoList(props) {
  console.log(props.list)
  const { list = [], handleDel } = props
  function clickDel() {
    handleDel()
  }
  return (
    <div className="list-wrapper">
      {list?.map((l, idx) => (
        <div className="item">
          <input className='item-check' type="checkbox"></input>
          <p className='item-text'>
            {idx + 1}-{l.text}
          </p>
          <button className='item-btn' onClick={clickDel}>X</button>
        </div>
      ))}
    </div>
  )
}
export default TodoList