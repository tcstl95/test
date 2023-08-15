document.addEventListener("DOMContentLoaded", function() {
    const contactButton = document.getElementById("contact-button");
      contactButton.addEventListener("click", function() {
        const num = parseInt(prompt("Enter a number: "));
     if (num % 3 === 0 && num % 5 === 0) {
            console.log("fizzbuzz");
        } else if (num % 5 === 0) {
            console.log("buzz");
        } else if (num % 3 === 0) {
            console.log("fizz");
        } else {
            console.log(num);
        }
    });
});
    
