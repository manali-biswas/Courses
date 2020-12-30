import { Card, CardBody, CardText, CardTitle, Button, Modal, ModalHeader, ModalBody, Row, Col } from "reactstrap";
import { LocalForm, Control, Errors } from "react-redux-form";
import { Component } from "react";

const required = (val) => val && val.length;
const minLength = (len) => (val) => (val) && (val.length >= len);
const maxLength = (len) => (val) => !val || (val.length <= len);

function RenderLink({ link }) {
    if (link === undefined) {
        return (    
            <a href={link} className="btn btn-primary disabled">Hosted Project Link</a>
        )
    }
    else {
        return (    
            <a href={link} className="btn btn-primary">Hosted Project Link</a>
        )    
    }
}

function RenderGithub({ github }) {
    if (github === undefined) {
        return (    
            <a href={github} className="btn btn-dark ml-3 disabled">Github Link</a>
        )
    }
    else {
        return (    
            <a href={github} className="btn btn-dark ml-3">Github Link</a>
        )    
    }
}

class Projects extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    onSubmit(values) {
        this.toggleModal();
        alert("Current state is: " + JSON.stringify(values));
    }
    
    
    render() {
            
        const RenderProject = this.props.projects.map((project) => {
            return (  
                <Card key={project.id} className="mb-3 border-dark">
                    <CardBody>
            <CardTitle tag="h4">
            {project.name}
        </CardTitle>
        <CardText>
            {project.description}
        </CardText>
            <RenderLink link={ project.link }/>
            <RenderGithub github={ project.github }/>
        </CardBody>
        </Card>
            )
        }  
        );
        
    return (
        <>
        <div className="container mt-5 mb-5 text-center">
            <h2>Projects on {this.props.course_name}</h2>
            <div className="mt-5 container w-75">
                {RenderProject}
            </div>
            <Button color="outline-primary" onClick={this.toggleModal}>Add Project</Button>
        </div>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader>Add Project</ModalHeader>
                <ModalBody>
                    <div className="container">
                <LocalForm onSubmit={this.onSubmit}>
                        <Row className="form-group">
                            <Col className="label col-md-4" htmlFor="name">Project Name</Col>
                                <Control.text model=".name" id="name" name="name" placeholder="Project Name" className="col-md-8 form-control" validators={{ required, minLength:minLength(2) }} />
                                <Errors className="text-danger" model=".name" show="touched" messages={{
                                    required: "Project name is required",
                                    minLength: "Minimum 2 characters required"
                                }}/>
                    </Row>
                        <Row className="form-group">
                            <Col className="label col-md-4" htmlFor="description">Project Description</Col>
                                <Control.textarea model=".description" id="description" name="description" rows="12" placeholder="Project Description" className="col-md-8 form-control" validators={{ required, maxLength: maxLength(30) }} />
                                <Errors className="text-danger" model=".description" show="touched" messages={{
                                    required: "Project description is required",
                                    maxLength: "Maximum 30 characters allowed"
                                }}/>
                        </Row>
                        <Row className="form-group">
                            <Col className="label col-md-4" htmlFor="link">Project Link</Col>
                                <Control.text type="url" model=".link" id="link" name="link" placeholder="Project link" className="col-md-8 form-control"/>
                        </Row>
                        <Row className="form-group">
                            <Col className="label col-md-4" htmlFor="github">Github Link</Col>
                                <Control.text type="url" model=".github" id="github" name="github" placeholder="Github link" className="col-md-8 form-control"/>
                        </Row>
                        <Row>
                            <Button type="submit" color="primary" value="submit">Submit</Button>
                        </Row>
                        </LocalForm>
                        </div>
            </ModalBody>
            </Modal>
            </>
    )}
}

export default Projects;