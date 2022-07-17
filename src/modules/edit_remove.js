import deleteIcon from '../images/icons8-delete-64.png';
class EditRemoveHandler{
  constructor(list) {
    this.list = list;
  }

  handleEvent(event) {
    if(event.target.id == 'description')
    this[event.target.id](event.target);
  }

  getDisplayIndex(target) {
    return [...target.parentElement.parentElement.children].indexOf(target.parentElement);
  }

  // update status
  // status(target){
  //   let index = this.getDisplayIndex(target);
  //   this.list.taskList[index].completed = !this.completed;
  //   this.list.updateTask(this.list.taskList);
  // }

  // update description
  description(target){
    let index = this.getDisplayIndex(target);
    const editField = document.createElement('input');
    const removeBtn = document.createElement('img');

    removeBtn.className = 'remove';
    removeBtn.src = deleteIcon;
    const oldDesc = this.list.taskList[index].description;
    editField.value = oldDesc;
    const parentElement = target.parentElement;
    parentElement.replaceChild(editField, target);
    parentElement.appendChild(removeBtn);
    removeBtn.addEventListener('click', this.removeTask.bind(this));
    editField.addEventListener('keyup', this.update.bind(this));

  }

  update(event){
    if(event.key === 'Enter'){
      let index = this.getDisplayIndex(event.target);
      const newDesc = document.createElement('p');
      newDesc.id = 'description';
      newDesc.textContent = event.target.value;
      this.list.taskList[index].description = event.target.value;
      this.list.updateTask(this.list.taskList);
      console.log(this.list);
      event.target.parentElement.replaceChild(newDesc, event.target);
    }
  }

  removeTask(event){
    let index = this.getDisplayIndex(event.target);
    this.list.listRemove(index);
    event.target.parentElement.remove();
  }
}

export default EditRemoveHandler;
