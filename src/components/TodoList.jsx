import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@observer
class TodoList extends Component {
  constructor() {
    super();
    this.handleCompleteTodo = this.handleCompleteTodo.bind(this);
  }
  handleCompleteTodo(number) {
    const {
      appState: {
        completeTodo,
      } = {},
    } = this.props || {};
    completeTodo(number);
  }
  handleUncompleteTodo(number) {
    const {
      appState: {
        uncompleteTodo,
      } = {},
    } = this.props || {};
    uncompleteTodo(number);
  }
  render() {
    const {
      appState: {
        todos,
        todosLength,
        completeTodo,
        addTodo,
      } = {},
    } = this.props || {};
    return (
      <div>
        <ul>
          {todos.map((todo, i) => {
            return todo.completed ?
            <li
              key={i}
              onClick={() => this.handleUncompleteTodo(todo.number)}>
              <strong>
                {`${todo.number}: ${todo.description}`}
              </strong>
            </li>
            : <li
              key={i}
              onClick={() => this.handleCompleteTodo(todo.number)}>
              {`${todo.number}: ${todo.description}`}
              </li>
          })}
        </ul>
        <DevTools />
      </div>
    );
  }
};

export default TodoList;

