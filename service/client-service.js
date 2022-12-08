
const listaClientes = ()=> {
  return fetch("http://localhost:3000/perfil").then(respuesta => respuesta.json())

}

const crearCliente =(nombre,email,id) =>{
  fetch("http://localhost:3000/perfil",{
    method: "POST",
    headers:{
      "Content-type" :"application/json"
    },
    body: JSON.stringify({nombre,email,id})
  })
}
 // const promise =new Promise( (resolve, reject) =>{
  //   const http= new XMLHttpRequest();
  //   http.open("GET","http://localhost:3000/perfil");
  //   http.send();
  //   http.onload = () => {
  //     const response=JSON.parse(http.response);

  //     if(http.status>=400){
  //       reject(response);
  //     }else{
  //       resolve(response);
  //     }

  //   };
  // })
  // return promise;
//}

const eliminarCliente = (id)=>{
  return fetch(`http://localhost:3000/perfil/${id}`,{
    method:"DELETE",
  })
}

const detalleCliente= (id) =>{
  return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta) => respuesta.json())
}

const actualizarCliente = (nombre,email,id) =>{
  return fetch(`http://localhost:3000/perfil/${id}`,{
    method: "PUT",
    headers:{
      "Content-Type" :"application/json"
    },
    body: JSON.stringify({nombre,email}),
  }).then((respuesta) => respuesta)
  .catch(()=>console.log("Error"));
}

export const clienteServices ={
  listaClientes,
  crearCliente,
  eliminarCliente,
  detalleCliente,
  actualizarCliente
}
 
