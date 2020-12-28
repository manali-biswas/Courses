import { Component } from 'react';
import { ListGroup, ListGroupItem, Label, Button, FormGroup } from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    /*onBlur=(field)=>(evt)=> {
        this.setState({
            touched:{...this.state.touched,[field]: true}
        })
    }*/

    // to show the value when we type in form (since form is tied to controlling state)
    /*OnInputChange(event) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]:value
        })
    }*/

    onSubmit(values) {
        
        console.log("Current state is:" + JSON.stringify(values));
        alert("Current state is:" + JSON.stringify(values));
        //event.preventDefault(); // to prevent going to previous page
    }

    /*validate(firstname, lastname, telnum, email) {
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
    }*/

    render() {
        //const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);
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
                    <LocalForm onSubmit={(values)=>this.onSubmit(values)}>
                        <FormGroup>
                            <Label htmlFor="firstname">First Name</Label>
                            <Control.text model=".firstname" id="firstname" name="firstname" placeholder="First Name" className="form-control" validators={{required,minLength:minLength(3),maxLength:maxLength(15)}}/>
                            <Errors className="text-danger" model=".firstname" show="touched" messages={{
                                required: "Required",
                                minLength: "Minimum 2 characters required",
                                maxLength: "Maximum 15 characters allowed"
                            }}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="lastname">Last Name</Label>
                            <Control.text model=".lastname" className="form-control" id="lastname" name="lastname" placeholder="Last Name" validators={{required,minLength:minLength(3),maxLength:maxLength(15)}}/>
                            <Errors className="text-danger" model=".lastname" show="touched" messages={{
                                required: "Required",
                                minLength: "Minimum 2 characters required",
                                maxLength: "Maximum 15 characters allowed"
                            }}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="telnum">Telephone Number</Label>
                            <Control.text model=".telnum" className="form-control" id="telnum" name="telnum" placeholder="Tel. number" validators={{required,minLength:minLength(3),maxLength:maxLength(15),isNumber}}/>
                            <Errors className="text-danger" model=".telnum" show="touched" messages={{
                                required: "Required",
                                minLength: "Minimum 2 numbers required",
                                maxLength: "Maximum 15 numbers allowed",
                                isNumber: "Must be a number"
                            }}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="email">Email</Label>
                            <Control.text model=".email" className="form-control" id="email" name="email" placeholder="Email" validators={{required,validEmail}}/>
                            <Errors className="text-danger" model=".email" show="touched" messages={{
                                required: "Required",
                                validEmail: "Invalid Email Address"
                            }}/>
                        </FormGroup>
                        <FormGroup>
                            <FormGroup check>
                                <Label check htmlFor="agree">
                                <Control.checkbox model=".agree" className="form-check-input" name="agree"/> {' '}
                                <strong>May we contact you?</strong>
                                </Label>
                            </FormGroup>
                        <Control.select model=".contactType" name="contactType" className="form-control">
                            <option>Tel.</option>
                            <option>Email</option>
                        </Control.select>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="feedback">Feedback</Label>
                            <Control.textarea model=".message" id="message" name="message" rows="12" className="form-control"/>
                        </FormGroup>
                        <FormGroup>
                            <Button type="submit" color="primary">Send Feedback</Button>
                        </FormGroup>
                    </LocalForm>
                </div>
            </div>
        </div>
        )
    }
}

export default Contact;