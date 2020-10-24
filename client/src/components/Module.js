import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { URL } from "../constants/index.js"

class Module extends Component {
    
    async addCourse(code) {
        const json = JSON.stringify({ name: code });

        await axios
            .post(URL, json, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(function(response) {
                alert(`${code} has been added to the list!`);
            })
            .catch(function(error) {
                alert(
                    `${code} is in the list already or has to be of minimum 6 characters`
                );
            });
        this.props.history.push("/")
    }
    render() {
        if (!this.props.code) {
            this.props.history.push("/")
            alert("Please use the search bar!");
        }

        return (
            <div>
                <div className = "container" >
                    &nbsp;
                    &nbsp;
                    <h1 className="center">{this.props.code}</h1>
                    <p>{this.props.desc}</p>
                    <p>Number of Module Credits: {this.props.moduleCredit}</p>
                    <p>Prerequisites: {this.props.prereq ? this.props.prereq : "NIL"}</p>

                    <button
                        onClick={() => this.addCourse(this.props.code)}
                        className="waves-effect waves-light btn center .active">
                        Add Module To List
                    </button>
                </div>
            </div>
        );
    }
}

export default withRouter(Module);
