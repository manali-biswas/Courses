import { Card, CardBody, CardHeader, CardImg, CardTitle } from 'reactstrap';
import SkillDetails from './SkillDetails';

function RenderCourse({ selectedCourse, course, onClick }) {
    if (course != null) {
        if (selectedCourse === course) {
            return (
                <Card className="h-100 border-info" onClick={() => onClick(null)}>
                    <SkillDetails course={course} />
                </Card>
            )
        }
        else {
            return (
                <Card className="h-100" onClick={() => onClick(course)}>
                    <CardHeader>{course.date}</CardHeader>
                    <CardImg width="150px" src={course.image} alt={course.name} />
                    <CardBody className="text-center">
                        <CardTitle><h5>{course.name}</h5></CardTitle>
                    </CardBody>
                </Card>
            )
        }
    }
    else {
        return (
            <div></div>
        );
    }
}

const Skills = (props) => {

    const skills = props.courses.map((course) => {
        return (
            <div key={course.id} className="col-12 col-md-4 mb-3 mt-3">
                <RenderCourse course={course} onClick={props.onClick} selectedCourse={props.selectedCourse}/>
            </div>
        )
    });

    return (
        <div className="container">
            <div className="row">
                {skills}
            </div>
        </div>
    );
}

export default Skills;
