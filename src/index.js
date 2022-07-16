import './style.css';
import AddHandler from './modules/add';
import List from './modules/list';
import Display from './modules/display';

// const listElem = document.getElementById('list');

const taskInput = document.getElementById('new-task');
const tasks = new List();

const addHandler = new AddHandler(tasks, Display);

taskInput.addEventListener('keyup', addHandler);
