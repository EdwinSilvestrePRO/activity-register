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
        inform = /inform\$/i,
        exit = /exit\$/i,
        Add = new Event("add");

        if(isAdd.test(value)) $textarea.dispatchEvent(Add);

        else if(inform.test(value)) return $textarea.value = 
            `# Activity Register.

            Este es un registrador de actividades que sirve para registrar actividades
            basandose en un lenguage minimalista @Sober para registrar con fecha completa
            cada una de las actividades.
            
            Tiene un ventana especial que te avisa de cualquier error que alla ocurrido.
            por ejemplo si eliminas el arreglo predeterminado cuando se carga, te avisara de ese
            error que ocurrio con una ventana responsive donde depura cualquier error.
            
            Los errores que se comete cuando escribes para registrar una nueva actividad
            es cuando no sigues la sintaxis de el lenguage @Sober.
            
            Si ya manejas las terminales como CMD, powershell, gitbash, etc... se te sera familiar
            escribir en @Sober para registrar actividades. Disfrutalo es codigo abierto!
                            
            --Edwin Silvestre--`;
            
        else if (exit.test(value)) window.close();

    }

});
document.addEventListener("click", (ev)=>  {
   if(ev.target.matches(".changeClass")) document.getElementById("error").className = "hidden";
   else if(ev.target.matches(".delete")) Deleting(ev.target);
})