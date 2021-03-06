const generateBtn = document.getElementById("generate-btn");
let generateOutput = document.getElementById("generate-output");
let inputNumber = document.getElementById("input-number");

let errorCoutn = 3;

// for generate random number
generateBtn.addEventListener("click", function () {
    errorCoutn = 3;
    let randomNumber = Math.floor(1000 + Math.random() * 9000);
    generateOutput.value = randomNumber;
    inputNumber.value = "";
    document.getElementById("left-time").style.display = "block";
    document.getElementById("error").style.display = "none";
    document.getElementById("success").style.display = "none";
    document.getElementById("submit-btn").style.cursor = "pointer";
    document.getElementById("submit-btn").removeAttribute("disabled");
    document.getElementById("left-time").innerHTML = `${errorCoutn} try left`;
    inputNumber.style.color = "#fff";
});


// For input numbers
document.getElementById("buttons").addEventListener("click", function (e) {
    let element = Number(e.target.innerText);

    let allNumbers = document.getElementById("input-number").value += element;

    if (e.target.innerText == "AC") {
        document.getElementById("input-number").value = "";
        inputNumber.style.color = "#fff";
    }
    if (e.target.innerText == "C") {
        document.getElementById("input-number").value = allNumbers.slice(0, -4);
        inputNumber.style.color = "#fff";
    }
});

// For modal hidden
document.getElementById("modal-ok-btn").addEventListener("click", function () {
    document.getElementById("my-modal").classList.remove("modal");
    document.querySelector(".modal-content").style.display = "none";
});

// For submit
document.getElementById("submit-btn").addEventListener("click", function () {
    let outputPin = generateOutput.value;
    let inputPin = Number(inputNumber.value);
    if (outputPin == '') {
        document.getElementById("my-modal").classList.add("modal");
        document.getElementById("modal-text").innerText = "Generate Pin First";
        document.querySelector(".modal-content").style.display = "block";
    } else if (inputPin == '') {
        document.getElementById("my-modal").classList.add("modal");
        document.getElementById("modal-text").innerText = "Input fill first!";
        document.querySelector(".modal-content").style.display = "block";
    } else {
        if (outputPin == inputPin) {
            document.getElementById("success").style.display = "block";
            document.getElementById("error").style.display = "none";
            inputNumber.value = "";
            generateOutput.value = "";
            document.getElementById("left-time").style.display = "none";
        } else {
            document.getElementById("error").style.display = "block";
            inputNumber.style.color = "red";

            errorCoutn--;

            document.getElementById("left-time").innerHTML = `${errorCoutn} try left`;
            if (errorCoutn == 0) {
                document.getElementById("submit-btn").setAttribute("disabled", true);
                document.getElementById("submit-btn").style.cursor = "not-allowed";
            }
        }
    }
});