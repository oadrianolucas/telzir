const $menu = document.querySelector(".menu-content");
const $menuButton = document.querySelector(".menu-button");

$menuButton.addEventListener("click", () => {
  $menu.classList.toggle("hidden");
});

const $popup = document.querySelector(".popup");
const $popupButton = document.querySelector(".popup-button");
const $popupClose = document.querySelector(".popup-close");

$popupButton.addEventListener("click", () => {
  $popup.classList.toggle("hidden");
});

$popupClose.addEventListener("click", () => {
  $popup.classList.toggle("hidden");
});

var minutePrice = [
  {
    origin: "11",
    destiny: "16",
    value: "1.9",
    status: "valid",
  },
  {
    origin: "11",
    destiny: "17",
    value: "1.7",
    status: "valid",
  },
  {
    origin: "11",
    destiny: "18",
    value: "0.9",
    status: "valid",
  },
  {
    origin: "16",
    destiny: "11",
    value: "2.9",
    status: "valid",
  },
  {
    origin: "16",
    destiny: "17",
    value: "0",
    status: "invalid",
  },
  {
    origin: "16",
    destiny: "18",
    value: "0",
    status: "invalid",
  },
  {
    origin: "17",
    destiny: "11",
    value: "2.7",
    status: "valid",
  },
  {
    origin: "17",
    destiny: "16",
    value: "0",
    status: "invalid",
  },
  {
    origin: "17",
    destiny: "18",
    value: "0",
    status: "invalid",
  },
  {
    origin: "18",
    destiny: "11",
    value: "1.9",
    status: "valid",
  },
  {
    origin: "18",
    destiny: "16",
    value: "0",
    status: "invalid",
  },
  {
    origin: "18",
    destiny: "17",
    value: "0",
    status: "invalid",
  },
];
const $calculatorButton = document.querySelector("#btn-calculators");
const $tableCalcultor = document.querySelector("#table-calcultor");
const $calculator = document.querySelector("#calculator");
const td = document.createElement("td");

const calculatorCall = (event) => {
  event.preventDefault();
  const $plan = document.querySelector("#plan").value.trim();
  const $origin = document.querySelector("#origin").value.trim();
  const $destiny = document.querySelector("#destiny").value.trim();
  const $minute = document.querySelector("#minute").value.trim();
  if ($origin == $destiny) {
    alert("Only valid for different DDDs calls.");
  } else if ($minute <= 0) {
    alert(
      "the 'minutes' field cannot be blank or have a value less than or equal to 0"
    );
  } else {
    $calculatorButton.addEventListener("click", () => {
      document.getElementById("result-calculator").style.display = "block";
    });
    const $tax = minutePrice.filter((data) => {
      return $origin == data.origin && data.destiny == $destiny;
    })[0].value;
    const $exceedMinute = $minute - $plan;
    const $without = $minute * $tax;
    const $with = $exceedMinute * $tax;
    const $result = $with + $with * 0.1;

    if ($tax <= "0") {
      alert(
        "This type of action is unavailable for now" +
          "\n" +
          "Come back soon for new opportunities."
      );
    } else {
      if ($exceedMinute <= 0) {
        const $resultExcced = 0.0;
        document.getElementById("planResult").textContent = $plan;
        document.getElementById("originResult").textContent = $origin;
        document.getElementById("destinyResult").textContent = $destiny;
        document.getElementById("minuteResult").textContent = $minute;
        document.getElementById("result").textContent =
          $resultExcced.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          });
        document.getElementById("without").textContent =
          $without.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          });
      } else {
        document.getElementById("planResult").textContent = $plan;
        document.getElementById("originResult").textContent = $origin;
        document.getElementById("destinyResult").textContent = $destiny;
        document.getElementById("minuteResult").textContent = $minute;
        document.getElementById("result").textContent = $result.toLocaleString(
          "en-US",
          { style: "currency", currency: "USD" }
        );
        document.getElementById("without").textContent =
          $without.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          });
      }
    }
  }
};
$calculator.addEventListener("submit", calculatorCall);
