window.onload = () => {
    // On va chercher tous les éléments
    const elts = document.querySelectorAll(".accordion-element");
    // On récupère l'élément actif
    const firstActive = document.querySelector(".accordion .active");
    // On va chercher la balise p qui se trouve à l'intérieur
    let section = firstActive.children[1].querySelector("p");
    
    // On récupère la hauteur de section
    let sectionHeight = section.offsetHeight + 20;

    // On définit la hauteur de .accordion-content
    firstActive.children[1].style.height = sectionHeight+"px";

    for(let elt of elts){
        elt.addEventListener("click", function(){
            // On récupère l'élément actif
            const active = document.querySelector(".accordion .active");
            // On lui retire la classe "active"
            active.classList.remove("active");
            // On réduit sa hauteur
            active.children[1].style.height = 0;

            // On met la classe active à l'élément cliqué
            this.classList.add("active");

            // On récupère la hauteur de la balise p
            let section = this.children[1].querySelector("p");
    
            // On récupère la hauteur de section
            let sectionHeight = section.offsetHeight + 20;
        
            // On définit la hauteur de .accordion-content
            this.children[1].style.height = sectionHeight+"px";
        });
    }
}
// <------------------slider----------------------->
document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-carousel',{
        type :'loop',
        autoplay: 'play',
        perPage    : 3,
        gap    : '2rem',
        width : '90vh',
        padding : '2rem',
        perMove: 1,
        breakpoints: {
            480: {
                perPage: 1,
                padding : '0',
                }}

  } ).mount();
    
  } );
//   <-------------------compteur-------------------->

var n = 20; // Nombre final du compteur
var cpt = 0; // Initialisation du compteur
var duree = 5; // Durée en seconde pendant laquel le compteur ira de 0 à 15
var delta = Math.ceil((duree * 1000) / n); // On calcule l'intervalle de temps entre chaque rafraîchissement du compteur (durée mise en milliseconde)
var node =  document.getElementById("compteur"); // On récupère notre noeud où sera rafraîchi la valeur du compteur
 
function countdown() {
  node.innerHTML = ++cpt;
  if( cpt < n ) { // Si on est pas arrivé à la valeur finale, on relance notre compteur une nouvelle fois
     setTimeout(countdown, delta);
  }
}
 
setTimeout(countdown, delta);