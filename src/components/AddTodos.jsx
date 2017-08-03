import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@observer
export default class TodoList extends Component {
  constructor() {
    super();
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnSubmit(e) {
    const {
      addTodo,
    } = this.props.appState || {};
    if (e.charCode === 13) {
      addTodo(e.target.value);
      e.target.value = '';
    }
  }

  render() {
    const {
      appState: {
        addTodo,
      } = {},
    } = this.props || {};
    return (
      <div>
        <input onKeyPress={this.handleOnSubmit}/>
        <DevTools />
      </div>
    );
  }
};

