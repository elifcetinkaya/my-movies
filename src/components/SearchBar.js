import React from "react";

class SearchBar extends React.Component {
  state = {
    searchQuery: "",
  };

  handleFormSubmit = (event) => {
    event.PreventDefault();
  };
  
  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className="form-row mb-5">
          <div className="col-12">
            <input
              type="text"
              className="form-control"
              placeholder="Search Movie"
              value={this.state.searchQuery}
              onChange={(event) =>
                this.setState({ searchQuery: event.target.value })
              }
            ></input>
          </div>
        </div>
      </form>
    );
  }
}

export default SearchBar;
