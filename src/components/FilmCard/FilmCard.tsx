import React from "react";
import { Film } from "../../models/film";
import "./FilmCard.css";
import Card from "../../UI/Card/Card";

const FilmCard: React.FC<{ film: Film; onClick: () => void }> = (props) => {
  return (
    <div className="film-card-container" onClick={props.onClick}>
      <Card>
        <img src={props.film.Poster} alt="Oops... Something went wrong" />
        <h2>
          <b>{props.film.Title}</b>
        </h2>
        <p>{`Year: ${props.film.Year}`}</p>
      </Card>
    </div>
  );
};

export default FilmCard;
