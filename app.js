
function menjanjeBoje(boja){
    let dugmad = document.getElementsByClassName("obrisi");
    for (const i of dugmad) {
        i.style.backgroundColor=boja;
    }
}

// menjanjeBoje("green");


let promeniBoju=(boja) => {
    let dugmad = document.getElementsByClassName("obrisi");
    for (const i of dugmad) {
        i.style.backgroundColor=boja;
    }
}

// promeniBoju("blue");

let menjanjeBojeB=(boja)=>Array.from(document.getElementsByClassName("obrisi")).forEach(dugme=>dugme.style.backgroundColor=boja);
menjanjeBojeB("purple");


//callback

let dugmad = document.getElementsByClassName("obrisi");
for (const dugme of dugmad) {
    dugme.addEventListener("click", function(e){
        this.parentNode.remove();
    })

    
}





function dodaj(event){
    event.preventDefault();
    let inputPolje = document.querySelector("#dodaj-destinaciju input");
    let naziv = inputPolje.value;
    console.log(naziv);
    if(naziv){
        let ul = document.getElementById("lista");
        let novili=document.createElement("li");
        novili.innerHTML=`<span class="naziv">${naziv}</span>
        <span class="obrisi">obriši</span>`;
        ul.appendChild(novili);
    }
}



function pozivCallback(){
    let forma = document.forms["dodaj-destinaciju"];
    forma.addEventListener("submit",dodaj);

}

document.addEventListener("DOMContentLoaded",pozivCallback);
