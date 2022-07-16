class Task {
  constructor(description, completed, index){
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  setDescription(newDescription) {
    this.description = newDescription;
  }

  toggleStatus() {
    this.completed = !this.completed;
  }
}

export default Task;
