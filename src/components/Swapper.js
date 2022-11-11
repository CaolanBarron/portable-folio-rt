import React from "react";
    import './styles/Swapper.css';


const topTitles = [
    "Driven",
    "Hardworking",
    "Team playing",
    "Creative",
    "Focused",
    "Problem solving",
    "Inquisitive",
    "Energetic"
]

const bottomTitles = [
    "Games designer",
    "Web developer",
    "Software designer",
    "Backend designer",
    "Java developer",
    "Unity developer",
    "Rust developer",
]

class Swapper extends React.Component {
    constructor() {
        super();
        this.state = {
            topTitle: topTitles[Math.floor(Math.random() * topTitles.length)],
            bottomTitle: bottomTitles[Math.floor(Math.random() * bottomTitles.length)],
        };
        this.handleSwapIter = this.handleSwapIter.bind(this);
    }

    handleSwapIter() {
        this.setState({
            topTitle: topTitles[Math.floor(Math.random() * topTitles.length)],
            bottomTitle: bottomTitles[Math.floor(Math.random() * bottomTitles.length)],
        });
        console.log("iter");
    }

    render() {
        return(
            <div onAnimationIteration={this.handleSwapIter} id="swapper-container">
                <span id="swapper-top"  >
                    {this.state.topTitle}
                </span>
                <span id="swapper-bottom">
                    {this.state.bottomTitle}
                </span>
            </div>
        )
    }
}

export default Swapper;
