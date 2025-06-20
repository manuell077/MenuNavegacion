import "./styles.css"

import * as ControladorCategories from "./Views/Categories/ControladorCategories.js"
import * as ProductsController from  "./Views/Products/ProductsController.js"
import * as NuevoController from "./Views/Categories/NuevoController.js"

let rutas = [
         {
          name: "Categories",
          path: "./src/views/Categories/index.html",
          controlador: ControladorCategories.init
         } ,
         {
            name:"Products",
            path:"./src/views/Products/index.html",
            controlador: ProductsController.init

         },{
            name:"Nueva",
            path:"./src/views/Categories/Formulario.html",
            controlador: NuevoController.init
         }
           



]

    




   

window.addEventListener("hashchange",(Event)=>{
     
    const ruta = location.hash.slice(1)


     rutas.forEach(objeto =>{
          
        if(objeto.name == ruta){

            fetch(objeto.path).then((response)=>{
                response.text().then(html=>{
                    document.querySelector(".contenido").innerHTML = html
                    objeto.controlador()

                })
            })

        }


     })
   

   

})





