
// variable, constante, date

// console.log("hello");
// console.log("world");
// alert("Attention");
// typeof(45);
// var tab=[1,2,3];
// typeof(tab)

// var num=3;
// num+=5;
// alert(num)

// const date="13/07/2022"
// alert(date)

// var text="hello";
// text+=" word";
// alert(text)

// var start=" bonjour", end= " !", result;
// var user_name=prompt("Entrer votre nom");
// result = start + user_name + end;
// alert(result)

//calcul num+num

// var first, second, result, text;
// first = prompt("Entrer le num1");
// second = prompt("Entrer num 2");
// text = "la somme de vos deux nombres est : "

// result = parseInt(first) + parseInt(second);
// text+=result;

// alert(text)

// if (confirm("js files ?")){
//     alert("yes");
// }
// else{
//     alert("desolé")
// }

//if condition

// var floor = parseInt(prompt("Entrez l'étage où l'ascenseur doit se rendre (de -2 à 30) : "));

// if (floor == 0) {
//     alert('Vous vous trouvez déjà au rez-de-chaussée.');
// } 
// else if (-2 <= floor && floor <= 30) {
//     alert("Direction l'étage n°" + floor + ' !');
// } 
// else {
//     alert("L'étage spécifié n'existe pas.");
// }


// switch 

// var drawer = parseInt(prompt('Choisissez le tiroir à ouvrir (1 à 4) :')); //onprécise bien le type de la valeur, ici un nombre avec la fonction parseInt()

// switch (drawer) {
//     case 1: // on pose chaque cas l'un après l'autre ; on met des apostrophes si l'on vérifie des chaînes de caractères au lieu de nombres
//         alert('Contient divers outils pour dessiner : du papier, des crayons, etc.');
//     break; // on arrête la fonction pour passer à un autre cas
//         case 2:
//     alert('Contient du matériel informatique : des câbles, des composants, etc.');
//     break;
//         case 3:
//     alert('Ah ? Ce tiroir est fermé à clé ! Dommage !');
//     break;
//         case 4:
//     alert('Contient des vêtements : des chemises, des pantalons, etc.');
//     break;
//         default: // on pose une autre possibilité, pour gérer une erreur de l'utilisateur
//     alert("Info du jour : le meuble ne contient que 4 tiroirs et, jusqu'à preuve du contraire, les tiroirs négatifs n'existent pas.");
//     }



// les ternaires 

// var startMessage = 'Votre genre : ', endMessage, adult = confirm('Êtes-vous une fille ?'); 

// endMessage = adult ? 'Fille' : 'Garçon';

// alert(startMessage + endMessage);



// Incrémentation et décrémentation

// var number = 0;
// number++;
// alert(number); // Affiche : « 1 »
// number--;
// alert(number); // Affiche : « 0 »



// La boucle while

// var number = 1;
// while (number < 10) {
// number++; // Tant que le nombre est inférieur à 10, on l'incrémente de 1
// }
// alert(number); // Affiche : « 10 » 

// var prenoms = '', prenom; // On crée une variable prenoms pour mémoriser
// while (true) {
// prenom = prompt('Entrez un prénom :'); // L'utilisateur entre chaque prenom
// if (prenom) {
// prenoms += prenom + ' '; // Ajoute le nouveau prénom ainsi qu'une espace
// } else {
// break; // On quitte la boucle
// }
// } alert(prenoms); // Affiche les prénoms à la suite 


// La boucle do while (peu utile)

// do {
//     instruction_1; instruction_2; instruction_3;
//     } while (condition);


// La boucle for (très utile)

// for (var iter = 1; iter <= 5; iter++) { // On initialise une variable, et tant qu'elle est inférieure ou égale à 5 on l'incrémente de 1.
//     alert('Itération n°' + iter); // A chaque fois on affiche une boîte de dialogue (5 fois)
// }

// for (var i = 0, prenoms = '', prenom; true; i++) {
//     prenom = prompt('Entrez un prénom :');
//     if (prenom) { prenoms += prenom + ' '; }
//     else { break; } }
//     alert('Il y a ' + i + ' prénoms :\n\n' + prenoms); // Les \n servent à faire des sauts de ligne


// Les fonctions

// function byTwo() {
//     var result = parseInt(prompt('Donnez le nombre à multiplier par 2 :'));
//     alert(result * 2); }
//     byTwo(); // On appelle la fonction créée
//     alert('Vous en êtes à la moitié !'); // Puis un message intermédiaire
//     byTwo(); // Et appelle de nouveau la fonction 

