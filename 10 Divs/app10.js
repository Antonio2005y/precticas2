let sld=document.querySelector("#valor")
let v=document.querySelector("#v")
let div=document.querySelector("#res")

sld.oninput =()=>{
  v.innerHTML=sld.value;
  n=parseInt(sld.value);
  divsHTML=""
  for(i=1;i<=n;i++){
    divsHTML+="<div class='cajita'>"+i+"</div>"
  }
  div.innerHTML=divsHTML;
}