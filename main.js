// javascript document

// access the jason file using an xhr object

let requestURL= "https://jeshan26.github.io/Json/pizza.json"; // url jau  jason github wala

// create new xhr  object, xhr objext allows us to fethc data without a page refresh


let request= new XMLHttpRequest();
request.open('GET', requestURL);   
//request type

request.responseType= 'json';
// send the request usingg the send method

request.send();


//  wait for the request to be returned, store the response in a variable , invoke pizza types function with pizza types as argument

request.onload= function(){

    let plentyPizza = request.response;
    console.log(plentyPizza);
    pizzaTypes(plentyPizza);
};

function pizzaTypes(jsonObj){

let pizzaTypes= jsonObj.pizzaTypes;

for(let i=0; i<pizzaTypes.length; i++ ){

    // build html eleements dynamically
let article= document.createElement("article");

let h2= document.createElement("h2");
let image= document.createElement("image");
let p1= document.createElement("p1");
let p2= document.createElement("p2");
let ul= document.createElement("ul");

image.setAttribute('src',''+ pizzaTypes[i].image);
image.setAttribute('alt',pizzaTypes[i].image );

h2.textContent= pizzaTypes[i].name;
p1.textContent= 'Size'+ pizzaTypes[i].size;
p2.textContent= 'price'+ pizzaTypes[i].price;
let toppings= pizzaTypes[i].toppings;
for(let j=0;j<toppings.length;i++){   // loops foor the tooping 
let listitem = document.createElement('li');
listitem.textContent= toppings[j];
ul.appendChild(listitem);
}

article.appendChild(image);
article.appendChild(h2);
article.appendChild(p1);
article.appendChild(p2);
article.appendChild(ul);

section.appendChild(article);

}

}