const delay = ms => new Promise(res => setTimeout(res, ms)); // https://stackoverflow.com/questions/14226803/wait-5-seconds-before-executing-next-line
const browser = document.getElementById("browser");
const newContextMenu = document.getElementById("context_menu_background");

function toggleDiv(id) {
	let div = document.getElementById(id);
	let displayValue = window.getComputedStyle(div, null).display; // https://stackoverflow.com/questions/4866229/check-element-css-display-with-javascript
	if (displayValue === "none") {
		div.style.display = "inline-block";
	}
	else {
		div.style.display = "none";
	}
}

async function rickRoll() {
	document.getElementById('red_screen_of_death_rick_roll_video').play();
	toggleDiv('red_screen_of_death_rick_roll_background');
	disableButton('red_screen_of_death_button');
	await delay(210000); // Waits until the video is done playing (this is a terrible way of doing this, but im too lazy to write a proper condition).
	toggleDiv('red_screen_of_death_rick_roll_background');
	toggleDiv('red_screen_of_death');
	toggleDiv('taskbar');
}

async function SCP() {
	toggleDiv('do_not_open_image_background');
	await delay(2600);
	toggleDiv('scp_broadcast_background');
	toggleDiv('eas_taskbar');
	document.getElementById('scp_broadcast_video').play();
	await delay(134000);
	document.getElementById('scp_096_audio').play();
	await delay(39000);
	document.getElementById('glass_breaking_audio').play();
	await delay(200);
	toggleDiv('broken_glass');
//	await delay(2200);
	toggleDiv('dark_screen');
	document.getElementById('scp_broadcast_video').pause();
}

// draggable windows
$(document).ready(function () {
	$(".window_background").draggable({ handle: ".window_title_bar", stack: "div" });
	$(".social_media_list_background").draggable({ handle: ".social_media_list_title_bar", stack: "div" });
	$(".launch_options_background").draggable({ handle: ".file_list_title_bar", stack: "div" });
	$(".explode_da_internet_warning_window_background").draggable({ handle: ".internet_exploder_warning_title_bar", stack: "div" });
});

// red screen of death
async function redScreenOfDeath () {
	if (Math.floor(Math.random() * 50) === 0) {
		toggleDiv('taskbar');
		toggleDiv('program_loader_background');
		toggleDiv('file_list_background');
		toggleDiv('red_screen_of_death');
	}
}

// terminal
window.onload = async function () {
	let Commands = [
		"MizantOS 1.0 Boot Sequence Starting...",
		"[ OK ] BIOS Version 1.03.2137 detected",
		"[ OK ] CPU Initialization Complete",
		"[ OK ] Memory Test Passed: 256 MB",
		"[ OK ] Detecting Drives...",
		"[ OK ] SSD Drive (A:) 64GB Found",
		"[ FAILED ] Floppy Drive (B:) 128GB Not Found",
		"[ OK ] Loading Firmware",
		"[ OK ] Keyboard Initialized",
		"[ OK ] Mouse Initialized",
		"[ OK ] Network Adapter Initialized",
		"[ OK ] Checking Disk Integrity",
		"[ OK ] Mounting Root Filesystem",
		"[ OK ] Network Service",
		"[ OK ] Emergency Alert System (EAS)",
		"[ FAILED ] Driver web_cam.sys",
		"[ OK ] Auto-Repair Initiated",
		"[ OK ] Auto-Repair Completed Successfully",
		"[ OK ] Starting MizantOS GUI",
		"[ OK ] Audio Subsystem Initialized",
		"[ WARNING ] Unauthorized USB device detected",
		"[ OK ] Firewall Enabled",
		"[ OK ] System Clock Synced with Atomic Time",
		"[ OK ] Starting Background Tasks",
		"[ INFO ] Internet_Exploder.exe is Disabled. You can enable it by opening Internet_Exploder.exe",
		"[ WARNING ] SCP verification software detected hazardous files. Object class: Euclid. Code name: [ REDACTED ]",
		"Connecting to Aperture Science Mainframe...",
		"[ OK ] Connection Established to AS Server 42.7.0.15",
		"[ INFO ] Running diagnostic on Aperture Science Server...",
		"[ WARNING ] GLaDOS core detected - standby for unusual system behavior",
		"[ OK ] All systems nominal",
		"Welcome back, Fucking Idiot!",
	];

	document.getElementById("terminal_background").innerHTML += "__________________________________________________________";
	document.getElementById("terminal_background").innerHTML += "<br><br>";
	document.getElementById("terminal_background").innerHTML += "Mizantoro Industries 2025 | MizantOS kernel version 4.2.0";
	document.getElementById("terminal_background").innerHTML += "<br>";
	document.getElementById("terminal_background").innerHTML += "Copyright. MizantOS";
	document.getElementById("terminal_background").innerHTML += "<br>";
	document.getElementById("terminal_background").innerHTML += "__________________________________________________________";
	document.getElementById("terminal_background").innerHTML += "<br><br>";

	for (let i = 0; i < Commands.length; i++) {
		let CurrentLine = Commands[i];
		document.getElementById("terminal_background").innerHTML += CurrentLine += "<br>";
		await delay (70);
	}
	await delay (200);
	toggleDiv("terminal_background");
	redScreenOfDeath();
	displayDate();
	setInterval(displayDate, 100);
	readSystemInfo()
}

