import React from "react";
import './Project.css'
import { Outlet, Link } from "react-router-dom";

function Pro() {
    return (
        <>
            <div class="pr" id="projects">
                <div class="div1">
                    <h2> My Project</h2>
                    <p>My name is Hoda , i live in cairo .this is my project in react New. </p>
                </div>
                <nav >
                    <div class="div2">
                        <ul className="zz">
                            <li>
                                <Link to="/" class="st1 py-3" id="st11">1st Section</Link>
                            </li>
                            <li>
                                <Link to="/form" class="st2 py-3">2st Section</Link>
                            </li>
                            <li>
                                <Link to="/text" class="st3 py-3">3st Section</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <Outlet />
        </>
    );
}
export default Pro;
