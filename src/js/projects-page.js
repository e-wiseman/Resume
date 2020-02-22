class Project extends React.Component {

    renderTech( technologies ){
        const techList = technologies.map( (tech) =>
            <p className="chip">{ tech }</p>
        ) 
        return (
            <div className="flex">{ techList }</div>
        )
    }

    render() {
        return (
            <div className="column p-centered col-4 col-sm-11">
                <div className="card">
                    <div className="card-header">
                        <div className="card-header">
                            <img src={ this.props.prj.photo } className="project-logo"/>
                        </div>
                        <div className="card-subtitle">
                            { this.renderTech( this.props.prj.technology ) }
                        </div>
                        <div className="card-subtitle text-gray">
                            { this.props.prj.tagline }
                        </div>
                    </div>
                    <div className="card-body">
                        { this.props.prj.description }
                    </div>
                    <div className="card-footer">
                        <a href={ this.props.prj.link } className="teal btn c-hand">
                            <i className="nav-icon fab fa-github c-hand"></i> Visit on Github!
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

class ProjectPage extends React.Component {
    state = {
        projects: null,
        loaded: false
    };

    componentDidMount() {
        fetch('/src/assets/json/projects.json')
          .then(response => response.json())
          .then(projects => this.setState({ projects, loaded: true }));
    };

    renderProjects (){
        let projects = this.state.projects.map((project) =>
            <Project prj={ project } />
        )
        return (
            <div className="columns">{ projects }</div>
        )
    }

    render() {
        return (
            <div id="projects" className="page container grid-lg">
                <h2 className="text-center page-heading">Projects <i className="fas fa-code"></i></h2>
                { this.state.loaded ? this.renderProjects() : "loading..." }
            </div>
        )
    }
}


ReactDOM.render(<ProjectPage />, document.getElementById('projects-page'))