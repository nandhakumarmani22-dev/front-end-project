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


