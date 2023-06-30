const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const ul = document.querySelector(".ul");

btn.addEventListener("click",() => {
    if(input.value === ""){
        alert("Your Daily work is not filled");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        ul.appendChild(li);
        input.value = "";
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    saveData();
})

ul.addEventListener("click",(e) =>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    saveData();
},false)

function  saveData(){
    localStorage.setItem("data",ul.innerHTML);
}

function getData(){
    ul.innerHTML = localStorage.getItem("data");
}

getData();

