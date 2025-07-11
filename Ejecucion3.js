let Tiempolvl3 = 51; //VARIBLE DE INICIO TIEMPO
let Puntajelvl3 = 0; //VARIABLE DE INICIO PUNTOS
let Juego_Terminado = false;

// Variables globales para los intervalos
let Restar_Tiempolvl3;
let Intervalo_Dirlvl3;
let Intervalo_Dir2lvl3;
let Intervalo_Dir3lvl3;
let Intervalo_Dir4lvl3;
let Intervalo_perdiste;

// FUNCIÓN PARA LIMPIAR TODOS LOS INTERVALOS
function LimpiarTodosLosIntervalos() {
  clearInterval(Restar_Tiempolvl3);
  clearInterval(Intervalo_Dirlvl3);
  clearInterval(Intervalo_Dir2lvl3);
  clearInterval(Intervalo_Dir3lvl3);
  clearInterval(Intervalo_Dir4lvl3);
  clearInterval(Intervalo_perdiste);
}

// FUNCIÓN PARA LIMPIAR TODOS LOS EVENT LISTENERS
function LimpiarEventListeners() {
  const meteoritos = ['Meteoritolvl3', 'Meteorito2lvl3', 'Meteorito3lvl3', 'Meteorito4lvl3'];

  meteoritos.forEach(id => {
    const elemento = document.getElementById(id);
    if (elemento) {
      const nuevoElemento = elemento.cloneNode(true);
      elemento.parentNode.replaceChild(nuevoElemento, elemento);
    }
  });
}

// FUNCIÓN PARA REINICIAR EL JUEGO COMPLETAMENTE
function ReiniciarJuego(reiniciarAutomaticamente = false) {
  LimpiarTodosLosIntervalos();
  // Limpiar todos los event listeners acumulados
  LimpiarEventListeners();
  
  // Reiniciar variables
  Tiempolvl3 = 51;
  Puntajelvl3 = 0;
  Juego_Terminado = false;
  
  // Actualizar la UI
  document.getElementById("Tiempolvl3").innerHTML = Tiempolvl3;
  document.getElementById("Puntajelvl3").innerHTML = Puntajelvl3 + " / 40";
  
  // Mover meteoritos fuera del mapa
  const meteoritos = ['Meteoritolvl3', 'Meteorito2lvl3', 'Meteorito3lvl3', 'Meteorito4lvl3'];
  meteoritos.forEach(id => {
    const elemento = document.getElementById(id);
    if (elemento) {
      elemento.style.left = "-70%";
      elemento.style.transition = "0s";
    }
  });
  
  // Pausar música de fondo si está sonando
  document.getElementById("Fondo_Ciberpunk").pause();
  
  // Si se debe reiniciar automáticamente, iniciar el juego después de un delay
  if (reiniciarAutomaticamente) {
    setTimeout(() => {
      document.getElementById("Fondo_Ciberpunk").play();
      JUEGOlvl3(); // Reiniciar el juego automáticamente
    }, 2000); // Esperar 2 segundos antes de reiniciar
  }
}

