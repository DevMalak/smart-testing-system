






var userEmail = prompt("enter email")
var userPassword = prompt("enter password")
var number_of_tries = 0

while (userEmail != "aaa" || userPassword != "123") {

    number_of_tries++

    if (number_of_tries < 3) {
        userEmail = prompt("enter email")
        userPassword = prompt("enter password")
    }
    else {
        alert("you tried  many times")
        break
    }
}

if (userEmail == "aaa" && userPassword == "123") {

    alert("successfully logged in")

    var number_of_questions = +prompt("please enter your number of questions")
    var operations = ["+", "-", "*", "/"]
    var score = 0

    for (var i = 1; i <= number_of_questions; i++) {

        var num1 = Math.floor(Math.random() * 10)
        var num2 = Math.floor(Math.random() * 10) + 1

        var operation = operations[Math.floor(Math.random() * operations.length)]

        var correctAnswer

        if (operation == "+") {
            correctAnswer = num1 + num2
        }
        else if (operation == "-") {
            correctAnswer = num1 - num2
        }
        else if (operation == "*") {
            correctAnswer = num1 * num2
        }
        else {
            correctAnswer = num1 / num2
        }

        var userAnswer = +prompt(num1 + " " + operation + " " + num2 + " = ?")

        if (userAnswer == correctAnswer) {
            alert("Correct ")
            score++
        }
        else {
            alert("Wrong correct answer is: " + correctAnswer)
        }
    }

    alert("Your score is: " + score + " out of " + number_of_questions)
}
