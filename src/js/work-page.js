class WorkPage extends React.Component {

    state = {
        data: null,
        loaded: false
    };

    renderJobs(){
        let jobs = this.state.data.map((job) =>
            <div className="timeline-item">
                <div className="timeline-left">
                    <a className="timeline-icon"></a>
                </div>
                <div className="timeline-content">
                    <p className="info"><i className="fas fa-calendar-alt"></i>{ job.date }</p>
                        <div className="columns">
                            <div className="column col-3 col-sm-11">
                                <div className="job-image">
                                    <img src={ job.logo }/>
                                </div>
                            </div>
                            <div className="column col-9 col-sm-11">
                                <h3>{ job.companyName }</h3>
                                <h2>{ job.jobTitle }</h2>
                                <p className="info">
                                    <i className="fas fa-map-marked-alt"></i> { job.location }
                                </p>
                                <p className="job-description">
                                    { job.description }
                                </p>
                            </div>
                        </div>
                </div>    
            </div>      
        );
        return (
            <div className="timeline">{ jobs }</div>
        )
    }

    componentDidMount() {
        fetch('/src/assets/json/jobs.json')
          .then(response => response.json())
          .then(data => this.setState({ data, loaded: true }));
    };

    render() {
        return (
            <div id="workexperiance" className="page container grid-lg">
                <h2 className="text-center page-heading">Work Experience <i className="fas fa-briefcase"></i></h2>
                { this.state.loaded ? this.renderJobs() : "loading" }    
            </div>

        )
    };
}


ReactDOM.render(<WorkPage />, document.getElementById('work-page'))