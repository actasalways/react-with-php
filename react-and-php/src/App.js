import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    text: "",
  };

  handleAdd = async (e) => {
    await this.setState({
      text: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state.text);

    let formData = new FormData();
    formData.append("text", this.state.text);
    const url = "http://localhost:80/react-with-php/react-backend/";


    axios.post(url, formData )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };


  render() {
    return (
      <div className="App-header">
        <input
          onChange={this.handleAdd}
          className="form-control"
          type="text"
          id="text"
          placeholder="Add some Text"
        />
        <br />
        <button
          onClick={this.handleSubmit}
          className="btn btn-success"
          id="submit"
        >
          Save
        </button>
      </div>
    );
  }
}

export default App;
