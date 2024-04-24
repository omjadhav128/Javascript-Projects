var addBtn = document.querySelector("#addTask"); 
let task = document.querySelector("#title");
let myDiv = document.querySelector("#dispList");
let taskVal ="";

var count=1;

addBtn.addEventListener("click" , ()=> {
    
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    

    checkbox.id = `checkbox${count}`;
    let lable = document.createElement("lable");
    lable.htmlFor = "id";
    count++;

    taskVal = task.value;
    lable.appendChild(document.createTextNode(taskVal));

    // lable.setAttribute();

    console.log(`${checkbox.id} `);

    
    myDiv.appendChild(checkbox);
    myDiv.appendChild(lable);
    



})
