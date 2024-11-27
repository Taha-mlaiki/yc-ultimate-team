const players = [
  {
    name: "Lionel Messi",
    photo: "https://cdn.sofifa.net/players/158/023/25_120.png",
    position: "RW",
    nationality: "Argentina",
    flag: "https://cdn.sofifa.net/flags/ar.png",
    club: "Inter Miami",
    logo: "https://cdn.sofifa.net/meta/team/239235/120.png",
    rating: 93,
    pace: 85,
    shooting: 92,
    passing: 91,
    dribbling: 95,
    defending: 35,
    physical: 65,
  },
  {
    name: "Cristiano Ronaldo",
    photo: "https://cdn.sofifa.net/players/020/801/25_120.png",
    position: "ST",
    nationality: "Portugal",
    flag: "https://cdn.sofifa.net/flags/pt.png",
    club: "Al Nassr",
    logo: "https://cdn.sofifa.net/meta/team/2506/120.png",
    rating: 91,
    pace: 84,
    shooting: 94,
    passing: 82,
    dribbling: 87,
    defending: 34,
    physical: 77,
  },
  {
    name: "Kevin De Bruyne",
    photo: "https://cdn.sofifa.net/players/192/985/25_120.png",
    position: "CM",
    nationality: "Belgium",
    flag: "https://cdn.sofifa.net/flags/be.png",
    club: "Manchester City",
    logo: "https://cdn.sofifa.net/players/239/085/25_120.png",
    rating: 91,
    pace: 74,
    shooting: 86,
    passing: 93,
    dribbling: 88,
    defending: 64,
    physical: 78,
  },
  {
    name: "Kylian Mbappé",
    photo: "https://cdn.sofifa.net/players/231/747/25_120.png",
    position: "ST",
    nationality: "France",
    flag: "https://cdn.sofifa.net/flags/fr.png",
    club: "Real Madrid",
    logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
    rating: 92,
    pace: 97,
    shooting: 89,
    passing: 80,
    dribbling: 92,
    defending: 39,
    physical: 77,
  },
  {
    name: "Virgil van Dijk",
    photo: "https://cdn.sofifa.net/players/203/376/25_120.png",
    position: "CB",
    nationality: "Netherlands",
    flag: "https://cdn.sofifa.net/flags/nl.png",
    club: "Liverpool",
    logo: "https://cdn.sofifa.net/meta/team/8/120.png",
    rating: 90,
    pace: 75,
    shooting: 60,
    passing: 70,
    dribbling: 72,
    defending: 92,
    physical: 86,
  },
  {
    name: "Antonio Rudiger",
    photo: "https://cdn.sofifa.net/players/205/452/25_120.png",
    position: "CB",
    nationality: "Germany",
    flag: "https://cdn.sofifa.net/flags/de.png",
    club: "Real Madrid",
    logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
    rating: 88,
    pace: 82,
    shooting: 55,
    passing: 73,
    dribbling: 70,
    defending: 86,
    physical: 86,
  },
  {
    name: "Neymar Jr",
    photo: "https://cdn.sofifa.net/players/190/871/25_120.png",
    position: "LW",
    nationality: "Brazil",
    flag: "https://cdn.sofifa.net/flags/br.png",
    club: "Al-Hilal",
    logo: "https://cdn.sofifa.net/meta/team/7011/120.png",
    rating: 90,
    pace: 91,
    shooting: 83,
    passing: 86,
    dribbling: 94,
    defending: 37,
    physical: 61,
  },
  {
    name: "Mohamed Salah",
    photo:
      "https://imgs.search.brave.com/U0GsfmLmrCkU8yqQPMFuf1D_oOExTbrczeot-Oo-Aws/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZnV0d2l6LmNvbS9h/c3NldHMvaW1nL2Zp/ZmEyMS9mYWNlcy8y/MDkzMzEucG5n",
    position: "RW",
    nationality: "Egypt",
    flag: "https://cdn.sofifa.net/flags/eg.png",
    club: "Liverpool",
    logo: "https://cdn.sofifa.net/meta/team/8/120.png",
    rating: 89,
    pace: 93,
    shooting: 87,
    passing: 81,
    dribbling: 90,
    defending: 45,
    physical: 75,
  },
  {
    name: "Joshua Kimmich",
    photo: "https://cdn.sofifa.net/players/212/622/25_120.png",
    position: "CM",
    nationality: "Germany",
    flag: "https://cdn.sofifa.net/flags/de.png",
    club: "Bayern Munich",
    logo: "https://cdn.sofifa.net/meta/team/503/120.png",
    rating: 89,
    pace: 70,
    shooting: 75,
    passing: 88,
    dribbling: 84,
    defending: 84,
    physical: 81,
  },
  {
    name: "Jan Oblak",
    photo: "https://cdn.sofifa.net/players/200/389/25_120.png",
    position: "GK",
    nationality: "Slovenia",
    flag: "https://cdn.sofifa.net/flags/si.png",
    club: "Atletico Madrid",
    logo: "https://cdn.sofifa.net/meta/team/7980/120.png",
    rating: 91,
    diving: 89,
    handling: 90,
    kicking: 78,
    reflexes: 92,
    speed: 50,
    positioning: 88,
  },
  {
    name: "Luka Modrić",
    photo: "https://cdn.sofifa.net/players/177/003/25_120.png",
    position: "CM",
    nationality: "Croatia",
    flag: "https://cdn.sofifa.net/flags/hr.png",
    club: "Real Madrid",
    logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
    rating: 88,
    pace: 74,
    shooting: 78,
    passing: 89,
    dribbling: 90,
    defending: 72,
    physical: 65,
  },
  {
    name: "Vinicius Junior",
    photo: "https://cdn.sofifa.net/players/238/794/25_120.png",
    position: "LW",
    nationality: "Brazil",
    flag: "https://cdn.sofifa.net/flags/br.png",
    club: "Real Madrid",
    logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
    rating: 89,
    pace: 91,
    shooting: 88,
    passing: 85,
    dribbling: 94,
    defending: 39,
    physical: 61,
  },
  {
    name: "Brahim Diáz",
    photo: "https://cdn.sofifa.net/players/231/410/25_120.png",
    position: "LW",
    nationality: "Morocco",
    flag: "https://cdn.sofifa.net/flags/ma.png",
    club: "Real Madrid",
    logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
    rating: 82,
    pace: 85,
    shooting: 74,
    passing: 78,
    dribbling: 85,
    defending: 31,
    physical: 56,
  },
  {
    name: "Karim Benzema",
    photo: "https://cdn.sofifa.net/players/165/153/25_120.png",
    position: "ST",
    nationality: "France",
    flag: "https://cdn.sofifa.net/flags/fr.png",
    club: "Al-Ittihad",
    logo: "https://cdn.sofifa.net/meta/team/476/120.png",
    rating: 90,
    pace: 77,
    shooting: 90,
    passing: 83,
    dribbling: 88,
    defending: 40,
    physical: 78,
  },
  {
    name: "Erling Haaland",
    photo: "https://cdn.sofifa.net/players/239/085/25_120.png",
    position: "ST",
    nationality: "Norway",
    flag: "https://cdn.sofifa.net/flags/no.png",
    club: "Manchester City",
    logo: "https://cdn.sofifa.net/players/239/085/25_120.png",
    rating: 91,
    pace: 89,
    shooting: 94,
    passing: 65,
    dribbling: 80,
    defending: 45,
    physical: 88,
  },
  {
    name: "N'Golo Kanté",
    photo: "https://cdn.sofifa.net/players/215/914/25_120.png",
    position: "CDM",
    nationality: "France",
    flag: "https://cdn.sofifa.net/flags/fr.png",
    club: "Al-Ittihad",
    logo: "https://cdn.sofifa.net/meta/team/476/120.png",
    rating: 87,
    pace: 77,
    shooting: 66,
    passing: 75,
    dribbling: 82,
    defending: 88,
    physical: 82,
  },
  {
    name: "Alphonso Davies",
    photo: "https://cdn.sofifa.net/players/234/396/25_120.png",
    position: "LB",
    nationality: "Canada",
    flag: "https://cdn.sofifa.net/flags/ca.png",
    club: "Bayern Munich",
    logo: "https://cdn.sofifa.net/meta/team/503/120.png",
    rating: 84,
    pace: 96,
    shooting: 68,
    passing: 77,
    dribbling: 82,
    defending: 76,
    physical: 77,
  },
  {
    name: "Yassine Bounou",
    photo: "https://cdn.sofifa.net/players/209/981/25_120.png",
    position: "GK",
    nationality: "Morocco",
    flag: "https://cdn.sofifa.net/flags/ma.png",
    club: "Al-Hilal",
    logo: "https://cdn.sofifa.net/meta/team/7011/120.png",
    rating: 84,
    diving: 81,
    handling: 82,
    kicking: 77,
    reflexes: 86,
    speed: 38,
    positioning: 83,
  },
  {
    name: "Bruno Fernandes",
    photo: "https://cdn.sofifa.net/players/212/198/25_120.png",
    position: "CM",
    nationality: "Portugal",
    flag: "https://cdn.sofifa.net/flags/pt.png",
    club: "Manchester United",
    logo: "https://cdn.sofifa.net/meta/team/14/120.png",
    rating: 88,
    pace: 75,
    shooting: 85,
    passing: 89,
    dribbling: 84,
    defending: 69,
    physical: 77,
  },
  {
    name: "Jadon Sancho",
    photo: "https://cdn.sofifa.net/players/233/049/25_120.png",
    position: "LW",
    nationality: "England",
    flag: "https://cdn.sofifa.net/flags/gb-eng.png",
    club: "Manchester United",
    logo: "https://cdn.sofifa.net/meta/team/14/120.png",
    rating: 84,
    pace: 85,
    shooting: 74,
    passing: 78,
    dribbling: 88,
    defending: 34,
    physical: 63,
  },
  {
    name: "Trent Alexander-Arnold",
    photo: "https://cdn.sofifa.net/players/231/281/25_120.png",
    position: "RB",
    nationality: "England",
    flag: "https://cdn.sofifa.net/flags/gb-eng.png",
    club: "Liverpool",
    rating: 87,
    pace: 76,
    shooting: 66,
    passing: 89,
    dribbling: 80,
    defending: 79,
    physical: 71,
  },
  {
    name: "Achraf Hakimi",
    photo: "https://cdn.sofifa.net/players/235/212/25_120.png",
    position: "RB",
    nationality: "Morocco",
    flag: "https://cdn.sofifa.net/flags/ma.png",
    club: "Paris Saint-Germain",
    logo: "https://cdn.sofifa.net/meta/team/591/120.png",
    rating: 84,
    pace: 91,
    shooting: 76,
    passing: 80,
    dribbling: 80,
    defending: 75,
    physical: 78,
  },
  {
    name: "Youssef En-Nesyri",
    photo: "https://cdn.sofifa.net/players/235/410/25_120.png",
    position: "ST",
    nationality: "Morocco",
    flag: "https://cdn.sofifa.net/flags/ma.png",
    club: "Fenerbahçe",
    logo: "https://cdn.sofifa.net/meta/team/88/120.png",
    rating: 83,
    pace: 82,
    shooting: 82,
    passing: 63,
    dribbling: 77,
    defending: 36,
    physical: 80,
  },
  {
    name: "Noussair Mazraoui",
    photo: "https://cdn.sofifa.net/players/236/401/25_120.png",
    position: "LB",
    nationality: "Morocco",
    flag: "https://cdn.sofifa.net/flags/ma.png",
    club: "Manchester United",
    logo: "https://cdn.sofifa.net/meta/team/14/120.png",
    rating: 81,
    pace: 78,
    shooting: 66,
    passing: 77,
    dribbling: 83,
    defending: 77,
    physical: 71,
  },
  {
    name: "Ismael Saibari",
    photo: "https://cdn.sofifa.net/players/259/480/25_120.png",
    position: "CM",
    nationality: "Morocco",
    flag: "https://cdn.sofifa.net/flags/ma.png",
    club: "PSV",
    logo: "https://cdn.sofifa.net/meta/team/682/120.png",
    rating: 83,
    pace: 89,
    shooting: 78,
    passing: 80,
    dribbling: 86,
    defending: 55,
    physical: 84,
  },
  {
    name: "Gianluigi Donnarumma",
    photo: "https://cdn.sofifa.net/players/230/621/25_120.png",
    position: "GK",
    nationality: "Italy",
    flag: "https://cdn.sofifa.net/flags/it.png",
    club: "Paris Saint-Germain",
    logo: "https://cdn.sofifa.net/meta/team/591/120.png",
    rating: 89,
    diving: 88,
    handling: 84,
    kicking: 75,
    reflexes: 90,
    speed: 50,
    positioning: 85,
  },
];

