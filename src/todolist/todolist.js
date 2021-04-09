//import ToDoItem from "./todoitem";

import ToDoItem from "./todoitem";

//function ToDoList(props, onDelete) {
function ToDoList(props) {
    //const { tasks = [] } = props;

    /*const itemsJsx = tasks.map((task) => (
      <div className="ToDoItem" key={task.id}>
        {task.title}
      </div>
    ));*/

    const itemsJsx = props.tasks.map((task) => (
      ToDoItem(task, props.onDelete)
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