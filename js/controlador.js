
localStorage = window.localStorage;

//usuarios: se guardaran todos los usuarios
usuarios = [{
    id: 0,
    nombre: 'Goku',
    imagen: 'goku.jpg',
    contactos: [1,2,3,4],
    conversaciones: [
        {
            id:'chat-0-2', //detalle de toda la conversacion
            ultimoMensaje: 'Yo: stiker',
            horaUltimoMensaje: '07:00',
            nombreDestinatario: 'Cell',
            imagenDestinatario:'cell.jpg'
        },{
            id:'chat-0-1', 
            ultimoMensaje: 'Yo: Entrenando...',
            horaUltimoMensaje: '16:00',
            nombreDestinatario: 'Bulma',
            imagenDestinatario:'bulma.jpg'
        },{
            id:'chat-0-4', 
            ultimoMensaje: 'Hola Papa!!',
            horaUltimoMensaje: '20:00',
            nombreDestinatario: 'Gohan',
            imagenDestinatario:'gohan.jpg'
        }     
    ]},{
    id: 1,
    nombre: 'Bulma',
    imagen: 'bulma.jpg',
    contactos: [0,2,3,4,6],
    conversaciones: [
        {
            id:'chat-1-6', //detalle de toda la conversacion
            ultimoMensaje: ' te amo amor',
            horaUltimoMensaje: '06:00 am',
            nombreDestinatario: 'Vegeta',
            imagenDestinatario:'vegeta.jpg'
        },
        {
            id:'chat-1-0', 
            ultimoMensaje: 'Entrenando...',
            horaUltimoMensaje: '16:00',
            nombreDestinatario: 'Goku',
            imagenDestinatario:'goku.jpg'
        }
        
    ]},{
    id: 2,
    nombre: 'Cell',
    imagen: 'cell.jpg',
    contactos: [3,4,0,5],
    conversaciones: [
        {
            id:'chat-2-0', //detalle de toda la conversacion
            ultimoMensaje: 'stiker.',
            horaUltimoMensaje: '1300',
            nombreDestinatario: 'Goku',
            imagenDestinatario:'goku.jpg'
        },{
            id:'chat-2-3', //detalle de toda la conversacion
            ultimoMensaje: ' mounstruo..',
            horaUltimoMensaje: '17:00',
            nombreDestinatario: 'Dende',
            imagenDestinatario:'dende.jpg'
        },{
            id:'chat-2-4', 
            ultimoMensaje: 'Yo: stiker',
            horaUltimoMensaje: '15:00',
            nombreDestinatario: 'Gohan',
            imagenDestinatario:'gohan.jpg'
        },{
            id:'chat-2-5', 
            ultimoMensaje: 'Kami:lorem ipsum lorem',
            horaUltimoMensaje: '20:00',
            nombreDestinatario: 'Kami',
            imagenDestinatario:'Kami.jpg'
        }    
    ]},{
    id: 3,
    nombre: 'Dende',
    imagen: 'dende.jpg',
    contactos: [2,6,3],
    conversaciones: [
        {
            id:'chat-3-6', //detalle de toda la conversacion
            ultimoMensaje: 'Yo: stiker',
            horaUltimoMensaje: '',
            nombreDestinatario: 'Vegeta',
            imagenDestinatario:''
        },
        {
            id:'chat-3-2', //detalle de toda la conversacion
            ultimoMensaje: 'Yo: mounstruo..',
            horaUltimoMensaje: '17:00',
            nombreDestinatario: 'Cell',
            imagenDestinatario:'cell.jpg'
        }     
    ]},{
    id: 4,
    nombre: 'Gohan',
    imagen: 'gohan.jpg',
    contactos: [2,3,6],
    conversaciones: [
        {
            id:'chat-4-6', //detalle de toda la conversacion
            ultimoMensaje: ' Gohan!!!',
            horaUltimoMensaje: '1800',
            nombreDestinatario: 'Señor Vegeta',
            imagenDestinatario:'vegeta.jpg'
        },
        {
            id:'chat-4-0', 
            ultimoMensaje: 'Yo: Hola Papa!!',
            horaUltimoMensaje: '20:00',
            nombreDestinatario: 'Papa',
            imagenDestinatario:'goku.jpg'
        },
        {
            id:'chat-4-2', 
            ultimoMensaje: 'Yo: nunca podras conmigo!',
            horaUltimoMensaje: '15:00',
            nombreDestinatario: 'Cell',
            imagenDestinatario:'cell.jpg'
        }      
    ]},{
        id: 5,
        nombre: 'Kami',
        imagen: 'kami.jpg',
        contactos: [2,3,0],
        conversaciones: [
            {
                id:'chat-5-2', //detalle de toda la conversacion
                ultimoMensaje: 'Yo: lorem ipsum lorem',
                horaUltimoMensaje: '',
                nombreDestinatario: 'Moustruo',
                imagenDestinatario:'cell.jpg'
            } 
                
    ]},{
        id: 6,
        nombre: 'Vegeta',
        imagen: 'vegeta.jpg',
        contactos: [0,1,3,2,5],
        conversaciones: [
            {
                id:'chat-6-3', //detalle de toda la conversacion
                ultimoMensaje: 'stiker',
                horaUltimoMensaje: '',
                nombreDestinatario: 'Dende',
                imagenDestinatario:'dende.jpg'
            },
            {
                id:'chat-6-1', //detalle de toda la conversacion
                ultimoMensaje: 'Yo: te amo amor',
                horaUltimoMensaje: '06:00 am',
                nombreDestinatario: 'Bulma',
                imagenDestinatario:'bulma.jpg'
            },
            {
                id:'chat-6-4', //detalle de toda la conversacion
                ultimoMensaje: ' Yo: Gohan!!!',
                horaUltimoMensaje: '1800',
                nombreDestinatario: 'Gohan',
                imagenDestinatario:'gohan.jpg'
            }
                
    ]}];

