let dropDown = document.querySelector('.states');
let cards = document.querySelector('#cards');
let cardDetail = document.querySelector('.cardDetail');
let link = document.querySelector('.link');
let details = document.querySelector('.cardDetails');
let cancel = document.querySelector('#cancel');
let upi = document.querySelector('#upi');
let upiInput = document.querySelector('.upiInput');
let emi = document.querySelector('#emi');
let emiOption = document.querySelector('.emiOption');
let emiLink = document.querySelector('.emiLink');
let inputRadio = document.querySelectorAll('input[type="radio"]');

dropDown.addEventListener("click", function() {
    document.getElementById('netBanking').checked = true;
});


for (let radio of inputRadio) {
    radio.addEventListener("click", function() {
        if (cards.checked) {
            cardDetail.style.display = "block";
        } else {
            cardDetail.style.display = "none";
        }

        if (upi.checked) {
            upiInput.style.display = "block";
        } else {
            upiInput.style.display = "none";
        }

        if (emi.checked) {
            emiOption.style.display = "block";
        } else {
            emiOption.style.display = "none";
        }
    });
}


link.addEventListener("click", function() {
    details.style.display = "block";
});

emiLink.addEventListener("click", function() {
    details.style.display = "block";
});

cancel.addEventListener("click", function() {
    details.style.display = "none";
});