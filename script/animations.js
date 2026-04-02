// ora rendo funzionante il bottone: voglio assegnare la classe "rotate" alla pressione
const handleRotate = function () {
  // questa funzione verrà attivata OGNI VOLTA che clicco sul pulsante!
  // 1) trovare un riferimento al box navy
  // potrei recuperarlo dal fatto che ha 3 classi css
  const navyBox = document.querySelector('.box.flex.navy')

  // 2-easy) date la classe "rotate" o la togliete al click
  // navyBox.classList.toggle('rotate')

  // 2) assegnare al box navy la classe CSS "rotate"
  // e dare uno stile inline all'animazione "running" o "paused"
  // per congelarla sul posto

  // controllo se la classe "rotate" è già stata assegnata da un click precedente
  if (navyBox.classList.contains('rotate')) {
    // la classe "rotate" c'è già!
    if (
      // questo if controlla se l'animazione è già in stato "running"
      // o se la proprietà style.animationPlayState non è stata ancora inizializzata
      !navyBox.style.animationPlayState ||
      navyBox.style.animationPlayState === 'running'
    ) {
      // se l'elemento era "running", lo pauso
      navyBox.style.animationPlayState = 'paused'
    } else {
      // l'elemento era già in "paused"
      navyBox.style.animationPlayState = 'running'
    }
  } else {
    // la classe "rotate" ancora non c'è!
    // il primo click in assoluto serve per DARE la classe "rotate"
    navyBox.classList.add('rotate')
  }
}