var cantidadUsuarios = usuarios.length;


if(!localStorage.getItem('usuarios')){
    console.log('Elementos guardados en LocalStorage.');
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}else{
    console.log('LocalStorage Lleno..');
}

//stikers
stikers = [
    {
        id:1,
        stiker: './recursos/stickers/1.webp'
    },
    {
        id:2,
        stiker: './recursos/stickers/2.webp'
    },
    {
        id:3,
        stiker: './recursos/stickers/3.webp'
    },
    {
        id:4,
        stiker: './recursos/stickers/4.webp'
    },
    {
        id:5,
        stiker: './recursos/stickers/5.webp'
    },
    {
        id:6,
        stiker: './recursos/stickers/6.webp'
    },
    {
        id:7,
        stiker: './recursos/stickers/7.webp'
    }
];

if(!localStorage.getItem('stikers')){

    localStorage.setItem('stikers', JSON.stringify(stikers));
    console.log('Stikers, guardados.');
}else{
    console.log('Stikers, ya se encuentran guardados');
}

// conversacion, con ids relacionados
// ejm: chat-3-1
mensajesConversaciones = [
    {
        chat:'chat-0-2',
        mensajes:[{    
            emisor: 2,
            receptor:0,
            mensaje: 'Hola goku',
            tipo: 'text',
            hora: '12:30'
        },
        {    
            emisor: 2,
            receptor:0,
            mensaje: '1.webp',
            tipo: 'stiker',
            hora: '12:31'
        },
        {    
            emisor: 0,
            receptor:2,
            mensaje: 'holaaa, ¿batallamos?',
            tipo: 'text',
            hora: '14:30'
        },
        {    
            emisor: 0,
            receptor:2,
            mensaje: '7.webp',
            tipo: 'stiker',
            hora: '14:30'
        }
        ]
    },
    {
        chat:'chat-0-1',
        mensajes:[{    
            emisor: 1,
            receptor:0,
            mensaje: 'Goku,donde estas?',
            tipo: 'text',
            hora: '10:00'
        },
        {    
            emisor: 0,
            receptor:1,
            mensaje: 'Entrenando con Gohan..',
            tipo: 'text',
            hora: '12:00'
        }
        ]
    },
    {
        chat:'chat-0-4',
        mensajes:[{    
            emisor: 4,
            receptor:0,
            mensaje: 'Hola Papa!!',
            tipo: 'text',
            hora: '18:00'
        }
        ]
    },
    {
        chat:'chat-1-6',
        mensajes:[{    
            emisor: 1,
            receptor:6,
            mensaje: 'Ya esta lista la comida Vegueta.',
            tipo: 'text',
            hora: '05:00'
        },
        {    
            emisor: 1,
            receptor:6,
            mensaje: 'Recuerda llegar rapido...',
            tipo: 'text',
            hora: '05:00'
        },
        {    
            emisor: 6,
            receptor:1,
            mensaje: 'te amo amor',
            tipo: 'text',
            hora: '06:00'
        }
        ]
    },
    {
        chat:'chat-2-3',
        mensajes:[{    
            emisor: 3,
            receptor:2,
            mensaje: 'mounstruo..',
            tipo: 'text',
            hora: '17:00'
        }
        ]
    },
    {
        chat:'chat-2-4',
        mensajes:[{    
            emisor: 4,
            receptor:2,
            mensaje: 'nunca podras conmigo!!',
            tipo: 'text',
            hora: '17:00'
        },
        {    
            emisor: 2,
            receptor:4,
            mensaje: '5.webp',
            tipo: 'stiker',
            hora: '19:00'
        }
        ]
    },
    {
        chat:'chat-2-5',
        mensajes:[{    
            emisor: 2,
            receptor:5,
            mensaje: 'lorem ipsum',
            tipo: 'text',
            hora: '17:00'
        },{    
            emisor: 2,
            receptor:5,
            mensaje: 'Insecto',
            tipo: 'text',
            hora: '17:00'
        },{    
            emisor: 2,
            receptor:5,
            mensaje: 'Luchador de clase baja.',
            tipo: 'text',
            hora: '17:00'
        },
        {    
            emisor: 5,
            receptor:2,
            mensaje: 'lorem ipsum lorem',
            tipo: 'text',
            hora: '17:00'
        }
        ]
    },
    {
        chat:'chat-3-6',
        mensajes:[{    
            emisor: 6,
            receptor:3,
            mensaje: 'Dende,dendee',
            tipo: 'text',
            hora: '17:00'
        },
        {    
            emisor: 3,
            receptor:6,
            mensaje: 'hola Veguetta.',
            tipo: 'text',
            hora: '17:00'
        },
        {    
            emisor: 3,
            receptor:6,
            mensaje: '3.webp',
            tipo: 'stiker',
            hora: '21:00'
        }
        ]
    },
    {
        chat:'chat-4-6',
        mensajes:[{    
            emisor: 4,
            receptor:6,
            mensaje: 'Señor vegeta',
            tipo: 'text',
            hora: '12:00'
        },
        {    
            emisor: 4,
            receptor:6,
            mensaje: 'Lo estamos buscado, donde esta?.',
            tipo: 'text',
            hora: '17:00'
        },
        {    
            emisor: 4,
            receptor:6,
            mensaje: '1.webp',
            tipo: 'stiker',
            hora: '17:01'
        },
        {    
            emisor: 6,
            receptor:4,
            mensaje: 'Gohan!!!',
            tipo: 'text',
            hora: '18:00'
        }
        ]
    }
];

