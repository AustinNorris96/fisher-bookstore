import React from "react";
import { Card, Button } from "react-bootstrap";

export function BookCard(props) {
    return(
        <Card style ={{ width: "16em" }}>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
                <Card.Title>{props.book.title}</Card.Title>
                <Card.Title>Author: {props.book.title}</Card.Title>
                <Button variant="warning">Add to Cart</Button>
            </Card.Body>
            </Card>
    );
}