// fontions
// function moar(first, second) {
//     // On peut maintenant utiliser les variables « first » et « second » comme on le souhaite :
//     alert('Votre premier argument : ' + first);
//     alert('Votre deuxième argument : ' + second);
//     }
//     moar(prompt('Entrez votre premier argument :'),
//     prompt('Entrez votre deuxième argument :')
//     );

// procédure
// function sayHello() {
//         return 'Bonjour !'; // L'instruction « return » suivie d'une valeur, cette dernière est donc renvoyée par la fonction (il ne peut pas y en avoir d'autres)
//         }
//         alert(sayHello());

// fonction anonymes

// var sayHello = function() {
//     alert('Bonjour !');
//     };
//     sayHello(); 


// les objets(construsteur, propriété, méthodes)

// var myString = 'Ceci est une chaîne de caractères'; // On crée un objet String
// alert(myString.length); // On affiche le nombre de caractères, au moyen de la propriété « length »
// alert("En grand caractère " + myString.toUpperCase()); // On récupère la chaîne en majuscules, avec la méthode toUpperCase(), l'inverse étant la méthode toLowerCase()

// les tableaux

// var myArray = ['Rafael', 'Mathilde', 'Ahmed', 'Jérôme', 'Guillaume'];

// // Le contenu se définit entre crochets, avec une virgule entre chaque valeur.

// myArray[1] = 'Paul';

// // La chaîne 'Rafael' correspond à l'indice 0, 'Mathilde' à l'indice 1...

// alert(myArray[1]); // Affiche : « Laurence »


// var myArray = ['Rafael', 'Mathilde'];
// myArray.push('Ahmed'); // Ajoute « Ahmed » à la fin du tableau
// myArray.push('Jérôme', 'Guillaume'); // Ajoute « Jérôme » et « Guillaume » à la fin du tableau

// alert(myArray)


// découper une chaîne de caractères en tableau avec split() :


// var cousinsString = 'Jérôme Guillaume Paul',
// cousinsArray = cousinsString.split(' '); // Avec les espaces, on a trois items
// alert(cousinsString);
// alert(cousinsArray);

//parcourir un tableau avec for :

// var myArray = ['Rafael', 'Mathilde', 'Ahmed', 'Jérôme', 'Guillaume']; // La length est de 5
// for (var i = 0, c = myArray.length; i < c; i++) { // On crée la variable c pour que la condition ne soit pas trop lourde en caractères
// alert(myArray[i]); // On affiche chaque item, l'un après l'autre, jusqu'à la longueur totale du tableau
// }

// Les objets littéraux : dictionnaires

// var family = {
//     self: 'Rafael',
//     sister: 'Mathilde',
//     brother: 'Ahmed',
//     cousin_1: 'Jérôme',
//     cousin_2: 'Guillaume'
//     };

//     var id = 'sister';
//     alert(family[id]); // Affiche : « Mathilde »
//     alert(family.brother); // Affiche : « Ahmed »
//     alert(family['self']); // Affiche : « Rafael »
//     family['uncle'] = 'Pauline'; // On ajoute une donnée, avec un identifiant.
//     family.aunt = 'Karim'; // On peut ajouter aussi de cette manière.
//     alert(family.uncle); 

//     for (var id in family) { // On stocke l'identifiant dans « id » pour parcourir 'objet « family »
//         alert(family[id]);
//     }


// var nicks = '', nick;
// while (true) {
// nick = prompt('Entrez un prénom :');
// if (nick) {
// nicks += nick + ' '; // Ajoute le nouveau prénom ainsi qu'un espace
// } else {
// break; // On quitte la boucle
// }
// }
// alert(nicks); // Affiche les prénoms à la suite


// var prenoms = [],
// prenom;
// while (prenom = prompt('Entrez un prénom :')) {
// prenoms.push(prenom); // Ajoute le nouveau prénom ainsi qu'un espace
// }
// if (prenoms.length > 0) {
// alert(prenoms.join(' '));
// } else {
// alert('Il n\'y a aucun prénom en mémoire');
// }

// if (true) {
//     let abh = "Mom";
//     console.log(abh)
// }

// Constructeur -- POO
// Automatiser les objets
// function Perso(par1, par2){
//     this.par1=part1;
//     this.par2=function(){
//         alert(par2)
//     }

// }

// var dor  = new Perso("dora", "fonction");





