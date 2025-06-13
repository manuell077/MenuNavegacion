import "./styles.css"

import * as ControladorCategories from "./Views/Categories/ControladorCategories.js"
import * as ProductsController from  "./Views/Categories/ProductsController.js"

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





