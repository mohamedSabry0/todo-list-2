class List {
  constructor(taskList = []) {
    this.taskList = taskList;
  }

  sort() {
    this.taskList.sort((a, b) => a.index - b.index);
  }


  listAdd(task) {
    this.taskList.push(task);
  }

}

// export default List;
class Storage {
  constructor() {
    this.taskList = JSON.parse(localStorage.getItem('tasks')) || [];
  }

  getList() {
    return this.taskList;
  }

  sort() {
    this.taskList.sort((a, b) => a.index - b.index);
    localStorage.setItem('tasks', JSON.stringify(this.taskList));
  }

  updateTask(list) {
    localStorage.setItem('tasks', JSON.stringify(list));
  }

  listAdd(task) {
    this.taskList.push(task);
    localStorage.setItem('tasks', JSON.stringify(this.taskList));
  }

  listRemove(taskIndex) {
    this.taskList = this.taskList.filter((task) => task.index !== taskIndex);
    localStorage.setItem('tasks', JSON.stringify(this.taskList));
  }

  listRemoveCompleted() {
    this.taskList = this.taskList.filter((task) => !task.completed);
    localStorage.setItem('tasks', JSON.stringify(this.taskList));
  }
}

export default Storage;
