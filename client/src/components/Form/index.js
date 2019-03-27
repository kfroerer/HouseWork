import React from "react";
import "./style.css";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="5" {...props} />
    </div>
  );
}

export function Date(props) {
  return (
    <div className="form-group">
      <label for="dueDate">First Due Date:</label>
      <input className="form-control" id="dueDate" type="date" {...props} />
    </div>
  );
}

export function Frequency(props) {
  return (
    <div className="form-group">
      <label for="freqOptions">Frequency:</label>
      <select className="form-control" id="freqOptions" {...props}>
        <option value= "Daily">Daily</option>
        <option value= "Weeklyu">Weekly</option>
        <option value= "Bi-Weekly">Bi-Weekly</option>
        <option value= "Monthly">Monthly</option>
        <option value= "Annually">Annually</option>
      </select>
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn">
      {props.children}
    </button>
  );
}
