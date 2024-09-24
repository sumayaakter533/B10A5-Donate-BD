function handleFloodDonationBD(
    donateBtn,
    inputDonation,
    initialDonation,
    totalBudget,
    location
) {
    document
        .getElementById(donateBtn)
        .addEventListener('click', function (event) {
            event.preventDefault(); // prevent browser refresh

            //TODO get the input amount
            let inputAmountNumber = Number(getInputValueById(inputDonation));

            //TODO input validation check
            if (isNaN(inputAmountNumber) || inputAmountNumber <= 0) {
                alert('Please enter a valid number');
                return;
            }

            //TODO convert into number the totalBudget
            let donationBudget = Number(getInnerHtmlById(totalBudget));

            if (inputAmountNumber > donationBudget) {
                alert('You cannot donate more than the total budget');
                return;
            }

            //TODO get the initial donation
            let initialAmountNumber = Number(getInnerHtmlById(initialDonation));

            //TODO set the total donation as the initial donation
            let totalDonation = initialAmountNumber + inputAmountNumber;
            document.getElementById(initialDonation).innerText = totalDonation;

            //TODO deduct the donation from the total budget
            let currentBudgetAmount = donationBudget - inputAmountNumber;
            document.getElementById(totalBudget).innerText =
                currentBudgetAmount;

            //TODO add the transaction history
            let donationArea = document.getElementById(location).innerText;
            showTransactionHistory(donateBtn, inputAmountNumber, donationArea);

            //TODO Success modal dialog
            if (inputAmountNumber) {
                my_modal_1.showModal();
            }

            //TODO clear the input field
            clearInput(inputDonation);
        });
}

handleFloodDonationBD(
    'donateBtn',
    'inputAmount',
    'initialAmount',
    'totalBudgetAmount',
    'noakhaliTransactionHistory'
);

handleFloodDonationBD(
    'donateBtn2',
    'inputAmount2',
    'initialAmount2',
    'totalBudgetAmount',
    'FeniTransactionHistory'
);

handleFloodDonationBD(
    'donateBtn3',
    'inputAmount3',
    'initialAmount3',
    'totalBudgetAmount',
    'QuotaTransactionHistory'
);

// TODO show donation section
document
    .getElementById('donationSectionBtn')
    .addEventListener('click', function () {
        showSection('donation-section', 'donationSectionBtn');
    });

// TODO show history section
document
    .getElementById('historySectionBtn')
    .addEventListener('click', function () {
        showSection('history-section', 'historySectionBtn');
    });

//TODO Sticky header
let navbar = document.getElementById('sticky-header');
let sticky = navbar.offsetTop;

window.onscroll = function () {
    handleScroll();
};
