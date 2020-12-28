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

//mapping redux store state with main component
const mapStateToProps = state => {
    return {
        courses: state.courses,
        courseProjects: state.courseProjects,
        selectedCourse: state.selectedCourse
    }
}
    
    
class Main extends Component {

    onCourseClick(course) {
        this.setState({ selectedCourse: course });
    }

    render() {

        
        const ProjectsWithCourseId = ({ match }) => {
            const courseId = parseInt(match.params.id);
            return (
                <Projects course_name={this.props.courses.filter((course) => course.id === courseId)[0].name} projects={this.props.courseProjects.filter((project) => project.course_id === courseId)} />
            )
        }

        const HomePage = () => {
            return (
                <Home course={ this.props.courses.filter((course) => course.featured)[0] }/>
            )
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/skills" component={ () => <Skills courses={this.props.courses} onClick={(course) => this.onCourseClick(course)} selectedCourse={this.props.selectedCourse} />} />
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

export default withRouter(connect(mapStateToProps)(Main));
// use withRouter if using react-router