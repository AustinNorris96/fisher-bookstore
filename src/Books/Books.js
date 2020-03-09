import React, { Component } from "react";
import "./Books.css";
import { BookDisplay } from "./BookDisplay";

export default class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [
                {
                    id: 1,
                    title: "Domain Driven Design",
                    author: "Eric Evans",
                    isbn: "987-03211125217"
                },
                {
                    id: 2,
                    title: "Accelerate",
                    author: "Nicole Forsgren",
                    isbn: "978-194278831"
                }
            ]
        };
    }
    
render() {
    return (
        <div className="Books">
            <div className="lander">
                <BookDisplay books={this.state.books} />
            </div>
        </div>
        );
    }
}