import React from "react";

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
          <div className="col-15" style={{marginTop: "-35px"}}>
            <button
              type="button"
              className="btn btn-md btn-danger"
              style={{ float: "right"}}
            >
              Add Movie
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default SearchBar;
