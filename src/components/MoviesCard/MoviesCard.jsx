import './MoviesCard.css';

function MoviesCard() {
   return (
    <div className="gallery">
      <ul className="gallery__card">
        <li className="gallery__block">
          <p className="gallery__name"></p>
          <p className="gallery__time"></p>
        </li>
        <li>
          <frames className="gallery__movies" src="" alt="" />
          </li>
        <li>
          <button className="gallery__button">
          </button>
          </li>
      </ul>

    </div>
    
  );
}

export default MoviesCard;