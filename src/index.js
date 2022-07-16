import './style.css';

const listElem = document.getElementById('list');

const tasksList = [
  {
    description: 'test 1',
    completed: true,
    index:2
  },
  {
    description: 'test 2',
    completed: true,
    index:0
  },
  {
    description: 'test 3',
    completed: false,
    index:1
  }
]

tasksList.sort((a, b)=>{
  return a.index - b.index;
})

tasksList.forEach((task) => {

})
