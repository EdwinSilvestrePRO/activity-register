export default function Deleting (target){
    let $div = target.parentElement.closest(".activity");
    $div.parentElement.removeChild($div);
    const ALL = document.querySelectorAll("div.runNow");
    const coll = [];
    ALL.forEach(element=> {
        
        let title = (element.querySelector(".title").innerHTML.split("").filter((el, index, th)=> index < th.indexOf("<")).join(""));
        let date = (element.querySelector(".title").innerHTML.split("").filter((el, index, th)=> index > th.lastIndexOf(">")).join(""));
        let contentActivity = element.querySelector(".content").innerHTML;
        coll.push({
            title,
            date,
            contentActivity
    });
});

localStorage.setItem("localActivity", JSON.stringify(coll));
let {length} = JSON.parse(localStorage.getItem("localActivity"));
document.getElementById("counter").innerHTML = length;

}