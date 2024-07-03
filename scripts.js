const form = document.querySelector(".formulario-fale-conosco")

const mascara = document.querySelector(".mascara-formelario")

function mostrarForm(){
      form.style.left = "50%"
      form.style.transform ="transleteX(-50%)"
      mascara.style.visibility = "visible"
 }
function esconderForm(){
      form.style.left = "-300px"
      form.style.transform ="transleteX(0)"
      mascara.style.visibility = "hidden"
}


