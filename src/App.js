import React from "react";

import TodoItem from "./components/TodoItem.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
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