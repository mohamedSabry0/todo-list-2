class List {
  constructor(taskList) {
    this.taskList = taskList;
  }

  listAdd(task) {
    this.taskList.push(task);
  }

}

export default List;
