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
                paragraphs.push( <p className="paragraph dark-text">{ text.substr(startPos, i) }</p> );
                startPos = ( i + 1 );
            }
        }
        return paragraphs;
    }

    showLocation( job ){
        return (
            <div className="flex-group">
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
            <div className="flex-group">
                <i className="info main-text far fa-calendar-alt"></i>
                <div>{ dates }</div>
            </div>
        )
    }

    showBlog ( job ){
        let blog = this.parseTxtFile( job.blog );
        return (
            <div className="">
                <div className="blog-post-hide">{ blog }</div>
                <a id={ job.companyName } className="button" href="#">Read More</a>
            </div>
        )
    }

    showJob ( job ){
        return(
            <div className="boxes mb">
                <div className="box-lg-4 mr hide-mobile">
                    <img className="fill" src={ job.logo } />
                    <div>{ this.showLocation( job ) }</div>
                    <div>{ this.showDate( job ) }</div>
                </div>
                <div className="box-lg-2 box-sm-full">
                    <h3 className="main-text">{ job.companyName }</h3>
                    <h2 className="dark-text pb">{ job.jobTitle }</h2>
                    <img className="fill hide-laptop" src={ job.logo } />
                    <div className="hide-laptop pb">
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
                <div className="page">{ this.displayJobs( this.props.jobs ) }</div>      
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
        logo: "/src/assets/Jobs/Wind River/logo.png",
        assests: [""],
        blog: "/src/assets/Jobs/Wind River/blog.txt"
    },
    {
        companyName: "Curtiss-Wright Defense Solutions",
        jobTitle: "Software Development Intern",
        dates: ["September 2019 - December 2019"],
        location: "Ottawa, Ontario",
        logo: "/src/assets/Jobs/Curtiss-Wright/logo.png",
        assests: [""],
        blog: "/src/assets/Jobs/Curtiss-Wright/blog.txt"
    }
]

ReactDOM.render(<WorkPage jobs={JOBS} />, document.getElementById('work-page'))