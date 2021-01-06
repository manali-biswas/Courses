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
import { postProject, fetchCourses, fetchProjects, postFeedback } from "../redux/ActionCreators";
import { actions } from "react-redux-form";
import { TransitionGroup, CSSTransition } from "react-transition-group";

//mapping redux store state with main component
const mapStateToProps = state => {
    return {
        courses: state.courses,
        courseProjects: state.courseProjects
    }
}

const mapDispatchToProps = (dispatch) => ({
    postProject: (courseId, name, description, link, github) => dispatch(postProject(courseId, name, description, link, github)),
    fetchCourses: () => dispatch(fetchCourses()),
    resetFeedbackForm: () => { dispatch(actions.reset('feedback')) },
    fetchProjects: () => dispatch(fetchProjects()),
    postFeedback: (firstname, lastname, telnum, email, agree, contactType) => dispatch(postFeedback(firstname, lastname, telnum, email, agree, contactType))
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
        this.props.fetchProjects();
    }

    onCourseClick(course) {
        this.setState({ selectedCourse: course });
    }

    render() {

        
        const ProjectsWithCourseId = ({ match }) => {
            const courseId = parseInt(match.params.id);
            return (
                <Projects course={this.props.courses.courses.filter((course) => course.id === courseId)[0]} projects={this.props.courseProjects.projects.filter((project) => project.course_id === courseId)}
                    postProject={ this.props.postProject } coursesLoading={this.props.courses.isLoading}
                    coursesErr={ this.props.courses.err } projectsErr={ this.props.courseProjects.err }/>
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
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch>
                            <Route exact path="/" component={HomePage} />
                            <Route exact path="/skills" component={ () => <Skills courses={this.props.courses.courses} onClick={(course) => this.onCourseClick(course)} selectedCourse={this.state.selectedCourse} coursesLoading={this.props.courses.isLoading}
                            coursesErr={ this.props.courses.err }/>} />
                            <Route exact path="/contact" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback}/>} />
                            <Route exact path="/about" component={About} />
                            <Route path="/skills/:id" component={ ProjectsWithCourseId }/>
                            <Redirect to="/" />
                        </Switch> 
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
// use withRouter if using react-router