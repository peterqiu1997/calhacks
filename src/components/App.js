import React from "react";
//import io from "socket.io-client";
import Display from "./Display.js";

require("../styles/index.scss");

export default class App extends React.Component { 

    constructor(props) {
        super(props);
        // "Single source of truth": All data is kept here. Functions to manipulate it are passed down as props.
        // this.socket = io();

        this.state = {
            leftCounter: 0,
            rightCounter: 0,
            question: "",
        } 
    }

    componentWillMount() { 
        // const socket = this.socket;
    }

    render() {
    	return (
    		<div class="content">
                <Display>
                    
                </Display>
                <Footer>
                </Footer>
    		</div>
    	)
    }
}