//CONTENEDOR QUE CONTIENE TODO EL JUEGO
function JUEGOlvl3() {
  //FUNCION QUE REDUCE EL TIEMPO Y RESETEA EL RESULTADO UNA VEZ LLEGUE A 0
  function Tiempo_Disminurlvl3() {
    if (Juego_Terminado) {
      return; // No ejecutar si el juego ya terminó
    }
    
    Tiempolvl3--;
    document.getElementById("Tiempolvl3").innerHTML = Tiempolvl3;
    
    if (Tiempolvl3 <= 0) {
      Juego_Terminado = true; // Marcar juego como terminado
      alert("Lo lamento perdiste - El juego se reiniciará automáticamente");
      ReiniciarJuego(true); // Reiniciar automáticamente después de perder
    }
  }
  Restar_Tiempolvl3 = setInterval(Tiempo_Disminurlvl3, 1000);

  //AÑADIMOS LA FUNCION AUMENTAR PUNTOS AL PASAR EL CURSOR SOBRE LOS METEORITOS
  document.getElementById("Meteoritolvl3").addEventListener("mouseover", Aumentar_Puntoslvl3);
  document.getElementById("Meteorito2lvl3").addEventListener("mouseover", Aumentar_Puntoslvl3);
  document.getElementById("Meteorito3lvl3").addEventListener("mouseover", Aumentar_Puntoslvl3);
  document.getElementById("Meteorito4lvl3").addEventListener("mouseover", Aumentar_Puntoslvl3);

  //FUNCION QUE UNICAMENTE AUMENTA PUNTOS Y RESETEA LAS VARIABLES AL LLEGAR A CIERTO LIMITE
  function Aumentar_Puntoslvl3() {
    if (Juego_Terminado) {
      return; // No ejecutar si el juego ya terminó
    }
    
    Puntajelvl3++;
    document.getElementById("Puntajelvl3").innerHTML = Puntajelvl3 + " / 40";
    
    if (Puntajelvl3 >= 40) {
      Juego_Terminado = true; // Marcar juego como terminado
      
      function Contactos() {
        Swal.fire({
          title: 'Felicitaciones por parte del <br> Grupo Omega<br><br><img src="IMG/Logo_Omega.png" width = "120px">',
          html: '<b class="Aumentar puntos">Sabia que lo lograrias, nos salvaste de la destrucciÓn, pero ahora nos espera otra lucha, esperemos volver a verte jugando IRON FIST 2 en un futuro <br><br> CONTACTOS:<br><br> 71727432@certus.edu.pe <br><br> 71663265@certus.edu.pe <br><br> 70845813@certus.edu.pe <br> </b>',
          icon: "success",
          confirmButtonText: '<span id="Pausear_musica">De acuerdo</span>',
          width: "50%",
          height: "80%",
          timer: 100000,
          timerProgressbar: true,
          allowOutsideClick: true,
          allowEscapeKey: false,
          allowEnterKey: false,
          stopKeydownPropagation: false,
        });
      }

      setTimeout(Contactos, 15000);

      document.getElementById("Fondo_Ciberpunk").pause();
      document.getElementById("Triunfo").play();

      function Ganaste_Pantallalvl3() {
        const meteoritos = ['Meteoritolvl3', 'Meteorito2lvl3', 'Meteorito3lvl3', 'Meteorito4lvl3'];
        meteoritos.forEach(id => {
          const elemento = document.getElementById(id);
          if (elemento) {
            elemento.style.left = "-70%";
            elemento.style.transition = "0s";
          }
        });
      }

      setInterval(Ganaste_Pantallalvl3, 100);
      LimpiarTodosLosIntervalos(); // Limpiar todos los intervalos

      document.getElementById("Musica_Final").play();
      document.getElementById("Pantalla_Ovnislvl3").style.left = "7%";
      document.getElementById("Pantalla_Ovnislvl3").style.transition = "6s";
      document.getElementById("Pantalla_Nodrizalvl3").style.left = "10%";
      document.getElementById("Pantalla_Nodrizalvl3").style.transition = "5s";
      document.getElementById("Pantalla_Ovnis2lvl3").style.left = "7%";
      document.getElementById("Pantalla_Ovnis2lvl3").style.transition = "6s";

      function Creditoslvl3() {
        document.getElementById("Pantalla_creditoslvl3").style.background = "black";
        document.getElementById("Creditoslvl3").style.top = "-15%";
        document.getElementById("Creditoslvl3").style.transition = "10s";
        document.getElementById("Proximolvl3").style.bottom = "-34%";
        document.getElementById("Proximolvl3").style.transition = "15s";
      }
      setTimeout(Creditoslvl3, 5000);
    }
  }

  //ESTA FUNCION DIRIGE AL PRIMER METEORITO 1 A LA TIERRA
  function Meteorito_Direccionlvl3() {
    if (Juego_Terminado) return;
    
    Distancia1lvl3 = 80;
    Altura1lvl3 = Math.round(Math.random() * 450);

    document.getElementById("Meteoritolvl3").style.left = Distancia1lvl3 + "%";
    document.getElementById("Meteoritolvl3").style.top = Altura1lvl3 + "px";
    document.getElementById("Meteoritolvl3").style.transition = "1.9s";
  }

  setTimeout(Meteorito_Direccionlvl3, 2200);
  Intervalo_Dirlvl3 = setInterval(Meteorito_Direccionlvl3, 2950);

  //ESTA FUNCION DIRIGE AL METEORITO 2 A LA TIERRA
  function Meteorito_Direccion2lvl3() {
    if (Juego_Terminado) return;
    
    Distancia2lvl3 = 80;
    Altura2lvl3 = Math.round(Math.random() * 450);

    document.getElementById("Meteorito2lvl3").style.left = Distancia2lvl3 + "%";
    document.getElementById("Meteorito2lvl3").style.top = Altura2lvl3 + "px";
    document.getElementById("Meteorito2lvl3").style.transition = "1.9s";
  }

  setTimeout(Meteorito_Direccion2lvl3, 2660);
  Intervalo_Dir2lvl3 = setInterval(Meteorito_Direccion2lvl3, 2750);

  //ESTA FUNCION DIRIGE AL METEORITO 3 A LA TIERRA
  function Meteorito_Direccion3lvl3() {
    if (Juego_Terminado) return;
    
    Distancia3lvl3 = 80;
    Altura3lvl3 = Math.round(Math.random() * 450);

    document.getElementById("Meteorito3lvl3").style.left = Distancia3lvl3 + "%";
    document.getElementById("Meteorito3lvl3").style.top = Altura3lvl3 + "px";
    document.getElementById("Meteorito3lvl3").style.transition = "1.9s";
  }

  setTimeout(Meteorito_Direccion3lvl3, 2900);
  Intervalo_Dir3lvl3 = setInterval(Meteorito_Direccion3lvl3, 2550);

  //ESTA FUNCION DIRIGE AL METEORITO 4 A LA TIERRA
  function Meteorito_Direccion4lvl3() {
    if (Juego_Terminado) return;
    
    Distancia4lvl3 = 80;
    Altura4lvl3 = Math.round(Math.random() * 450);

    document.getElementById("Meteorito4lvl3").style.left = Distancia4lvl3 + "%";
    document.getElementById("Meteorito4lvl3").style.top = Altura4lvl3 + "px";
    document.getElementById("Meteorito4lvl3").style.transition = "1.9s";
  }

  setTimeout(Meteorito_Direccion4lvl3, 3100);
  Intervalo_Dir4lvl3 = setInterval(Meteorito_Direccion4lvl3, 2150);

  //AQUI ADJUNTAMOS LA ACCION DE LA FUNCION EXPULSAR AL PASAR SOBRE EL METEORITO
  document.getElementById("Meteoritolvl3").addEventListener("mouseover", Explulsarlvl3);
  document.getElementById("Meteorito2lvl3").addEventListener("mouseover", Explulsar2lvl3);
  document.getElementById("Meteorito3lvl3").addEventListener("mouseover", Explulsar3lvl3);
  document.getElementById("Meteorito4lvl3").addEventListener("mouseover", Explulsar4lvl3);

  //ESTA ES LA FUNCION QUE EXPULSA AL METEORITO 1 DE MANERA ALEATORIA FUERA DEL MAPA
  function Explulsarlvl3() {
    if (Juego_Terminado) return;
    
    document.getElementById("Puntos_sound").play();
    Distancialvl3 = "-500";
    Alturalvl3 = Math.round(Math.random() * 600);

    document.getElementById("Meteoritolvl3").style.left = Distancialvl3 + "px";
    document.getElementById("Meteoritolvl3").style.top = Alturalvl3 + "px";
    document.getElementById("Meteoritolvl3").style.transition = "1.7s";
  }

  //ESTA ES LA FUNCION QUE EXPULSA AL METEORITO 2 DE MANERA ALEATORIA FUERA DEL MAPA
  function Explulsar2lvl3() {
    if (Juego_Terminado) return;
    
    document.getElementById("Punto2").play();
    Distancialvl3 = "-500";
    Alturalvl3 = Math.round(Math.random() * 500);

    document.getElementById("Meteorito2lvl3").style.left = Distancialvl3 + "px";
    document.getElementById("Meteorito2lvl3").style.top = Alturalvl3 + "px";
    document.getElementById("Meteorito2lvl3").style.transition = "1.7s";
  }

  //ESTA ES LA FUNCION QUE EXPULSA AL METEORITO 3 DE MANERA ALEATORIA FUERA DEL MAPA
  function Explulsar3lvl3() {
    if (Juego_Terminado) return;
    
    document.getElementById("Punto3").play();
    Distancialvl3 = "-500";
    Alturalvl3 = Math.round(Math.random() * 600);

    document.getElementById("Meteorito3lvl3").style.left = Distancialvl3 + "px";
    document.getElementById("Meteorito3lvl3").style.top = Alturalvl3 + "px";
    document.getElementById("Meteorito3lvl3").style.transition = "1.7s";
  }

  //ESTA ES LA FUNCION QUE EXPULSA AL METEORITO 4 DE MANERA ALEATORIA FUERA DEL MAPA
  function Explulsar4lvl3() {
    if (Juego_Terminado) return;
    
    document.getElementById("Punto4").play();
    Distancialvl3 = "-500";
    Alturalvl3 = Math.round(Math.random() * 600);

    document.getElementById("Meteorito4lvl3").style.left = Distancialvl3 + "px";
    document.getElementById("Meteorito4lvl3").style.top = Alturalvl3 + "px";
    document.getElementById("Meteorito4lvl3").style.transition = "1.7s";
  }

  //ESTA FUNCION SE ENCARGA DE ALERTARTE UNA VEZ EL METEORITO CRUZE LA LINEA
  function perdistelvl3() {
    if (Juego_Terminado) return; // No ejecutar si el juego ya terminó

    if (
      document.getElementById("Meteoritolvl3").offsetLeft > 630 ||
      document.getElementById("Meteorito2lvl3").offsetLeft > 630 ||
      document.getElementById("Meteorito3lvl3").offsetLeft > 630 ||
      document.getElementById("Meteorito4lvl3").offsetLeft > 630
    ) {
      Juego_Terminado = true; // Marcar juego como terminado
      
      alert("YA ES DEMASIADO TARDE LOS METEORITOS DESTRUYERON GRAN PARTE DEL CONTINENTE - El juego se reiniciará automáticamente");
      document.getElementById("Perdiste_sound").play();

      // Usar función de reinicio automático
      ReiniciarJuego(true);
      
    } else {
      // Solo aplicar transiciones si el juego no ha terminado
      document.getElementById("Meteoritolvl3").style.transition = "1.9s";
      document.getElementById("Meteorito2lvl3").style.transition = "1.9s";
      document.getElementById("Meteorito3lvl3").style.transition = "1.9s";
      document.getElementById("Meteorito4lvl3").style.transition = "1.9s";
    }
  }

  Intervalo_perdiste = setInterval(perdistelvl3, 100);
}

