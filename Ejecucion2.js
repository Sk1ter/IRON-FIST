let Tiempolvl2 = 61 //VARIBLE DE INICIO TIEMPO
let Puntajelvl2 = 0 //VARIABLE DE INICIO PUNTOS
let Activolvl2 = 1
let verificadorPerdida;
let nivelganado = false;


        function inciarMovimientoMeteorito(nombre, funcion, espera, intervalo){
            window[`Activador_inicial${nombre}`] = setTimeout(()=>{
                funcion();
                window[`Reanudar_trayectoria${nombre}`] = setInterval(funcion, intervalo);
            },espera);
        }
        
        function ClearActivador(nombre){
            clearTimeout(window[`Activador_inicial${nombre}`]);
        }
        function ClearTrayectoria(nombre){
            clearInterval(window[`Reanudar_trayectoria${nombre}`]);
        }
        const sonidos = {
        puntos: document.getElementById("Puntos_sound"),
        punto2: document.getElementById("Punto2"),
        punto3: document.getElementById("Punto3"),
        triunfo: document.getElementById("Triunfo"),
        perdiste: document.getElementById("Perdiste_sound")
        };
        function Metiorito_Direccionlvl2(){
            if (nivelganado) return;
            Distancia1lvl2 = 80
            Altura1lvl2 = Math.round(Math.random()* 450)

            document.getElementById("Meteioritolvl2").style.left = Distancia1lvl2 + "%"
            document.getElementById("Meteioritolvl2").style.top = Altura1lvl2 + "px"}
        function Metiorito_Direccion2lvl2(){
            if (nivelganado) return;
            Distancia2lvl2 = 80
            Altura2lvl2 = Math.round(Math.random()* 450)

            document.getElementById("Meteiorito2lvl2").style.left = Distancia2lvl2 + "%"
            document.getElementById("Meteiorito2lvl2").style.top = Altura2lvl2 + "px"}
        function Metiorito_Direccion3lvl2(){
            if (nivelganado) return;
                Distancia3lvl2 = 80
                Altura3lvl2 = Math.round(Math.random()* 450)
    
                document.getElementById("Meteiorito3lvl2").style.left = Distancia3lvl2 + "%"
                document.getElementById("Meteiorito3lvl2").style.top = Altura3lvl2 + "px"}
        function expulsar_Meteorito(id, sonido){
            const distancia_0 ="-500px";
            const altura_0 = Math.round(Math.random()*450);
            const meteoritos_0 =document.getElementById(id);
            if (meteoritos_0){
                meteoritos_0.style.left =distancia_0;
                meteoritos_0.style.top = altura_0;
                meteoritos_0.style.transition = "1.8s";
            }
            if(sonido)sonido.play();
        }
        function Tiempo_Disminurlvl2(){
        if (nivelganado) return;
            //FUNCION QUE REDUCE EL TIEMPO Y RESETEAL EL RESULTADO UNA VEZ LLEGUE A 0
        Tiempolvl2--;
        document.getElementById("Tiempolvl2").innerHTML = Tiempolvl2
        if(Tiempolvl2 == 0){
            Tiempolvl2 = 61
            Puntajelvl2 = 0
            alert("El tiempo se agotó, lo lamento, de seguro lo lograrás para la siguiente")} 
            
        }
        
