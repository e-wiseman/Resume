class ContactPage extends React.Component {
    download = (e) => {
        window.location.href = '/src/assets/wiseman.pdf';
    }

    render() {
        return (
            <div id="contact" className="page container grid-lg">
                <h2 className="text-center page-heading">Contact <i className="far fa-comment"></i></h2>
                <div className="columns gap-less">
                    <div className="column col-12 show-sm hide-xl">
                        <div id="linkedin" className="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="vertical" data-theme="light" data-vanity="emilydwiseman">
                            <a className="LI-simple-link" href='https://ca.linkedin.com/in/emilydwiseman?trk=profile-badge'>Emily Wiseman</a>
                        </div>
                    </div>
                    <div className="column col-sm-12 col-6 ">
                        <div className="contact">
                            <p className="contact-text big">Have an internship available?</p>
                            <p className="contact-text smol">Give me a call or send me an email, I'd love to hear from you!</p>
                            <div className="box-wrap">
                                <a><p><i className="fas fa-phone"></i> 1(709)769-0969</p></a>
                            </div>
                            <div className="box-wrap">
                                <a><p><i className="far fa-envelope"></i> ewiseman@mun.ca</p></a>
                            </div>
                            <button className="btn text-center" onClick={ this.download }>Download my Resume! <i className="fas fa-file-download"></i></button>
                        </div>
                    </div>
                    <div className="column col-6 hide-sm show-xl">
                        <div id="linkedin" className="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="vertical" data-theme="light" data-vanity="emilydwiseman">
                            <a className="LI-simple-link" href='https://ca.linkedin.com/in/emilydwiseman?trk=profile-badge'>Emily Wiseman</a>
                        </div>
                    </div>
                </div>
                <script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>
            </div>
        )
    }
}


ReactDOM.render(<ContactPage />, document.getElementById('contact-page'))