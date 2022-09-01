const moviesListEl = document.querySelector('.movie-list')
const searchBar = document.querySelector('.search__bar')
const searchBtn = document.querySelector('.search__btn')


async function getMovies(searchValue = 'Avengers') {
  const response = await fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4e7141be`)
  const moviesData = await response.json()
  moviesListEl.innerHTML = moviesData.Search.map((movie) => generateMovieHTML(movie) ).join('')
}
getMovies()

let searchInputValue = ''


searchBar.addEventListener('keyup', (e) => {
  console.log(e)
  searchInputValue = e.target.value
  if (e.code === 'Enter') {
    getMovies(searchInputValue)
  }
})

searchBtn.addEventListener('click', (e) => {
  getMovies(searchInputValue)
})



function generateMovieHTML(movie) {
  return `<div class="movie" onclick="showMovie${movie}">
  <div class="movie__container">
          <img src="${movie.Poster}" alt="" class="movie__img">
          <h3 class="title">${movie.Title}</h3>
          <h4 class="year">${movie.Year}</h4>
  </div>
</div>`
}