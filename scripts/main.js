// Author: Chad Bell
// Final Project -- Translator API
// 10-17-22

function calculateDeterminant() {
    let a = document.getElementById("input1").value;
    let b = document.getElementById("input2").value;
    let c = document.getElementById("input3").value;
    let d = document.getElementById("input4").value;

    let determinant = parseInt(a)*parseInt(d) - parseInt(b)*parseInt(c);

    clearDeterminant();
    document.getElementById("determinant").textContent += determinant;

    if (determinant == 0){
        document.getElementById("determinant").textContent += " (Hint: This matrix is not invertible)";
    }
    else if (isNaN(determinant)==true) {
        document.getElementById("determinant").textContent += ". Please input valid numbers for all entries of the matrix.";
    }
    else {
        document.getElementById("determinant").textContent += " (Hint: This matrix is invertible!)";
    }
}

function clearDeterminant() {
    document.getElementById("determinant").textContent = "Determinant: ";
}

function clearInputs() {
    var inputs = document.querySelectorAll(".matrix");
    inputs.forEach(input => {
        input.value="";
    })
}

document.getElementById("calculate").addEventListener("click", calculateDeterminant);
document.getElementById("clear").addEventListener("click", clearInputs);