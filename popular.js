//TMDb url to fetch the data of the Top rated movies from the API.
const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';

//Image url to get the Images from the server.
const IMG_URL = 'https://image.tmdb.org/t/p/w500/'

//initializating the GET method using the Authorization key.
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzkyODVkNzNlYzRmY2MxNTJlNTg1NjJlYTNlYjU1YyIsInN1YiI6IjY0YjBiZGQ3OTY3MmVkMDBhZWIzZWM0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f96W392eqHdY5uDm4Od-VDbaCHKeYJW861_9emE4qHA'
    }
  };


  //Function to display the data of the top rated movies to the frontend.
  export function new_top(){
    getMovies(url)
  } 
  function getMovies(url){
  fetch(url, options)
    .then(res => res.json())
    .then(data =>{
      console.log(data.results)
      alert('Welcome to Top Rated Movies !!')
      showMovies(data.results)
    })
    .catch(err => console.error('error:' + err));
  }
  
  function showMovies(data){
    main.innerHTML = " ";    
    data.forEach(movie => {
        const {  overview ,  poster_path , vote_average, title} = movie
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie')

        //Mounting the Fetched data to the Frontend using the appendChild method.
        movieEl.innerHTML = `
        <img src="${IMG_URL + poster_path}" alt="${title}">

                <div class="movie-info">
                    <h3>${title}</h3>
                    <span class="${getColor(vote_average)}">${vote_average}</span>
                </div>

                <div class="overview">
                      ${overview}
                </div> 
        `
        main.appendChild(movieEl);
    });
}

function getColor(vote_average){
    if(vote_average >= 8){
        return "green"
    }
    else if(vote_average < 8 && vote_average >=5){
        return "orange"
    }
    else{
        return "red"
    }
}