if(!localStorage.getItem('conversaciones')){

    localStorage.setItem('conversaciones', JSON.stringify(mensajesConversaciones));
    console.log('Conversaciones, guardadas.');
}else{
    console.log('Conversaciones, ya se encuentran guardados');
}


const contend = document.getElementById('contChat');
const contact = document.getElementById('contacts');


var usuarioActualSeleccionado;

//cambiar el usuario seleccionado actualmente.
function usuarioSeleccionado(id){

    /* Activar interaccion de la  visibilidad de seccion seleccionada */
    let activarViewChats = document.getElementById('chatsView');
    activarViewChats.style = 'border-bottom: #8F9AA0 4px solid;'

    let activarViewContacts = document.getElementById('contactsView')
    activarViewContacts.style = 'border-bottom: none;'

    /* Obtenemos los usuarios del localStorage */
    let usuariosL = localStorage.getItem('usuarios'); 
    usuariosL = JSON.parse(usuariosL);
    
    //obtenemos el usuario actual seleccionado, para cambiarlo
    let usuarioActual = document.getElementById('usuarioSelect');

    //usuario que se selecciono para ser el actual.
    let usuarioNuevoSelecct = usuariosL[id];

    usuarioActual.innerHTML = `
    <img src="./recursos/profile-pics/${usuarioNuevoSelecct.imagen}" alt="imagen ${usuarioNuevoSelecct.nombre}" class="imgHeaderUser">
    `;

    //variable global para identificar que usuario se esta utilizando.
    usuarioActualSeleccionado = id;
    
    cargarChatsUsuarioSeleccionado(usuarioNuevoSelecct.conversaciones);
    this.cargarUsuarios();
}


