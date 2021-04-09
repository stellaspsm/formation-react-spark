function ToDoItem(task, onDelete) {
    const { id, title, completed } = task;

    
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