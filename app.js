const cofee = document.getElementById("cofee");
const tea = document.getElementById("tea");
const dessert = document.getElementById("dessert");

const cofeeFlex = document.querySelectorAll(
  "main article .second_section .changeCartCofee .cofeeFlex"
);
const cofeeRemove = document.querySelectorAll(
  "main article .second_section .changeCartCofee .cofeeRemove"
);

const cofeeDelete1439 = document.querySelectorAll(
  "main article .second_section .changeCartCofee .cofee_delete_1439"
);
const cofeeDelete1089 = document.querySelectorAll(
  "main article .second_section .changeCartCofee .cofee_delete_1089"
);

const teaFlex = document.querySelectorAll(
  "main article .second_section .changeCartTea .teaFlex"
);

const teaRemove = document.querySelectorAll(
  "main article .second_section .changeCartTea .teaRemove"
);

const desRemove = document.querySelectorAll(
  "main article .second_section .changeCartDes .desRemove"
);

const desDelete1439 = document.querySelectorAll(
  "main article .second_section .changeCartDes .des_delete_1439"
);
const desDelete1089 = document.querySelectorAll(
  "main article .second_section .changeCartDes .des_delete_1089"
);

const media1439 = window.matchMedia("(max-width: 1439px)");
const media1089 = window.matchMedia("(max-width: 1089px)");

cofee.addEventListener("click", () => {
  cofeeFlex.forEach((el) => {
    el.style.display = "flex";
  });
  desRemove.forEach((el) => {
    el.style.display = "none";
  });
  teaRemove.forEach((el) => {
    el.style.display = "none";
  });

  cofeeDelete1439.forEach((el) => {
    if (!media1439.matches) el.style.display = "flex";
  });
  cofeeDelete1089.forEach((el) => {
    if (!media1089.matches) el.style.display = "flex";
  });
  desDelete1439.forEach((el) => {
    if (!media1439.matches) el.style.display = "none";
  });
  desDelete1089.forEach((el) => {
    if (!media1089.matches) el.style.display = "none";
  });
});

tea.addEventListener("click", () => {
  cofeeRemove.forEach((el) => {
    el.style.display = "none";
  });
  desRemove.forEach((el) => {
    el.style.display = "none";
  });
  teaRemove.forEach((el) => {
    el.style.display = "flex";
  });

  cofeeDelete1439.forEach((el) => {
    if (!media1439.matches) el.style.display = "none";
  });
  cofeeDelete1089.forEach((el) => {
    if (!media1089.matches) el.style.display = "none";
  });
  desDelete1439.forEach((el) => {
    if (!media1439.matches) el.style.display = "none";
  });
  desDelete1089.forEach((el) => {
    if (!media1089.matches) el.style.display = "none";
  });
});

dessert.addEventListener("click", () => {
  cofeeRemove.forEach((el) => {
    el.style.display = "none";
  });
  desRemove.forEach((el) => {
    el.style.display = "flex";
  });
  teaRemove.forEach((el) => {
    el.style.display = "none";
  });

  cofeeDelete1439.forEach((el) => {
    if (!media1439.matches) el.style.display = "none";
  });
  cofeeDelete1089.forEach((el) => {
    if (!media1089.matches) el.style.display = "none";
  });
  desDelete1439.forEach((el) => {
    if (!media1439.matches) el.style.display = "flex";
  });
  desDelete1089.forEach((el) => {
    if (!media1089.matches) el.style.display = "flex";
  });
});
