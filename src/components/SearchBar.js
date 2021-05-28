import React from "react";
import { Link } from "react-router-dom";

class SearchBar extends React.Component {
  handleFormSubmit = (event) => {
    event.PreventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className="form-row mb-5">
          <div className="col-10">
            <input
              type="text"
              className="form-control"
              placeholder="Search Movie"
              onChange={this.props.searchMovieProp}
            ></input>
          </div>
          <div className="col-15" style={{ marginTop: "-35px" }}>
            <Link
              to="/add"
              type="button"
              className="btn btn-md btn-danger"
              style={{ float: "right" }}
            >
              Add Movie
            </Link>
          </div>
        </div>
      </form>
    );
  }
}

export default SearchBar;
