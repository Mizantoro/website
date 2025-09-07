let chosen = false;

function callPhp(button) {
    if(chosen === false) {
        const data = new FormData();
        data.append("pill", button);
        fetch("php/red-or-blue.php", {
            method: "POST",
            body: data
        })
            .then(response => response.text())
            .then(text => {
                document.getElementById("result").innerHTML = text;
            })
        chosen = true;
    }
}
