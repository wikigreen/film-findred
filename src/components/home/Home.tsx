import React from "react";
import { Film } from "../../models/film";
import FilmCard from "../FilmCard/FilmCard";
import "./Home.css";
import AddCard from "../AddCard/AddCard";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {AppDispatch, incrementPageNumber, RootScannerState} from "../../store";

const Home: React.FC = () => {
  const navigation = useNavigate();
  const films: Film[] = useSelector((state: RootScannerState) => {
    return state.films;
  });

  const dispatch = useDispatch<AppDispatch>();

  const cardClickHandler = (id: string) => {
    navigation(`../film/${id}`, { replace: true });
  };

  const handleAddFilmsClick = () => {
    dispatch(incrementPageNumber());
  };

  return (
    <div className="film-cards">
      {films.map((film) => {
        return (
          <FilmCard
            key={film.imdbID}
            film={film}
            onClick={() => cardClickHandler(film.imdbID)}
          />
        );
      })}
      <AddCard onClick={handleAddFilmsClick} />
    </div>
  );
};

export default Home;
