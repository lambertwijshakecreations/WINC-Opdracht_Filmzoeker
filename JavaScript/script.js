const list = document.querySelector("#movielist");
const input = document.querySelector("#inputField");

const addMoviesToDom = (movies) => {
	movies.forEach(function (movie) {
		const websiteImdb = "https://www.imdb.com/title/" + movie.imdbID;
		const movieToAppend =
			"<li class='movielist__item'><a href=" +
			websiteImdb +
			"><img src=" +
			movie.Poster +
			" width=" +
			110 +
			" alt=" +
			movie.Title +
			" ></a></li>";
		list.innerHTML += movieToAppend;
	});
};

addMoviesToDom(movies);

const addEventListeners = () => {
	const radioButtons = document.querySelectorAll("input[name='movies']");
	radioButtons.forEach(function (button) {
		button.addEventListener("change", function (event) {
			handleOnChangeEvent(event.target.value);
		});
	});
};

addEventListeners();

const handleOnChangeEvent = (event) => {
	switch (event) {
		case "nieuwste-films":
			filterLatestMovies();
			break;
		case "avengers-films":
			filterMovies("Avenger");
			break;
		case "xmen-films":
			filterMovies("X-Men");
			break;
		case "princess-films":
			filterMovies("Princess");
			break;
		case "batman-films":
			filterMovies("Batman");
			break;
		default:
			errorMessage();
	}
};

const filterMovies = (nameOfMovie) => {
	const result = movies.filter(function (movie) {
		return movie.Title.includes(nameOfMovie);
	});
	removeLi();
	addMoviesToDom(result);
};

const filterLatestMovies = () => {
	const FilteredMovies = movies.filter(function (movie) {
		return parseInt(movie.Year) >= 2014;
	});
	removeLi();
	addMoviesToDom(FilteredMovies);
};

const removeLi = () => {
	list.innerHTML = "";
};

const errorMessage = () => {
	list.innerHTML = "";
	list.innerHTML += "Sorry, de door u gevraagde film staat niet in deze lijst.";
};

//search for single films

const movieTitle = (item) => {
	if (item.value == "X-Men") {
		filterMovies("X-Men");
	} else if (item.value == "X-Men: Days of Future Past") {
		filterMovies("X-Men: Days of Future Past");
	} else if (item.value == "X-Men: First Class") {
		filterMovies("X-Men: First Class");
	} else if (item.value == "X2: X-Men United") {
		filterMovies("X2: X-Men United");
	} else if (item.value == "X-Men: The Last Stand") {
		filterMovies("X-Men: The Last Stand");
	} else if (item.value == "X-Men Origins: Wolverine") {
		filterMovies("X-Men Origins: Wolverine");
	} else if (item.value == "X-Men: Apocalypse") {
		filterMovies("X-Men: Apocalypse");
	} else if (item.value == "X-Men: The Animated Series") {
		filterMovies("X-Men: The Animated Series");
	} else if (item.value == "X-Men: Evolution") {
		filterMovies("X-Men: Evolution");
	} else if (item.value == "Wolverine and the X-Men") {
		filterMovies("Wolverine and the X-Men");
	} else if (item.value == "The Avengers") {
		filterMovies("The Avengers");
	} else if (item.value == "Avengers: Infinity War") {
		filterMovies("Avengers: Infinity War");
	} else if (item.value == "Avengers: Age of Ultron") {
		filterMovies("Avengers: Age of Ultron");
	} else if (item.value == "Avengers: Endgame") {
		filterMovies("Avengers: Endgame");
	} else if (item.value == "The Avengers: Earth's Mightiest Heroes") {
		filterMovies("The Avengers: Earth's Mightiest Heroes");
	} else if (item.value == "Ultimate Avengers") {
		filterMovies("Ultimate Avengers");
	} else if (item.value == "Ultimate Avengers II") {
		filterMovies("Ultimate Avengers II");
	} else if (item.value == "Batman Begins") {
		filterMovies("Batman Begins");
	} else if (item.value == "Batman v Superman: Dawn of Justice") {
		filterMovies("Batman v Superman: Dawn of Justice");
	} else if (item.value == "Batman") {
		filterMovies("Batman");
	} else if (item.value == "Batman Returns") {
		filterMovies("Batman Returns");
	} else if (item.value == "Batman Forever") {
		filterMovies("Batman Forever");
	} else if (item.value == "Batman & Robin") {
		filterMovies("Batman & Robin");
	} else if (item.value == "The Lego Batman Movie") {
		filterMovies("The Lego Batman Movie");
	} else if (item.value == "Batman: The Animated Series") {
		filterMovies("Batman: The Animated Series");
	} else if (item.value == "Batman: Under the Red Hood") {
		filterMovies("Batman: Under the Red Hood");
	} else if (item.value == "Batman: The Dark Knight Returns, Part 1") {
		filterMovies("Batman: The Dark Knight Returns, Part 1");
	} else if (item.value == "The Princess Bride") {
		filterMovies("The Princess Bride");
	} else if (item.value == "Princess Mononoke") {
		filterMovies("Princess Mononoke");
	} else if (item.value == "The Princess Diaries") {
		filterMovies("The Princess Diaries");
	} else if (item.value == "The Princess and the Frog") {
		filterMovies("The Princess and the Frog");
	} else if (item.value == "The Princess Diaries 2: Royal Engagement") {
		filterMovies("The Princess Diaries 2: Royal Engagement");
	} else if (item.value == "Xena: Warrior Princess") {
		filterMovies("Xena: Warrior Princess");
	} else {
		errorMessage();
	}
	input.value = "";
};

const searchButton = document
	.querySelector("#searchButton")
	.addEventListener("click", () => {
		movieTitle(input);
	});

input.addEventListener("keyup", (e) => {
	if (e.keyCode === 13) {
		movieTitle(input);
	}
});
