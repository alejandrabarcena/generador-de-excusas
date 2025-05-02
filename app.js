function generateExcuse() {
    let who = ['El perro', 'Mi abuela', 'El cartero', 'Mi pájaro'];
    let action = ['comió', 'orinó sobre', 'aplastó', 'rompió'];
    let what = ['mi tarea', 'mi celular', 'el coche', 'mis lentes'];
    let when = ['antes de clase', 'mientras dormía', 'durante el almuerzo', 'mientras rezaba'];
  
    const random = arr => arr[Math.floor(Math.random() * arr.length)];
  
    const excuse = `${random(who)} ${random(action)} ${random(what)} ${random(when)} 😬`;
  
    document.getElementById('excuse').innerText = excuse;
  }
  
  // Generar excusa automáticamente al cargar
  window.onload = generateExcuse;
  