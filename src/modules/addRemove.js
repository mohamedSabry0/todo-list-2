import Task from "./task";

class AddRemoveHandler {
  constructor(list, Display) {
    this.list = list;
    this.Display = Display;
  }

  handleEvent(event){
    if(event.key === 'Enter'){
      this.addHandler(event.target);
    }
  }

  addHandler(target) {
    const task = new Task(target.value, false, list.length);
    this.list.listAdd(task);
    this.Display.addTask(task);
    target.value = '';
  }
}

export default AddRemoveHandler;
