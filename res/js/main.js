const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");

let numberOfCookies = 0;

//.onclick -  na kliknutí 
//()=> arrow funkce 
//{} - scope
cookie.onclick = () => {
    //zvednout číslo o 1 
    //numberOfCookies = numberOfCookies +1;
    numberOfCookies +=1;
    //numberOfCookiess ++;
    //zobrazit v odstavci 
    counter.innerText = "Orea:"+ numberOfCookies;
}