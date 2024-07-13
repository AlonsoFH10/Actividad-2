let num = 75;
switch (true) {
    case (num >= 90 && num <= 100):
        console.log("excelente");
        break;
    case (num >= 80 && num <= 89):
        console.log("muy bien");
        break;                                     
    case (num >= 70 && num <= 79):
        console.log("esfuerzate un poco mas");
        break;
    case (num >= 60 && num <= 69):
        console.log("pues masomenos");
        break;
    default:
        console.log("f");
}

