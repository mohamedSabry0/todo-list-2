class EditRemoveHandler{
  constructor(list) {
    this.list = list;
  }

  handleEvent(event) {
    this[event.target.id](event.target);
  }

  getDisplayIndex(target) {
    return [...target.parentElement.parentElement.children].indexOf(target.parentElement);
  }

  status(target){
    let index = this.getDisplayIndex(target);
    this.list.taskList.map(task =>{
      if (task.index === index){
        task.toggleStatus();
      }
    })
  }

  card(){

  }
}

export default EditRemoveHandler;
