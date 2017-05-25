class Confections {
  constructor(name, physique, temperature){
    this.name = name;
    this.physique = physique;
    this.temperature = temperature;
  }
  whatKind(){
    console.log("Yum! I am " + this.name);
  }
}

class Cake extends Confections{
  constructor(name, physique, temperature, layers){
    super(name, physique, temperature);
    this.frosting = "have frosting";
    this.layers = layers;
  }
  whySpecial(){
    console.log("I ", this.frosting);
  }
}

class Danish extends Confections{
  constructor(name, physique, temperature, filling, flavor, price, levelOfDanish){
    super(name, physique, temperature);
    this.filling = filling;
    this.flavor = flavor;
    this.price = price;
    this.levelOfDanish = true;
  }
  whatKindDanish(){
    console.log("I am a " + this.flavor + " danish");
  }

}

var slcc = new Cake("Seven Layer Chocolate Cake", "chocolatey & moist", "molten", "7");

var DutchCheese = new Danish("The Dutch Cheese of Sean", "long", "mildly warm", "thick cheese", "sweet", "$3.45 and affordable");
// console.log(slcc);
console.log(DutchCheese);
// slcc.whySpecial();
// slcc.whatKind();
DutchCheese.whatKindDanish();

/*
//function Dessert(name,  physique, temperature){
 this.name = name;
 this.physique =physique;
 this.temperature = temperature;
}

Dessert.prototype.whatKind = function(){
 console.log("Yum! I am " + this.name);
};

Dessert.prototype.howCold = function(){
 console.log("This dessert is " + this.temperature);
};

Dessert.prototype.whatPhysique = function(){
 console.log("My physique is...."+ this.physique);
};

function Cake(name, physique, temperature){
 this.name = name;
 this.physique = physique;
 this.temperature = temperature;
}

Cake.prototype = new Dessert();


function Gelato(name, physique, temperature){
 this.name = name;
 this.physique = physique;
 this.temperature = temperature;
}

Gelato.prototype = new Dessert();


function Pie(name, physique, temperature){
 this.name = name;
 this.physique = physique;
 this.temperature = temperature;
}

Pie.prototype = new Dessert();


var tresLeches = new Cake('Tres Leches', 'Cream, brown on the inside, chocolate on inner inside', 'around 12 degrees');
var pistachioGelato = new Gelato('Pistachio Gelato', 'Green and nutty', 'pretty cold');
var strawberryrhubarb = new Pie('Strawberry Rhubarb', 'squishy, circular, rhubarbish', 'mildly warm' );

tresLeches.whatKind();
tresLeches.howCold();
tresLeches.whatPhysique();

pistachioGelato.whatKind();
pistachioGelato.howCold();
pistachioGelato.whatPhysique();

strawberryrhubarb.whatKind();
strawberryrhubarb.howCold();
strawberryrhubarb.whatPhysique();
*/
