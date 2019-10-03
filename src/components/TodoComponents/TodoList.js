import React from "react";

class TodoList extends React.Component {
  render() {
    return (
      <div className="todolistMain">
        <div className="header">
          <form onSubmit={this.addTodo}>
            <input placeholder="...todo"></input>
            <button type="submit">Add Todo</button>
          </form>
        </div>
      </div>
    );
  }
}

export default TodoList;
