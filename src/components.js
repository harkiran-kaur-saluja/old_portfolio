export function NavBar () {
    return (
        <div className="nav">
            <nav>
                <div>
                    <p><img src="img/signaturepic.png" alt="Harkiran in signature style"></img></p>
                    <p className="name">kaur saluja</p>
                </div>
                <div>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li>Work</li>
                        <li><a href="https://drive.google.com/file/d/1MqqagyaZZHlzQO9kpCr4CSjnJSiatULL/view?usp=sharing">Resume</a></li>
                        <li>About</li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export function HomeBody (props) {
    return (
        <div>
            <h2>Hi! I'm harkiran</h2>
            <p>HCI + design researcher interested in the connection between technology and education.</p>
            <p>Master of Human-Computer Interaction student at Carnegie Mellon University, graduating in August 2022.</p>
            <p>Currently researching the intersection between algorithms, education, and participatory design.</p>
            <br/>
            <button type="button" onClick={() => {props.handleClick()}}>Check out my work</button>
        </div>
        
    );
}

export function Picture () {
    return (
        <div>
            <div className="rectangle"></div>
            <img src="img/seniorpic.jpg" alt="Harkiran sitting on a rock wearing a striped shirt and dark blue jeans"/>
        </div>
    );
}

export function ProjectOverview (props) {
    // props should be an array of project objects
    // going to assume some information rn but can flesh it out later
    return (
        <div>
            <div class="row justify-content-center">
                <div class="col">
                    <div className="image-stack">
                        <div className="image-stackitem image-stackitem--top">
                            <img src={props.Image1} />
                        </div>
                        <div className="image-stackitem image-stackitem--bottom">
                            <img src={props.Image2} />
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div> 0 + {props.ProjectNumber}</div>
                    <div>Role: + {props.ProjectRole}</div>
                    <div>{props.ProjectOverview}</div>
                    <button type="button" className="btn btn-outline-secondary" onClick={() => {props.handleClick()}}>View Work</button>
                </div>
            </div>
        </div>
    );
}
