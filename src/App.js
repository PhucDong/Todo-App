import React from "react";

import TodoItem from "./components/TodoItem.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }

  handleChange = (id) => {
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
      .then(json => {
        const filteredTodos = json.filter(todo => todo.title.length < 24);
        this.setState({ todos: filteredTodos })
      })
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