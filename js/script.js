function handleFloodDonationBD(
    donateBtn,
    inputDonation,
    initialDonation,
    totalBudget
) {
    document
        .getElementById(donateBtn)
        .addEventListener('click', function (event) {
            event.preventDefault(); // prevent browser refresh

            //TODO get the input amount
            let inputAmountNumber = Number(getInputValueById(inputDonation));

            if (isNaN(inputAmountNumber) || inputAmountNumber < 0) {
                alert('Please enter a valid number');
                return; // exit function if input is not a number or is less than 0
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

            //TODO clear the input field
            clearInput(inputDonation);

            //TODO add the transaction history
            let transactionHistory = getInnerHtmlById(
                'noakhaliTransactionHistory'
            );

            let transactionHistoryDiv = document.createElement('div');
            transactionHistoryDiv.classList.add(
                'border',
                'border-cardBorder',
                'shadow-sm',
                'rounded-2xl',
                'p-8'
            );

            let transactionHistoryTitle = document.createElement('h3');
            transactionHistoryTitle.classList.add(
                'text-xl',
                'font-bold',
                'text-primary',
                'leading-snug',
                '-mt-7'
            );

            transactionHistoryTitle.innerText = `
                ${inputAmountNumber} is donated for ${transactionHistory}
            `;

            transactionHistoryDiv.appendChild(transactionHistoryTitle);

            let transactionHistoryDate = document.createElement('p');
            transactionHistoryDate.classList.add(
                'text-base',
                'font-normal',
                'text-secondary',
                'leading-6',
                'pt-4',
                'lg:pt-0'
            );

            let now = new Date();
            transactionHistoryDate.innerText = `Date: ${now}`;
            transactionHistoryDiv.appendChild(transactionHistoryDate);

            document
                .getElementById('history-section')
                .appendChild(transactionHistoryDiv);
        });
}

handleFloodDonationBD(
    'donateBtn',
    'inputAmount',
    'initialAmount',
    'totalBudgetAmount'
);

handleFloodDonationBD(
    'donateBtn2',
    'inputAmount2',
    'initialAmount2',
    'totalBudgetAmount'
);

handleFloodDonationBD(
    'donateBtn3',
    'inputAmount3',
    'initialAmount3',
    'totalBudgetAmount'
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
