function funcpass(){
    const pass = document.getElementById("pass").value;
    const st1 = document.getElementById("strength1");
    const st2 = document.getElementById("strength2");
    const st3 = document.getElementById("strength3");

    let hasNumb = false;
    let hasSpecialChar = false;
    let hasUpper = false;

    for(let i = 0; i <= pass.length; i ++){
        const char = pass[i];
        if (char >= "0" && char <= "9"){
            hasNumb = true;
        }
        if (char >= "A" && char <= "Z"){
            hasUpper = true;
        }
        if (char === "!" || char === "@" || char === "#" || char === "$" || char === "%" || char === "&" || char === "*" || char === "," || char === "."){
            hasSpecialChar = true;
        }
    }
    if(pass.length < 6){
        st1.style.backgroundColor = "black";
        st2.style.backgroundColor = "black";
        st3.style.backgroundColor = "black";
    }
    else if(pass.length >=6 && pass.length < 8){
        st1.style.backgroundColor = "red";
        st2.style.backgroundColor = "white";
        st3.style.backgroundColor = "white";
    }
    else if(pass.length >= 8 && pass.length < 10 && (hasNumb || hasUpper) && !(hasSpecialChar)){
        st1.style.backgroundColor = "orange";
        st2.style.backgroundColor = "orange";
        st3.style.backgroundColor = "white";
    }
    else if(pass.length >= 10 && hasNumb && hasUpper && hasSpecialChar){
        st1.style.backgroundColor = "green";
        st2.style.backgroundColor = "green";
        st3.style.backgroundColor = "green";
    }
}