usuarioSeleccionado(0);

//Cargar usuarios ubicados en el localStorage, en el contenedor de seleccion de usuarios.
function cargarUsuarios(){
    //Traemos los usuarios guardados en el localStorage
    let usuariosL = localStorage.getItem('usuarios'); 
    usuariosL = JSON.parse(usuariosL);

    const contUsuarios = document.getElementById('rowSelectUsuario');
    let users = "";
    let cont = 0 //posicion de cada usuario.
    usuariosL.forEach(element => {
        //condicion para omitir el usuario actual seleccionado y no mostrarlo en la barra de disponibles.
        if(cont != usuarioActualSeleccionado){
            users += `
            <div class="col-2" onclick="usuarioSeleccionado(${cont})" role="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                <img class="imgBoxUser" src="./recursos/profile-pics/${element.imagen}" alt="imagen ${element.nombre}">
            </div>
            `;
        }
        cont = cont +1;
    });

    contUsuarios.innerHTML = users;
}

cargarUsuarios();


//funcion al ser llamada, cargara las conversaciones, que tenga el usuario.
function cargarChatsUsuarioSeleccionado(usuarioNuevoConversaciones){
    let chats = document.getElementById('contChat');
    
    let chatsN = '';
    usuarioNuevoConversaciones.forEach(chat => {
        let splitResult = (chat.id).split("-")[2];

        let imagenDistanatarioo = chat.imagenDestinatario;
        let horaMsj = chat.horaUltimoMensaje;
        
        //verificando si el usuario tiene imagen de perfil.
        if(chat.imagenDestinatario = '' || chat.imagenDestinatario.length < 3){
            imagenDistanatarioo = 'user.png';
        }
        
        if(chat.horaUltimoMensaje = '' || chat.horaUltimoMensaje.length < 3){
            horaMsj = ' ';
        }
        
        chatsN += `
        <div class="row mt-4" onclick="abrirChat(${splitResult})">
                    <div class="col-3">
                        <img src="./recursos/profile-pics/${imagenDistanatarioo}" alt="img perfil">
                    </div>
                    <div class="col-5">
                        <p class="NombreChats">${chat.nombreDestinatario}</p>
                        <p class="Mensaje">${chat.ultimoMensaje}</p>
                    </div>
                    <div class="col-3">
                        <p class="Hora">${horaMsj}</p>
                    </div>     
        </div>
        <hr>
        `;
    });

    chats.innerHTML = chatsN;
}


function conversacionesUsuario(){

    contend.style.display = 'block';
    contact.style.display = 'none';

    let activarViewChats = document.getElementById('chatsView');
    activarViewChats.style = 'border-bottom: #8F9AA0 4px solid;'
    
    let activarViewContacts = document.getElementById('contactsView')
    activarViewContacts.style = 'border-bottom: none;'

}


