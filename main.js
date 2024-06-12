document.addEventListener("DOMContentLoaded", () => {
  const openMenu = document.getElementById("openMenu");
  const closeMenu = document.getElementById("closeMenu");
  const navBar = document.getElementById("nav-bar");
  const navLinks = document.querySelectorAll(".nav-items");

  openMenu.addEventListener("click", () => {
    navBar.style.display = "flex";
  });

  closeMenu.addEventListener("click", () => {
    navBar.style.display = "none";
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      link.classList.toggle("active");
      if (window.innerWidth <= 800) {
        navBar.style.display = "none";
      }
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 800) {
      navBar.style.display = "flex";
    }
  });

  const cards = document.querySelectorAll(".card");
  
  const card1 = document.getElementById("card-1");
  const card2 = document.getElementById("card-2");
  const card3 = document.getElementById("card-3");
  const card4 = document.getElementById("card-4");

  cards.forEach((card) => {
      card.classList.add("row-2");
    })

    
    if (window.innerWidth > 800) {
    // card 1
    card1.addEventListener("mouseover", () => {
      card4.classList.remove("row-2");
      card4.querySelector("img").style.visibility = "hidden";
      card1.querySelector(".paragraph").style.visibility = "visible";
      card1.classList.add("row-3");
    })
    card1.addEventListener("mouseout", () => {
      card4.classList.add("row-2")
      card4.querySelector("img").style.visibility = "visible";
      card1.classList.remove("row-3");
      card1.querySelector(".paragraph").style.visibility = "hidden";
    })

    // card 2
    card2.addEventListener("mouseover", () => {
      card4.classList.remove("row-2");
      card4.querySelector("img").style.visibility = "hidden";
      card2.classList.add("row-3");
      card2.querySelector(".paragraph").style.visibility = "visible";
    })
    card2.addEventListener("mouseout", () => {
      card4.classList.add("row-2")
      card4.querySelector("img").style.visibility = "visible";
      card2.classList.remove("row-3");
      card2.querySelector(".paragraph").style.visibility = "hidden";
    })

    // card 3
    card3.addEventListener("mouseover", () => {
      card1.classList.remove("row-2");
      card1.querySelector("img").style.visibility = "hidden";
      card3.classList.add("row-3");
      card3.querySelector(".paragraph").style.visibility = "visible";
    })
    card3.addEventListener("mouseout", () => {
      card1.classList.add("row-2")
      card1.querySelector("img").style.visibility = "visible";
      card3.classList.remove("row-3");
      card33.querySelector(".paragraph").style.visibility = "hidden";
    })

    // card 4
    card4.addEventListener("mouseover", () => {
      card2.classList.remove("row-2");
      card2.querySelector("img").style.visibility = "hidden";
      card3.classList.add("row-3");
      card3.querySelector(".paragraph").style.visibility = "visible";
    })
    card4.addEventListener("mouseout", () => {
      card3.classList.remove("row-3");
      card2.classList.add("row-2")
      card2.querySelector("img").style.visibility = "visible";
      card3.querySelector(".paragraph").style.visibility = "hidden";
    })

  }

  window.addEventListener("resize", () => {    
    if (window.innerWidth > 640) {
    // card 1
    card1.addEventListener("mouseover", () => {
      card4.classList.remove("row-2");
      card4.querySelector("img").style.visibility = "hidden";
      card1.querySelector(".paragraph").style.visibility = "visible";
      card1.classList.add("row-3");
    })
    card1.addEventListener("mouseout", () => {
      card4.classList.add("row-2")
      card4.querySelector("img").style.visibility = "visible";
      card1.classList.remove("row-3");
      card1.querySelector(".paragraph").style.visibility = "hidden";
    })

    // card 2
    card2.addEventListener("mouseover", () => {
      card4.classList.remove("row-2");
      card4.querySelector("img").style.visibility = "hidden";
      card2.classList.add("row-3");
      card2.querySelector(".paragraph").style.visibility = "visible";
    })
    card2.addEventListener("mouseout", () => {
      card4.classList.add("row-2")
      card4.querySelector("img").style.visibility = "visible";
      card2.classList.remove("row-3");
      card2.querySelector(".paragraph").style.visibility = "hidden";
    })

    // card 3
    card3.addEventListener("mouseover", () => {
      card1.classList.remove("row-2");
      card1.querySelector("img").style.visibility = "hidden";
      card3.classList.add("row-3");
      card3.querySelector(".paragraph").style.visibility = "visible";
    })
    card3.addEventListener("mouseout", () => {
      card1.classList.add("row-2")
      card1.querySelector("img").style.visibility = "visible";
      card3.classList.remove("row-3");
      card33.querySelector(".paragraph").style.visibility = "hidden";
    })

    // card 4
    card4.addEventListener("mouseover", () => {
      card2.classList.remove("row-2");
      card2.querySelector("img").style.visibility = "hidden";
      card3.classList.add("row-3");
      card3.querySelector(".paragraph").style.visibility = "visible";
    })
    card4.addEventListener("mouseout", () => {
      card3.classList.remove("row-3");
      card2.classList.add("row-2")
      card2.querySelector("img").style.visibility = "visible";
      card3.querySelector(".paragraph").style.visibility = "hidden";
    })

  }
console.log("window resize, please refresh page")

})


  }


  // cards.forEach((card) => {
  //   card.classList.add("row-2");
    

  //   // card.addEventListener("mouseover", () => {
  //   //   const cardId = card.id.split("-")[1];
  //   //   let oppositeCardId;

  //   //   if (cardId === "1") {
  //   //     oppositeCardId = "4";
  //   //   } else if (cardId === "2") {
  //   //     oppositeCardId = "4";
  //   //   } else if (cardId === "3") {
  //   //     oppositeCardId = "1";
  //   //   }else if (cardId === "4") {
  //   //     oppositeCardId = "4";
  //   //   }

  //   //   const oppositeCard = document.getElementById(`card-${oppositeCardId}`);

  //   //   card.classList.add("row-3");
  //   //   card.classList.remove("row-2");
  //   //   card.querySelector(".paragraph").style.visibility = "visible";

  //   //   oppositeCard.classList.add("row-1");
  //   //   oppositeCard.classList.remove("row-2");
  //   //   oppositeCard.querySelector("img").style.visibility = "hidden";
  //   // });
    
    
    
    
  //   // mouse out
  //   // card.addEventListener("mouseout", () => {
  //   //   const cardId = card.id.split("-")[1];
  //   //   let oppositeCardId;

  //   //   if (cardId === "1") {
  //   //     oppositeCardId = "4";
  //   //   } else if (cardId === "2") {
  //   //     oppositeCardId = "4";
  //   //   } else if (cardId === "4") {
  //   //     oppositeCardId = "4";
  //   //   } else if (cardId === "3") {
  //   //     oppositeCardId = "1";
  //   //   }

  //   //   const oppositeCard = document.getElementById(`card-${oppositeCardId}`);

  //   //   card.classList.remove("row-3");
  //   //   card.classList.add("row-2");
  //   //   card.querySelector(".paragraph").style.visibility = "hidden";

  //   //   oppositeCard.classList.remove("row-1");
  //   //   oppositeCard.classList.add("row-2");
  //   //   oppositeCard.querySelector("img").style.visibility = "visible";
  //   // });
  // });

);
