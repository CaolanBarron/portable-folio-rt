import React from "react";

class LinkBall extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <a href = {this.props.data.link}>
                <img src={this.props.data.image} alt={"Logo for: " + this.props.data.link}></img>
            </a>
        );
    }

}

export default LinkBall;