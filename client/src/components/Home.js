import React, { Component } from "react";
import axios from "axios";
import { URL } from "../constants/index.js"

class Home extends Component {
    state = {
        courseList: [],
        deleteContent: "",
        changeFromContent: "",
        changeToContent: ""
    };

    

    courseAfterChangeInput = e => {
        this.setState({
            changeToContent: e.target.value
        });
    };

    courseBeforeChangeInput = e => {
        this.setState({
            changeFromContent: e.target.value
        });
    };

    deleteInputChange = e => {
        this.setState({
            deleteContent: e.target.value
        });
    };

    handleSubmitDelete = e => {
        e.preventDefault();
        this.deleteModule();
        this.setState({
            deleteContent: ""
        });
    };

    handleSubmitChange = e => {
        e.preventDefault();
        this.changeModule();
        this.setState({
            changeFromContent: "",
            changeToContent: ""
        });
    };

    async changeModule() {
        let currCode = this.state.changeFromContent;
        let codeToChangeTo = this.state.changeToContent;
        const course = this.state.courseList.find(c => c.name === currCode)
        if (course) {
            const url = URL + course.id;
            const json = JSON.stringify({ name: codeToChangeTo });
            await axios
                .put(url, json, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                .then(function(response) {
                    alert(`${currCode} has been updated to ${codeToChangeTo}`);
                })
        } else { 
            alert(`${currCode} does not exist in the list`);
        }
        this.populateCourses();
    }

    async deleteModule() {
        let code = this.state.deleteContent;
        const course = this.state.courseList.find(c => c.name === code)
        if (course) {
            const url = URL + course.id;
            await axios
                .delete(url)
                .then(function(response) {
                    alert(`${code} has been deleted`);
                })
        } else { 
            alert(`${code} does not exist in the list`);
        }
        this.populateCourses();
    }

    populateCourses() {
        axios.get(URL).then(res => {
            this.setState({
                courseList: res.data
            });
        });
    }

    componentDidMount() {
        this.populateCourses();
    }

    render() {
        return (
            <div>
            &nbsp;
            &nbsp;
            <div className="container">
                <h3> List of Modules </h3>
                    <div className="todoForm form-horizontal ">
                        {" "}
                        {this.state.courseList.map(item => (
                            <div className="form-group" key={item.id}>
                                {item.name} 
                            </div>
                        ))}
                        &nbsp;
                        <h3> Delete Module </h3>
                        <form onSubmit = {this.handleSubmitDelete}>
                            <input onChange = {this.deleteInputChange} value = {this.state.deleteContent} type="text" className="form-control" placeholder="Which course would you like to delete? (Note: Case sensitive)" />
                            <input onSubmit = {this.handleSubmitDelete} type="submit" value="Delete Item" className="btn btn-danger" />
                        </form>
         
                        &nbsp;
                        &nbsp;
                        <h3> Change Module Name </h3>
                        <form onSubmit = {this.handleSubmitChange}>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Course to Change</label>
                                <div className="col-sm-10">
                                    <input onChange = {this.courseBeforeChangeInput} value = {this.state.changeFromContent} type="text" className ="form-control" id="inputCourseToChange" placeholder="Any Valid Module in List: e.g. CS1010S"/>
                                </div>
                                <label className="col-sm-2 col-form-label">New Course Code</label>
                                <div className="col-sm-10">
                                    <input onChange = {this.courseAfterChangeInput} value = {this.state.changeToContent} type="text" className="form-control" id="inputCourseToChangeTo" placeholder="Module to Change to e.g. CS2102"/>
                                </div>
                            </div>
                        <input onSubmit = {this.handleSubmitChange} type="submit" value="Change Module" className="btn btn-primary" />
                        </form>
                    </div>
                </div>
                </div>

        );
    }
}


export default Home;