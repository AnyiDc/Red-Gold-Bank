import expresionesRegulares from "../../../controllers/expresionesRegulares";
let inputs = document.querySelectorAll("input");
document.getElementById('btn_iniciarsesion').addEventListener('click', function (e) {
    e.preventDefault();
if (inputs[0].value.trim() !=="" && inputs[1].value.trim()!=="")  { 
    validar_input();
    console.log("valores ingresado")
}else if (inputs[0].value.trim()!=="" && inputs[1].value.trim()=="" || inputs[0].value.trim()=="" && inputs[1].value.trim() != "" ) {
    console.log("hay un campo null");
    
} else{
    console.log("Los valores son nulos")
   
}
})

function validar_input(e){
    e.preventDefault();
  for(var i = 0; i < inputs.length; i){
    e.preventDefault();
    if(expresionesRegulares.nombre.test(inputs[i].value)){ 
      console.log("Error en el campo: " + inputs[i].name);
      inputs[i].classList.add("error");

    } else {
      inputs[i].classList.remove("error");
    }
  }

}