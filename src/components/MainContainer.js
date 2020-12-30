// Pseudo Container component
import Header from "./Header";
import Footer from "./Footer";
import Skills from "./Skills";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import { Component } from "react";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { addProject, fetchCourses } from "../redux/ActionCreators";

//mapping redux store state with main component
const mapStateToProps = state => {
    return {
        courses: state.courses,
        courseProjects: state.courseProjects
    }
}

const mapDispatchToProps = (dispatch) => ({
    addProject: (courseId, name, description, link, github) => dispatch(addProject(courseId, name, description, link, github)),
    fetchCourses: ()=>dispatch(fetchCourses())
})
    
    
class Main extends Component {

    constructor(props) {
        super(props);

        this.state={
            selectedCourse: null
        }
    }

    componentDidMount() {
        this.props.fetchCourses();
    }

    onCourseClick(course) {
        this.setState({ selectedCourse: course });
    }

    render() {

        
        const ProjectsWithCourseId = ({ match }) => {
            const courseId = parseInt(match.params.id);
            return (
                <Projects course={this.props.courses.courses.filter((course) => course.id === courseId)[0]} projects={this.props.courseProjects.filter((project) => project.course_id === courseId)}
                    addProject={ this.props.addProject } coursesLoading={this.props.courses.isLoading}
                    coursesErr={ this.props.courses.err }/>
            )
        }

        const HomePage = () => {
            return (
                <Home course={this.props.courses.courses.filter((course) => course.featured)[0]}
                    coursesLoading={this.props.courses.isLoading}
                    coursesErr={ this.props.courses.err }/>
            )
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/skills" component={ () => <Skills courses={this.props.courses.courses} onClick={(course) => this.onCourseClick(course)} selectedCourse={this.state.selectedCourse} coursesLoading={this.props.courses.isLoading}
                    coursesErr={ this.props.courses.err }/>} />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
// use withRouter if using react-router