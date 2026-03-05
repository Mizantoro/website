let Nickname = "";
let Message = "";

const chat = document.getElementById("chat");
const input = document.getElementById("nickname");
const MessageInput = document.getElementById("message");
const SubmitNicknameButton = document.getElementById("submit_nickname");
const SubmitH2 = document.getElementById("h2_choose_nickname");
const SelectNicknameDiv = document.getElementById("choose_nickname");
const SendMessageDiv = document.getElementById("send_message");
const SubmitMessageButton = document.getElementById("submit_message");
const MessageH2 = document.getElementById("h2_send_message");

SubmitNicknameButton.addEventListener("click", () => {
    Nickname = input.value.trim();
    if (Nickname === "") {
        SubmitH2.innerHTML = "Please enter a nickname!";
    }
    else {
        SelectNicknameDiv.style.display = "none";
        SendMessageDiv.style.display = "block";
    }
});

SubmitMessageButton.addEventListener("click", () => {
    Message = MessageInput.value.trim();

    if (Message === "") {
        MessageH2.innerHTML = "Please enter a message!";
    }
    else {
        const data = new FormData();
        data.append("nickname", Nickname);
        data.append("message", Message);

        fetch("php/chat.php", {
            method: "POST",
            body: data
        })
            .then(response => response.json())
            .then(messages => {
                MessageInput.value = "";
                fetchMessages();
            })
            .catch(error => console.error("Fetch error:", error));
    }
});

function fetchMessages() {
    fetch("php/chat.php")
        .then(response => response.json())
        .then(messages => {
            chat.innerHTML = "";

            messages.forEach(msg => {
                const newMessage = document.createElement("div");

                if (msg.nickname.trim().toLowerCase() === Nickname.trim().toLowerCase()) {
                    newMessage.className = "outcoming_message";
                } else {
                    newMessage.className = "incoming_message";
                }

                const nicknameElem = document.createElement("h2");
                nicknameElem.textContent = msg.nickname;

                const messageElem = document.createElement("p");
                messageElem.textContent = msg.message;

                newMessage.appendChild(nicknameElem);
                newMessage.appendChild(messageElem);

                chat.appendChild(newMessage);
            });

            chat.scrollTop = chat.scrollHeight;
        })
        .catch(error => console.error("Fetch error:", error));
}

window.onload = function() {
    fetchMessages();
}

setInterval(fetchMessages, 3000);