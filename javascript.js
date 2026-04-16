<<<<<<< HEAD
function removeHighlight(element) {
    element.innerHTML = element.innerText;
}

function highlightText(element, searchText) {

    let text = element.innerText;
    let regex = new RegExp("(" + searchText + ")", "gi");

    element.innerHTML = text.replace(regex, "<span class='highlight'>$1</span>");
}

function searchFood() {

    let input = document.getElementById("searchInput").value.toLowerCase().trim();
    let cards = document.querySelectorAll(".food-card,.food-box");
    let noResult = document.getElementById("noResult");

    let found = false;

    cards.forEach(function(card) {

        let h3 = card.querySelector("h3");
        let h5 = card.querySelector("h5");
        let desc = card.querySelector(".desc");

        let h3Text = h3 ? h3.innerText.toLowerCase() : "";
        let h5Text = h5 ? h5.innerText.toLowerCase() : "";
        let descText = desc ? desc.innerText.toLowerCase() : "";

        // Remove old highlight
        if (h3) removeHighlight(h3);
        if (h5) removeHighlight(h5);
        if (desc) removeHighlight(desc);

        if (h3Text.includes(input) || 
            h5Text.includes(input) || 
            descText.includes(input)) {

            card.style.display = "block";
            found = true;

            if (input !== "") {
                if (h3) highlightText(h3, input);
                if (h5) highlightText(h5, input);
                if (desc) highlightText(desc, input);
            }

        } else {

            card.style.display = "none";
        }

    });

    if (!found && input !== "") {
        noResult.style.display = "block";
    } else {
        noResult.style.display = "none";
    }

}


// order button

// let cart = [];
// let total = 0;

// function orderFood(foodName, price) {

//     cart.push(foodName);
//     total += price;

//     alert(foodName + " added to cart!\nTotal Price: ₹" + total);

//     console.log("Items:", cart);
//     console.log("Total:", total);
// }

// // Store ordered items
// let cart = [];

// // Order function
// function orderFood(foodName, price) {

//     // Add item to cart array
//     cart.push({
//         name: foodName,
//         price: price
//     });

//     // Show alert message
//     alert(foodName + " added to cart! Price: ₹" + price);

//     console.log("Cart Items:", cart);
// }

function orderFood(name, price) {

  document.getElementById("orderForm").style.display = "block";

  document.getElementById("foodName").value = name;
  document.getElementById("foodPrice").value = "₹" + price;

}

function closeForm(){
  document.getElementById("orderForm").style.display = "none";
}

function submitOrder(event){
  event.preventDefault();

  let name = document.getElementById("customerName").value;
  let mobile = document.getElementById("mobileNumber").value;
  let address = document.getElementById("address").value;
  let food = document.getElementById("foodName").value;

  alert("Order Placed Successfully!\n\nFood: "+food+"\nName: "+name+"\nMobile: "+mobile+"\nAddress: "+address);

  document.getElementById("orderForm").style.display="none";
}
=======
// function searchFood(){
//   let input = document.getElementById("searchInput").value.toLowerCase();
//   let cards = document.getElementsByClassName("food-card");
//   let found = false;

//   for(let i=0;i<cards.length;i++){
//     let h3 = cards[i].getElementsByTagName("h3")[0].innerText.toLowerCase();
//     let h5 = cards[i].getElementsByTagName("h5")[0].innerText.toLowerCase();

//     if(h3.includes(input) || h5.includes(input)){
//       cards[i].style.display = "block";
//       found = true;
//     }else{
//       cards[i].style.display = "none";
//     }
//   }

//   document.getElementById("noResult").style.display = found ? "none" : "block";
// }

// function goFood(id,name,state,price){
//   window.location.href =
//     "food.html?id="+id+
//     "&name="+encodeURIComponent(name)+
//     "&state="+encodeURIComponent(state)+
//     "&price="+encodeURIComponent(price);
// }


// food search


function searchFood() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let cards = document.querySelectorAll(".food-card");

  cards.forEach(card => {
    let title = card.querySelector("h3").innerText.toLowerCase();
    card.style.display = title.includes(input) ? "block" : "none";

    // click → go page
    card.onclick = () => {
      window.location.href = card.getAttribute("data-link");
    };
  });
}




// function searchAndGo() {
//   let value = document.getElementById("searchInput").value.toLowerCase();

//   const foodPages = {
//     "biryani": "biriyani.html",
//     "appam": "appam.html",
//     "dosa": "dosa.html"
//   };

//   if (foodPages[value]) {
//     window.location.href = foodPages[value];
//   } else {
//     alert("Food not available");
//   }
// }



function searchAndRedirect(event) {
  if (event.key === "Enter") {
    let value = document.getElementById("searchInput").value
      .toLowerCase()
      .trim();

    const foodPages = {
      // Tamil Nadu
      "idli": "idli.html",
      "dosa": "dosa.html",
      "pongal": "pongal.html",

      // Kerala
      "appam": "appam.html",
      "puttu": "puttu.html",
      "sadya": "sadya.html",

      // Karnataka
      "bisi bele bath": "bisi-bele-bath.html",
      "mysore pak": "mysore-pak.html",

      // Telangana
      "hyderabadi biryani": "hyderabadi-biryani.html",

      // Andhra Pradesh
      "gongura pachadi": "gongura.html",

      // Gujarat
      "dhokla": "dhokla.html",

      // Maharashtra
      "vada pav": "vada-pav.html",

      // Punjab
      "butter chicken": "butter-chicken.html",

      // West Bengal
      "rasgulla": "rasgulla.html",

      // Rajasthan
      "dal baati churma": "dal-baati.html"
    };

    if (foodPages[value]) {
      window.location.href = foodPages[value];
    } else {
      alert("Food not found 😕");
    }
  }
}


>>>>>>> 8ce155a904fff794caac6924a3d0fdb0b4d8e83a
