import React from "react";
import { Link, withRouter } from "react-router-dom";
import Search from "./Search.js";

const Navbar = props => {
    const { onSubmit, onChange, content } = props;
    return (
        <nav className="nav-wrapper pink darken-2">
            <div className="container">
                <a className="left brand-logo">My Mod List</a>
                {/* TODO: Link to a module name after entering it  */}
                <ul className="right">
                    <li>
                        <Search
                            onSubmit={onSubmit}
                            onChange={onChange}
                            content={content}
                        />
                    </li>
                    <li>
                        {/* Actually outputs an anchor tag when u inspect. Just prevents default action - requesting from server
                    from happening when clicking on these anchor tags. Instead just loads the component */}
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default withRouter(Navbar);
