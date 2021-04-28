let movieList = null;
let inputSearch = null;
let triggerMode = false;

const createStyle = () => {
   const headStyle = document.createElement('style');
   headStyle.innerHTML = `
      * {
         box-sizing: border-box;
         }
      body {
         margin: 0;
         font-family: Arial, serif;
      }
      .container {
         padding: 20px;
         max-width: 1280px;
         margin: auto;
      }
      .movies {
         display: grid;
         grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
         gap: 20px;
      }
      .movie {
         display: flex;
         align-content: center;
         justify-content: center;
      }
      .movie__image {
         width: 100%;
         object-fit: cover;
      }
      .search {
         margin-bottom: 30px;
      }
      .search__input {
         display: block;
         max-width: 400px;
         width: 100%;
         padding: 10px 15px;
         border-radius: 4px;
         border: 1px solid gray;
         margin-bottom: 10px;
      }
      .search__label-input {
         display: block;
         margin-bottom: 7px;}
      .search__label-checkbox {
         display: block;
         font-size: 12px;
         margin-top: -17px;
         margin-left: 23px;
      }`;

   document.head.appendChild(headStyle);
};

const createElement = (type, attrs, container = null, pos, evt = null, handler = null) => {
   const el = document.createElement(type);
   
   for(let key in attrs){
      if (key !== 'innerHTML'){
         el.setAttribute(key, attrs[key]);
      } else {
         el.innerHTML = attrs[key];
      }
   }

   if (container && !pos) container.append(el);
   if (container && pos) container.prepend(el);
   if (evt & handler) el.addEventListener(evt, handler);

   return el;
};

const triggerModeHandler = () => triggerMode = !triggerMode;

const createSearchBox = (container) => {
   createElement('h1', {innerHTML: 'Приложение для поиска фильмов'}, container);
   const searchBox = createElement('div', {class: 'search'}, container);
  
   createElement('label', {class: 'search__label-input', for: 'search', innerHTML: 'Поиск фильмов'}, searchBox);
   inputSearch = createElement('input', {class: 'search__input', id: 'search', type: 'text', placeholder: 'Начните вводить текст...'}, searchBox);
   createElement('input', {id: 'checkbox', type: 'checkbox'}, searchBox, false, 'click', triggerModeHandler);
   createElement('label', {class: 'search__label-checkbox', for: 'checkbox', innerHTML: 'Добавлять фильмы к существующему списку'}, searchBox);
};

const createMarkup = () => {
   const container = createElement('div', {class: 'container'}, document.body, true);

   createSearchBox(container);

   movieList = createElement('div', {class: 'movies'}, container);
};

const addMovieToList = (movie) => {
   const item = createElement('div', {class: 'movie'}, movieList);
   const img = createElement('img', {class: 'movie__image', src:/^(http|https):\/\//i.test(movie.Poster) ? movie.Poster : 'img/ae8ac2fa217d23aadcc913989fcc34a2.png'}, item);
};

const delay = (() => {
   let timer = null;
   return (cb, ms) => {
      if (timer !== null) clearTimeout(timer);
      timer = setTimeout(cb, ms);
   };
})();

const clearMoviesMarkup = () => movieList && (movieList.innerHTML = '');


createMarkup();
createStyle();