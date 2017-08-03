import { observable } from 'mobx';

class AppState {
  @observable timer = 0;
  @observable todos = [];
  @observable todosLength = 0;

  constructor() {
    setInterval(() => {
      this.timer += 1;
    }, 1000);
    this.addTodo = this.addTodo.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
    this.uncompleteTodo = this.uncompleteTodo.bind(this);
  }

  resetTimer() {
    this.timer = 0;
  }
  
  /*
   * task must have form of
   * { number: number
   *   completed: bool
   *   description: string }
   */
  addTodo(description) {
    const todo = {
      description,
      number: this.todosLength,
      completed: false,
    }
    this.todos.push(todo);
    ++this.todosLength;
  }

  completeTodo(todoNumber){
    const selectedTodo = this.todos.find((todo) => {
      return todo.number === todoNumber
    });
    selectedTodo.completed = true;
  }
  uncompleteTodo(todoNumber){
    const selectedTodo = this.todos.find((todo) => {
      return todo.number === todoNumber
    });
    selectedTodo.completed = false;
  }
}

export default AppState;
