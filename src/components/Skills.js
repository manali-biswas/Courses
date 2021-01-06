import { Loading } from './Loading';
import SkillCard from "./SkillCard";

const Skills = (props) => {

    if (props.coursesLoading) {
        return (
            <div className="container text-center">
                    <Loading />
            </div>    
        )
    }

    else if (props.coursesErr) {
        return (
            <div className="container text-center">
                <h4>{ props.coursesErr }</h4>
            </div>
        )
    }

    const skills = props.courses.map((course) => {
        return (
            <div key={course.id} className="col-12 col-md-4 mb-3 mt-3">
            <SkillCard course={ course }/>
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
