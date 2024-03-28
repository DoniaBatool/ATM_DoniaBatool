import inquirer from "inquirer";
let myBalance = 90000;
let pinCode = 3139;
let isAvailable = true;
let response1 = await inquirer.prompt({
    name: "myPin",
    type: "number",
    message: "\nEnter your pin code:"
});
if (response1.myPin === pinCode) {
    console.log("Pincode Accepted");
    while (isAvailable) {
        let response2 = await inquirer.prompt({
            name: "selectOpt",
            type: "list",
            message: "Select an Option Please: ",
            choices: ["Withdraw", "Fast Cash", "Check Balance", "Exit"]
        });
        if (response2.selectOpt === "Withdraw") {
            let response3 = await inquirer.prompt({
                name: "withdrawAmount",
                type: "number",
                message: "How much cash would you like to withdraw?"
            });
            if (response3.withdrawAmount > myBalance) {
                console.log("Insufficient Balance!");
            }
            else {
                console.log(`You have withdrawn $ ${response3.withdrawAmount}\n Your remaining balance is ${myBalance -= response3.withdrawAmount}`);
            }
        }
        else if (response2.selectOpt === "Fast Cash") {
            let response4 = await inquirer.prompt({
                name: "fastOption",
                type: "list",
                message: "Select an option for Fast Cash:",
                choices: ["5000", "10000", "15000", "20000"]
            });
            console.log(`You have withdrawn $ ${response4.fastOption}\n Your remaining balance is ${myBalance -= response4.fastOption}`);
        }
        else if (response2.selectOpt === "Check Balance") {
            console.log(`Your  Current Balance is ${myBalance}`);
        }
        else if (response2.selectOpt === "Exit") {
            console.log(`Thankyou for using the ATM.\nGoodBye!`);
            isAvailable = false;
        }
    }
}
else {
    console.log("Enter a valid Pin Code Please");
}
