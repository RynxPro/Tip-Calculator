let Calculate = document.getElementById("calculate");

Calculate.addEventListener("click", function () {
  let userBill = document.getElementById("Bill").value;
  let userTipper = document.getElementById("Percent").value;
  console.log(typeof userBill);
  console.log(typeof userTipper);

  let tipPercentage = userBill * (userTipper / 100);
  let total = parseInt(userBill) + parseInt(tipPercentage);
  document.getElementById("Total").innerHTML = total;
});
