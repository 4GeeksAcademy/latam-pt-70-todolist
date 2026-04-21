const inputTaskEl = document.querySelector("#input-task");
const newBtnEl = document.querySelector("#new-btn");
const taskListEl = document.querySelector("#task-list");
let counter = 1;
let lastTask = null;

const deleteTask = (event) => {
    const taskElementToDelete = event.target.parentElement;
    if(lastTask == taskElementToDelete){
        lastTask = null;
    }
    taskListEl.removeChild(taskElementToDelete);
}

const addNewTask = () => { 

  // guard clause
  if(inputTaskEl.value == "") return;

  const newTask = document.createElement(`div`);
  newTask.id = "task-" + counter;
  newTask.classList =
  "card d-flex flex-row p-2 my-2 col-3 justify-content-between align-items-center";
  newTask.innerHTML = `
    <i class="fa-regular fa-circle-check text-primary"></i>
    <p class="m-0">${inputTaskEl.value}</p>
  `;
    const deleteIcon = document.createElement("i");
    deleteIcon.classList = "fa-solid fa-trash-can text-danger";
    deleteIcon.onclick = deleteTask;
    newTask.appendChild(deleteIcon);

    if(lastTask == null){
        inputTaskEl.value = "";
        taskListEl.appendChild(newTask);
        lastTask = newTask;
        counter++;
        return;
    }
    inputTaskEl.value = "";
    counter++; 
    taskListEl.insertBefore(newTask, lastTask)
    lastTask = newTask;
    return;
};

newBtnEl.onclick = addNewTask;

inputTaskEl.addEventListener("keyup", evt => {
    if(evt.key == "Enter"){
        addNewTask()
    }
})
