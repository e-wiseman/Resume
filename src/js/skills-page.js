class Skill extends React.Component {
    render() {
        return (
            <div className="skill">
                <div className="logo">
                    <p className={ this.props.status }><i className={ this.props.value.icon }></i></p>
                </div>
                
                <div className="side-by-side">
                    <p className="skill-name" className={ this.props.status }>{ this.props.value.name }</p>
                    <p className="skill-level text-center teal" >{ this.props.value.level }</p>
                </div>
                <p className="text-justify">{ this.props.value.description }</p>
            </div>
        )
    }
}

class SkillsPage extends React.Component {
    state = {
        position: 1,
        skills: null,
        loaded: false
    };

    renderSkill = (index, colour) => {
        let render;
        if( index >= 0 && index <= this.state.skills.length - 1){
            let skill = this.state.skills[ index ];
            render = <Skill status={ colour } value={ skill } />;
        }
        else {
            render = <div></div>;
        }    
        return(
            <div>{render}</div>
        )
    }

    arrowNext = (e) => {
        if( this.state.position < (this.state.skills.length - 1) ){
            let index = this.state.position + 1;
            this.setState({
                position: index
            });
            this.state.position = this.state.position + 1;
        }
    }

    arrowBack = (e) => {
        if( this.state.position > 0 ){
            let index = this.state.position - 1;
            this.setState({
                position: index
            });
            this.state.position = this.state.position - 1;
        }
    }

    componentDidMount() {
        fetch('/src/assets/json/skills.json')
          .then(response => response.json())
          .then(skills => this.setState({ skills, loaded: true }));
    };

    render() {
        return (
            <div id="skills" className="page container grid-lg">
                <h2 className="text-center page-heading">Skills <i className="fas fa-check"></i></h2>
                <div className="columns gap-less">
                    <div className="column col-auto">
                        <a className="c-hand" onClick={ this.arrowBack }>
                            <p className="arrow"><i className="fas fa-arrow-left"></i></p>
                        </a>
                    </div>

                    <div className="column col-3 hide-sm show-xl">
                        { this.state.loaded ? this.renderSkill(this.state.position - 1, "deactive") : "loading..." }
                    </div>
                    <div className="column col-mx-auto col-3 col-sm-8">
                        { this.state.loaded ? this.renderSkill(this.state.position, "active") : "loading..." }
                    </div>
                    <div className="column col-3 hide-sm show-xl">
                        { this.state.loaded ? this.renderSkill(this.state.position + 1, "deactive") : "loading..." }
                    </div>

                    <div className="column col-auto">
                        <a className="c-hand" onClick={ this.arrowNext }>
                            <p className="arrow"><i className="fas fa-arrow-right"></i></p>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}


ReactDOM.render(<SkillsPage />, document.getElementById('skills-page'))