
var usuarioTag =document.getElementById('user'); //input de usuario
var nombreUsuario = ''  // puedo hasta ni ponerle el ( = '' ) pero antes de que hayan problemas le asignamos algo, para que valga algo
var headerNombreUsuario = document.getElementById('header_nombreUsuario') // este solamente esta en el main.html



function checkUser(){ //checkea que sea un usuario valido, si lo es setea el nombre del usuario en el session storage (funciona similar a JSON)
    nombreUsuario = usuarioTag.value        // 
    if(todosNumeros(nombreUsuario)){    // Si son todos numeros pasa
        sessionStorage.setItem('user', nombreUsuario)      //setea el usuario en el session storage
        window.location.href = './main.html'                // te patea a la otra pantalla
    
    }
    else{
    window.alert("usuario invalido, solo debe contener numeros")
    }
    
}

function todosNumeros(valor){ //checkea que sean todos numeros gracias al match/regex
    
   /* let stringArr = valor.split('')
    console.log(typeof(stringArr[0].valueOf()))
    *///return (stringArr.every((letra)=> typeof(letra)== 'Number'))


    if(valor.match(/[0-9]/gi) != null){ 
        let largoMatch =valor.match(/[0-9]/gi).length
        let largoValor = valor.length
        return(largoValor==largoMatch)
}
    else{
        return false
    }
}


function actualizarUsuario(){
    if(headerNombreUsuario)     //si no encuentra el header usuario (que esta solamente en el main.html) queda ahi.
    headerNombreUsuario.innerHTML = JSON.stringify(sessionStorage.getItem('user')) //recupera el valor del session storage y se lo pone al header usuario
}

// invoco a actualizarUsuario cada vez que quieran usar este archivo, 
actualizarUsuario()