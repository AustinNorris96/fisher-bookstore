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
                },
                {
                    id: 3,
                    title: "Harry Potter and the Philosopher's Stone",
                    author: "J.K. Rowling",
                    isbn: "987-03211125218"
                },
                {
                    id: 4,
                    title: "The Master and Margarita",
                    author: "Mikhail Blgakov",
                    isbn: "987-03211125219"
                },
                {
                    id: 5,
                    title: "Alice's Advenure in Wonderland",
                    author: "Lewis Carroll",
                    isbn: "987-03211125220"
                },
                {
                    id: 6,
                    title: "The Hobbit",
                    author: "J. R. R. Tolkien",
                    isbn: "987-03211125221"
                },
                {
                    id: 7,
                    title: "And Then There Were None",
                    author: "Agatha Christie",
                    isbn: "987-03211125222"
                },
                {
                    id: 8,
                    title: "Drea, of the Red Chamber",
                    author: "Cha Xueqin",
                    isbn: "987-03211125223"
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