function convert() {
    let fahrenheit = document.getElementById("fahrenheit").value;
    let celcius = (fahrenheit - 32) / 1.8;
    document.getElementById("display").innerHTML = ` Celcius: ${celcius}`;
}