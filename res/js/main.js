const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const clickUpgrade = document.getElementById("clickUpgrade");
const autoUpgrade = document.getElementById("autoUpgrade");

let numberOfCookies = 0;
let CookieIcreaseNumber = 1;
let autoClickerIcreasNumber = 0;
let autoUpgradeInterval;
let clickUpgradePrice = 50;
let autoUpgradePrice= 100;
let coinLevel = 1;
//arrow funkce () =>
//scope {}
cookie.onclick = () => {
  //zvednout číslo o jedna
  //numberOfCookies = numberOfCookies + 1
  //numberOfCookies=+; přičtu x
  //numberOfCookies++; přičtu jen o jedna
  numberOfCookies += CookieIcreaseNumber;
  counter.innerHTML = "Cookies:" + numberOfCookies;
  //zobrazit v odstavci
};

clickUpgrade.onclick = () => {
  if (numberOfCookies >= clickUpgradePrice) {
    // odečíst cenu nakupu
    numberOfCookies -= clickUpgradePrice;
    counter.innerHTML ="Cookies:" + numberOfCookies;
    //zvednout  klikání o jedna
    CookieIcreaseNumber++;
    clickUpgradePrice *= 2;
    clickUpgrade.innerHTML = `Buy click upgrade: ${clickUpgradePrice}`;
    coinLevel += 1;
  }

  }

  autoClickerUpgrade.onclick = () => {
    if (numberOfCookies >= autoUpgradePrice) {
      numberOfCookies -= autoUpgradePrice;
      autoUpgradePrice *= 2;
      counter.innerHTML = "Cookies:" + numberOfCookies;
      autoClickerUpgrade.innerHTML = `Buy autoclicker: ${autoUpgradePrice}`;
      autoClickerIcreasNumber++;
      //zastavíse běžící iterval
      clearInterval(autoUpgradeInterval);
      // 1000 se rovná jedné vteřine (1s)
      setInterval(() => {
        numberOfCookies += autoClickerIcreasNumber;
        counter.innerHTML = "Cookies:" + numberOfCookies;
      }, 1000);
    }
  };
