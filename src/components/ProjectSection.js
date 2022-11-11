import React from "react";
import './styles/Projects.css';
import ProjectBlock from './ProjectBlock';
import ProjectTech from './ProjectTech'
import TemplateSVG from '../images/template.svg';

const portfolioProject = {
    image: TemplateSVG,
    title: "Portfolio",
    desc: "What you are currently viewing",
    technologies: [
        "javascript",
        "react"
    ]
}

const testProject2 = {
    image: TemplateSVG,
    title:"Test Project 2",
    desc: "another test project",
    technologies: [
        "rust",
        "bevy",
        "javascript",
    ]
}




class ProjectSection extends React.Component {

    constructor() {
        super()
        this.handleHover = this.handleHover.bind(this);

        this.triggerJavascript = React.createRef();
        this.triggerReact = React.createRef();
        this.triggerUnity = React.createRef();
        this.triggerRust = React.createRef();
        this.triggerBevy = React.createRef();
        this.triggerRest = React.createRef();
        this.triggerJava = React.createRef();
    }




    handleHover(type, techs) {
        console.log(techs);
        techs.forEach(element => {
            switch (element) {
                case 'javascript':
                    console.log("triggered js");
                    this.triggerJavascript.current.hoverStatus(type);
                    break;
                case 'react':
                    this.triggerReact.current.hoverStatus(type);
                    break;
                case 'unity':
                    this.triggerUnity.current.hoverStatus(type);
                    break;
                case 'rust':
                    this.triggerRust.current.hoverStatus(type);
                    break;
                case 'bevy':
                    this.triggerBevy.current.hoverStatus(type);
                    break;
                case 'rest':
                    this.triggerRest.current.hoverStatus(type);
                    break;      
                case 'java':
                    this.triggerJava.current.hoverStatus(type);
                    break;     
            }
        });
    }

    render() {


        return(
            <div>
                <h2>PROJECTS</h2>
                <ProjectTech title={"JavaScript"} ref={this.triggerJavascript} />
                <ProjectTech title={"React"} ref={this.triggerReact} />
                <ProjectTech title={"Unity"} ref={this.triggerUnity} />
                <ProjectTech title={"Rust"} ref={this.triggerRust} />
                <ProjectTech title={"Bevy"} ref={this.triggerBevy} />
                <ProjectTech title={"REST API"} ref={this.triggerRest} />
                <ProjectTech title={"Java"} ref={this.triggerJava} />

                <ProjectBlock data={portfolioProject} cb={this.handleHover} />
                <ProjectBlock data={testProject2} cb={this.handleHover}/>
            </div>
        )
    }
}

export default ProjectSection;