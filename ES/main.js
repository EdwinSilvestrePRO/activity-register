import { AddActivity,  addElement } from './add.js';
import Deleting from './delete.js';

document.addEventListener("DOMContentLoaded", (e)=> {
    if(localStorage.getItem("localActivity") == null) localStorage.setItem("localActivity", JSON.stringify([]));
    else addElement(JSON.parse(localStorage.getItem("localActivity")), true);
});

const $textarea = document.getElementById("add-activity");

$textarea
.addEventListener("add", AddActivity,
{once: false, capture: true});

document.addEventListener("keypress", (ev)=> {
    if(ev.keyCode === 13 || ev.key == "Enter") {
        const {value} = $textarea,
        isAdd = /add\$/i,
        Add = new Event("add");
        if(isAdd.test(value)){
            $textarea.dispatchEvent(Add);
        }

    }
});

document.addEventListener("click", (ev)=>  {
   if(ev.target.matches(".changeClass")) document.getElementById("error").className = "hidden";
   else if(ev.target.matches(".delete")) Deleting(ev.target);
});
