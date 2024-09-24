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

// //TODO Show transaction history date & time
// function showTractionHistoryDateTime(id) {
//     // get the current date and time

// }
