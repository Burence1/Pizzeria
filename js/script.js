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
    $("#button").slideDown(800);
  })
});


//business interface
function Pizza(toppings, size, crust) {
  this.toppings = toppings;
  this.size = size;
  this.crust = crust;
  this.quantity = quantity;
}

Pizza.prototype.calcToppings = function () {
  if (this.toppings.length != 0) {
    var toppingCost = this.toppings.length * 150;
    return toppingCost;
  } else
    alert("select Fav Topping(s)")
}

Pizza.prototype.pSize = function () {
  if (this.size === "Small") {
    return 550;
  } else if (this.size === "Regular") {
    return 650;
  } else if (this.size === "Large") {
    return 900;
  } else
    alert("Go ahead and select size of choice");
}

Pizza.prototype.selectCrust = function () {
  if (this.crust === "Thick") {
    return 250
  } else if (this.crust === "Thin") {
    return 200
  } else if (this.crust === "Crispy") {
    return 100
  } else
    alert("C'mon select some crust")
}
let grandCost;
Pizza.prototype.totalCost = function (calcToppings, pSize, selectCrust) {
  grandCost = calcToppings + pSize + selectCrust;
  $("#displayTotalCost").html(grandCost);
  ;
}

//user interface

//calculation of total pizza price
var pizza, pizzaQuantity;
$(document).ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();
    $("#cost").show();
    var type = $("#pizza option:selected").val();
    var checkedSize = $("input:radio[name=sizePizza]:checked").val();
    var checkedCrust = $("input:radio[name=crustPizza]:checked").val();
    var quantity = parseInt($("#quantity").val());
    var checkedToppings = [];
    var pizzaQuantity = grandCost * quantity;
    $("input:checkbox[name=toppings]:checked").each(function () {
      checkedToppings.push($(this).val());
    });
    

    $("#displaySize").text(checkedSize);
    $("#displayCrust").text(checkedCrust);
    $("#displayName").text(type);
    $("#displayToppings").text(checkedToppings);
    $("#displayQuantity").text(pizzaQuantity);

    pizza = new Pizza(checkedToppings, checkedSize, checkedCrust);

    var calcToppings = pizza.calcToppings();
    var pSize = pizza.pSize();
    var selectCrust = pizza.selectCrust();
    pizza.totalCost(pSize, calcToppings, selectCrust);
    console.log(pizza);
  });
});

//pickup option
$("#pickup").click(function () {
  alert("Your Pizza will be ready in less than an hour. Your bil stands at Kshs. " + grandCost);
});

//delivery option
$("#submit").click(function () {
  var Name = $("#name").val();
  var location = $("#location").val();
  var Telephone = $("#number").val();
  var finalDeliveryTotal = grandCost + 200;
  if (Name == "" || location == "" || Telephone == "") {
    alert("Enter Contact details")
  } else {
    alert("Thank you " + Name + "for letting us serve you, your pizza will be delivered to " + location + " in less than an hour." + "Your bill amounts to Kshs." + finalDeliveryTotal);
  }
});
