import { ListGroup, ListGroupItem } from "reactstrap";

function Contact() {
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
        </div>
    )
}

export default Contact;