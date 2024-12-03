blokada = false;
var ok;
function test1() {
    ok = window.open("", "Moje Okno", "width=500,height=500");
    ok.document.body.style.backgroundSize = "cover";
    ok.document.body.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1232238946390511666/1309881591904075857/IMG_2293.png?ex=675060cb&is=674f0f4b&hm=c5ebe32b18a8d68ed2592de7272980ced9d3080e8c2ed6e1a0b5b2cb1b2f1328&')";
    ok.document.body.style.backgroundPosition = "center"; // Wycentrowanie obrazu
    zmienRozmiarOkna();

}
function zmienRozmiarOkna() {
    if (blokada == false) 
    {
        blokada = true;
        // Generowanie losowej szerokości i wysokości
        var szerokosc = Math.floor(Math.random() * (window.screen.availWidth / 2)) + 100; // losowa szerokość od 100 do połowy szerokości ekranu
        var wysokosc = Math.floor(Math.random() * (window.screen.availHeight / 2)) + 100; // losowa wysokość od 100 do połowy wysokości ekranu

        // Ustawianie nowych wymiarów okna
        ok.resizeTo(szerokosc, wysokosc);
        let x = Math.floor(Math.random() * (window.screen.availWidth - 400)); // Losowa pozycja X
        let y = Math.floor(Math.random() * (window.screen.availHeight - 300)); // Losowa pozycja Y
        ok.moveTo(x, y); // Przesunięcie okna
        zwolnijBlokade();
    }
}
function zwolnijBlokade() 
{
setTimeout(() => {
    blokada = false;
    zmienRozmiarOkna();
}, 100);
}