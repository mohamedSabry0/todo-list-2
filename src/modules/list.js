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

export default List;
