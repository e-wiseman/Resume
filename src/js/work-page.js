class WorkPage extends React.Component {

    parseTxtFile( fileName ){
        let xhr = new XMLHttpRequest;
        xhr.open('GET', fileName, false);
        xhr.send();
        let text = xhr.responseText.toString();
        
        let paragraphs = [];
        let startPos = 0;
        for(let i = 0; i < text.length-1; i++){
            if( text[i] == '\n' ){
                paragraphs.push( <p className="blog-post dark-text">{ text.substr(startPos, i) }</p> );
                startPos = ( i + 1 );
            }
        }
        return paragraphs;
    }

    showLocation( job ){
        return (
            <div className="info-group">
                <i className="info main-text fas fa-map-marker-alt"></i>
                <p className="info dark-text">{ job.location }</p>
            </div>
        )
    }

    showDate ( job ){
        const dates = job.dates.map((date) =>
            <p className="info dark-text">{ date }</p>
        ); 

        return ( 
            <div className="info-group">
                <i className="info main-text far fa-calendar-alt"></i>
                <div>{ dates }</div>
            </div>
        )
    }

    showBlog ( job ){
        let blog = this.parseTxtFile( job.blog );
        console.log(blog);
        return (
            <div className="">
                <div>{ blog }</div>
                <a id={ job.companyName } className="button mt" href="#">Read More</a>
            </div>
        )
    }

    showJob ( job ){
        return(
            <div className="mt page">
                <div className="hide-mobile pr">
                    <img className="mb" src={ job.logo } />
                    <div>{ this.showLocation( job ) }</div>
                    <div>{ this.showDate( job ) }</div>
                </div>
                <div className="">
                    <h3 className="main-text">{ job.companyName }</h3>
                    <h2 className="dark-text mb">{ job.jobTitle }</h2>
                    <img className="hide-laptop" src={ job.logo } />
                    <div className="hide-laptop pt pb">
                        { this.showLocation(job) }
                        { this.showDate(job) }
                    </div>
                    { this.showBlog(job) }
                </div>
            </div>
        )
    }

    displayJobs (){
        const jobs = this.props.jobs.map((job) =>
            <div>{ this.showJob( job) }</div>
        ); 

        return (
        <div>{ jobs }</div>
        );
    }

    render() {
        return (
            <div className="light-bg">
                <h2 className="dark-text pt pl">Work Experience <i className="fas fa-briefcase"></i></h2>
                { this.displayJobs( this.props.jobs ) }        
            </div>
        )
    }
}

let JOBS = [
    {
        companyName: "Wind River Systems",
        jobTitle: "Web Development Intern",
        dates: ["January 2018 - August 2018", "January 2019 - April 2019"],
        location: "Ottawa, Ontario",
        logo: "/src/assets/wr-logo.png",
        assests: [""],
        blog: "/src/assets/windriver.txt"
    }
]

ReactDOM.render(<WorkPage jobs={JOBS} />, document.getElementById('work-page'))