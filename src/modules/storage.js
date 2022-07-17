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

  updateTask() {
    localStorage.setItem('tasks', JSON.stringify(this.taskList));
  }

  listAdd(task) {
    this.taskList.push(task);
    localStorage.setItem('tasks', JSON.stringify(this.taskList));
  }

  listRemove(taskIndex) {
    this.taskList = this.taskList.filter((task) => task.index !== taskIndex);

    // eslint-disable-next-line no-return-assign
    this.taskList.forEach((task, index) => task.index = index);

    localStorage.setItem('tasks', JSON.stringify(this.taskList));
  }

  // listRemoveCompleted() {
  //   this.taskList = this.taskList.filter((task) => !task.completed);
  //   localStorage.setItem('tasks', JSON.stringify(this.taskList));
  // }
}

export default Storage;
