import React from 'react';


class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  // handleInputChange(e) {
  //   this.props.getYouTubeVideos(e.target.value);
  //   this.setState({
  //     value: e.target.value
  //   });
  // }

  render() {
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          //value={this.state.value}
          onChange={(e) => this.props.handleSearchInputChange(e.target.value)}
        />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
  // return (
  //   <form className="search-bar form-inline"
  //     value={this.state.searchContent}
  //     onSubmit={ this.handleSubmit }>
  //     <input className="form-control" type="text"
  //       value={this.state.searchContent}
  //       onChange={this.handleInputChange}/>
  //     <button className="btn hidden-sm-down">
  //       <span className="glyphicon glyphicon-search"></span>
  //     </button>
  //     <p>{this.state.searchContent}</p>
  //   </form>
  // );

  // handleInputChange(event) {
  //   this.setState({
  //     searchContent: event.target.value
  //   });
  // }
  // handleSubmit(event) {
  //   event.preventDefault();
  //   this.props.searchHandler(event.target.value);
  //   this.setState({
  //     searchContent: ''
  //   });
  // }

}

export default Search;
