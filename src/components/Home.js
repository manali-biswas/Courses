import { Media } from "reactstrap";
import { Loading } from './Loading';
import { baseUrl } from "../shared/baseUrl";

function Home(props) {

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

    return (
        <div className="container mt-5 mb-5">    
        <h2 className="text-center">Home</h2>
        <div className="container d-flex flex-column justify-content-center " style={{ height: "90vh" }}>
            <p>This is a personal website to keep track of all the courses I have taken up so far and the skills I built.
             
            Below is the course that I liked the most so far!
            </p>
            <Media className="mt-5 mb-3">
                <img src={baseUrl+'public/'+props.course.image} alt={props.course.name} width="100px"></img>
                <div className="media-body ml-5">
                    <h5>{props.course.name}</h5>
                    <p>{ props.course.description }</p>
                </div>
            </Media>
            </div>
        </div>
    )
}

export default Home;