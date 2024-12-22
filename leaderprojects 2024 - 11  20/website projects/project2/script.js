let money = document.getElementById("money");
let tip = document.getElementById("tip");
let butt = document.getElementById("butt");
let tipsProcent = document.getElementById("tipsProcent");


butt.addEventListener("click", function(){
    let paragraph = document.createElement('paragraph');
    let br = document.createElement('br')
    
    let money1 = money.value;
    let tip1 = tip.value;

    let procent = (Number(money1) / 100) * Number(tip1);

    paragraph.classList.add('paragraph-styling');

    paragraph.innerText = procent;

    paragraph.style.fontSize = "30px";

    tipsProcent.appendChild(paragraph);
    tipsProcent.appendChild(br);
    
    money.value = "";
    tip.value = "";
})