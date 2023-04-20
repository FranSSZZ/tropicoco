
document.getElementById("enviar").addEventListener('click',validar);

function validar(validarCampos){
    if(   validarUname() && validarName() &&validarLastName() && validarEmail() && validarPwd() && validarPwd2() && validarDate1() && validarPhone() && validarDirec() && validarStreet() && validarPostal() && validarProvince() && validarCity()){
        alert("formulario validado");
        return true;
    }else{
        crearUsuario();
        alert("formulario no validado");
        validarCampos.preventDefault();
        return false;
    }   
}

function validarUname(){
    let patron=/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;;
    let elemento=document.getElementById("uname");
    if(patron.test(elemento.value)){
        return true;
    }else{
        
        return false;
    }
}

function validarName(){
    let patron=/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;;
    let elemento=document.getElementById("name");
    if(patron.test(elemento.value)){
        return true;
    }else{
        
        return false;
    }
}

function validarLastName(){
    let patron=/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;;
    let elemento=document.getElementById("lastName");
    if(patron.test(elemento.value)){
        return true;
    }else{
        
        return false;
    }
}

function validarEmail(){
    let patron=/^[a-zA-Z0-9.-]+@[a-z-A-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let elemento=document.getElementById("email");
    if(patron.test(elemento.value)){
        return true;
    }else{
        return false;
    }
}

function validarPwd(){
    let patron= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    let elemento=document.getElementById("pwd")
    if(patron.test(elemento.value)){
        return true;
    }else{
        return false;
    }
}

function validarPwd2(){
    let patron= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    let elemento=document.getElementById("pwd2")
    if(patron.test(elemento.value)){
        return true;
    }else{
        return false;
    }
}

function validarDate1(){
    let patron=/^\d{2}\/\d{2}\/\d{4}$/;
    let patron2=/^\d{2}-\d{2}-\d{4}$/;
    let elemento=document.getElementById("date1");
    if(patron.test(elemento.value) || patron2.test(elemento.value)){
        return true;
    }else{
        
        return false;
    }
}

function validarPhone(){
    let patron=/^\d{9}$/;
    let elemento=document.getElementById("phone");
    if(patron.test(elemento.value)){
        return true;
    }else{
        
        return false;
    }
}

function validarDirec(){
    let patron= /^\d+\s[A-z]+\s[A-z]+/;
    let elemento=document.getElementById("direc");
    if(patron.test(elemento.value)){
        return true;
    }else{
        
        return false;
    }
}

function validarStreet(){
    let patron= /^\d+\s[A-z]+\s[A-z]+/;
    let elemento=document.getElementById("street");
    if(patron.test(elemento.value)){
        return true;
    }else{
        
        return false;
    }
}

function validarPostal(){
    let patron= /^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/;
    let elemento=document.getElementById("postal");
    if(patron.test(elemento.value)){
        return true;
    }else{
        
        return false;
    }
}

function validarProvince(){
    let patron= /^\d+\s[A-z]+\s[A-z]+/;
    let elemento=document.getElementById("province");
    if(patron.test(elemento.value)){
        return true;
    }else{
        
        return false;
    }
}

function validarCity(){
    let patron= /^\d+\s[A-z]+\s[A-z]+/;
    let elemento=document.getElementById("city");
    if(patron.test(elemento.value)){
        return true;
    }else{
        
        return false;
    }
}

// -------

function crearUsuario(){
    const usuario = [{
        uname: "Franci",
        name: "Franci",
        lastName: "Sanchez",
        email: "franci.sanchez.zam@gmail.com",
        pwd: "12345678",
        pwd2: "12345678",
        date1: "19/04/2023",
        phone: 23564879,
        direc: "Madrid Norte",
        street: "Centro de la Tierra",
        postal: 12345,
        province: "Madrid",
        city: "Madrid",
    }]
    
    let uname = document.getElementById("uname").value;
    let name = document.getElementById("name").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let pwd = document.getElementById("pwd").value;
    let pwd2 = document.getElementById("pwd2").value;
    let date1 = document.getElementById("date1").value;
    let phone = document.getElementById("phone").value;
    let direc = document.getElementById("direc").value;
    let street = document.getElementById("street").value;
    let postal = document.getElementById("postal").value;
    let province = document.getElementById("province").value;
    let city = document.getElementById("city").value;
    
    
    console.log (uname);
    console.log (name);
    console.log (lastName);
    console.log (email);
    console.log (pwd);
    console.log (pwd2);
    console.log (date1);
    console.log (phone);
    console.log (direc);
    console.log (street);
    console.log (postal);
    console.log (province);
    console.log (city);
}

// código para crear el usuario

function crearUsuario(name, lastName, email, pwd) {
    const usuario = {
      name: name,
      lastName: lastName,
      email: email,
      pwd: pwd
    };
  
}
