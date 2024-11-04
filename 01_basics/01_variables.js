const accountId = 144553;
let accountEmail = "upasana@google.com";
var accountPassword = "12345";
accountCity = "jaipur";

let accountState;
// accontId = 2 // not allowed because the value of const cannot be changed

/* preferred not to use var 
   because of issue in block scope & functional scope
*/

accountEmail = "hc@hc.com";
accountPassword = "21212121";
accountCity = "Bnegluru";

console.table([accountId , accountEmail , accountPassword , accountCity , accountState]);