let awayPlayer = players;

let activePlayer = [];

document.querySelectorAll(".placeholder_player").forEach((ele) => {
  ele.addEventListener("click", () => {
    const targetElement = ele;
    openListPlayers(targetElement);
  });
});

const openListPlayers = (targetElement, existName) => {
  const filteredPlayers = players.filter(
    (player) =>
      player.position === targetElement.id &&
      !activePlayer.some((active) => active.name === player.name)
  );
  RenderPlayerList(filteredPlayers, targetElement, existName);
  document.getElementById("players_list").toggleAttribute("open", true);
};

const closeListPlayers = () => {
  document.getElementById("players_list").toggleAttribute("open", false);
};

const appendPlayer = (player, targetPosition, existName) => {
  if (existName) {
    activePlayer = activePlayer.filter((pl) => pl.name.split(" ")[0] !== existName);
    console.log("active players :", activePlayer)
  }
  activePlayer.push(player);
  let badge = "";
  if (player.rating >= 90) {
    badge = "badge_ballon_dor.webp";
  } else if (player.rating > 85) {
    badge = "badge_gold.webp";
  } else {
    badge = "badge_total_rush.webp";
  }
  const wrapper = document.createElement("div");
  wrapper.innerHTML = `
            <div
                data-name=${player.name}
                id=${player.position}
                class="w-16 sm:w-24 md:w-30 lg:w-32 xl:w-40 aspect-[1/1.4] relative cursor-pointer hover:scale-110 transition-transform activePlayers"
            >
                <img
                    src="./assets/${badge}"
                    alt="Player badge"
                    class="absolute w-full h-full z-10"
                />
                <div class="relative z-20 w-full h-full">
                    <img
                        src=${player.photo}
                        alt="Player Photo"
                        class="absolute w-[60%] top-[20%] right-[20%]"
                    />
                    <div
                        class="absolute top-[27%] left-[16%] text-center text-white"
                    >
                        <p class="text-[40%] lg:text-[90%] font-bold">${player.rating}</p>
                        <p class="text-[27%] lg:text-[78%] font-semibold">${player.position}</p>
                    </div>
                    <div
                        class="absolute top-[65%] w-full text-center text-white"
                    >
                        <p class="text-[50%] max-w-[70%] mx-auto w-full truncate -mt-1 lg:text-[80%] font-semibold">
                            ${player.name}
                        </p>
                        ${player.position !== "GK" ? `
                         <div class="flex justify-between items-center w-[90%] truncate text-center">
                            <div class="text-center font-semibold text-white">
                                <p class="text-[10%] md:text-[50%]">PAC</p>
                                <p class="text-[10%] md:text-[50%] font-semibold">${player.pace}</p>
                            </div>
                            <div class="text-center font-semibold text-white">
                                <p class="text-[10%] md:text-[50%]">SHO</p>
                                <p class="text-[10%] md:text-[50%] font-semibold">${player.shooting}</p>
                            </div>
                            <div class="text-center font-semibold text-white">
                                <p class="text-[10%] md:text-[50%]">PAS</p>
                                <p class="text-[10%] md:text-[50%] font-semibold">${player.passing}</p>
                            </div>
                            <div class="text-center font-semibold text-white">
                                <p class="text-[10%] md:text-[50%]">DRI</p>
                                <p class="text-[10%] md:text-[50%] font-semibold">${player.dribbling}</p>
                            </div>
                            <div class="text-center font-semibold text-white">
                                <p class="text-[10%] md:text-[50%]">DEF</p>
                                <p class="text-[10%] md:text-[50%] font-semibold">${player.defending}</p>
                            </div>
                            <div class="text-center font-semibold text-white">
                                <p class="text-[10%] md:text-[50%]">PHY</p>
                                <p class="text-[10%] md:text-[50%] font-semibold">${player.physical}</p>
                            </div>
                        </div>
                        `:
                        `
                        " "
                        `
                        }
                    </div>
                </div>
            </div>
        `;

  const newCard = wrapper.firstElementChild;
  targetPosition.replaceWith(newCard);

  closeListPlayers();
  checkActivePlayers();
};

