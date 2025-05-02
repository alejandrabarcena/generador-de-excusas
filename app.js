window.onload = function () {
    let who = ['Mi gato', 'El cartero', 'Mi jefe', 'La vecina'];
    let action = ['rompió', 'comió', 'pintó', 'mojó'];
    let what = ['mi tarea', 'el contrato', 'la laptop', 'el desayuno'];
    let when = ['mientras dormía', 'antes de la reunión', 'en el almuerzo', 'durante la lluvia'];
  
    let excuse = `${who[Math.floor(Math.random() * who.length)]} ` +
                 `${action[Math.floor(Math.random() * action.length)]} ` +
                 `${what[Math.floor(Math.random() * what.length)]} ` +
                 `${when[Math.floor(Math.random() * when.length)]}.`;
  
    document.getElementById("excuse").innerText = excuse;
  };
  