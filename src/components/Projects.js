import { Card, CardBody, CardText, CardTitle } from "reactstrap";

function Projects(props) {
    
        const RenderProject = props.projects.map((project) => {
            return (  
                <Card key={project.id} className="mb-3 border-dark">
                    <CardBody>
            <CardTitle tag="h4">
            {project.name}
        </CardTitle>
        <CardText>
            {project.description}
        </CardText>
        {/* Separate components for link and github link */}
            <a href={project.link} className="btn btn-primary">Hosted Project Link</a>
            <a href={project.github} className="btn btn-dark ml-3">Github Link</a>
        </CardBody>
        </Card>
            )
        }  
    );
    

    return (
        <div className="container mt-5 mb-5 text-center">
            <h2>Projects on {props.course_name}</h2>
            <div className="mt-5 container w-75">
                {RenderProject}
                </div>
        </div>
    )
}

export default Projects;