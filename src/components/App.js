import React from "react";
import io from "socket.io-client";
import Display from "./Display.js";
import Footer from "./Footer.js"

require("../styles/index.scss");

export default class App extends React.Component { 

    constructor(props) {
        super(props);
        // "Single source of truth": All data is kept here. Functions to manipulate it are passed down as props.
        this.socket = io();

        this.state = {

        } 
    }

    componentWillMount() { 
        const socket = this.socket;
    }

    render() {
    	return (
    		<div class="App">
    			<h1> BLAHBLAHLAH </h1>
                <Display>
                    
                </Display>
                <Footer> 

                </Footer>
    		</div>
    	)
    }
}
