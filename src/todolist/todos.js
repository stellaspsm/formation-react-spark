import { Component } from "react";
import ToDoList from "./todolist";
import ToDoForms from "./ToDoForms";

class ToDos extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [{id: 1, title: 'Le malale imaginaire', completed:true}, {id: 2, title: 'Madame Bovary', completed: false}, {id: 3, title: 'Le parfum', completed: true}],
      //newTask: {id: 0, title: '', completed: false},
      newTask: '',
    };
  }

  handleSubmit = (newTask) => {
    //const { tasks = []} = this.state;
    //tasks.push({id: Math.random(), title: newTask, completed: false});
    this.setState({
      tasks: [...this.state.tasks, {id: Math.random(), title: newTask, completed: false}],
      newTask: '',
    });
  }

  handleChange = (newTask) => {
    this.setState({
      newTask: newTask,
    });
    /*const { tasks = []} = this.state;
    let newId = 0;
    tasks.find((task) => {newId = id > newId ? id + 1 : newId});*/
  }

  handleDelete = (removeId) => {
    this.setState({
      tasks: [...this.state.tasks].filter((task) => task.id !== removeId),
    });
  }

  render() {
    const { tasks = [] } = this.state;

    return (
      <div className="ToDos">
        <ToDoForms value={this.state.newTask} onValueChange={this.handleChange} onAdd={this.handleSubmit} />
        <ToDoList tasks={tasks} onDelete={this.handleDelete} />
      </div>
    );
  }
}

export default ToDos;
