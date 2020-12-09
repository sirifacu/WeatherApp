import React from 'react';
import SearchBar from './SearchBar'

const Navbar = () => (
    <nav className="navbar navbar-dark bg-primary">
                                <div className="container">
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    {/*eslint-disable-next-line */}
                                    <a className="navbar-brand font-weight-bold ml-3 mr-auto" href="#">Weather APP</a>
                                    <div className="collapse navbar-collapse" id="navbarNav">
                                        <ul className="navbar-nav">
                                            <li className="nav-item active">
                                                {/*eslint-disable-next-line */}
                                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <SearchBar />
                                </div>
                            </nav>
)

export default Navbar;