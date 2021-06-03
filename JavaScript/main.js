window.onload = () => {
    alert("Fight!");
    createPlayer("player1", "naftali", 80);
    createPlayer("player2", "masumi", 90);
}

const player = {
    name: String(),
    hp: Number(),
    img: String(),
    weapon: ["Sword", "Gun"],
    attack: () => {
        console.log("Fight...");
    }
};

function createPlayer(playerNum, playerName, health) {

    player.name = playerName;
    player.hp = health;
    player.img = "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif";

    const lifeDiv = document.createElement("div");
    lifeDiv.classList = "life";
    lifeDiv.innerHTML = player.hp;

    const nameDiv = document.createElement("div");
    nameDiv.classList = "name";
    nameDiv.innerHTML = player.name;

    const progressBarDiv = document.createElement("div");
    progressBarDiv.classList = "progressbar";
    progressBarDiv.appendChild(lifeDiv);
    progressBarDiv.appendChild(nameDiv);



    const imgPlayer = document.createElement("img");
    imgPlayer.src = player.img;

    const characterDiv = document.createElement("div");
    characterDiv.classList = "character";
    characterDiv.appendChild(imgPlayer);


    const playerDiv = document.createElement("div");
    playerDiv.classList = playerNum;
    playerDiv.appendChild(progressBarDiv);
    playerDiv.appendChild(characterDiv);

    const wallLeft = document.querySelector(".arenas");
    wallLeft.appendChild(playerDiv);
}