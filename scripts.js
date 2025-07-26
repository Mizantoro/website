const delay = ms => new Promise(res => setTimeout(res, ms)); // https://stackoverflow.com/questions/14226803/wait-5-seconds-before-executing-next-line

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
	document.getElementById('rick_roll').play();
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
	await delay(198000);
	document.getElementById('scp_096_audio').play();
	await delay(38000);
	document.getElementById('glass_breaking_audio').play();
	await delay(200);
	toggleDiv('broken_glass');
//	await delay(2200);
	toggleDiv('dark_screen');
	document.getElementById('scp_broadcast_video').pause();
}

// draggable windows
$(document).ready(function () {
    $(".internet_exploder_window_background").draggable({ handle: ".internet_exploder_title_bar" });
    $(".explode_da_internet_warning_window_background").draggable({ handle: ".internet_exploder_warning_title_bar" });
	$(".red_screen_of_death_rick_roll_background").draggable({ handle: ".red_screen_of_death_rick_roll_title_bar" });
	$(".social_media_list_background").draggable({ handle: ".social_media_list_title_bar" });
	$(".writerpad_5000_help_background").draggable({ handle: ".writerpad_5000_help_title_bar" });
	$(".file_list_background").draggable({ handle: ".file_list_title_bar" });
	$(".do_not_open_image_background").draggable({ handle: ".do_not_open_image_title_bar" });
	$(".scp_broadcast_background").draggable({ handle: ".scp_broadcast_title_bar" });
	$(".system_customization_background").draggable({ handle: ".system_customization_title_bar" });
	$(".about_start_menu_background").draggable({ handle: ".about_start_menu_title_bar" });
});

// red screen of death
async function redScreenOfDeath () {
	if (Math.floor(Math.random() * 50) === 0) {
		toggleDiv('taskbar');
		toggleDiv('program_loader_background');
		toggleDiv('file_list_background');
		toggleDiv('red_screen_of_death');
	}
};

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
		for (let j = 0; j < CurrentLine.length; j++) {
			document.getElementById("terminal_background").innerHTML += CurrentLine[j];
			await delay (1);
		}
		document.getElementById("terminal_background").innerHTML += "<br>";
	}
	await delay (200);
	toggleDiv("terminal_background");
	redScreenOfDeath();
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
