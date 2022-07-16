const listElem = document.getElementById('list');

class Display {
  static addTask(task) {
    const taskCard = document.createElement('li');
    const description = document.createElement('p');
    const completion = document.createElement('input');
    completion.type = 'checkbox';
    description.textContent = task.description;
    completion.checked = task.completed;

    listElem.appendChild(taskCard);
    taskCard.append(completion, description);

  }

  static displayList(list){
    list.forEach(this.addTask(task))
  }
}

export default Display;
