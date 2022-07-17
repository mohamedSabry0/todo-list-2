import './style.css';
import AddHandler from './modules/add.js';
import Storage from './modules/storage.js';
import Display from './modules/display.js';

const taskInput = document.getElementById('new-task');
const storage = new Storage();

const addHandler = new AddHandler(storage, Display);
Display.displayList(storage);

taskInput.addEventListener('keyup', addHandler);
