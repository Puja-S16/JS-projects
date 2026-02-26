// Best Practice: The "Safe" Order
// Placements ke liye jab tum code likho, toh hamesha ye order follow karo taaki koi confusion na ho:

// Selectors: Sabse pehle elements pakdo (const button = ...).

// Functions: Phir saare logic wale functions likho (const saveData = ...).

// EventListeners: Sabse niche events lagao (button.addEventListener...).

// Isse fayda ye hota hai: Jab koi tumhara code padhega, use pehle hi saare "Tools" (functions) dikh jayenge, aur phir unka "Use" (listeners) niche dikhega.



// selectors
    const button=document.getElementById("add-task-button");
    const task=document.getElementById("add-task-input");
    const parent=document.getElementById("task-list");



// functions :


    // Abhi problem ye hai ki jaise hi tum page refresh karti ho, saari mehnat (tasks) gayab ho jati hai. Humein browser se kehna hai: "Bhai, ye list sambhaal ke rakh, jab main wapas aaun toh mujhe dikha dena."

    const saveData=function(){
      localStorage.setItem("data",parent.innerHTML)
    }
    // reload karne pe data laao
    const d=localStorage.getItem("data");
    if(d!=null){
      parent.innerHTML = d;
    } 



// Event listeners
    button.addEventListener('click',(e)=>{
      if(task.value.trim()!=""){
        const child=document.createElement("li");
        const delButton=document.createElement("button");
        
        child.innerText=task.value.trim();
        delButton.innerHTML='Delete';
        delButton.className="delete-task-button";
        child.append(delButton);

        parent.append(child);
      }
      task.value="";
      // local storage mein add karo
        saveData();
    })

    // 'enter' button 
    task.addEventListener('keydown',(e)=>{
      if(e.key=='Enter'){
        button.click();
      }
    })

    // // deleting task
        // Event Delegation) placements ke liye ek favorite interview topic hai! Yeh concept tab kaam aata hai jab aapke paas aise elements hon jo page load hone ke baad "dynamic" tareeke se add ho rahe hon (jaise aapke naye tasks).
    parent.addEventListener('click',(e)=>{
      
      const element=e.target;
      if(element.classList.contains("delete-task-button")) //button -delete
      {
        const p=element.parentElement;
        p.remove();
      }
      
      else if(element.tagName=="LI"){
        // // strike through when clicked on the list: task completed. and remove the strike when clicked again
        element.classList.toggle("checked");
      }

      // local storage mein add karo
      saveData();
    })

    