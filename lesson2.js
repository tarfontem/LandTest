const prompt = require("prompt-sync")({sigint:true});
switch(prompt("What is the weather of today?")) {
    case "rainy":
        console.log("Remember to take an umbrella along");
        break;
    case "windy":
        console.log("Remember protective equipement");
        break;
    case "sunny":
        console.log("dress lightly");
        break;
    case "cloudy":
        console.log("Go outside");
        break;
    default:
        console.log("Unknown weather type");
        break;
    
}