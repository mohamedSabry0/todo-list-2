import './style.css';
import AddHandler from './modules/add';
// import List from './modules/list';
import Storage from './modules/storage';
import Display from './modules/display';

const taskInput = document.getElementById('new-task');
const storage = new Storage();

const addHandler = new AddHandler(storage, Display);
Display.displayList(storage);

taskInput.addEventListener('keyup', addHandler);
