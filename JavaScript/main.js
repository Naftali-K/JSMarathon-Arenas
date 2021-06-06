
let arenas, randomBtn;

window.onload = () => {
    // alert("Fight!");
    arenas = document.querySelector(".arenas");
    randomBtn = document.querySelector(".button");

    randomBtn.addEventListener("click", () => {
        console.log("###: click random button");

        changeHP(player1);
        changeHP(player2);
    });

    arenas.appendChild(createPlayer(player1));
    arenas.appendChild(createPlayer(player2));
}

const player1 = {
    player: 1,
    name: "Scorpion",
    hp: 50,
    img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
    weapon: ["Sword", "Gun"],
    attack: () => {
        console.log(this.name + " " + "Fight...");
    }
};

const player2 = {
    player: 2,
    name: "Liu Kang",
    hp: 80,
    img: "http://reactmarathon-api.herokuapp.com/assets/liukang.gif",
    weapon: ["Sword", "Gun"],
    attack: () => {
        console.log(this.name + " " + "Fight...");
    }
};

const playerLose = (name) => {
    const loseTitle = createElementHTML("div", "loseTitle");
    loseTitle.innerText = name + " lose";

    return loseTitle;
}

const changeHP = (player) => {
    const playerLife = document.querySelector(".player" + player.player + " .life");
    player.hp -= 20;
    playerLife.style.width = player.hp + "%";

    if(player.hp <= 0){
        arenas.appendChild(playerLose(player.name));
    }
}

const createElementHTML = (tag, className) => {
    const newElement = document.createElement(tag);

    if(className){
        // console.log(`Class name: ${className}`);
        // newElement.className = className;

        newElement.classList.add(className);
    }

    return newElement;
}

const createPlayer = (playerObj) => {

    const player = createElementHTML("div", "player" + playerObj.player);
    const progressBar = createElementHTML("div", "progressbar");
    const character = createElementHTML("div", "character");
    const life = createElementHTML("div", "life");
    const name = createElementHTML("div", "name");
    const img = createElementHTML("img");

    life.style.width = playerObj.ht + "%";
    name.innerText = playerObj.name;
    img.src = playerObj.img;

    progressBar.appendChild(name);
    progressBar.appendChild(life);

    character.appendChild(img);

    player.appendChild(progressBar);
    player.appendChild(character)

    return player;
}