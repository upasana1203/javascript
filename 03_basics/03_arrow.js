const user = {
    username : "shiv",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()

// user.username = "sam"
// user.welcomeMessage()

console.log(this);  //-->this will give an empty object , but if we run this line in browser it will give window