const RenderPlayerList = (away_players, targetPosition, existName) => {
  let playerList = document.querySelector(".players_list");
  playerList.innerHTML = "";

  away_players.forEach((player) => {
    const playerCard = document.createElement("div");
    playerCard.className =
      "flex py-3 cursor-pointer bg-zinc-50 rounded-lg shadow-md";

    playerCard.innerHTML = `
            <img src=${player.photo} alt="" class="me-2 w-[35%] lg:w-[20%]" />
            <div class="flex-grow">
              <div class="flex justify-between pe-5 flex-wrap gap-x-3">
                  <h3 class="font-bold text-xl  text-neutral-700">${
                    player.name
                  }</h3>
                  <div class="flex gap-x-2">
                  ${player.flag ? `<img src=${player.flag} class="w-7" >` : ""}
                  ${player.logo ? `<img src=${player.logo} class="w-7" >` : ""}
                  </div>
              </div>
              <div class="flex items-center gap-x-2 mt-1">
                <img src="./assets/position.svg" alt="" class="w-5" />
                <span class="font-bold text-red-400">${player.position}</span>
              </div>
              <div class="text-[70%] mt-3 lg:text-[100%] flex items-start gap-x-6 flex-wrap">
                  <h4 class="font-bold">More info :</h4>
                  ${
                    player.pace
                      ? `<p class="font-bold text-blue-800">PAC : <span>${player.pace} |</span></p>`
                      : ""
                  }
                  ${
                    player.shooting
                      ? `<p class="font-bold text-blue-800">SHO : <span>${player.shooting} |</span></p>`
                      : ""
                  }
                  ${
                    player.passing
                      ? `<p class="font-bold text-blue-800">PAS : <span>${player.passing} |</span></p>`
                      : ""
                  }
                  ${
                    player.dribbling
                      ? `<p class="font-bold text-blue-800">DRB : <span>${player.dribbling} |</span></p>`
                      : ""
                  }
                  ${
                    player.defending
                      ? `<p class="font-bold text-blue-800">DEF : <span>${player.defending} |</span></p>`
                      : ""
                  }
                  ${
                    player.physical
                      ? `<p class="font-bold text-blue-800">PHY : <span>${player.physical} |</span></p>`
                      : ""
                  }
                  ${
                    player.diving
                      ? `<p class="font-bold text-blue-800">DIV : <span>${player.diving} |</span></p>`
                      : ""
                  }
                  ${
                    player.handling
                      ? `<p class="font-bold text-blue-800">HDL : <span>${player.handling} |</span></p>`
                      : ""
                  }
                  ${
                    player.kicking
                      ? `<p class="font-bold text-blue-800">KIK : <span>${player.kicking} |</span></p>`
                      : ""
                  }
                  ${
                    player.reflexes
                      ? `<p class="font-bold text-blue-800">RFL : <span>${player.reflexes} |</span></p>`
                      : ""
                  }
                  ${
                    player.speed
                      ? `<p class="font-bold text-blue-800">SPD : <span>${player.speed} |</span></p>`
                      : ""
                  }
                  ${
                    player.positioning
                      ? `<p class="font-bold text-blue-800">POS : <span>${player.positioning} |</span></p>`
                      : ""
                  }
              </div>
            </div>
      `;

    playerCard.addEventListener("click", () =>
      appendPlayer(player, targetPosition, existName)
    );

    playerList.appendChild(playerCard);
  });
};

const createPlayer = () => {};

const checkActivePlayers = () => {
  document.querySelectorAll(".activePlayers").forEach((pl) => {
    pl.addEventListener("click", () => {
      let existName = pl.attributes[0].value.split(" ");

      openListPlayers(pl, existName[0]);
    });
  });
};
