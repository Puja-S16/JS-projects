const button=document.getElementById("add-task-button");
const task=document.getElementById("add-task-input");
const parent=document.getElementById("task-list");


button.addEventListener('click',(e)=>{
  if(task.value.trim()!=""){
    const child=document.createElement("li");
    child.innerText=task.value.trim();

    parent.append(child);
  }
  task.value="";
})