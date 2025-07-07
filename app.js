const cofee = document.getElementById("cofee");
const tea = document.getElementById("tea");
const dessert = document.getElementById("dessert");
const butRet = document.querySelector(".return");
const cartCofee = document.querySelector(
  "main article .second_section .changeCartCofee"
);
const cartTea = document.querySelector(
  "main article .second_section .changeCartTea"
);
const cartDes = document.querySelector(
  "main article .second_section .changeCartDes"
);
const del1439 = document.querySelectorAll(
  "main article .second_section .changeCartCofee .cofee_delete_1439"
);
const del1089 = document.querySelectorAll(
  "main article .second_section .changeCartCofee .cofee_delete_1089"
);
const desDelete1439 = document.querySelectorAll(
  "main article .second_section .changeCartDes .des_delete_1439"
);
const desDelete1089 = document.querySelectorAll(
  "main article .second_section .changeCartDes .des_delete_1089"
);

const media1439 = window.matchMedia("(max-width: 1439px)");
const media1089 = window.matchMedia("(max-width: 1089px)");
const media739 = window.matchMedia("(max-width: 739px)");

cofee.addEventListener("click", () => {
  cartCofee.style.display = "flex";
  cartTea.style.display = "none";
  cartDes.style.display = "none";
});

tea.addEventListener("click", () => {
  cartCofee.style.display = "none";
  cartTea.style.display = "flex";
  cartDes.style.display = "none";
});

dessert.addEventListener("click", () => {
  cartCofee.style.display = "none";
  cartTea.style.display = "none";
  cartDes.style.display = "flex";
});

butRet.addEventListener("click", () => {
  del1089.forEach((el) => {
    el.style.display = "flex";
  });
  del1439.forEach((el) => {
    el.style.display = "flex";
  });
  desDelete1439.forEach((el) => {
    el.style.display = "flex";
  });
  desDelete1089.forEach((el) => {
    el.style.display = "flex";
  });
  butRet.style.display = "none";
});

media739.addEventListener("change", (event) => {
  if (!event.matches) butRet.style.display = "none";
  else butRet.style.display = "flex";
});

media1089.addEventListener("change", (event) => {
  if (event.matches) {
    del1089.forEach((el) => {
      el.style.display = "none";
    });
    desDelete1089.forEach((el) => {
      el.style.display = "none";
    });
  } else {
    del1089.forEach((el) => {
      el.style.display = "flex";
    });
    desDelete1089.forEach((el) => {
      el.style.display = "flex";
    });
  }
});
media1439.addEventListener("change", (event) => {
  if (event.matches) {
    del1439.forEach((el) => {
      el.style.display = "none";
    });
    desDelete1439.forEach((el) => {
      el.style.display = "none";
    });
  } else {
    del1439.forEach((el) => {
      el.style.display = "flex";
    });
    desDelete1439.forEach((el) => {
      el.style.display = "flex";
    });
  }
});
