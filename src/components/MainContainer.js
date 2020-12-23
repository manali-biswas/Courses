// Pseudo Container component
import Header from "./Header";
import Footer from "./Footer";
import Skills from "./Skills";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import { COURSES } from "../shared/courses";
import { PROJECTS } from "../shared/projects";
import { Component } from "react";
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            courses: COURSES,
            courseProjects: PROJECTS,
            selectedCourse: null,
        };
    }


    onCourseClick(course) {
        this.setState({ selectedCourse: course });
    }

    render() {

        
        const ProjectsWithCourseId = ({ match }) => {
            const courseId = parseInt(match.params.id);
            return (
                <Projects course_name={this.state.courses.filter((course) => course.id === courseId)[0].name} projects={this.state.courseProjects.filter((project) => project.course_id === courseId)} />
            )
        }

        const HomePage = () => {
            return (
                <Home course={ this.state.courses.filter((course) => course.featured)[0] }/>
            )
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/skills" component={ () => <Skills courses={this.state.courses} onClick={(course) => this.onCourseClick(course)} selectedCourse={this.state.selectedCourse} />} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route path="/skills/:id" component={ ProjectsWithCourseId }/>
                    <Redirect to="/" />
                    </Switch> 
                <Footer />
            </div>
        );
    }
}

export default Main;