async function readSystemInfo() {
	document.getElementById("information_content").innerHTML += "<p>" +
		"CPU Cores: " + navigator.hardwareConcurrency + "<br>" +
		"Memory: " + navigator.deviceMemory + " GB<br>" +
		"Resolution: " + window.screen.width + " x " + window.screen.height + "<br>" +
		"Time zone: " + Intl.DateTimeFormat().resolvedOptions().timeZone + "<br>" +
		"Online: " + navigator.onLine + "<br>" +
		"Connection type: " + (navigator.connection?.effectiveType ?? "N/A") + "<br>" +
		"Download: " + (navigator.connection?.downlink ?? "N/A") + " Mb/s<br>" +
		"Ping: " + (navigator.connection?.rtt ?? "N/A") + " ms<br>" +
		"</p>";
}

async function displayDate () {
	const date = new Date();
	document.getElementById("taskbar_date").innerHTML =
		String(date.getHours()).padStart(2, '0') + ":" +
		String(date.getMinutes()).padStart(2, '0') + ":" +
		String(date.getSeconds()).padStart(2, '0') + "<br>" +
		String(date.getDate()).padStart(2, '0') + "." +
		String(date.getMonth() + 1).padStart(2, '0') + "." +
		date.getFullYear();
}

function playNote(note) {
	document.getElementById(note).currentTime = 0;
	document.getElementById(note).play();
}

function disableButton(id) {
	document.getElementById(id).disabled = true;
}

async function ExplodeDaInternet() {
	document.getElementById("explode_da_internet_button").disabled = true;
	await delay(1000);
	document.getElementById("explode_da_internet_map").src="media/pictures/InternetExploder/earth_lights_1.png";
	await delay(800);
	document.getElementById("explode_da_internet_map").src="media/pictures/InternetExploder/earth_lights_2.png";
	await delay(1000);
	document.getElementById("explode_da_internet_map").src="media/pictures/InternetExploder/earth_lights_3.png";
	await delay(400);
	document.getElementById("explode_da_internet_map").src="media/pictures/InternetExploder/earth_lights_4.png";
	await delay(1200);
	document.getElementById("explode_da_internet_map").src="media/pictures/InternetExploder/earth_lights_5.png";
	await delay(700);
	document.getElementById("explode_da_internet_map").src="media/pictures/InternetExploder/earth_lights_6.png";
	await delay(2000);
	document.getElementById("explode_da_internet_map").src="media/pictures/InternetExploder/earth_lights_7.png";
	browser.src = "";
	browser.style.display = "none";
	document.getElementById("browser_error_message").style.display = "inline-block";
	toggleDiv('internet_has_been_exploded')
}

async function darkMode() {
	const root = document.documentElement;
	root.style.setProperty('--content-color', 'rgb(21, 21, 21)');
	root.style.setProperty('--background-color', 'rgb(81, 79, 79)');
	root.style.setProperty('--button-border-color', 'rgb(97, 97, 97)');
	root.style.setProperty('--text-color-content', 'white');
	root.style.setProperty('--accent-color', 'rgb(106, 13, 3)');
	root.style.setProperty('--link-color', 'rgb(102, 102, 246)');
	root.style.setProperty('--wallpaper-color', 'rgb(66, 14, 14)');
}

async function lightMode() {
	const root = document.documentElement;
	root.style.setProperty('--content-color', 'white');
	root.style.setProperty('--background-color', 'rgb(185, 188, 189)');
	root.style.setProperty('--button-border-color', 'rgb(184, 184, 184)');
	root.style.setProperty('--text-color-content', 'black');
	root.style.setProperty('--accent-color', 'rgb(124, 17, 8)');
	root.style.setProperty('--link-color', 'rgb(0, 0, 238)');
	root.style.setProperty('--wallpaper-color', 'rgb(209, 105, 82)');
}

