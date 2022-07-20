import {
    AddActivity
} from './add.js';

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