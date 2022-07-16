class EditRemoveHandler{
  constructor(list) {
    this.list = list;
  }

  handleEvent(event) {
    if(event.target.id == 'status' || event.target.id == 'description')
    this[event.target.id](event.target);
  }

  getDisplayIndex(target) {
    return [...target.parentElement.parentElement.children].indexOf(target.parentElement);
  }

  status(target){
    let index = this.getDisplayIndex(target);
    this.list.taskList[index].completed = !this.completed;
    this.list.updateTask(this.list.taskList);
  }

  description(target){
    let index = this.getDisplayIndex(target);
    const editField = document.createElement('input');
    const oldDesc = this.list.taskList[index].description;
    editField.value = oldDesc;
    const parentElement = target.parentElement;
    parentElement.replaceChild(editField, target);
    editField.addEventListener('keyup', this.update.bind(this));

  }

  update(event){
    if(event.key === 'Enter'){
      let index = this.getDisplayIndex(event.target);
      const newDesc = document.createElement('p');
      newDesc.id = 'description';
      newDesc.textContent = event.target.value;
      this.list.taskList[index].description = event.target.value;

      console.log(this.list);
      event.target.parentElement.replaceChild(newDesc, event.target);
    }
  }
}

export default EditRemoveHandler;
