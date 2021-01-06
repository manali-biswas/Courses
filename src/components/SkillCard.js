import { Component } from 'react';
import SkillDetails from './SkillDetails';
import ReactCardFlip from "react-card-flip";
import { Card, CardBody, CardHeader, CardImg, CardTitle } from 'reactstrap';
import { baseUrl } from "../shared/baseUrl";


function RenderCourse({ course, onClick }) {
    return (
                <Card className="h-100" onClick={() => onClick()}>
                    <CardHeader>{course.date}</CardHeader>
                    <CardImg width="150px" src={ baseUrl+course.image } alt={course.name} />
                    <CardBody className="text-center">
                        <CardTitle><h5>{course.name}</h5></CardTitle>
                    </CardBody>
                    </Card>
    )
}


class SkillCard extends Component{
    constructor(props) {
        super(props);

        this.state = {
            isFlipped: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ isFlipped: !this.state.isFlipped });
    }

    render() {
        return (
            <div>
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                <RenderCourse course={this.props.course} onClick={this.handleClick} />
                <SkillDetails key="back" course={this.props.course} onClick={this.handleClick} />
                </ReactCardFlip>
                </div>
        );
    }
}

export default SkillCard;