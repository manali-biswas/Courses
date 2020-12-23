import { CardHeader, CardBody, CardTitle, CardText, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from "react-router-dom";

function SkillDetails({ course }) {

    const courseskills = course.skills.map((skill) => {
        return (
            <ListGroupItem tag="li" key={skill.id} className="border-info">
                {skill.name}
            </ListGroupItem>
        )
    })

    return (
        <>
            <CardHeader>{course.date}</CardHeader>
            <CardBody className="text-center text-info">
                <CardTitle><h2>{course.name}</h2></CardTitle>
                <CardText><p>{course.description}</p></CardText>
                <ListGroup className="list-group-flush text-left" tag="ul">
                    {courseskills}
                </ListGroup>
                <br/>
                <Link to={`/skills/${course.id}`} className="btn btn-info">Click here for projects</Link>
            </CardBody>
        </>
    )
}

export default SkillDetails;