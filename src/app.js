import React, { Component } from "react";

import { connect } from "react-redux";

import API from "../utils/api";
import Home from "./screens/containers/home";
import Header from "./sections/components/header";
import SuggestionList from "./videos/containers/suggestion-list";
import CategoryList from "./videos/containers/category-list.js";
import Movie from "./screens/containers/movie";
import Search from "./sections/containers/search";

class AppLayout extends Component {
  async componentDidMount() {
    const categoryList = [
      { id: "action", name: "Action" },
      { id: "crime", name: "Crime" },
      { id: "musical", name: "Musical" },
      { id: "comedy", name: "Comedy" },
      { id: "drama", name: "Drama" },
      { id: "thriller", name: "Thriller" },
      { id: "horror", name: "Horror" },
      { id: "romance", name: "Romance" },
      { id: "mystery", name: "Mystery" },
      { id: "adventure", name: "Adventure" },
      { id: "fantasy", name: "Fantasy" },
      { id: "sport", name: "Sport" },
      { id: "history", name: "History" },
      { id: "documentary", name: "Documentary" },
      { id: "war", name: "War" },
      { id: "animation", name: "Animation" },
      { id: "western", name: "Western" }
    ];
    this.props.dispatch({
      type: "SET_CATEGORY_LIST",
      payload: {
        categoryList
      }
    });
    const suggestionList = await API.getSuggestionByCategory('action');
    this.props.dispatch({
      type: "SET_SEGGESTION_LIST",
      payload: {
        categoryMovies: suggestionList
      }
    });
  }
  render() {
    if (this.props.selectedMovie) {
      return <Movie />;
    }
    return (
      <Home>
        <Header />
        <Search />
        <CategoryList />
        <SuggestionList />
      </Home>
    );
  }
}

function mapStateToProps(state) {
  return {
      selectedMovie: state.selectedMovie,
      categoryMovies: state.categoryMovies
  };
}

export default connect(mapStateToProps)(AppLayout);