//Generar o mostrar los contactos del usuario.
function contactsUsuario(){

    /* Activar y desactivar la opcion seleccionada.*/
    let desactivarViewChats = document.getElementById('chatsView');
    desactivarViewChats.style = 'border-bottom: none;'
    
    let activarViewContacts = document.getElementById('contactsView')
    activarViewContacts.style = 'border-bottom: #8F9AA0 4px solid;'
    
    let usuariosL = localStorage.getItem('usuarios'); 
    usuariosL = JSON.parse(usuariosL);

    //obtenemos la data del usuario actual.
    let usuarioActual = usuariosL[usuarioActualSeleccionado];


    //generamos el div dinamico
    let divContactos = document.getElementById('cntContacts');
    let divNuevo = '';
    usuarioActual.contactos.forEach(contact => {

        let user = usuariosL[contact];

        divNuevo += `
        <div class="row mt-2" onclick="abrirChat(${user.id})">
            <div class="col-3 contactImg">
                <img src="./recursos/profile-pics/${user.imagen}" alt="img perfil">
            </div>
            <div class="col-8">
                <p class="NombreContacto">${user.nombre}</p>
            </div>
        </div>
        <hr>
        `;
        
    });

    divContactos.innerHTML = divNuevo;
    contend.style.display = 'none';
    contact.style.display = 'block'; 
}

//controlamos la accion de guardar contacto, mientras no se seleccione una imagen
function imagenContactoSeleccionada(){
    
    const imagenPerfilContacto = document.getElementById('imagenId').value;

    if(imagenPerfilContacto != 100){
        document.getElementById('btnSave').disabled = false;
    }
}

//Guardar un nuevo contacto.
function GuardarUsuario(){
    const contacts = document.getElementById('cntContacts');
    const name = document.getElementById('name').value;
    const img = document.getElementById('imagenId').value;
    usuarioNuevo = {
        id: cantidadUsuarios,
        nombre: name,
        imagen: img,
        contactos: [usuarioActualSeleccionado],
        conversaciones: []
    };

    contacts.innerHTML +=`
        <div class="row mt-2" onclick = "iniciarConversacion(${cantidadUsuarios})">
            <div class="col-3 contactImg">
                <img src="./recursos/profile-pics/${img}" alt="img perfil">
            </div>
            <div class="col-8">
                <p class="NombreContacto">${name}</p>
            </div>
        </div>
        <hr>
    `;

    var usuariosLocal = localStorage.getItem('usuarios');
    usuariosLocal = JSON.parse(usuariosLocal);

    //obtenemos el usuario al cual pertenece el nuevo contacto.
    let userActuall = usuariosLocal[usuarioActualSeleccionado];

    userActuall.contactos.push(cantidadUsuarios);

    //actualizamos el usuario, como nuevo contacto de el usuario que tenemos seleccionado.
    usuariosLocal[usuarioActualSeleccionado] = userActuall;

    //agregamos a la lista de usuarios, el nuevo usuario
    usuariosLocal.push(usuarioNuevo);

    //actualizamos nuestra BD.
    localStorage.setItem('usuarios', JSON.stringify(usuariosLocal));  
}

var idUsuarioChatActivo;

//Mostrar chat o conversacion con usuario seleccionado
function abrirChat(idContacto){
    idUsuarioChatActivo= idContacto

    this.cargarMensajes(idContacto);

    let imagenPerfilUsuario = document.getElementById('imgChatt');
    let nombreUsuarioChat = document.getElementById('nameChatt');

    //Actualizando estilos
    document.getElementById('navBar').style = 'height: 11vh;';
    document.getElementById('usuarioSelect').style = 'opacity: 0;';
    document.getElementById('iconoChat').style = 'display: block !important;'
    document.getElementById('opcionSelectUsuario').style.display = 'none';
    document.getElementById('tituloWpp').style.display = 'none'
    document.getElementById('main').style.display = 'none';
    document.getElementById('chatUsers').style = 'display: block !important;';

    //Obtenemos los datos de usuario con el cual se tiene un registro de chat con el usuario seleccionado
    var usuariosLocal = localStorage.getItem('usuarios');
    usuariosLocal = JSON.parse(usuariosLocal);

    let dataContacto = usuariosLocal[idContacto];
    //Cargamos la imagen del usuario con el cual se estaba chateando o desea ver el historial.
    let imagenPerfilUsuarioChat = `./recursos/profile-pics/${dataContacto.imagen}`;  
    
    //Actualizamos algunos componentes de la vista
    imagenPerfilUsuario.style = 'display: block !important;';
    imagenPerfilUsuario.src=imagenPerfilUsuarioChat;
    nombreUsuarioChat.style = 'display: block !important;';
    nombreUsuarioChat.innerHTML = dataContacto.nombre;
}

