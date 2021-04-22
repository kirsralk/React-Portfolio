import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { Button, Card } from "react-bootstrap";
import CardBtn from "../CardBtn";



const Project = (props) => {
    return (
<Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.img} alt={props.title}/>
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
            {/* Some quick example text to build on the card title and make up the bulk of
            the card's content. */}
            </Card.Text>
            <a href={props.github}><Button variant="primary">Github</Button></a>
            <a href={props.deploy}><Button variant="primary">Deployed</Button></a>
        </Card.Body>
</Card>
        // <div>
        //      <h3 className="center">{props.title}</h3>
        //         <img className="gallery" src={props.img} alt={props.title}/>
        //     <div className="text-center">
        //         <a href= {props.github} target="_blank" rel="noreferrer"><button className="nav-btn link link-btn">Learn More</button></a>
        //         <a href= {props.deploy} target="_blank" rel="noreferrer"><button className="nav-btn link link-btn">Visit App</button></a>
        //     </div>
        // </div>     
    );
}
 
export default Project;