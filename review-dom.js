// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

let newUl = document.createElement('ul');
for (let i = 0; i < countries.length; i++) {
	let newLi = document.createElement('li');
	newLi.innerText = countries[i];

	newUl.appendChild(newLi);
	
}

document.body.appendChild(newUl);



// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
document.querySelector('.fn-remove-me').remove();



// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

let carsUl = document.createElement('ul');
for (let i = 0; i < cars.length; i++) {
	let carsLi = document.createElement('li');
	carsLi.innerText = cars[i];

	carsUl.appendChild(carsLi);

	
}

document.body.querySelector('div[data-function="printHere"]');

document.body.appendChild(carsUl);



// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const elementoListaDivs = document.createElement('div');
for (const country of countries2) {
	const h4 = document.createElement('h4');
	h4.innerText = country.title;

	const img = document.createElement('img');
	img.src = country.imgUrl;

	const div = document.createElement('div');
	div.appendChild(h4);
	div.appendChild(img);

	elementoListaDivs.appendChild(div);
}

document.body.appendChild(elementoListaDivs);



// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la lista.
elementoListaDivs.lastChild.remove();



// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// elementos de las listas que elimine ese mismo elemento del html.
elementoListaDivs.childNodes.forEach(elem => {
	const btn = document.createElement('button');
	btn.innerText = 'Eliminar';

	elem.appendChild(btn);

	btn.addEventListener('click', () => {
		elem.remove();
	});
});
