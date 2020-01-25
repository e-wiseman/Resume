class ProjectPage extends React.Component {
    render() {
        return (
            <div className="main-bg light-text">
                <h2 className="p">Projects <i class="fas fa-code"></i></h2>
                <div className="boxes p">
                    <div className="box-sm-full box-lg-4">
                        <div className="project">
                            <a href="https://github.com/not-so-wiseman/Reciply">
                                <img src="/src/assets/Projects/Reciply/logo.png"/>
                                <h3 className="reciply">Reciply</h3>
                                <p>A Mobile Recipe Book</p>
                            </a>
                        </div>
                    </div>
                    <div className="box-sm-full box-lg-4 ml-lg mt-sm">
                        <div className="project">
                            <a href="https://github.com/not-so-wiseman/Reciply">
                                <h3 className="this-website">This Website</h3>
                                <p>Built using React js and custom CSS</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<ProjectPage />, document.getElementById('projects-page'))