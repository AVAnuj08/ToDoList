//WITHOUT LOCAL STORAGE.

const item = document.querySelector(".txt");
const box = document.querySelector("#ul");

item.addEventListener("keyup", function(e) {
    if(e.key == "Enter" && item.value.trim() !="") {
        add(this.value);
        this.value = "";
    }
});

function add(item) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `${item}  <i class="fa-solid fa-check"></i> <i class="fa-solid fa-xmark"></i> `;
    box.appendChild(listItem);

    listItem.querySelector(".fa-check").addEventListener("click", function() {
        listItem.style.textDecoration="line-through";
    });

    listItem.querySelector(".fa-xmark").addEventListener("click", function() {
        listItem.remove();
    });
} 


//WITH LOCAL STORAGE.

// const item = document.querySelector(".txt");
// const box = document.querySelector("#ul");

// let tasksArr=[];

// if(localStorage.getItem("tasks")){
//     tasksArr=JSON.parse(localStorage.getItem("tasks"));

//     tasksArr.forEach((taskObj)=>{
//         add(taskObj.title,taskObj.idx);
//     });
// }

// item.addEventListener("keyup", function(e) {
//     if(e.key == "Enter" && item.value.trim() !="") {
//         addToLocalStorage(item.value.trim());
//         this.value = ""; 
//     }
// });

// function addToLocalStorage(taskTitle){
//     const taskObj={};
//     taskObj.title=taskTitle;
//     taskObj.idx=tasksArr.length;
//     tasksArr.push(taskObj);

//     // Adding to local Storage
//     localStorage.setItem("tasks",JSON.stringify(tasksArr));

//     // Adding to Dom
//     add(taskTitle,tasksArr.length-1)
// }

// function add(item,idx) {
//     const listItem = document.createElement("li");
//     listItem.innerHTML = `${item}  <i class="fa-solid fa-check"></i> <i class="fa-solid fa-xmark"></i> `;
//     ul.appendChild(listItem);

//     listItem.querySelector(".fa-check").addEventListener("click", function() {
//         listItem.style.textDecoration="line-through";
//     });

//     listItem.querySelector(".fa-xmark").addEventListener("click", function() {
//         tasksArr.splice(idx,1);

//         // udating to local Storage
//         localStorage.setItem("tasks",JSON.stringify(tasksArr));

//         listItem.remove();
//     });
// }  
