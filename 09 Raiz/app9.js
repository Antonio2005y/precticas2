const valor=()=>{
  
    let n=parseInt(document.querySelector("#n").value)
    document.querySelector("#vn").innerHTML=n;
    let div=document.querySelector("#res") 
    
    div.innerHTML="<img src='goku_10.gif' width='200px' height='200px'>"
    
    setTimeout(()=>{
      let r=Math.sqrt(n);
      div.innerHTML=r.toFixed(2);
    },2000);
  
}
const borrar=()=>{
document.querySelector("#res").innerHTML="";

}