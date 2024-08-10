// Beispiel-Daten für Spiele
const games = [
    { id: 1, title: "The Last of Us", platform: "PS5" },
    { id: 2, title: "Halo Infinite", platform: "Xbox" },
    { id: 3, title: "Super Mario Odyssey", platform: "Nintendo Switch" },
    { id: 4, title: "God of War", platform: "PS5" },
    { id: 5, title: "Forza Horizon 5", platform: "Xbox" },
];

// Funktion zum Anzeigen der Spiele
function displayGames(games) {
    const gameList = document.getElementById('game-list');
    gameList.innerHTML = '';
    games.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.classList.add('game-card');
        gameCard.innerHTML = `
            <h3>${game.title}</h3>
            <p>Plattform: ${game.platform}</p>
        `;
        gameList.appendChild(gameCard);
    });
}

// Suchfunktion
document.getElementById('search-bar').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredGames = games.filter(game => 
        game.title.toLowerCase().includes(searchTerm) || 
        game.platform.toLowerCase().includes(searchTerm)
    );
    displayGames(filteredGames);
});

// Initial alle Spiele anzeigen
displayGames(games);