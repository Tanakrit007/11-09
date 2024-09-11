import React, { Component } from "react";
import Profiler from "./assets/profile.jpg"; // Ensure this path is correct
import StateInClass from "./StateInClass";
export default class Card extends Component {
  render() {
    return (
      <div>
        <h1>ข้อมูล</h1>
        <img className="TNK" src={Profiler} alt="user" />{" "}
        {/* Use Profiler here */}
        <p>name : {this.props.name}</p>
        <p>section : 66/53</p>
        <p>major : SE</p>
        <p>faculty : Science and Technology</p>
        <p>university : NPRU</p>
        <p>id : 664259007</p>
        <StateInClass />
      </div>
    );
  }
}
