const selects = document.querySelectorAll("select");
const btn = document.querySelector("#submit");
const output = document.querySelector("#output");
const resultSpan = document.querySelector(".result span");

output.style.display = "none";


btn.addEventListener("click", () => {
  let inputStr = "";

  selects.forEach((el) => {
    inputStr += el.value;
  });

  const inputArr = inputStr.split("");

  let [a, b, c, ] = inputArr;

  a = Number(a);
  b = Number(b);
  c = Number(c);

  if (!(a===1 && (b===1 || c===1))) {
    resultSpan.textContent = "Valid";
    output.style.display = "inline-block";
  } else {
    output.style.display = "inline-block";
    resultSpan.textContent = "Invalid";
  }
});