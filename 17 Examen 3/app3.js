let d=document.querySelector("#dia")
let vdia=document.querySelector("#vdia")
let m=document.querySelector("#mes")
let fecha=document.querySelector("#Fecha")
let signo=document.querySelector("#signo")

d.oninput=()=>{
    vdia.innerHTML=d.value
    lfecha() 
}
m.onchange=()=>{
    lfecha()
}
const lfecha=()=>{
    dia=parseInt(d.value)
    mes=parseInt(m.value)
    var mess= ""

if(mes==1){mess="<h2>Enero</h2>"
}
else if(mes==2){mess="<h2>Febrero</h2>"
}
else if(mes==3){mess="<h2>Marzo</h2>"
}
else if(mes==4){mess="<h2>Abril</h2>"
}
else if(mes==5){mess="<h2>Mayo</h2>"
}
else if(mes==6){mess="<h2>Junio</h2>"
 }
else if(mes==7){mess="<h2>Julio</h2>"
}
else if(mes==8){mess="<h2>Agosto</h2>"
}
else if(mes==9){mess="<h2>Septiembre</h2>"
}
else if(mes==10){mess="<h2>Octubre</h2>"
}
else if(mes==11){mess="<h2>Noviembre</h2>"
}
else if(mes==12){mess="<h2>Diciembre</h2>"
    }

    fecha.innerHTML="<h1>Fecha "+d.value+" de </h1>"+ mess
if((dia>=20 && mes==1)||(dia<=18 && mes==2)){
    signo.innerHTML="<img src= acuario.jpeg  width=400 height=400 >"
}
else if((dia>=19 && mes==2)||(dia<=20 && mes==3)){
    signo.innerHTML="<img src= pisis.jpeg  width=400 height=400>"
}
else if((dia>=21 && mes==3)||(dia<=19 && mes==4)){
    signo.innerHTML="<img src= aries.jpeg  width=400 height=400>"
}
else if((dia>=20 && mes==4)||(dia<=20 && mes==5)){
    signo.innerHTML="<img src= tauro.jpeg  width=400 height=400>"
}
else if((dia>=21 && mes==5)||(dia<=20 && mes==6)){
    signo.innerHTML="<img src= geminis.jpeg  width=400 height=400>"
}
else if((dia>=21 && mes==6)||(dia<=22 && mes==7)){
    signo.innerHTML="<img src= cancer.jpeg  width=400 height=400>"
}
else if((dia>=23 && mes==7)||(dia<=22 && mes==8)){
    signo.innerHTML="<img src= leo.jpeg  width=400 height=400>"
}
else if((dia>=23 && mes==8)||(dia<=22 && mes==9)){
    signo.innerHTML="<img src= virgo.jpeg  width=400 height=400>"
}
else if((dia>=23 && mes==9)||(dia<=22 && mes==10)){
    signo.innerHTML="<img src= libra.jpeg  width=400 height=400>"
} 
else if((dia>=23 && mes==10)||(dia<=21 && mes==11)){
    signo.innerHTML="<img src= escorpio.jpeg  width=400 height=400>"
}
else if((dia>=22 && mes==11)||(dia<=21 && mes==12)){
    signo.innerHTML="<img src= sagi.jpeg  width=400 height=400>"
}
else if((dia>=22 && mes==12)||(dia<=19 && mes==1)){
    signo.innerHTML="<img src= capri.jpeg   width=400 height=400>"

    }
}
