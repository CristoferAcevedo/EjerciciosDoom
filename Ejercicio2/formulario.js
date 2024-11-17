const formulario=document.getElementById("formulario");
const mensaje=document.getElementById("mensaje");
const listDatos=[];
formulario.addEventListener("submit",function(event){
    event.preventDefault();
    let nombre=document.getElementById("nombre").value;
    let correo=document.getElementById("correo").value;
    let password=document.getElementById("password").value;

    if(nombre===""|| correo===""|| password===""){
        mensaje.innerHTML="Todos los campos son obligatorios";
        mensaje.classList.remove('fade-out');
        setTimeout(()=>{
            mensaje.classList.add('fade-out');   
        },2000);
    }else if(password.length<6){
        mensaje.innerHTML="La contraseña tiene que tener un minimo de 6 caracteres";
        mensaje.classList.remove('fade-out');
        setTimeout(()=>{
            mensaje.classList.add('fade-out');   
        },2000);
    }else{
        listDatos.push(nombre,correo,password);
        console.log(listDatos);
        document.getElementById("nombre").value = ""; 
        document.getElementById("correo").value = ""; 
        document.getElementById("password").value = "";
        mensaje.innerHTML = "";
    };
});