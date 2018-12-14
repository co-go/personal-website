import React, { Component } from "react";
import { SocialIcon } from "react-social-icons";
import "./App.css";


// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="greeting">
                    <div className="top">
                        <h2 className="hey">Hey, I'm</h2>
                        <h1 className="me">James</h1>
                    </div>

                    <svg preserveAspectRatio="xMidYMax meet" className="svg-separator" viewBox="0 0 1600 200" data-height="200">
                        <polygon className="sep-color-0" points="-4,188.586 174,76 292,124 402,60 536,108 752,8 882,66 990,32 1210,116 1380,64 1536,150 1604,115.09 1604,204 -4,204 "></polygon>
                        <polygon className="sep-color-1" points="174,76 174,78 -4,198 -4,188.586 "></polygon>
                        <polygon className="sep-color-1" points="292,124 302,138 402,64 402,60 "></polygon>
                        <polygon className="sep-color-1" points="536,108 544,120 752,12 752,8 "></polygon>
                        <polygon className="sep-color-1" points="882,66 890,78 990,36 990,32 "></polygon>
                        <polygon className="sep-color-1" points="1210,116 1222,130 1380,68 1380,64 "></polygon>
                        <polygon className="sep-color-1" points="1536,150 1546,164 1604,124 1604,115.09 "></polygon>
                        <polygon className="sep-color-2" points="174,76 292,124 282,140 174,78 "></polygon>
                        <polygon className="sep-color-2" points="402,60 536,108 528,120 402,64 "></polygon>
                        <polygon className="sep-color-2" points="752,8 882,66 874,80 752,12 "></polygon>
                        <polygon className="sep-color-2" points="990,32 990,36 1192,130 1210,116 "></polygon>
                        <polygon className="sep-color-2" points="1380,64 1536,150 1526,168 1380,68 "></polygon>
                    </svg>

                    <div className="bottom">
                        <h2 className="title">About Me</h2>
                        <p> I am a Junior currently studying Computer Science as an undergraduate at the <b>University of Maryland, College Park</b>. I like messing with web design, making functional tools that look <i>sweet</i>. Destiny 2 is my current timesuck, when I'm not at school or doing work, I'm getting in some raids. Feel free to reach out if you have any questions -- I love making useful things that help humans. </p>
                    </div>
                    <div className="social-flex">
                        <div className="divider" />

                        <SocialIcon url="http://linkedin.com/in/jwcorle" color="#fff" />
                        <SocialIcon url="https://github.com/jwcorle" color="#fff" />
                        <SocialIcon url="mailto:jcorley.w@gmail.com" color="#fff" />
                    </div>
                </div>
                <div className="content">
                    <div className="nav">
                        <h3>My Work</h3>
                        <div className="pull-right">
                            <span className="project active">
                                <h5>raids.top</h5>
                            </span>
                            <span className="project">
                                <h5>goUMD</h5>
                            </span>
                            <span className="project">
                                <h5>Aegis Timeportal</h5>
                            </span>
                            <span className="project">
                                <h5>warframe.market</h5>
                            </span>
                            <span className="project">
                                <h5>Lions Time</h5>
                            </span>
                        </div>
                    </div>

                    <div className="projectSummary">
                        <h1 className="projectName">raids.top</h1>

                    </div>
                    <h1> Summaries and pictures of my projects and contributions are soon to come. </h1>
                    <h3> For now, enjoy this nice ordered list <span className="small">(ooooh!)</span> </h3>
                    <ol>
                        <li>raids.top</li>
                        <li>goUMD</li>
                        <li>Aegis Timeportal</li>
                        <li>warframe.market</li>
                        <li>Lions Time</li>
                    </ol>
                </div>
            </div>
        );
    }
}

export default App;
