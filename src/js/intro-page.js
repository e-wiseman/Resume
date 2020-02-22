class Intro extends React.Component {
    tagline = "A third year computer engineering student from Newfoundland, Canada. I have 16 months of internship experience and I am looking for my next adventure!"
    
    navigateToContact(){
        let target = $( "#contact" ).position().top;
        $( window ).scrollTop( target );
    }

    render() {
        return (
            <div className="container grid-lg">
                <div className="columns gap-less">
                    <div className="column col-mx-auto col-sm-12 col-8">
                        <div id="intro" className="animated bounceInLeft delay-1s">
                            <h1 className="">Hi, I'm Emily!</h1>
                            <p className="">{ this.tagline }</p>
                            <button className="btn text-center hide-sm show-xl" onClick={ this.navigateToContact }>hire me!</button>
                        </div>
                    </div>
                    <div className="column col-mx-auto text-center col-sm-12 col-4 p-relative">
                        <button id="hire-me" className="btn text-center show-sm hide-xl animated fadeIn delay-1s" onClick={ this.navigateToContact }>hire me!</button>
                        <img id="avatar" src="/src/assets/Emily_coloured.svg"></img>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Intro />, document.getElementById('intro-page'))