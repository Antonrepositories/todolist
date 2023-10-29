const text_in = document.getElementById("text-in");
const taskList = document.getElementById("task-list");

function Add(){
    if(text_in.value === ''){
        alert("Ви нічого не ввели!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = text_in.value;
        //
        //
        taskList.appendChild(li);
        let del = document.createElement("span");
        del.innerHTML = "\u00d7";
        li.appendChild(del);
    }
    text_in.value = '';
    saveList();
}
taskList.addEventListener("click", function(a){
    if(a.target.tagName === "LI"){
        a.target.classList.toggle("checked");
        saveList();
    }
    else if(a.target.tagName == "SPAN"){
        a.target.parentElement.remove();
        saveList();
    }
}, false)

function saveList(){
    localStorage.setItem("tasklist", taskList.innerHTML);
    localStorage.setItem("tasklist_updated", Date.now().toString());
}
function unloadList(){
    taskList.innerHTML = localStorage.getItem("tasklist");
}
unloadList()
window.addEventListener("storage", function (event) {
    if (event.key === "tasklist_updated") {
        // Update the task list when changes are detected in localStorage
        unloadList();
    }
});
//unloadList()