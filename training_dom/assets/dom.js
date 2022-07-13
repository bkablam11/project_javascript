/* 
** L'objet document est un sous-objet de window. L'objet document possède trois méthodes
principales : getElementById(), getElementsByTagName() et getElementsByName().
*/

// var div = document.getElementById('myDiv');
// alert(div);

// var divs = document.getElementsByTagName('li');
// for (var i = 0, c = divs.length ; i < c ; i++) {
//     alert('Element n° ' + (i + 1) + ' : ' + divs[i]);
// }


// var query = document.querySelector('#menu .item span'),
// queryAll = document.querySelectorAll('#menu .item span');
// alert(query.innerHTML); // Affiche : "Élément 1"
// alert(queryAll.length); // Affiche : "2"
// alert(queryAll[0].innerHTML + ' - ' + queryAll[1].innerHTML);

// document.querySelector("h1").innerText = "Bonjour";

// interagire avec des éléments du html et modifier les paramètres css

// document.getElementsByClassName('li')[1].style.color="blue";

// document.getElementsByClassName('btn')[0].style.backgroundColor = "blue";

// document.querySelector('h1').classList.add('titre');
// document.querySelector('h1').classList.remove('titre');
// document.querySelector('h1').classList.toogle('titre');

// afficher et modifier la balise

// document.querySelector('h1').innerHTML = "<em>Hello</em>";

// // afficher et modifier le content
// document.querySelector('h2').textContent = "Le monde";


// document.querySelector('a').setAttribute('href', 'google.com');