// Resto del código...
document.getElementById("Playlvl3").addEventListener("click", PLAYlvl3);

Conteolvl3 = 4;

function PLAYlvl3() {
  // Reiniciar el juego antes de empezar (esto incluye limpiar event listeners)
  ReiniciarJuego();
  
  document.getElementById("Fondo_Ciberpunk").play();
  document.getElementById("Textolvl3").style.left = "-900px";
  document.getElementById("Playlvl3").style.left = "-900px";
  document.getElementById("Dificultadlvl3").style.left = "-900px";
  
  function ARRACARlvl3() {
    JUEGOlvl3();
  }
  
  tiempo_de_arranquelvl3 = setTimeout(ARRACARlvl3, 4100);
  
  function ESPERARlvl3() {
    function Cuenta_rglvl3() {
      Conteolvl3--;
      document.getElementById("RGBlvl3").innerHTML = Conteolvl3;
      if (Conteolvl3 == -1) {
        document.getElementById("Contenedor_contadorlvl3").style.display = "none";

        function Borrarlvl3() {
          document.getElementById("Startlvl3").style.display = "none";
          DETENER_JUEGOlvl3();
        }
        setTimeout(Borrarlvl3, 500);
      }
    }
    setInterval(Cuenta_rglvl3, 1000);
  }

  setTimeout(ESPERARlvl3, 350);
}

