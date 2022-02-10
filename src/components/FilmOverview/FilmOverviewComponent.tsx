import React, { useEffect, useState } from "react";
import "./FilmOverviewComponent.css";
import Card from "../../UI/Card/Card";
import { FilmOverview } from "../../models/filmOverview";
import "./FilmOverviewComponent.css";
import { useParams } from "react-router-dom";
import { getFilmById } from "../../api/api";

const FilmOverviewComponent: React.FC = () => {
  const params = useParams();

  const [film1, setFilm] = useState<FilmOverview>();

  useEffect(() => {
    getFilmById(params.filmid || "").then((r) => setFilm(r));
  }, [params.filmid]);

  return (
    <>
      <div className="film-overview-grid-container">
        <div className="film-overview-img-card-container">
          <Card>
            <div className="film-overview-img-container">
              <img
                className="film-overview-img"
                src={film1?.Poster}
                alt="Oops... Something went wrong"
              />
            </div>
          </Card>
        </div>
        <div>
          <Card>
            <h1 className="text-large">{film1?.Title}</h1>
          </Card>
        </div>
        <div>
          <Card>
            <table id="customers">
              <tr>
                <td>Year</td>
                <td>{film1?.Year}</td>
              </tr>
              <tr>
                <td>Runtime</td>
                <td>{film1?.Runtime}</td>
              </tr>
              <tr>
                <td>Genre</td>
                <td>{film1?.Genre}</td>
              </tr>
              <tr>
                <td>Director</td>
                <td>{film1?.Director}</td>
              </tr>
              <tr>
                <td>Writer</td>
                <td>{film1?.Writer}</td>
              </tr>
              <tr>
                <td>Actors</td>
                <td>{film1?.Actors}</td>
              </tr>
              <tr>
                <td>Language</td>
                <td>{film1?.Language}</td>
              </tr>
              <tr>
                <td>Country</td>
                <td>{film1?.Country}</td>
              </tr>
            </table>
          </Card>
        </div>
        <div>
          <Card>
            <h1 className="text-large">Plot</h1>
            <p className="text-medium">{film1?.Plot}</p>
          </Card>
        </div>
      </div>
    </>
  );
};

export default FilmOverviewComponent;
