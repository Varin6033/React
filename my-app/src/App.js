import React, {Component} from "react"
import Conditional from "./components/Conditional"

class App extends Component{
    constructor(){
        super()
        this.state = {
            unreadMessages: ["a", "b"]
        }
    }
    // &&
    // true && false

    
    render() {
        return (
            <div>
                {
                    this.state.unreadMessages.length > 0 && 
                    <h2>You have {this.state.unreadMessages.length} unread messages!</h2>
                }
            </div>
        )
    }
}

export default App