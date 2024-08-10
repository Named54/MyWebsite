// Simulierte API-Daten
let games = [];
let myList = [];
let favorites = [];
let completed = [];

// Simulierte API-Funktion
async function fetchGames() {
    // Hier würden Sie normalerweise Ihre API aufrufen
    return [
        { id: 1, title: "Moving Out", platform: "switch", image: "https://example.com/moving-out.jpg" },
        { id: 2, title: "Astroneer", platform: "pc", image: "https://example.com/astroneer.jpg" },
        { id: 3, title: "Star Wars Outlaws", platform: "ps5", image: "https://example.com/star-wars-outlaws.jpg" },
        { id: 4, title: "Fallout 76", platform: "xbox", image: "https://example.com/fallout-76.jpg" },
        { id: 5, title: "Prodeus", platform: "pc", image: "https://example.com/prodeus.jpg" },
        { id: 6, title: "Monster Hunter: World", platform: "ps5", image: "https://example.com/monster-hunter-world.jpg" },
    ];
}

// Funktion zum Anzeigen der Spiele
function displayGames(gamesToShow) {
    const gameList = document.getElementById('game-list');
    gameList.innerHTML = '';
    gamesToShow.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.classList.add('game-card');
        gameCard.innerHTML = `
            <img src="${game.image}" alt="${game.title}">
            <img class="platform-icon" src="icons/${game.platform}.png" alt="${game.platform}">
            <h3>${game.title}</h3>
            <div class="game-actions">
                <button onclick="addToMyList(${game.id})">Hinzufügen</button>
                <button onclick="toggleFavorite(${game.id})">❤️</button>
                <button onclick="markCompleted(${game.id})">100%</button>
            </div>
        `;
        gameList.appendChild(gameCard);
    });
}

// Funktionen für Spielaktionen
function addToMyList(gameId) {
    const game = games.find(g => g.id === gameId);
    if (game && !myList.includes(game)) {
        myList.push(game);
        alert(`${game.title} wurde zu deiner Liste hinzugefügt!`);
    }
}

function toggleFavorite(gameId) {
    const game = games.find(g => g.id === gameId);
    if (game) {
        const index = favorites.findIndex(g => g.id === gameId);
        if (index > -1) {
            favorites.splice(index, 1);
            alert(`${game.title} wurde aus deinen Favoriten entfernt!`);
        } else {
            favorites.push(game);
            alert(`${game.title} wurde zu deinen Favoriten hinzugefügt!`);
        }
    }
}

function markCompleted(gameId) {
    const game = games.find(g => g.id === gameId);
    if (game && !completed.includes(game)) {
        completed.push(game);
        alert(`${game.title} wurde als 100% abgeschlossen markiert!`);
    }
}

// Filterfunktionen
function filterGames(platform) {
    const filteredGames = platform === 'all' ? games : games.filter(game => game.platform === platform);
    displayGames(filteredGames);
}

function showMyList() {
    displayGames(myList);
}

function showFavorites() {
    displayGames(favorites);
}

function showCompleted() {
    displayGames(completed);
}

// Suchfunktion
document.getElementById('search-bar').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredGames = games.filter(game => 
        game.title.toLowerCase().includes(searchTerm)
    );
    displayGames(filteredGames);
});

// Initialisierung
async function init() {
    games = await fetchGames();
    displayGames(games);
}

init();