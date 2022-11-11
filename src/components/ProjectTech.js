import React from "react";


class ProjectTech extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            titleHovered: "",
            ballHovered: "",
        }
    }

    

    hoverStatus(status) {
        console.log("triggered");
        if (status === "in")
        {
            this.setState({
                titleHovered: "hovered",
                ballHovered: "ball-hovered",
            });
        } else {
            this.setState({
                titleHovered: "",
                ballHovered: "",
            });
        }
    }

    render() {
        return (
            <div className={"tech-title " + this.state.titleHovered}>
                <span>{this.props.title}</span>
                <span className={"tech-ball " + this.state.ballHovered}></span>
            </div>
        )
    }
}

export default ProjectTech;