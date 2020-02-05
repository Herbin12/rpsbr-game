let logo;
let playbutton;
let onlineSearch;
let battleMusic;
let studioLogo;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	logo = loadImage('rpsbr logo.png');
	onlineSearch = loadSound('BeepBox-Song (1).wav');
	onlineSearch.playMode('restart');
	battleMusic = loadSound('rpsbr-battle.wav');
	studioLogo = loadImage('studiojouledev.png');
}

var scene = 1;
var timer = 0;

function draw() {
	if (scene === 1) {
		background(0, 0, 0);
		image(logo, windowWidth / 2 - 256, 0);
		image(studioLogo, windowWidth / 2 - 175, windowHeight - 250);
		fill(255, 255, 255);
		textSize(50);
		text("Loading Fun Stuff...", windowWidth / 2 - 215, windowHeight / 2);
		if (timer === 250) {
			scene = 2;
			timer = 0;
		} else {
			timer += 1;
		}
	}
	if (scene === 2) {
		noStroke();
		background(0, 100, 125);
		image(logo, windowWidth / 2 - 256, 150);
		fill(100, 100, 100);
		rect(windowWidth / 2 - 125 + 5, (windowHeight / 5) * 3 + 5, 250, 75);
		fill(200, 200, 200);
		rect(windowWidth / 2 - 125, (windowHeight / 5) * 3, 250, 75);
		fill(0);
		text("Play Alpha", windowWidth / 2 - 120, ((windowHeight / 5) * 3) + 55);
	}
	if (scene === 3) {
		background(0, 0, 0);
		image(logo, windowWidth / 2 - 256, 0);
		fill(255, 255, 255);
		textSize(50);
		text("Loading Game Assets...", windowWidth / 2 - 265, windowHeight / 2);
		if (timer === 150) {
			scene = 4;
			timer = 0;
		} else {
			timer += 1;
		}
	}
	if (scene === 4) {
		background(50, 0, 0);
		text("No available players, starting CPU game 1v1...", windowWidth / 2 - 575, windowHeight / 2);
		if (timer === 250) {
			timer = 2775;
			scene = 5;
		} else {
			timer += 1;
		}
	}
	if (scene == 5) {
		background(0, 150, 100);
		text("Choose your weapon!", windowWidth / 2 - 225, windowHeight / 2);
		if (timer === 2825) {
			timer = 0;
			battleMusic.play();
		} else {
			timer += 1;
		}
	}
	text(scene, 5, 55);
}

function mousePressed() {
	if (mouseX > windowWidth / 2 - 125 && mouseY > (windowHeight / 5) * 3 && mouseX < windowWidth / 2 + 250 && mouseY < (windowHeight / 5) * 3 + 75 && scene === 2) {
		scene = 3;
	}
}