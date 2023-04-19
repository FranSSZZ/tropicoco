document.getElementById("enviar").addEventListener('click',validar);

function validar(validarCampos){
    if(   validarCardName() && validarCardNumber1() && validarCardNumber2() && validarCardNumber3() && validarCardNumber4() &&validarMonth() && validarYear() && validarYear()){
        alert("formulario validado");
        return true;
    }else{
        alert("formulario no validado");
        validarCampos.preventDefault();
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

function validarCardNumber1(){
    let patron=/^\d{9}$/;
    let elemento=document.getElementById("CardNumber1");
    if(patron.test(elemento.value)){
        return true;
    }else{
        
        return false;
    }
}

function validarCardNumber2(){
    let patron=/^\d{4}$/;
    let elemento=document.getElementById("CardNumber2");
    if(patron.test(elemento.value)){
        return true;
    }else{
        
        return false;
    }
}

function validarCardNumber3(){
    let patron=/^\d{4}$/;
    let elemento=document.getElementById("CardNumber3");
    if(patron.test(elemento.value)){
        return true;
    }else{
        
        return false;
    }
}

function validarCardNumber4(){
    let patron=/^\d{4}$/;
    let elemento=document.getElementById("CardNumber4");
    if(patron.test(elemento.value)){
        return true;
    }else{
        
        return false;
    }
}

function validarMonth(){
    let patron=/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;;
    let elemento=document.getElementById("month");
    if(patron.test(elemento.value)){
        return true;
    }else{
        
        return false;
    }
}

function validarYear(){
    let patron=/^\d{4}$/;
    let elemento=document.getElementById("year");
    if(patron.test(elemento.value)){
        return true;
    }else{
        
        return false;
    }
}

function validarCVV(){
    let patron=/^\d{3}$/;
    let elemento=document.getElementById("CVV");
    if(patron.test(elemento.value)){
        return true;
    }else{
        
        return false;
    }
}

function gestionPago(){
    const pago = [{
        cardName: "Franci",
        cardNumber1: "1234",
        cardNumber2: "1234",
        cardNumber3: "1234",
        cardNumber4: "1234",
        month: "Enero",
        year: "2024",
        cvv: 123,
    }]
    
    let cardName = document.getElementById("cardName").value;
    let cardNumber1 = document.getElementById("cardNumber1").value;
    let cardNumber2 = document.getElementById("cardNumber2").value;
    let cardNumber3 = document.getElementById("cardNumber3").value;
    let cardNumber4 = document.getElementById("cardNumber4").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
    let cvv = document.getElementById("cvv").value;
   
    
    console.log (cardName);
    console.log (cardNumber1);
    console.log (cardNumber2);
    console.log (cardNumber3);
    console.log (cardNumber4);
    console.log (month);
    console.log (year);
    console.log (cvv);
}

// código para crear el usuario

function gestionPago(cardName, cardNumber3, cvv) {
    const usuario = {
      cardName: cardName,
      cardNumber3: cardNumber3,
      cvv: cvv,
    };
  
}
