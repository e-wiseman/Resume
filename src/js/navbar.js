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
                <nav>
                    <p className="brand">Emily Wiseman</p>
                    <div className="hide-mobile group">
                        <a className="nav-link nav-text"><p>Skills</p></a>
                        <a className="nav-link nav-text"><p>Work Experieance</p></a>
                        <a className="nav-link nav-text"><p>Projects</p></a>
                    </div>
                    <div id="socialMedia" className="group">
                        <a className="nav-link" href="http://www.linkedin.com/in/emilydwiseman/">
                            <i className="nav-icon fab fa-linkedin"></i>
                        </a>
                        <a className="nav-link" href="http://www.linkedin.com/in/emilydwiseman/">
                            <i className="nav-icon fab fa-github"></i>
                        </a>
                    </div>
                    <a id="menu" onClick={this.dropDownEvent}><i className="nav-icon hide-laptop fas fa-bars"></i></a>
                </nav>
                <div id="nav-dropdown" className="group nav-link">
                    <a className="nav-text"><p>Skills</p></a>
                    <a className="nav-text"><p>Work Experieance</p></a>
                    <a className="nav-text"><p>Projects</p></a>
                </div>
      
            </div>
        )
    }
}

ReactDOM.render(<NavBar />, document.getElementById('navbar'))