async function changeColor(color, target) {
	const root = document.documentElement;
	if (color === "default" && target === "--content-color") {
		root.style.setProperty(target, 'white');
	}
	else if (color === "default" && target === "--wallpaper-color") {
		root.style.setProperty(target, 'rgb(209, 105, 82)');
	}
	else if (color === "default" && target === "--accent-color") {
		root.style.setProperty(target, 'rgb(124, 17, 8)');
	}
	else {
		root.style.setProperty(target, color);
	}
	if (
		getComputedStyle(root).getPropertyValue('--content-color').trim() === 'deeppink' &&
		getComputedStyle(root).getPropertyValue('--wallpaper-color').trim() === 'deeppink' &&
		getComputedStyle(root).getPropertyValue('--accent-color').trim() === 'deeppink'
	) {
		document.body.style.backgroundImage = 'url("media/pictures/anime/anime-background.jpg")';
		document.getElementById('profile_picture').src = 'media/pictures/anime/anime-profile.png';
		document.getElementById('profile_idiot_text').innerHTML = 'UwU';
	}
}

async function changeBrowserURL(newURL) {
	browser.src = newURL;
}

document.getElementById("website_address_submit").addEventListener("click", async () => {
	url = document.getElementById("website_address_input").value;
	if (url === "") {
		return;
	}
	if (!url.includes("https://")) {
		url = "https://" + url;
	}
	changeBrowserURL(url);
})

async function turnOnVirtualMachine() {
	const machine = document.getElementById("emulator");
	machine.src = "mizantos.html";
	machine.style.display = "inline-block";
	document.getElementById("turn_on_vm_button").style.display = "none";
}

document.addEventListener('contextmenu', function(e) {
	e.preventDefault();

	newContextMenu.style.display = "block";
	newContextMenu.style.left = e.pageX + 'px';
	newContextMenu.style.top = e.pageY + 'px';
	newContextMenu.style.zIndex = 2147483647; // max int, will ensure that the context menu is on top
});

document.addEventListener('click', function(){
	newContextMenu.style.display = "none";
})

function copySelectedText() {
	navigator.clipboard.writeText(window.getSelection().toString());
}

async function pasteFromClipboard() { // chatGPT
	const el = document.activeElement;
	if (el?.value !== undefined) {
		el.value = await navigator.clipboard.readText();
	}
}

async function youAreAnIdiot() {
	document.addEventListener('click', createNewIdiotElement);
}

async function createNewIdiotElement() {
	// The following code was created mostly by ChatGPT.
	// I created the template for how the window should look like.
	// The code behind window movement and bouncing was also AI-generated,
	// since it is to tedious to code by hand (it is 1AM).
	// The template:
	//
	// <div class="you_are_an_idiot">
	// 	<div class="you_are_an_idiot_title_bar">
	// 		YOU ARE AN IDIOT
	// 		<button class="button_close">&#x2715;</button>
	// 		<button class="button_close">&#45;</button>
	// 	</div>
	// 	<div class="you_are_an_idiot_content">
	// 		<img src="media/pictures/youareanidiot/2.gif" alt="youareanidiot">
	// 	</div>
	// </div>
	//
	// The the main gif and audio was downloaded from this GitHub repository (19 dec 2025):
	// https://github.com/Hantalyte/YouAreAnIdiot

	const el = document.createElement('div');
	el.className = "you_are_an_idiot";

	const titleBar = document.createElement('div');
	titleBar.className = "you_are_an_idiot_title_bar";
	titleBar.textContent = "YOU ARE AN IDIOT";

	const btnClose = document.createElement('button');
	btnClose.className = "button_close";
	btnClose.innerHTML = "&#x2715;";

	const btnMin = document.createElement('button');
	btnMin.className = "button_close";
	btnMin.innerHTML = "&#45;";

	const content = document.createElement('div');
	content.className = "you_are_an_idiot_content";

	const img = document.createElement('img');
	img.src = "media/pictures/youareanidiot/1.gif";
	img.alt = "youareanidiot";

	const audio = new Audio('media/audio/youareanidiot.mp3');
	audio.loop = true;
	audio.play();

	titleBar.appendChild(btnClose);
	titleBar.appendChild(btnMin);
	content.appendChild(img);
	el.appendChild(titleBar);
	el.appendChild(content);

	document.body.appendChild(el);

	let x = 100;
	let y = 100;
	let dx = 3;
	let dy = 2;

	function moveDiv() {
		const divWidth = el.offsetWidth;
		const divHeight = el.offsetHeight;
		const windowWidth = window.innerWidth;
		const windowHeight = window.innerHeight;

		x += dx;
		y += dy;

		if (x + divWidth >= windowWidth || x <= 0) dx = -dx;
		if (y + divHeight >= windowHeight || y <= 0) dy = -dy;

		el.style.left = x + 'px';
		el.style.top = y + 'px';

		requestAnimationFrame(moveDiv);
	}
	moveDiv();
}


