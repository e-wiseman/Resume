class NavBar extends React.Component {
    show = false;

    dropDownEvent = () => {
        this.show = !(this.show);
        if( this.show == true){
            document.getElementById('nav-dropdown').setAttribute("style", "display: block;");
        }
        else {
            document.getElementById('nav-dropdown').setAttribute("style", "display: none;");
        }
    }

    render() {
        return (
            <div>
                <div className="hide-sm show-xl">
                    <header className="navbar">
                        <section className="navbar-section">
                            <a href="#" className="navbar-brand mr-2">Emily Wiseman</a>
                        </section>
                        <section className="navbar-center">
                            <div className="side-by-side">
                                <a href="#skills" className="navbar-link">Skills</a>
                                <a href="#workexperiance" className="navbar-link">Work Experiance</a>
                                <a href="#projects" className="navbar-link">Projects</a>
                            </div>
                        </section>
                        <section className="navbar-section">
                            <a href="http://www.linkedin.com/in/emilydwiseman/" className="btn btn-link">
                                <i className="nav-icon fab fa-linkedin"></i>
                            </a>
                            <a href="..." className="btn btn-link">
                                <i className="nav-icon fab fa-github"></i>
                            </a>
                        </section>
                    </header>
                </div>

                <div className="show-xs hide-md">
                    <header className="navbar">
                        <section className="navbar-section">
                            <a href="http://www.linkedin.com/in/emilydwiseman/" className="btn btn-link">
                                <i className="nav-icon fab fa-linkedin"></i>
                            </a>
                            <a href="..." className="btn btn-link">
                                <i className="nav-icon fab fa-github"></i>
                            </a>
                        </section>
                        <section className="navbar-center">
                            <a href="#" className="navbar-brand">Emily Wiseman</a>
                        </section>
                        <section className="navbar-section">
                            <a id="menu" onClick={this.dropDownEvent}><i className="nav-icon fas fa-bars"></i></a>
                        </section>
                    </header>
                </div>
                
            </div>
            
        )
    }
}

ReactDOM.render(<NavBar />, document.getElementById('navbar'))