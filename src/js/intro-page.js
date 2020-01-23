class IntroPage extends React.Component {

    tagline = "A  third year computer engineering student from Newfoundland, Canada. I have 16 months of internship experienace"
    subline = "I am looking for my next adventure!"


    render() {
        return (
            <div className="page">
                    <img className="hide-mobile" id="id-photo" src="/src/assets/emily.svg"/>
                    <div>
                        <h1>Hi, I'm Emily!</h1>
                        <p className="mt mb">{ this.tagline } and <span className="text-emphasis">{ this.subline }</span></p>
                        <img className="hide-laptop" id="id-photo" src="/src/assets/emily.svg"/>
                        <div className="button-group">
                            <a className="button main left" href="#">
                                <i className="far fa-envelope"></i>
                                <p>ewiseman@mun.ca</p>
                            </a>
                            <a className="button main" href="#">
                                <i className="fas fa-file-download"></i>
                                <p>Download My Resume</p>
                            </a>
                        </div>
                    </div>
            </div>
        )
    }
}

ReactDOM.render(<IntroPage />, document.getElementById('intro-page'))