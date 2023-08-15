// LOOPS - FOR, WHILE, DO, FOREACH, AND THERE ARE 2 MORE WE WILL GO OVER; FOR OF, FOR IN


const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
	apples : 5,
	oranges: 10,
	grapes: 1000,
}


// 1.way - FOR

for ( let i = 0; i < basket.length; i++ ) {
	console.log(basket[i]);
}

--------------------

// 2.way - FOR EACH

basket.forEach(item => {
	console.log(item);
})

--------------------

// 3.way - FOR OF

// Iterating - means we are able to go one by one and look at these items.
// IN Javascript, you can iterate in arrays and strings. Both array and strings are iterable.
// For of allows us to iterate over these iterables.
// It does not work with objects.

for (item of basket) {
	console.log(item);
}

--------------------

// 4.way - FOR IN 

// it works with objects.  it allows us to loop over and see the object properties.
// What we are doing here is not called "Iterating". "Iterating" is something we can do with array and strings.
// We are doing something called "enumerating". Because properties of an object is enumerable.
// Object in Javascript is enumerable if it allows us to see the properties. "apples, oranges, grapes" are enumerable.



for (item in detailedBasket) {
	console.log(item)
}

---------------------

// What if we switch them ? 

for (item of detailedBasket) {
	console.log(item);
}

// = detailedBasket is not iterable. 
// Because only arrays and strings are iterable. "For of" loop doesnt work with objects.



for (item in basket) {
	console.log(item)
}

// = 0,1,2
// It works. Because you can think of arrays like objects. Because array has index of 0,1,2.
// so we can think of basket object like this ..

{ 
	0: 'apples',
	1: 'oranges',
	2: 'grapes' 
}
