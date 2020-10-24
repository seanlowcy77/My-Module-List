import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import { Route, Switch, withRouter } from "react-router-dom";
import Module from "./components/Module";
import axios from "axios";

class App extends Component {
    state = {
        content: "",
        code: "",
        desc: null,
        prereq: null,
        moduleCredit: null
    };

    handleChange = e => {
        this.setState({
            content: e.target.value
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        this.populateModuleInfo();
        this.setState({
            content: ""
        });
    };

    populateModuleInfo() {
        let code = this.state.content.toUpperCase();
        this.setState({
            code
        });
        axios
            .get(
                "https://api.nusmods.com/v2/2020-2021/modules/" + code + ".json"
            )
            .then(res => {
                this.setState({
                    desc: res.data.description,
                    prereq: res.data.prerequisite,
                    moduleCredit: res.data.moduleCredit
                });
                this.props.history.push(`/${this.state.code}`);
            })
            .catch(error => {
                alert("The module does not exist");
                this.props.history.push(`/`);
            });
    }

    render() {
        return (
            <div>
                <Navbar
                    onSubmit={this.handleSubmit}
                    onChange={this.handleChange}
                    content={this.state.content}
                />
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route
                        path="/:moduleId"
                        render={() => (
                            <Module
                                desc={this.state.desc}
                                code={this.state.code}
                                moduleCredit={this.state.moduleCredit}
                                prereq={this.state.prereq}
                            />
                        )}
                    />
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);
