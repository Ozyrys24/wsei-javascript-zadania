let foods = [];

class Food {
  constructor(name, protein, carbs, fat) {
    this.name = name;
    this.protein = protein;
    this.carbs = carbs;
    this.fat = fat;
  }
  print() { console.log(this.constructor.name+" name: "+this.name+", proteins: "+this.protein+", carbs: "+this.carbs+", fat: "+this.fat)}
}
console.log("Zadanie 06:");

const nameInput = document.getElementById("name");
const proteinInput = document.getElementById("proteins");
const carbsInput = document.getElementById("carbs");
const fatInput = document.getElementById("fat");
const products = document.getElementById("products");

document.getElementById("add").addEventListener("click", () => {
  if(isNaN(proteinInput.value) || isNaN(carbsInput.value) || isNaN(fatInput.value)) {
    alert("Enter numbers!");
    return;
  }
  const sum = proteinInput.value*4 + carbsInput.value*4 + fatInput.value*9;
  //add element to list
  let product = document.createElement("ul");
  
  let productName = document.createElement("li");
  productName.innerHTML = nameInput.value;
  product.appendChild(productName);
  let productProtein = document.createElement("li");
  productProtein.innerHTML = proteinInput.value;
  product.appendChild(productProtein);
  let productCarbs = document.createElement("li");
  productCarbs.innerHTML = carbsInput.value;
  product.appendChild(productCarbs);
  let productFat = document.createElement("li");
  productFat.innerHTML = fatInput.value;
  product.appendChild(productFat);

  products.appendChild(product);
  //create object
  let Prod;
  if(sum>=250) {
    class FastFood extends Food { };
    Prod = new FastFood(nameInput.value, proteinInput.value, carbsInput.value, fatInput.value);
    foods.push(Prod);
  } else {
    class FatFreeFood extends Food { };
    Prod = new FatFreeFood(nameInput.value, proteinInput.value, carbsInput.value, fatInput.value);
    foods.push(Prod);
  }
  for(let i=0; i<foods.length; i++)
    foods[i].print();
})
