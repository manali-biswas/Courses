// Pseudo Container component
import Header from "./Header";
import Footer from "./Footer";
import Skills from "./Skills";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { COURSES } from "../shared/courses";
import { Component } from "react";
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            courses: COURSES,
            selectedCourse: null,
        };
    }


    onCourseClick(course) {
        this.setState({ selectedCourse: course });
    }

    render() {

        const HomePage = () => {
            return (
                <Home course={ this.state.courses.filter((course) => course.featured)[0] }/>
            )
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={HomePage} />
                    <Route exact path="/skills" component={ () => <Skills courses={this.state.courses} onClick={(course) => this.onCourseClick(course)} selectedCourse={this.state.selectedCourse} />} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={ Contact }/>
                    <Redirect to="/" />
                    </Switch> 
                <Footer />
            </div>
        );
    }
}

export default Main;
