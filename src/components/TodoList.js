function TodoList(props) {
  console.log(props.list)
  const { list = [] } = props
  return (
    <div>
      {list?.map((l, idx) => (
        <p>
          {idx + 1}-{l.text}
        </p>
      ))}
    </div>
  )
}
export default TodoList