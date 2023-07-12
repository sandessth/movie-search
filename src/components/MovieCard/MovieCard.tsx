import "./MovieCard.css";

function MovieCard() {
  return (
    <div className="card-container">
      <div className="card-img-container">
        <img
          className="card-img"
          src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQAiGoLod_ORCVwf0Tf_Fk1DPmZBA2OPE0B37OsKrEsMCJheY0R"
          alt="movie-card"
        />
      </div>
      <div className="card-details">
        <div>
          {<span className="title"> Guardians of the Galaxy Vol. 2 </span>}
        </div>

        <div>
          <span className="year"> 2017</span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
