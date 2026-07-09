// Some awful stuff are going on with this, but I will fix that later.
// Bad file management

function callGaben() {
    fetch("/me/php/steam.php")
        .then(response => {
            if (!response.ok)
                throw new Error(`HTTP ${response.status}`);

            return response.json();
        })
        .then(data => {
            const player = data.response.players[0];
            const output = document.getElementById("online_status");

            let status = player.personastate;
            let wordyStatus = "";

            switch (status) {
                case 0:
                    output.style.color = "#969696";
                    wordyStatus = "Offline";
                    break;
                case 1:
                    output.style.color = "#3DDC84";
                    wordyStatus = "Online";
                    break;
                case 2:
                    output.style.color = "#af2121";
                    wordyStatus = "Busy";
                    break;
                case 3:
                    output.style.color = "#F1C40F";
                    wordyStatus = "AFK";
                    break;
                case 4:
                    output.style.color = "#8E44AD";
                    wordyStatus = "Snooze";
                    break;
                case 5:
                    output.style.color = "#0078D4";
                    wordyStatus = "Looking for a Steam business partner";
                    break;
                case 6:
                    output.style.color = "#9acd15";
                    wordyStatus = "Looking for friends to play with";
                    break;
                default:
                    break;
            }

            let game =  player.gameextrainfo ?? "";

            if (game !== "") {
                output.style.color = "#0d964b";
                wordyStatus = `Playing ${game}`;
            }

            output.innerHTML = wordyStatus;
        })
        .catch(error => {
            console.error(error);
        });
}