function DETENER_JUEGOlvl3() {
  document.getElementById("Pauselvl3").addEventListener("click", PAUSElvl3);
  Activolvl3 = 1;
  
  function PAUSElvl3() {
    if (Activolvl3 == 1) {
      // PAUSAR EL JUEGO
      document.getElementById("Pausa_Pantallalvl3").style.display = "table";
      LimpiarTodosLosIntervalos(); // Limpiar TODOS los intervalos (incluyendo el tiempo)
      document.getElementById("Fondo_Ciberpunk").pause();
      
      function Meteorito_detenerlvl3() {
        document.getElementById("Meteoritolvl3").style.left = document.getElementById("Meteoritolvl3").offsetLeft + "px";
        document.getElementById("Meteorito2lvl3").style.left = document.getElementById("Meteorito2lvl3").offsetLeft + "px";
        document.getElementById("Meteorito3lvl3").style.left = document.getElementById("Meteorito3lvl3").offsetLeft + "px";
        document.getElementById("Meteorito4lvl3").style.left = document.getElementById("Meteorito4lvl3").offsetLeft + "px";

        document.getElementById("Meteoritolvl3").style.top = document.getElementById("Meteoritolvl3").offsetTop + "px";
        document.getElementById("Meteorito2lvl3").style.top = document.getElementById("Meteorito2lvl3").offsetTop + "px";
        document.getElementById("Meteorito3lvl3").style.top = document.getElementById("Meteorito3lvl3").offsetTop + "px";
        document.getElementById("Meteorito4lvl3").style.top = document.getElementById("Meteorito4lvl3").offsetTop + "px";
      }

      Pause_offlvl3 = setInterval(Meteorito_detenerlvl3, 0.01);
      Activolvl3 = 2;
    } else {
      // REANUDAR EL JUEGO
      document.getElementById("Pausa_Pantallalvl3").style.display = "none";
      document.getElementById("Fondo_Ciberpunk").play();
      clearInterval(Pause_offlvl3);

      // REANUDAR EL CONTADOR DE TIEMPO
      function Tiempo_Disminurlvl3() {
        if (Juego_Terminado) {
          return;
        }
        Tiempolvl3--;
        document.getElementById("Tiempolvl3").innerHTML = Tiempolvl3;
        if (Tiempolvl3 <= 0) {
          Juego_Terminado = true;
          alert("Lo lamento perdiste - El juego se reiniciará automáticamente");
          ReiniciarJuego(true);
        }
      }
      Restar_Tiempolvl3 = setInterval(Tiempo_Disminurlvl3, 1000);

      // REANUDAR MOVIMIENTO DE METEORITOS
      document.getElementById("Meteoritolvl3").style.left = Distancia1lvl3 + "%";
      document.getElementById("Meteoritolvl3").style.top = Altura1lvl3 + "px";
      document.getElementById("Meteoritolvl3").style.transition = "2.7s";

      document.getElementById("Meteorito2lvl3").style.left = Distancia2lvl3 + "%";
      document.getElementById("Meteorito2lvl3").style.top = Altura2lvl3 + "px";
      document.getElementById("Meteorito2lvl3").style.transition = "2.7s";

      document.getElementById("Meteorito3lvl3").style.left = Distancia3lvl3 + "%";
      document.getElementById("Meteorito3lvl3").style.top = Altura3lvl3 + "px";
      document.getElementById("Meteorito3lvl3").style.transition = "2.7s";

      document.getElementById("Meteorito4lvl3").style.left = Distancia4lvl3 + "%";
      document.getElementById("Meteorito4lvl3").style.top = Altura4lvl3 + "px";
      document.getElementById("Meteorito4lvl3").style.transition = "2.7s";

      // REANUDAR INTERVALOS DE DIRECCION DE METEORITOS
      function Meteorito_Direccionlvl3() {
        if (Juego_Terminado) return;
        
        Distancia1lvl3 = 80;
        Altura1lvl3 = Math.round(Math.random() * 450);

        document.getElementById("Meteoritolvl3").style.left = Distancia1lvl3 + "%";
        document.getElementById("Meteoritolvl3").style.top = Altura1lvl3 + "px";
        document.getElementById("Meteoritolvl3").style.transition = "1.9s";
      }

      setTimeout(Meteorito_Direccionlvl3, 2000);
      Intervalo_Dirlvl3 = setInterval(Meteorito_Direccionlvl3, 2950);

      function Meteorito_Direccion2lvl3() {
        if (Juego_Terminado) return;
        
        Distancia2lvl3 = 80;
        Altura2lvl3 = Math.round(Math.random() * 450);

        document.getElementById("Meteorito2lvl3").style.left = Distancia2lvl3 + "%";
        document.getElementById("Meteorito2lvl3").style.top = Altura2lvl3 + "px";
        document.getElementById("Meteorito2lvl3").style.transition = "1.9s";
      }

      setTimeout(Meteorito_Direccion2lvl3, 2000);
      Intervalo_Dir2lvl3 = setInterval(Meteorito_Direccion2lvl3, 2750);

      function Meteorito_Direccion3lvl3() {
        if (Juego_Terminado) return;
        
        Distancia3lvl3 = 80;
        Altura3lvl3 = Math.round(Math.random() * 450);

        document.getElementById("Meteorito3lvl3").style.left = Distancia3lvl3 + "%";
        document.getElementById("Meteorito3lvl3").style.top = Altura3lvl3 + "px";
        document.getElementById("Meteorito3lvl3").style.transition = "1.9s";
      }

      setTimeout(Meteorito_Direccion3lvl3, 2000);
      Intervalo_Dir3lvl3 = setInterval(Meteorito_Direccion3lvl3, 2550);

      function Meteorito_Direccion4lvl3() {
        if (Juego_Terminado) return;
        
        Distancia4lvl3 = 80;
        Altura4lvl3 = Math.round(Math.random() * 450);

        document.getElementById("Meteorito4lvl3").style.left = Distancia4lvl3 + "%";
        document.getElementById("Meteorito4lvl3").style.top = Altura4lvl3 + "px";
        document.getElementById("Meteorito4lvl3").style.transition = "1.9s";
      }

      setTimeout(Meteorito_Direccion4lvl3, 2000);
      Intervalo_Dir4lvl3 = setInterval(Meteorito_Direccion4lvl3, 2150);

      // REANUDAR DETECCIÓN DE PÉRDIDA
      function perdistelvl3() {
        if (Juego_Terminado) return;

        if (
          document.getElementById("Meteoritolvl3").offsetLeft > 630 ||
          document.getElementById("Meteorito2lvl3").offsetLeft > 630 ||
          document.getElementById("Meteorito3lvl3").offsetLeft > 630 ||
          document.getElementById("Meteorito4lvl3").offsetLeft > 630
        ) {
          Juego_Terminado = true;
          alert("YA ES DEMASIADO TARDE LOS METEORITOS DESTRUYERON GRAN PARTE DEL CONTINENTE - El juego se reiniciará automáticamente");
          document.getElementById("Perdiste_sound").play();
          ReiniciarJuego(true);
        } else {
          document.getElementById("Meteoritolvl3").style.transition = "1.9s";
          document.getElementById("Meteorito2lvl3").style.transition = "1.9s";
          document.getElementById("Meteorito3lvl3").style.transition = "1.9s";
          document.getElementById("Meteorito4lvl3").style.transition = "1.9s";
        }
      }

      Intervalo_perdiste = setInterval(perdistelvl3, 1);
      
      Activolvl3 = 1;
    }
  }
}