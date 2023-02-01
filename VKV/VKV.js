let a_input = document.getElementById("a_input")
let b_input = document.getElementById("b_input")
let c_input = document.getElementById("c_input")

output = document.getElementById("outputFormula")
outputD = document.getElementById("outputDiscriminant")
outputX = document.getElementById("outputNulwaarden")

function calculate() {
    let a = a_input.value
    let b = b_input.value
    let c = c_input.value

    output.innerText = a + "x² + " + b + " x + " + c + " = 0"

    let discriminant = b**2 - 4*a*c

    if (discriminant > 0) {
        outputD.innerText = "D: " + discriminant + "\nD>0: 2 nulwaarden"
        x1 = (-b+Math.sqrt(discriminant)/(2*a))
        x2 = (-b-Math.sqrt(discriminant)/(2*a))

        outputX.innerText = "X1: " + x1 + " | X2: " + x2
    } else if (discriminant === 0) {
        outputD.innerText = "D: " + discriminant + "\nD=0: 1 nulwaarde"
        x = (-1*b)/(2*a)
        outputX.innerText = "X: " + x
    } else if (discriminant < 0) {
        outputD.innerText = "D: " + discriminant + "\nD<0: 2 complexe nulwaarden"
        x1 = (-b+Math.sqrt(-1*discriminant)/(2*a))
        x2 = (-b-Math.sqrt(-1*discriminant)/(2*a))

        outputX.innerText = "X1: " + x1 + "i | X2: " + x2 + "i"
    }
}