//Mostrar los mensajes que contiene una conversacion o chat
function cargarMensajes(idContacto){

    let chat = `chat-${usuarioActualSeleccionado}-${idContacto}`;
    let chatOption = `chat-${idContacto}-${usuarioActualSeleccionado}`;

    // extraemos las conversaciones del localStorage
    let conversaciones = JSON.parse(localStorage.getItem('conversaciones'));
    let conversacion = '';

    // verificamos que la conversacion contenga mensajes
    for (let i = 0; i < conversaciones.length; i++) {
        if(conversaciones[i].chat == chat || conversaciones[i].chat == chatOption){

            conversaciones[i].mensajes.forEach(msj => {
                if(msj.receptor == usuarioActualSeleccionado){

                    if(msj.tipo == 'text'){
                        
                        conversacion += `<div class="userSend">${msj.mensaje}</div>`;
                    }else{
                        conversacion += `<div class="userSend"><img src="./recursos/stickers/${msj.mensaje}" alt="stiker"></div>`;

                    }
                }else{
                    if(msj.tipo == 'text'){
                        
                        conversacion += `<div class="me">${msj.mensaje}</div>`;
                    }else{
                        conversacion += `<div class="me"><img src="./recursos/stickers/${msj.mensaje}" alt="stiker"></div>`;

                    } 
                }
            });

            break;
        }
    }

    document.getElementById('mensajesConversacion').innerHTML = conversacion;
}

// Volvemos a la vista principal, donde se muestran los chat del usuario seleccionado
function returnChats(){

    // Actualizando estilos
    document.getElementById('usuarioSelect').style = 'opacity: none;';
    document.getElementById('navBar').style = 'height: auto;';
    document.getElementById('opcionSelectUsuario').style.display = 'block';
    document.getElementById('nameChatt').style = 'display: none !important';
    document.getElementById('imgChatt').style = 'display: none !important';
    document.getElementById('iconoChat').style = 'display: none !important'
    document.getElementById('tituloWpp').style.display = 'block'
    document.getElementById('main').style.display = 'block'
    document.getElementById('chatUsers').style.display = 'none'
    
}


function mostrarStikers(){

    const divContenedorStikers = document.getElementById('allStickers');
    const contStikers = document.getElementById('contStickers');
    let innhtml = '';

    //condicion encargada de evaluar la condicion del div contenedor de todos los stikers, para mostrarlos o ocultarlos.
    if(contStikers.style.display == "" || contStikers.style.display == "none" ){
        
        contStikers.style.display = 'block'
    }else{
        contStikers.style.display = 'none'

    }

    //Extraemos los stickers alojados en el localStorage
    let stikerss = JSON.parse(localStorage.getItem('stikers')) ;

    //generando la vista de los stikers con los que contamos dinamicamente.
    stikerss.forEach(stiker => {
        innhtml += `
        <div class="col-4 mr-0">
            <img src=".${stiker.stiker}" onclick="enviarSticker(${stiker.id})" alt="stiker">
        </div>
        `;
    });

    divContenedorStikers.innerHTML = innhtml;

}

