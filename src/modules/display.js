import EditRemoveHandler from "./edit_remove";

const listElem = document.getElementById('list');

class Display {
  static addTask(task, list) {
    const taskCard = document.createElement('li');
    const description = document.createElement('p');
    const completion = document.createElement('input');
    completion.type = 'checkbox';
    description.textContent = task.description;
    completion.checked = task.completed;

    completion.id = 'status';

    const editRemoveHandler = new EditRemoveHandler(list);

    taskCard.addEventListener('click', editRemoveHandler);

    listElem.appendChild(taskCard);
    taskCard.append(completion, description);

  }

  static displayList(taskList){
    taskList.forEach(this.addTask(task))
  }
}

export default Display;
