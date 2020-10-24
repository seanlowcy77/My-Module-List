import React from "react";
import { withRouter } from "react-router-dom";
const Search = props => {
    const { onSubmit, onChange, content } = props;
    return (
        <div className="center row">
            <div className="col s12">
                <div className="row">
                    <div className="input-field col s6 s12 black-text">
                        <form onSubmit={onSubmit}>
                            <i className="white-text material-icons prefix">
                                search
                            </i>
                            <input
                                onChange={onChange}
                                type="text"
                                className="white-text"
                                // https://youtu.be/aC-3c7ai5QI?list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&t=552
                                // Ensures that the value is checked with the current state
                                value={content}
                                name="moduleCode"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(Search);
