export function  init (){
    
   const nombre = document.querySelector("#nombre")
   const descripcion = document.querySelector("#descripcion")
   const formulario = document.querySelector(".formulario")
   const nombreLabel = document.querySelector("#labelNombre");
   const descripcionLabel = document.querySelector("#labelDescripcion")
   const datosContenedor = document.querySelector(".datos")

     function validar(e){
        e.preventDefault();
        
        const campos =  [...e.target].filter((elemento)=>{
            return elemento.hasAttribute('required')
        })
        
        campos.forEach(campo =>{

        switch(campo.tagName){

           case "INPUT":
            
           if(campo.value == "" ){
              
            

            const error =  document.createElement("span")
            error.classList.add("error")
            error.textContent = "Este campo debe estar lleno"
            nombreLabel.classList.add("nombreMovido")
             datosContenedor.classList.add("datos--tamaño")
            campo.insertAdjacentElement("afterend",error)
           }

           break;

           case "TEXTAREA":

           if(campo.value == ""){
               
            
            const error =  document.createElement("span")
            error.classList.add("error")
            error.textContent = "Este campo debe estar lleno"
            descripcionLabel.classList.add("descripcionMovido")
             
            campo.insertAdjacentElement("afterend",error)
             


           }
           




        }
        })
 
     }

     formulario.addEventListener("submit",(e)=>{
          validar(e)
     })


     

    


}