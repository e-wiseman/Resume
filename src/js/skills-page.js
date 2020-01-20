class SkillsPage extends React.Component {
    makeTags ( element ){
        const skills = element.map((skillName) => 
            <span className="tag light-bg main-text">{ skillName }</span>
        );
        return (
            skills
        );
    }

    displayItem ( category ){
        const item = category.map((skillsCategory) =>
            <li className="d-flex-inline flex-wrap">
                <i className="light-text fas fa-arrow-right"></i>
                <p className="light-text">{ skillsCategory.name }</p>
                { this.makeTags( skillsCategory.skills ) }
            </li>
        );

        return (
            <ul className="pl-4">{ item }</ul>
        );
    }

    render() {
        return (
            <div className="main-bg">
                <div className="container pt-5 pb-5">
                    <h2 className="light-text">Skills <i className="fas fa-check"></i></h2>
                    <div className="d-md-flex justify-content-around">

                        <div className="p-3 text-center text-md-left">
                            <h3 className="light-text">Languages</h3>
                            { this.displayItem( this.props.data.languages ) }

                            <h3 className="light-text">Soft Skills</h3>
                            { this.displayItem( this.props.data.softSkills ) }
                        </div>

                        <div className="p-3 text-center text-md-left">
                            <h3 className="light-text">Web Development</h3>
                            { this.displayItem( this.props.data.webDev ) }
                        </div>

                    </div>
            </div>        
        </div>
        )
    }
}

let SKILLS = {
    languages: [
        {
            name: "Python",
            skills: [ "Work Experience", "Intermediate", "Projects" ]
        },
        {
            name: "Java",
            skills: [ "School", "Projects" ]
        },
        {
            name: "C/C++",
            skills: [ "School" ]
        },
        {
            name: "Bash Scripting",
            skills: [ "Work Experience", "Beginer" ]
        },
        {
            name: "Shell Scripting",
            skills: [ "Work Experience", "Intermediate" ]
        }
    ],

    webDev: [
        {
            name: "HTML & CSS",
            skills: [ "Work Experience", "Intermediate", "Projects" ]
        },
        {
            name: "Java Script & Type Script",
            skills: [ "Work Experience", "Projects" ]
        },
        {
            name: "Django",
            skills: [ "Work Experience" ]
        },
        {
            name: "Flask & HTTP Requests",
            skills: [ "Work Experience", "Intermediate" ]
        },
        {
            name: "Angular",
            skills: [ "Work Experience" ]
        },
        {
            name: "Vue.js",
            skills: [ "Work Experience" ]
        },
        {
            name: "React & React Native",
            skills: [ "Projects" ]
        },
        {
            name: "Firebase, Postgress, & MySQL databases",
            skills: [ "Work Experience", "Projects" ]
        }
    ],

    softSkills: [
        {
            name: "Experience working in Agile development",
            skills: [ "Work Experience" ]
        },
        {
            name: "Experience using JIRA & Bitbucket",
            skills: [ "Work Experience", "Intermediate" ]
        },
        {
            name: "Experience making & leading meetings",
            skills: [ "Work Experience" ]
        }
    ]
}

ReactDOM.render(<SkillsPage data={SKILLS} />, document.getElementById('skills-page'))