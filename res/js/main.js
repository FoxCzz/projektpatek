const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const clickUpgrade = document.getElementById("clickUpgrade");
const autoClickerUpgrade = document.getElementById("autoClickerUpgrade");

let numberOfCookies = 0;
let cookieIncreaseNumber = 1;
let autoclickerCookieIncreaseNumber = 0;
let autoclickerInterval;
let clickUpgradePrice = 50;

//.onclick -  na kliknutí
//()=> arrow funkce
//{} - scope
cookie.onclick = () => {
  //zvednout číslo o 1
  //numberOfCookies = numberOfCookies +1;
  numberOfCookies += cookieIncreaseNumber;
  //numberOfCookiess ++;
  //zobrazit v odstavci
  counter.innerHTML = "Orea:" + numberOfCookies;
};
clickUpgrade.onclick = () => {
if (numberOfCookies >= clickUpgradePrice) {
    //odečíst cenu nakupu
    //numberOfCookies = numberOfCookies - 50
    numberOfCookies -= clickUpgradePrice;
    clickUpgradePrice *=2;
    clickUpgrade.innerHTML = "Buy click upgrade: $
    counter.innerHTML = "Orea:" + numberOfCookies;
    //zvednout klikání o 1
    cookieIncreaseNumber++;
  }
};

autoClickerUpgrade.onclick = () => {
  if (numberOfCookies >= 100) {
    //odečteme cenu
    numberOfCookies -= 100;
    //zobrazíme počet sušeneek
    counter.innerHTML = "Orea:" + numberOfCookies;
    autoclickerCookieIncreaseNumber++;
    //zastavíme bezici interval
    clearInterval(autoclickerInterval);
    //spustíme autoclicker
    autoclickerInterval = setInterval(() => {
      numberOfCookies++;
      counter.innerHTML = "Orea:" + numberOfCookies;
      numberOfCookies += autoclickerCookieIncreaseNumber;
    }, 1000);
  }
};
