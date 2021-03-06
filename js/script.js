$(document).ready(function () {
  $("#type").click(function () {
    $("#size").slideDown(800);
  })
  $("#size").click(function () {
    $("#crust").slideDown(800);
  })
  $("#crust").click(function () {
    $("#toppings").slideDown(800);
  })
  $("#toppings").click(function () {
    $("#mode").slideDown(800);
  })
  $("#mode").click(function () {
    $("#button").slideDown(800);
  })
});


//front-end
class Total {
  constructor(sizeCost, crust, toppings, delivery) {
    this.sizeCost = sizeCost;
    this.crust = crust;
    this.toppings = toppings;
    this.delivery = delivery;
    this.toppings = toppings;
  }
  totalCost() {
    return ((this.sizeCost + this.crust + this.toppings + this.delivery) * number);
  }
}
function toppings(){
 var number = 0;
 number = toppings;

 return (toppings * 50);
}

