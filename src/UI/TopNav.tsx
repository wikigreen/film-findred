import React, { useEffect, useState } from "react";
import "./TopNav.css";
import { NavLink } from "react-router-dom";
import Input from "./Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, clearFilms, fetchFilmsPage, RootScannerState} from "../store";

const TopNav: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [searchTermInput, setSearchTermInput] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const currentPageNumber: number = useSelector((state: RootScannerState) => {
    return state.currentPage;
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchTermInput !== "") {
        dispatch(clearFilms());
        console.log("clear films");
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchTermInput, dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchTermInput !== "") {
        dispatch(fetchFilmsPage({currentSearchTerm: searchTermInput, pageNumber: currentPageNumber}));
        console.log("fetch filmss");
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchTermInput, dispatch, currentPageNumber]);

  const handleFormBlur = () => {
    setIsFocused(false);
  };

  const handleFormFocus = () => {
    setIsFocused(true);
  };

  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTermInput(event.target.value);
  };

  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/film">Film</NavLink>
          </li>
          <li className="top-nav-input-width">
            <div className="top-nav-input-wrapper">
              <Input
                inputOnBlur={handleFormBlur}
                inputOnFocus={handleFormFocus}
                inputType="text"
                inputOnChange={emailChangeHandler}
                showLabel={!isFocused && searchTermInput === ""}
              />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default TopNav;
