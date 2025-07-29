// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

switch (month){
    case "jan":
        console.log("january");
        break;

    case "feb":
        console.log("feb");
        break;
        
    case "march":
            console.log("march");
            break;                         //if we don't use break after a condition then all the condition after the matched case will be execute till default statement

    case "april":
        console.log("april");
        break;
        
    // their is a default case like else -> which will execute when no condition is true
    default:
        console.log("default case match");
        break;
        
}