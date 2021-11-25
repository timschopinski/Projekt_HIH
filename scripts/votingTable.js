function getVotingResultsFromLocalStorage() {
    const votingResults = JSON.parse(localStorage.getItem('voting'));
    return votingResults ? Object.entries(votingResults) : [];
}
function renderVotingTable() {
    const votingResults = getVotingResultsFromLocalStorage();
    if (!votingResults.length) {
        const table = document.querySelector('.voting-table');
        table.remove();
        const paragraph = document.createElement('p');
        paragraph.className = 'text-center';
        paragraph.innerText = 'Nie oddano żadnych głosów';
        document.querySelector('.table-column').appendChild(paragraph);
    }
    const tableBody = document.querySelector('.voting-table tbody');
    votingResults.sort((a, b) => {
        return b[1] - a[1];
    });
    votingResults.forEach(([place, votesCount], index) => {
        const tableRow = document.createElement('tr');
        const tableHeader = document.createElement('th');
        const tableData1 = document.createElement('td');
        const tableData2 = document.createElement('td');
        tableHeader.setAttribute('scope', 'row');
        tableHeader.innerText = index + 1;
        tableData1.innerText = place;
        tableData2.innerText = votesCount;
        tableRow.appendChild(tableHeader);
        tableRow.appendChild(tableData1);
        tableRow.appendChild(tableData2);
        tableBody.appendChild(tableRow);
    });
}
renderVotingTable();