function enviarSticker(id){

    let stikerSeleccionado = JSON.parse(localStorage.getItem('stikers'));
    for (let i = 0; i < stikerSeleccionado.length; i++) {
        if(stikerSeleccionado[i].id == id){
            //mostramos el stiker
            document.getElementById('mensajesConversacion').innerHTML += `<div class="me"><img src="${stikerSeleccionado[i].stiker}" alt="stiker"></div>`;
            this.mostrarStikers();

            let chat = `chat-${usuarioActualSeleccionado}-${idUsuarioChatActivo}`;
            let chatOption = `chat-${idUsuarioChatActivo}-${usuarioActualSeleccionado}`;

            //obtenemos las conversaciones
            let conversaciones = JSON.parse(localStorage.getItem('conversaciones'));

            //guardamos el stiker en la conversacion
            for (let j = 0; j < conversaciones.length; j++) {
                if(conversaciones[j].chat == chat || conversaciones[j].chat == chatOption){

                    let newMsj = {
                        emisor:usuarioActualSeleccionado,
                        receptor: idUsuarioChatActivo,
                        mensaje: (stikerSeleccionado[i].stiker).split('/')[3],
                        tipo:'stiker',
                        hora: '18:00'
                    }
                    conversaciones[j].mensajes.push(newMsj);
                }
            }

            localStorage.setItem('conversaciones',JSON.stringify(conversaciones));


            //obtenermos los usuarios
            let usuarios = JSON.parse(localStorage.getItem('usuarios'))

            // Actualizamos nuestra vista previa de las conversaciones o chats
            usuarios[usuarioActualSeleccionado].conversaciones.forEach(conversacion =>{
                if(conversacion.id == chat || conversacion.id == chatOption){
                    conversacion.ultimoMensaje = `Yo: stiker`;
                }
            });
        
            //actualizamos la vista previsa de los chats del otro usuario
            usuarios[idUsuarioChatActivo].conversaciones.forEach(conver =>{
                if(conver.id == chat || conver.id == chatOption){
                    conver.ultimoMensaje = `stiker`
                }
            });
        
            //guardamos y actualizamos el estado de la previzualizacion de los mensajes.
            localStorage.setItem('usuarios',JSON.stringify(usuarios));
            
            this.usuarioSeleccionado(usuarioActualSeleccionado);
            break;
        }
    }
}

function enviarNuevoMensaje(){

    let mensajeNuevo = document.getElementById('inputMsj').value;

    if(mensajeNuevo != ''){

        document.getElementById('mensajesConversacion').innerHTML += `<div class="me">${mensajeNuevo}</div>`;
    
        let chat = `chat-${usuarioActualSeleccionado}-${idUsuarioChatActivo}`;
        let chatOption = `chat-${idUsuarioChatActivo}-${usuarioActualSeleccionado}`;
    
        //obtenemos las conversaciones
        let conversaciones = JSON.parse(localStorage.getItem('conversaciones'));
    
        //obtenemos los usuarios
        let usuarios = JSON.parse(localStorage.getItem('usuarios'))
    
        //guardamos el nuevo mensaje en la conversacion
        for (let j = 0; j < conversaciones.length; j++) {
            if(conversaciones[j].chat == chat || conversaciones[j].chat == chatOption){
                let newMsj = {
                    emisor:usuarioActualSeleccionado,
                    receptor: idUsuarioChatActivo,
                    mensaje: mensajeNuevo,
                    tipo:'text',
                    hora: '18:00'
                }
                conversaciones[j].mensajes.push(newMsj);
            }
    
        }
    
        // Agregamos los nuevos cambios 
        localStorage.setItem('conversaciones',JSON.stringify(conversaciones));
        document.getElementById('inputMsj').value = '';
    
        //actualizamos el estado de la previzualizacion de la conversacion
        usuarios[usuarioActualSeleccionado].conversaciones.forEach(conversacion =>{
            if(conversacion.id == chat || conversacion.id == chatOption){
                conversacion.ultimoMensaje = `Yo: ${mensajeNuevo}`;
            }
        });
    
        usuarios[idUsuarioChatActivo].conversaciones.forEach(conver =>{
            if(conver.id == chat || conver.id == chatOption){
                conver.ultimoMensaje = `${mensajeNuevo}`
            }
        });
    
        // guardamos y actualizamos el estado de la previzualizacion de los mensajes.
        localStorage.setItem('usuarios',JSON.stringify(usuarios));
        
        this.usuarioSeleccionado(usuarioActualSeleccionado);
    }

}
