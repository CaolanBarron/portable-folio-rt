import React from "react";


class ProjectBlock extends React.Component {

    constructor(props) {
        super(props);
        this.handleMouseIn = this.handleMouseIn.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }


    handleMouseIn() {
        this.props.cb("in", this.props.data.technologies);
    }

    handleMouseOut() {
        this.props.cb("out", this.props.data.technologies);
    }

    render() {
        return(
            <a className="project-block" href="projects/testProject" 
                onMouseEnter={this.handleMouseIn} onMouseLeave={this.handleMouseOut}>
                <img src={this.props.data.image}/>
                <span>{this.props.data.title}</span>
                <span>{this.props.data.desc}</span>
            </a>
        )
    }
}

export default ProjectBlock;