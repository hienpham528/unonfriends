"use strict";

function shuffle_liste_cartes(a){
	let i, j, x;
	for(i = a.length - 1; i > 0; i--){
		j = Math.floor(Math.random() * (i + 1));
		x = a[i];
		a[i] = a[j];
		a[j] = x;
	}
	return a;
};

module.exports = shuffle_liste_cartes;
