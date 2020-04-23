import React, { Component } from "react";
//Input:liked:boolean
//Output:onClick

class Like extends Component {
  render() {
    let likeclass = "fa fa-heart";
    if (!this.props.Liked) likeclass += "-o";

    return (
      <i
        onClick={this.props.onlike}
        className={likeclass}
        style={{ cursor: "pointer" }}
        aria-hidden="true"
      ></i>
    );
  }
}
export default Like;
