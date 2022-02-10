import React from "react";
import "./AddCard.css";
import Card from "../../UI/Card/Card";

const FilmCard: React.FC<{onClick: () => void}> = (props) => {
  return (
    <div className="more-films-card" onClick={props.onClick}>
      <Card>
        <h1>More films</h1>
      </Card>
    </div>
  );
};

export default FilmCard;
