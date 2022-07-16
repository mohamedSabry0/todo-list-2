import './style.css';
import AddRemoveHandler from './modules/addRemove';
import List from './modules/list';
import Display from './modules/display';

// const listElem = document.getElementById('list');

const taskInput = document.getElementById('new-task');
const tasks = new List();

const addRemoveHandler = new AddRemoveHandler(tasks, Display);

taskInput.addEventListener('keyup', addRemoveHandler);


// const tasksList = [
//   {
//     description: 'test 1',
//     completed: true,
//     index: 2,
//   },
//   {
//     description: 'test 2',
//     completed: true,
//     index: 0,
//   },
//   {
//     description: 'test 3',
//     completed: false,
//     index: 1,
//   },
// ];

// tasks.taskList.forEach((task) => {
//   const taskCard = document.createElement('li');
//   const description = document.createElement('p');
//   const completion = document.createElement('input');
//   completion.type = 'checkbox';
//   description.textContent = task.description;
//   completion.checked = task.completed;

//   listElem.appendChild(taskCard);
//   taskCard.append(completion, description);
// });
