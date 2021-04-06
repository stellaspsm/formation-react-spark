function ToDoItem(props, onDelete) {
    const { id, title, completed } = props;

    
  function handleDelete(event) {
    onDelete(id); // remonte la valeur à Todos
  }

  return (
      <div className="ToDoItem" key={id}>
        {title} {completed}
        <button onClick={handleDelete}>-</button>
      </div>
    );
  }
  
  export default ToDoItem;