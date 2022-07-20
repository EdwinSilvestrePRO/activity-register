export function addElement(all, is = false){
    const $nothing = document.getElementById("none");
    if(all.length == 0) return $nothing.style.display = "block";
    else $nothing.style.display = "none";
    if(is == false) return function (){
        let newItem = all;
        const $template = document.getElementById("model-activity").content;
        $template.querySelector(".title").innerHTML = newItem.title+"<br>&<br>"+ newItem.date;
        $template.querySelector(".content").innerHTML = newItem.contentActivity;
        
        let node = document.importNode($template, true);
        document.body.appendChild(node);

        const $counter = document.getElementById("counter");
   $counter.textContent = JSON.parse(localStorage.getItem("localActivity")).length;
    }()

    // this is my fragment...
    const $$frag = document.createDocumentFragment();
    for (let newItem of all){
        const $template = document.getElementById("model-activity").content;
        $template.querySelector(".title").innerHTML = newItem.title+"<br>&<br>"+ newItem.date;
        $template.querySelector(".content").innerHTML = newItem.contentActivity;
        
        let node = document.importNode($template, true);
        $$frag.appendChild(node);
    }
    // the counter...
   const $counter = document.getElementById("counter");
   $counter.textContent = all.length;
   document.body.appendChild($$frag);

}
export function AddActivity (ob) {
    try {




        const {name, content} = {
            name: ob.target.value.match(/\*[^]*\*/),
            content: ob.target.value.match(/\@\([^]*\)/),
        }
        if(name == null) throw {
            ["message"]: `Error (no-name):<br>tienes que definir el nombre entre **. ejemplo:<br>*Add-Activity*...`
        }
        else if((name[0]).replaceAll("*", "").length < 2) throw {
            ["message"]: `Error (complete-name):<br> escribe el nombre completo de la actividad para adjuntarlo.ejemplo:<br>
            *name-Activity*...`
        }
        else if(content == null) throw {
            ["message"]: `Error (no-content):<br> tiene que definir contenido para agregar. ejemplo:<br> @(
                this is my content
            )...`
        }


        const nameActivity = name[0].replaceAll("*", "");

        +function(){
            let info = [],
            localTemp = JSON.parse(localStorage.getItem("localActivity"));
            let i = (content[0]).replace("@(", "").split("");
            let last = i.lastIndexOf(")");
            i.forEach((element, index, thisArg) => {
                if(index < last) info.push(element);
            });
            const newItem = {
                title: nameActivity,
                contentActivity: info.join(""),
                date: new Date().toDateString() + ` time: ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
            }
            localTemp.push(newItem);

            localStorage.setItem("localActivity", JSON.stringify(localTemp));

            localTemp = JSON.parse(localStorage.getItem("localActivity"));
            addElement(newItem);
            setTimeout(()=> ob.target.value = "", 0);
        }()
    } catch (err) {
        const $ERROR = document.getElementById("error");
        $ERROR
        .querySelector(".message")
        .innerHTML = err.message;
        $ERROR.className = "";
    }
}