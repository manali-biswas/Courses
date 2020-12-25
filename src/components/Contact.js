import { Component } from 'react';
import { ListGroup, ListGroupItem, Form, FormGroup, Label, Input, Button, FormFeedback } from "reactstrap";

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            touched: { //when to make form validation
                firstname: false,
                lastname: false,
                telnum: false,
                email: false
            }
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.OnInputChange = this.OnInputChange.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    onBlur=(field)=>(evt)=> {
        this.setState({
            touched:{...this.state.touched,[field]: true}
        })
    }

    // to show the value when we type in form (since form is tied to controlling state)
    OnInputChange(event) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]:value
        })
    }

    onSubmit(event) {
        
        console.log("Current state is:" + JSON.stringify(this.state));
        alert("Current state is:" + JSON.stringify(this.state));
        event.preventDefault(); // to prevent going to previous page
    }

    validate(firstname, lastname, telnum, email) {
        const errors = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: ''            
        }

        if (this.state.touched.firstname && firstname.length < 3) {
            errors.firstname='Firstname should be of 3 or more characters'
        }
        else if (this.state.touched.firstname && firstname.length > 10) {
            errors.firstname='Firstname should be of less than 11 characters'    
        }
        if (this.state.touched.lastname && lastname.length < 3) {
            errors.lastname='Lastname should be of 3 or more characters'
        }
        else if (this.state.touched.lastname && lastname.length > 10) {
            errors.lastname='Lastname should be of less than 11 characters'    
        }

        const reg = /^\d+$/;
        if (this.state.touched.telnum && !reg.test(telnum)) {
            errors.telnum='Telephone number is not valid'
        }

        if (this.state.touched.email && email.split('').filter(x => x === '@').length !== 1) {
            errors.email='Email should contain @'
        }

        return errors;
    }

    render() {
        const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);
    return (
        <div className="container">
            <div className="text-center container mt-5">
                <h2>Contact</h2>
                <div className="text-left mt-5 mb-5 container" style={{ maxWidth: "720px" }}>
                    <ListGroup>
                        <ListGroupItem className="border-info">                        
		              <i className="fa fa-phone fa-lg"></i>: +852 1234 5678
                        </ListGroupItem>
                        <ListGroupItem className="border-info">
                            <i className="fa fa-fax fa-lg"></i>: +852 8765 4321
                        </ListGroupItem>
                        <ListGroupItem className="border-info">
                            <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:biswas.manali8@gmail.com">
                            biswas.manali8@gmail.com</a>
                        </ListGroupItem>
                    </ListGroup>
                </div>
            </div>
            <div className="container">
                <h3>Send your feedback</h3>
                <div className="container">
                    <Form onSubmit={this.onSubmit}>
                        <FormGroup>
                            <Label htmlFor="firstname">First Name</Label>
                            <Input type="text" id="firstname" name="firstname" placeholder="First Name" value={this.state.firstname} onChange={this.OnInputChange} onBlur={this.onBlur('firstname')} valid={errors.firstname === ''} invalid={ errors.firstname!=='' }/>
                            <FormFeedback>{errors.firstname}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="lastname">Last Name</Label>
                            <Input type="text" id="lastname" name="lastname" placeholder="Last Name" value={this.state.lastname} onChange={this.OnInputChange} onBlur={ this.onBlur('lastname') } valid={errors.lastname === ''} invalid={ errors.lastname!=='' }/>
                            <FormFeedback>{errors.lastname}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="telnum">Telephone Number</Label>
                            <Input type="tel" id="telnum" name="telnum" placeholder="Tel. number" value={this.state.telnum} onChange={this.OnInputChange} onBlur={ this.onBlur('telnum') } valid={errors.telnum === ''} invalid={ errors.telnum!=='' }/>
                            <FormFeedback>{errors.telnum}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="email">Email</Label>
                            <Input type="email" id="email" name="email" placeholder="Email" value={this.state.email} onChange={this.OnInputChange} onBlur={ this.onBlur('email') } valid={errors.email === ''} invalid={ errors.email!=='' }/>
                            <FormFeedback>{errors.email}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <FormGroup check>
                                <Label check htmlFor="agree">
                                <Input type="checkbox" name="agree" checked={this.state.agree} onChange={this.OnInputChange} onBlur={ this.onBlur('agree') }/> {' '}
                                <strong>May we contact you?</strong>
                                </Label>
                            </FormGroup>
                        <Input type="select" name="contactType" value={this.state.contactType} onChange={this.OnInputChange}  onBlur={ this.onBlur('contactType') }>
                            <option>Tel.</option>
                            <option>Email</option>
                        </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="feedback">Feedback</Label>
                            <Input type="textarea" id="message" name="message" rows="12" value={this.state.message} onChange={this.OnInputChange} onBlur={ this.onBlur('message') }/>
                        </FormGroup>
                        <FormGroup>
                            <Button type="submit" color="primary">Send Feedback</Button>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        </div>
        )
    }
}

export default Contact;