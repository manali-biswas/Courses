function About() {
    return (
        <div className="text-center container mt-5">
            <h2>About</h2>
            <div className="mt-5">
                <img src="assets/images/Girl Study.png" className="rounded" alt="Girl"></img>
                <div className="text-left mt-3 mb-5 container" style={{maxWidth: "720px"}}>
                <p>
                    I am Manali Biswas, a third year Computer Engineering student @ Delhi Technological University.
                    I love learning new technologies. I am also a MERN stack developer and ML enthusiast.
                </p>
                <p>
                        This website helps me keep track of all the courses I have learnt and the skills gained.
                        It is useful to track my learning progress. Also, I will know where to refer for specific skills in the future.
                </p>
                </div>
            </div>
        </div>
    )
}

export default About;