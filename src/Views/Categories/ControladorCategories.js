export function  init () {
    

   const tabla = document.querySelector(".tabla")

    fetch("http://localhost:3000/api/categorias").then(response => response.text()).then(datos =>{
          
        const objeto = JSON.parse(datos)
        
        
        

        Object.keys(objeto.data).forEach(element => {
            
            
           


            const body = document.createElement("tbody")
            const filas = document.createElement("tr")
            const filasId = document.createElement("td")
            const filaNombre = document.createElement("td")
            const filaDescripcion = document.createElement("td")
            const filaCreacion = document.createElement("td")
            const filaActualizacion = document.createElement("td")
            


            
             body.classList.add("cuerpo")
            filas.classList.add("cuerpo__filas")
             
            
            filasId.textContent = objeto.data[element].id 
            filaNombre.textContent = objeto.data[element].nombre 
            filaDescripcion.textContent = objeto.data[element].descripcion
            filaCreacion.textContent = objeto.data[element].created_at
            filaActualizacion.textContent = objeto.data[element].updated_at
            
           

            tabla.append(body)
            body.append(filas)
            filas.append(filasId,filaNombre,filaDescripcion,filaCreacion,filaActualizacion)


            




        });



    })
}