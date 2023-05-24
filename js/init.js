//initializing all needed JS materialize components

//uncomment the code below when needed

const question = document.getElementById("question");
const optionA = document.getElementById("optionA");
const optionB = document.getElementById("optionB");
const imgLink = document.getElementById("imgLink");
const header = document.getElementById("header");

let street = 0;
let minimalist = 0;
let oldmoney = 0;
let academia = 0;
let business = 0;
let grunge = 0;
let index = 0;

var questions = [
	{
		question: "Would you rather wear formal clothing or casual clothing?",
		optionA: "formal clothing",
		optionB: "casual clothing",
		imgLink: " "
	},

	{
		question: "Do you prefer brighter colors or darker colors?",
		optionA: "brighter colors",
		optionB: "darker colors",
		imgLink: " "
	},

	{
		question: "Do you prefer pants or skirts?",
		optionA: "pants",
		optionB: "skirts",
		imgLink: " "
	},

	{
		question: "Which outfit do you prefer?",
		optionA: "outfit 1",
		optionB: "outfit 2",
		imgLink:
			"https://static.wixstatic.com/media/27c37c_768a63bbc8164bbb98431b6524cb46ec~mv2.png "
	},

	{
		question: "Would you rather wear black jeans or a white skirt? ",
		optionA: "black jeans",
		optionB: "white skirt",
		imgLink: " "
	},

	{
		question: "Do you prefer short or long sleeves?",
		optionA: "short sleeve",
		optionB: "long sleeve",
		imgLink: " "
	},

	{
		question:
			"What do you wear the most? T-shirts, dress shirts, short tops / tank tops.",
		optionA: "t-shirts",
		optionB: "dress shirts",
		optionC: "short tops/tank tops",
		imgLink: " "
	},

	{
		question: "Would you rather wear a dress or a two-piece outfit?",
		optionA: "dress",
		optionB: "two-piece",
		imgLink: " "
	},

	{
		question: "Do you prefer to layer your clothing (2+ layers)",
		optionA: "yes",
		optionB: "no",
		imgLink: " "
	},

	{
		question: "Do you prefer sneakers or high heels?",
		optionA: "sneakers",
		optionB: "high heels",
		imgLink: " "
	}
];

function render() {
	if (index < 10) {
		var current_question = questions[index];
		question.innerHTML = "<p>" + current_question.question + "</p>";
		optionA.innerHTML = current_question.optionA;
		optionB.innerHTML = current_question.optionB;
		imgLink.src = current_question.imgLink;

		if (index == 6) {
			optionC.innerHTML = current_question.optionC;
			optionC.style.visibility = "visible";
		} else {
			optionC.style.visibility = "hidden";
		}
	} else {
		//its the end
		question.innerHTML =
			"<h3>" +
			"Thank you for playing ! </h3> <br> <h4> This is what your recommended style looks like!  </h4> <br> ";
		optionA.style.visibility = "hidden";
		optionB.style.visibility = "hidden";
		optionC.style.visibility = "hidden";

		if (
			street > minimalist &&
			street > oldmoney &&
			street > academia &&
			street > business &&
			street > grunge
		) {
			imgLink.src =
				"https://static.wixstatic.com/media/27c37c_d5801d1a5fc84b7c97e68bf6bb23afc4~mv2.jpg";
		}

		if (
			minimalist > street &&
			minimalist > oldmoney &&
			minimalist > academia &&
			minimalist > business &&
			minimalist > grunge
		) {
			imgLink.src =
				"https://static.wixstatic.com/media/27c37c_d23141c085c3429b8d4fc77367712501~mv2.png";
		}

		if (
			oldmoney > minimalist &&
			oldmoney > street &&
			oldmoney > academia &&
			oldmoney > business &&
			oldmoney > grunge
		) {
			imgLink.src =
				"https://static.wixstatic.com/media/27c37c_708df93db08e4fcbaf63e1588839e26a~mv2.png";
		}

		if (
			academia > minimalist &&
			academia > street &&
			academia > oldmoney &&
			academia > business &&
			academia > grunge
		) {
			imgLink.src =
				"https://static.wixstatic.com/media/27c37c_cbe820232913409f8df5af5cecf82b2a~mv2.png";
		}

		if (
			business > minimalist &&
			business > street &&
			business > academia &&
			business > oldmoney &&
			business > grunge
		) {
			imgLink.src =
				"https://static.wixstatic.com/media/27c37c_b67a8812128b4a84ae8724f9c00d62a1~mv2.png";
		}

		if (
			grunge > minimalist &&
			grunge > street &&
			grunge > academia &&
			grunge > oldmoney &&
			grunge > business
		) {
			imgLink.src =
				"https://static.wixstatic.com/media/27c37c_e0eacac14d7d47e681b5ab2f45a0049a~mv2.png";
		}
	}
}

function startquiz() {
	header.innerHTML = "<h1>" + "Fashion Quiz" + "</h1>";

	render();
}

function optiona() {
	if (index == 0) {
		business += 1;
		academia += 1;
		minimalist += 1;
		oldmoney += 1;
	}

	if (index == 1) {
		business += 1;
		street += 1;
		minimalist += 1;
		oldmoney += 1;
	}

	if (index == 2) {
		business += 1;
		street += 1;
		minimalist += 1;
		grunge += 1;
	}

	if (index == 3) {
		street += 1;
		minimalist += 1;
		grunge += 1;
	}

	if (index == 4) {
		business += 1;
		street += 1;
		minimalist += 1;
		grunge += 1;
	}

	if (index == 5) {
		street += 1;
		academia += 1;
		grunge += 1;
	}

	if (index == 6) {
		street += 1;
		grunge += 1;
	}

	if (index == 7) {
		business += 1;
		academia += 1;
		oldmoney += 1;
	}

	if (index == 8) {
		street += 1;
		oldmoney += 1;
		academia += 1;
		grunge += 1;
	}

	if (index == 2) {
		academia += 1;
		street += 1;
		minimalist += 1;
		grunge += 1;
	}

	index += 1;
	render();
}

function optionb() {
	if (index == 0) {
		street += 1;
		grunge += 1;
	}

	if (index == 1) {
		academia += 1;
		grunge += 1;
	}

	if (index == 2) {
		business += 1;
		oldmoney += 1;
		academia += 1;
		grunge += 1;
		street += 1;
	}

	if (index == 3) {
		oldmoney += 1;
		academia += 1;
		business += 1;
	}

	if (index == 4) {
		business += 1;
		street += 1;
		minimalist += 1;
		oldmoney += 1;
	}

	if (index == 5) {
		business += 1;
		academia += 1;
		minimalist += 1;
	}

	if (index == 6) {
		business += 1;
		academia += 1;
		oldmoney += 1;
	}

	if (index == 7) {
		business += 1;
		street += 1;
		minimalist += 1;
		grunge += 1;
	}

	if (index == 8) {
		business += 1;
		minimalist += 1;
	}

	if (index == 9) {
		business += 1;
		oldmoney += 1;
		academia += 1;
	}
	index += 1;
	render();
}

function optionc() {
	if (index == 6) {
		academia += 1;
		oldmoney += 1;
	}

	index += 1;
	render();
}

startquiz();