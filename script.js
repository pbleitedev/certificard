const mudaTema = () => {
  document.body.classList.toggle("dark");
};

const exibir = (id) => {
  const display = document.getElementById(id).style.display;
  if (display === "inline") {
    document.getElementById(id).style.display = "none";
  } else {
    document.getElementById(id).style.display = "inline";
  }
};