//CONTENEDOR QUE CONTEIENE TOO EL JUEGO
//DE POR SI ESTA FUNCION NO SE EJECUTA HASTA QUE SE LA LLAMA, MAS ADELANTE LA LLAMAREMOS
//PARA QUE EL JUEGO INICIE UNA VEZ SE PRESIONE JUGAR
function JUEGOlvl2(){

    

        Tiempo_Disminurlvl2();
        Restar_Tiempolvl2 = setInterval(Tiempo_Disminurlvl2, 1000)
        //AÑADIMOS LA FUNCION AUMENTAR PUNTOS AL PASAR EL CURSOR SOBRE LOS METIORITOS
        document.getElementById("Meteioritolvl2").addEventListener('mouseover', Aumentar_Puntoslvl2)
        document.getElementById("Meteiorito2lvl2").addEventListener('mouseover', Aumentar_Puntoslvl2)
        document.getElementById("Meteiorito3lvl2").addEventListener('mouseover', Aumentar_Puntoslvl2)

    

        //FUNCION QUE UNICAMENTE AUMENTA PUNTOS Y RESETEA LAS VARIABLES AL LLEGAR A CIERTO LIMITE
        function Aumentar_Puntoslvl2(){
            Puntajelvl2++;
            document.getElementById("Puntajelvl2").innerHTML = Puntajelvl2 + " / 34"
            if(Puntajelvl2 == 34){
                Puntajelvl2 = 0 
                Tiempolvl2 = 61

                Ganaste_Pantallalvl2();
                document.getElementById("NEXT").addEventListener('click', Habilitar_Siguienten_LVL)
                document.getElementById("Tiempolvl2").innerHTML = 60
                document.getElementById("Puntajelvl2").innerHTML = 0+"&nbsp;/&nbsp;"+34
                document.getElementById("Fondo_Ciberpunk").pause()
                if (sonidos.triunfo)sonidos.triunfo.play();
                function Habilitar_Siguienten_LVL(){
                document.getElementById("NIVEL_01").style.display = "none"
                document.getElementById("NIVEL_02").style.display = "none"
                document.getElementById("NIVEL3").style.display = "block"
                
                
                //document.getElementById("Triunfo").play()
                

                }
                            
                function Ganaste_Pantallalvl2(){
                    nivelganado = true;
                    ClearTrayectoria("lvl2")
                    ClearActivador("lvl2");
                    ClearActivador("2lvl2");
                    ClearActivador("3lvl2");
                    ClearTrayectoria("2lvl2");
                    ClearTrayectoria("3lvl2");
                    clearInterval(Restar_Tiempolvl2);
                    clearInterval(verificadorPerdida);
                    document.getElementById("Meteioritolvl2").style.left = "-70%"
                    document.getElementById("Meteioritolvl2").style.transition = "0s"

                    document.getElementById("Meteiorito2lvl2").style.left = "-70%"
                    document.getElementById("Meteiorito2lvl2").style.transition = "0s"
                    
                    document.getElementById("Meteiorito3lvl2").style.left = "-70%"
                    document.getElementById("Meteiorito3lvl2").style.transition = "0s"
                
                }



                    //setInterval(Ganaste_Pantallalvl2, 30)

                    document.getElementById("GanastePantallaLvL2").style.display = "flex";
                    Swal.fire({
                    title : 'FELICIDADES POR SUPERAR <br> EL NIVEL <br><br> <img src="IMG/Check.png" width = "120px"><br>',
                    html: '¿VERDAD QUE FUE DIFÍCIL?. Prepárate para el siguiente nivel que las cosas van a empeorar. Agradecemos tu dedicación en pasar este nivel, esperemos que puedas seguir defendiendo la tierra de esa manera y mejores tu habilidad de reacción ',
                    icon: 'success',
                    confirmButtonText: 'QUIERO CONTINUAR',
                    width: '50%',
                    //height: '80%',
                    timer: 15000,
                    
                    
                    timerProgressbar: true,
                    /*Funcion de cerrar la alerta*/
                    allowOutsideClick: true,
                    allowEscapeKey: false,
                    allowEnterKey: false,
                    stopKeydownPropagation: false,
                    });
                    }
                                    }


        //ESTA FUNCION DIRIGE AL PRIMER METIORITO 1 A LA TIERRA 
        
        

            
            
            inciarMovimientoMeteorito("lvl2",Metiorito_Direccionlvl2,3500,2030);
            inciarMovimientoMeteorito("2lvl2",Metiorito_Direccion2lvl2,3000,2750);
            inciarMovimientoMeteorito("3lvl2",Metiorito_Direccion3lvl2,2200,2470);
            


        //AQUI ADJUNTAMOS LA ACCION DE LA FUNCION EXPULZAR AL PASAR SOBRE EL METIORITO
        //document.getElementById("Meteioritolvl2").addEventListener('mouseover', Explulsarlvl2)
        //document.getElementById("Meteiorito2lvl2").addEventListener('mouseover', Explulsar2lvl2)
        //document.getElementById("Meteiorito3lvl2").addEventListener('mouseover', Explulsar3lvl2)
        
        document.getElementById("Meteioritolvl2").addEventListener("mouseover", () => expulsar_Meteorito("Meteioritolvl2", sonidos.puntos));
        document.getElementById("Meteiorito2lvl2").addEventListener("mouseover", () => expulsar_Meteorito("Meteiorito2lvl2", sonidos.punto2));
        document.getElementById("Meteiorito3lvl2").addEventListener("mouseover", () => expulsar_Meteorito("Meteiorito3lvl2", sonidos.punto3));

        
        
        

        
        //ESTA FUNCION SE ENCARGA DE ALERTARTE UNA VEZ EL METIORITO CRUZE LA LINEA CON UN PERDISTE
        //TAMBIEN RESETEA LOS VALORES Y LLEVA A LOS METIORITOS FUERA DEL MAPA DE MANERA INSTANTANEA
        

        verificadorPerdida = setInterval(perdistelvl2, 50)
        //    setInterval(perdistelvl2, 30)//LE COLOCAMOS UNO PARA QUE SIEMPRE SE ESTE EJECUTANDO, DADO A 
        //QUE NO SABEMOS CUANDO EL METIORITO VA A SUPERAR EL LIMITE
        }
        function perdistelvl2 (){  
            if(document.getElementById("GanastePantallaLvL2").style.display === "flex") {
                return; 
            }
            const Meteoritos = document.querySelectorAll('.Meteioritolvl2');
            let fuera_perdio = false; 
            Meteoritos.forEach(Meteorito =>{
                if(Meteorito.offsetLeft > 570){
                    fuera_perdio=true;
                }
            });
            if (fuera_perdio){
                if (sonidos.perdiste)sonidos.perdiste.play();
                //document.getElementById("Perdiste_sound").play();
                alert("YA ES DEMASIADO TARDE 2, LOS METEORITOS DESTRUYERON GRAN PARTE DEL CONTINENTE Y LO MEJOR ES ESPERAR LO PEOR");

                Meteoritos.forEach(Meteorito =>{
                    Meteorito.style.left = "-70%";
                    Meteorito.style.transition = "0s"
                });
            Tiempolvl2 = 61;
            Puntajelvl2 = 0;
            
            }
            else{
                Meteoritos.forEach(Meteorito => {
                    Meteorito.style.transition = "2s";
                });
            }
            }

        //LE DECIMOS QUE AL PRECIONAR EL BOTON JUGAR EJECUTARA LA FUNCION PLAY     
        document.getElementById("Playlvl2").addEventListener('click', PLAYlvl2)

        Conteolvl2 = 4 //ESTE ES EL CONTEO DE LA CUENTA REGRESIVA QUE SE DA DESPUEZ DE PRESINAR JUGAR
            
            //ESTA FUNCION EJECUTA UN CONJUNTO DE ACCIONES AL PRESIONAR JUGAR
            function PLAYlvl2(){
                document.getElementById("Fondo_Ciberpunk").play()
                //MUEVE EL TITULO FUERA DEL CONTENEDOR UNA VEZ DE CLICK A JUGAR
                document.getElementById("Texolvl2").style.left = "-900px" 
                //MUEVE AL BOTON PLAY TRANS PRESIONAR PRESIONAR AL MISMO BOTON
                document.getElementById("Playlvl2").style.left = "-900px" 
                document.getElementById("Dificultad").style.left = "-900px"
                    //ESTA FUNCION CONTIENE AL JUEGO COMO TAL
                    function ARRACARlvl2(){    
                        JUEGOlvl2()}
                //INVOCA AL JUEGO UNA VEZ PASEN 4 SEGUNDO - OSEA UNA VEZ TERMINE EL CONTADOR
                tiempo_de_arranquelvl2 =  setTimeout(ARRACARlvl2, 4100)
                //ESTA FUNCION EJECUTA LA CUENTA REGRESIVA Y RETIRA LA PANTALLA START 
                function ESPERARlvl2(){
                    function Cuenta_rglvl2(){
                        Conteolvl2--;
                        document.getElementById("RGBlvl2").innerHTML = Conteolvl2
                        if(Conteolvl2 == -1){
                        document.getElementById("Contenedor_contadorlvl2").style.display = "none"
                        function Borrarlvl2(){
                        document.getElementById("Startlvl2").style.display = "none"

                            DETENER_JUEGOlvl2() }//HABILITA LA FUNCION DE PAUSE Y REANUDAR UNA VEZ CARGUE EL JUEGO
                        setTimeout(Borrarlvl2, 500) }  }
                        setInterval (Cuenta_rglvl2, 1000)}

                        setTimeout(ESPERARlvl2, 350)}//SE EJECUTARA EN UN LAPSO DE 350, DESPUES DE PRESIONAR EL BOTON

            
            //ESTA FUNCION CONTIENE EL REANUDE Y PAUSE DEL BOTON
            function DETENER_JUEGOlvl2 (){
                
                //INDICA QUE LA FUNCION DE PAUSE SE EJECUTARA UNA VEZ SE DE CLICK AL BOTON DE PAUSE        
                document.getElementById("Pauselvl2").addEventListener('click', PAUSElvl2)
                //ESTA VARIABLE INDICA SI SE EJECUTA O NO EL DESPAUSEO
                //Activolvl2 = 1 
                    //HACE QUE EL JUEGO SE DETENGA  
                    function PAUSElvl2(){
                        if(document.getElementById("GanastePantallaLvL2").style.display === "flex") {
                        return;}
                        //SI LLEGA A UNA EJECUTA LA FUNCION PAUSE
                        if (Activolvl2 == 1){
                        document.getElementById("Pausa_Pantallalvl2").style.display = "table"
                        document.getElementById("Fondo_Ciberpunk").pause()
                        clearInterval(Restar_Tiempolvl2)//BORRAMOS LA FUNCION DE TIEMPO
                        document.getElementById("Tiempolvl2").innerHTML = Tiempolvl2
                            ClearTrayectoria("lvl2");
                            ClearTrayectoria("2lvl2");
                            ClearTrayectoria("3lvl2");
                            clearInterval(verificadorPerdida);
                            function Metiorito_detenerlvl2 (){   
                            document.getElementById("Meteioritolvl2").style.left = document.getElementById("Meteioritolvl2").offsetLeft + "px" 
                            document.getElementById("Meteiorito2lvl2").style.left = document.getElementById("Meteiorito2lvl2").offsetLeft + "px" 
                            document.getElementById("Meteiorito3lvl2").style.left = document.getElementById("Meteiorito3lvl2").offsetLeft + "px" 

                            document.getElementById("Meteioritolvl2").style.top = document.getElementById("Meteioritolvl2").offsetTop + "px" 
                            document.getElementById("Meteiorito2lvl2").style.top = document.getElementById("Meteiorito2lvl2").offsetTop + "px" 
                            document.getElementById("Meteiorito3lvl2").style.top = document.getElementById("Meteiorito3lvl2").offsetTop + "px" }

                            Pusae_offflvl2 = setInterval(Metiorito_detenerlvl2, 1) //LE ASEGNAMOS UNA ID, PARA BORRALO UNA VEZ SE DESPAUSEE
                            Activolvl2 = 2} //CAMBIAMOS EL VALOR PARA QUE AL VOLVER A DARLE CLICK EJECUTE LA CONDICIONAL DE REANUDAR

                        else { //LA FUNCION DE REANUDAR
                            
                        let Distancia1lvl2 = (document.getElementById("Meteioritolvl2").offsetLeft / window.innerWidth) * 100;
                        let Altura1lvl2 = document.getElementById("Meteioritolvl2").offsetTop;

                        let Distancia2lvl2 = (document.getElementById("Meteiorito2lvl2").offsetLeft / window.innerWidth) * 100;
                        let Altura2lvl2 = document.getElementById("Meteiorito2lvl2").offsetTop;

                        let Distancia3lvl2 = (document.getElementById("Meteiorito3lvl2").offsetLeft / window.innerWidth) * 100;
                        let Altura3lvl2 = document.getElementById("Meteiorito3lvl2").offsetTop;

                            clearInterval(Pusae_offflvl2) 
                            document.getElementById("Pausa_Pantallalvl2").style.display = "none"
                            document.getElementById("Fondo_Ciberpunk").play()
                            //Tiempo_Disminurlvl2();
                            verificadorPerdida = setInterval(perdistelvl2, 50);
                            
                            document.getElementById("Meteioritolvl2").style.transition ="2s"
                            document.getElementById("Meteiorito2lvl2").style.transition ="2s"
                            document.getElementById("Meteiorito3lvl2").style.transition ="2s"
                            
                            Restar_Tiempolvl2 = setInterval(Tiempo_Disminurlvl2, 1000)
                            function mover_meteorito (id, distancia_F, altura_F){
                            const el = document.getElementById(id);
                            if(el){
                                el.style.left = distancia_F + "%";
                                el.style.top = altura_F + "px";
                                el.style.transition = "2s";
                            }}
                            mover_meteorito("Meteioritolvl2", Distancia1lvl2, Altura1lvl2);
                            mover_meteorito("Meteiorito2lvl2", Distancia2lvl2, Altura2lvl2);
                            mover_meteorito("Meteiorito3lvl2", Distancia3lvl2, Altura3lvl2);
                        inciarMovimientoMeteorito("lvl2",Metiorito_Direccionlvl2,350,2030);
                        inciarMovimientoMeteorito("2lvl2",Metiorito_Direccion2lvl2,300,2750);
                        inciarMovimientoMeteorito("3lvl2",Metiorito_Direccion3lvl2,220,2470);

                
                         Activolvl2 = 1 } } } //CAMBIAMOS EL VALOR DE NUEVO A 1 PARA QUE AL SIGUIENTE CLICK SE EJECUTE EL PAUSE  S 
                        //agregue un let