import React from "react";
import TwitterLogo from "../images/twitter-logo.svg"
import LinkedInLogo from "../images/linkedin-logo.svg";
import GithubLogo from "../images/github-logo.svg";
import BlogLogo from "../images/blog-logo.svg";

import LinkBall from "../components/LinkBall"

const twitterData = {
  link: "www.twitter.com/CaolanDev",
  image: TwitterLogo,
  text: "Twitter"
  
}
const linkedInData = {
    link: "https://www.linkedin.com/in/caolan-barron-965a66206/www.linkedin.com",
    image: LinkedInLogo,
    text: "LinkedIn",
}
const githubData = {
    link: "https://github.com/CaolanBarron",
    image: GithubLogo,
    text: "Github",
}
const blogData = {
    link: "www.caolandev.com",
    image: BlogLogo,
    text: "Blog"
}

class LinkSection extends React.Component {


    render() {
        return (
            <div>
                <LinkBall data={twitterData} />
                <LinkBall data={linkedInData} />
                <LinkBall data={githubData} />
                <LinkBall data={blogData} />
            </div>
        )
    }
}

export default LinkSection;