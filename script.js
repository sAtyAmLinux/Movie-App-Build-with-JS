const MostPopularMoves =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const ImagesMoves = "https://image.tmdb.org/t/p/w1280";
const searchMoves =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const moviesShow = document.querySelector(".container"); // Use querySelector for a single element
const searchInput = document.querySelector("#search"); // Use querySelector for a single element

const getMovies = async (api) => {
  const response = await fetch(api);
  const data = await response.json();
  ShowMoves(data);
};
getMovies(MostPopularMoves);

const ShowMoves = (data) => {
  moviesShow.innerHTML = "";

  // console.log(data);

  data.results.forEach((result) => {
    const box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = `
        <img src=${ImagesMoves + result.backdrop_path} alt="" />
        <div class="overlay">
          <div class="title">
            <h2>${result.title}</h2>
            <span>${result.vote_average}</span>
          </div>
          <h3>Overview:</h3>
          <p>
          ${result.overview}
          </p>
        </div>
      `;
    moviesShow.appendChild(box);
  });
};

searchInput.addEventListener("keyup", function (event) {
  if (event.target.value !== "") {
    getMovies(searchMoves + event.target.value);
  } else {
    getMovies(MostPopularMoves);
  }
});
