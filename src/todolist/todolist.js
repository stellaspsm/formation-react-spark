//import ToDoItem from "./todoitem";

import ToDoItem from "./todoitem";

function ToDoList(props, onDelete) {
    const { tasks = [] } = props;

    /*const itemsJsx = tasks.map((task) => (
      <div className="ToDoItem" key={task.id}>
        {task.title}
      </div>
    ));*/

    const itemsJsx = tasks.map((task) => (
      ToDoItem(task, onDelete)
    ));

    /*createItems() {
      tasks.array.forEach(element => {
        ToDoItem(element)
      });
    }*/

    return (
      <div className="ToDoList">
        {itemsJsx}
      </div>
    );
  }
  
  export default ToDoList;