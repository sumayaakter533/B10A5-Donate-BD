//TODO get input value
function getInputValueById(id) {
    let getId = document.getElementById(id).value;
    return getId;
}

//TODO get innerHtml content
function getInnerHtmlById(id) {
    let getId = document.getElementById(id).innerText;
    return getId;
}

//TODO Clear input
function clearInput(id) {
    return (document.getElementById(id).value = '');
}

//TODO Show the selected section by removing the 'hidden' class
function showSection(sectionId, btnId) {
    //TODO Hide both sections first
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    //TODO Show the selected section by removing the 'hidden' class
    document.getElementById(sectionId).classList.remove('hidden');

    //TODO Add 'active' class to the clicked button
    document.getElementById('donationSectionBtn').classList.remove('active');
    document.getElementById('historySectionBtn').classList.remove('active');
    document.getElementById(btnId).classList.add('active');
}

//TODO Show transaction history
function showTransactionHistory(id, inputAmountNumber, donationArea) {
    //TODO create a div for a single transaction record
    let transactionHistoryDiv = document.createElement('div');
    transactionHistoryDiv.classList.add(
        'border',
        'border-cardBorder',
        'shadow-sm',
        'rounded-2xl',
        'p-8'
    );

    //TODO create a title for the transaction record
    let transactionHistoryTitle = document.createElement('h3');
    transactionHistoryTitle.classList.add(
        'text-xl',
        'font-bold',
        'text-primary',
        'leading-snug',
        '-mt-7'
    );

    //TODO
    transactionHistoryTitle.innerText = `
    ${inputAmountNumber} is donated for ${donationArea}
    `;

    //TODO append the transaction history title to the div
    transactionHistoryDiv.appendChild(transactionHistoryTitle);

    //TODO  create a paragraph for the transaction record
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

    let transactionHistoryDivContents = document
        .getElementById('history-section')
        .appendChild(transactionHistoryDiv);

    if (transactionHistoryDivContents) {
        document.getElementById('noTransaction').innerHTML = '';
    }
}

//TODO sticky navbar function
function handleScroll() {
    if (window.scrollY > sticky) {
        navbar.classList.add('sticky');

        // Ensure the element with ID 'sticky-nav' exists before trying to add a class
        let stickyNav = document.getElementById('sticky-nav');
        if (stickyNav) {
            stickyNav.classList.add('nav-blur');
        }
    } else {
        navbar.classList.remove('sticky');

        // Remove the nav-blur class when not sticky
        let stickyNav = document.getElementById('sticky-nav');
        if (stickyNav) {
            stickyNav.classList.remove('nav-blur');
        }
    }
}
