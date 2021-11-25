function animateButton() {
    const button = document.querySelector('.voting-button');
    button.className = 'voting-button icon-heart';
    setTimeout(() => button.className = 'voting-button icon-heart-empty', 100);
}
function vote() {
    const key = document.querySelector('#caption').textContent;
    const votingResults = JSON.parse(localStorage.getItem('voting'));
    const currentImageVotes = votingResults ? votingResults[key] ?? 0 : 0;
    const updatedVotingResults = { ...votingResults, [key]: currentImageVotes + 1 };
    localStorage.setItem('voting', JSON.stringify(updatedVotingResults));
    animateButton();
}
