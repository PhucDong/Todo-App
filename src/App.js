import React from "react";

import TodoItem from "./components/TodoItem.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(t => {
        if (t.id === id) {
          t.completed = !t.completed;
        }
        return t
      })
      return {
        todos: updatedTodos
      }
    })
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(json => this.setState({ todos: json }))
  }

  render() {
    const todosArray = this.state.todos.map(item =>
      <TodoItem
        key={item.id}
        task={item}
        handleChange={this.handleChange}
      />
    )
    return (
      <div>
        {todosArray}
      </div>
    )
  }
}

export default App;