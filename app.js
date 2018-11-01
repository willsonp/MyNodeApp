function saludos(name){
    console.log("Saludos. :"+name);
}
saludos("Willson Perez");

function dia (num){
    switch(num){
    case 1:
     console.log("Domingo");
     break;
     case 2:
     console.log("Lunes");
     break;
     case 3:
     console.log("Martes");
     break;
     case 4:
     console.log("Miercoles");
     break;
     case 5:
     console.log("Jueves");
     break;
     case 6:
     console.log("Viernes");
     break;
     case 7:
     console.log("Sabado");
     break;     
     default :
     console.log("Dia Incorrecto");
    }    
}
function mes (num){
    switch(num){
    case 1:
     console.log("Enero");
     break;
     case 2:
     console.log("Febrero");
     break;
     case 3:
     console.log("Marzo");
     break;
     case 4:
     console.log("Abril");
     break;
     case 5:
     console.log("Mayo");
     break;
     case 6:
     console.log("Junio");
     break;
     case 7:
     console.log("Julio");
     break;
     case 8:
     console.log("Agosto");
     break;
     case 9:
     console.log("Septiembre");
     break;
     case 10:
     console.log("Octubre");
     break;
     case 11:
     console.log("Noviembre");
     break;
     case 12:
     console.log("Diciembre");
     break;     
     default :
     console.log("Mes Incorrecto");
    }   
}

console.log(dia(7));
console.log(mes(5));
