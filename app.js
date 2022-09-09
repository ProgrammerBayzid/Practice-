const getElement = (id) =>{
    const element = document.getElementById(id);
    return element;

}
const submitBtn =() => {
    const todos = JSON.parse(localStorage.getItem("TODOS"));
   const inputText = getElement("inputText");
   const textValue = inputText.value;
   inputText.value = "";
  

if(!todos){
    const todoList = [
        {
            tital : textValue,
            condition: false,
        },
    ];
    
    localStorage.setItem("TODOS", JSON.stringify(todoList));
}
else{
    const todoList = [
     ...todos,
         
        {
            tital : textValue,
            condition: false,
        },
    
    ];
    localStorage.setItem("TODOS", JSON.stringify(todoList));

   }
   display();
};


const display = () => {
    const todos = JSON.parse(localStorage.getItem("TODOS"));
    const ul = getElement("todo-list");
    ul.innerHTML="";

    todos.forEach((item )=> {
        const li = document.createElement("li");
        li.classList.add("py-2");
        li.innerText = item.tital;
        ul.appendChild(li);

    });
}

display();


const clearAll =() =>{

    localStorage.removeItem("TODOS");
    display();
};
display();