const inputField1 = document.querySelector(".text");
const inputField2 = document.querySelector("#text");
const value = inputField1.value;
console.log(value);

console.log(typeof inputField1);

const userChoice = Array.from(document.querySelectorAll(".five"));
console.log(userChoice);
console.log(inputField1.value, inputField2.value);
userChoice.forEach((value) => {
  value.addEventListener("click", function (e) {
    const targetNum = e.target.childNodes[0].textContent;
    const input1 = document.querySelector(".text").value;
    const input2 = document.querySelector("#text").value;
    const change = parseInt(input2);
    console.log(input2);
    console.log(typeof change);
    const convert = parseInt(input1);
    console.log(input1);
    console.log(typeof convert);
    const num = parseInt(targetNum);
    console.log(num);

    if (convert && num && change) {
      const result = (convert * num) / 100 / change;
      const tipValue = document.querySelector(".tip-value");
      tipValue.textContent = `$${result.toFixed(2)}`;
      console.log(result);
      const result2 = convert / change + result;
      const final = result2.toFixed(2);
      console.log(result2);
      const totalValue = document.querySelector(".total-value");
      totalValue.textContent = `$${final}`;
    }

    const warning = document.querySelector(".warning");
    if (!convert) {
      warning.textContent = "This field cannot be empty";

      warningMsg();
      console.log(warning);
    }
    if (!change) {
      const warning2 = document.querySelector(".warn");
      warning2.textContent = "This field cannot be empty";
      warningMsg();
    }
  });
});

function calculateTip() {}
calculateTip();
const warningMsg = function () {
  const warning1 = document.querySelector(".warning");
  const warning2 = document.querySelector(".warn");
  setTimeout(() => {
    warning1.textContent = "";
    warning2.textContent = "";
  }, 1000);
};

const reset = document.querySelector(".reset");
reset.addEventListener("click", function () {
  let text = document.querySelector('.text').value= '';
  let textid = document.getElementById('text').value = '';
  let tipclear = document.querySelector('.tip-value').textContent= `$${0.00}`;
  let totalclear = document.querySelector('.total-value').textContent = `$${0.00}`;
 
 

  console.log("hi");
});
