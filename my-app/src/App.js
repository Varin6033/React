import React, {Component} from "react"
import Conditional from "./components/Conditional"

class App extends Component{
    constructor(){
        super()
        this.state = {
            isLoggedIn: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState(prevState => {
            return {
                isLoggedIn : !prevState.isLoggedIn
            }
        })
    }
    
    render() {
        let buttonText = this.state.isLoggedIn ? "Log out" : "Log in"
        let displayText = this.state.isLoggedIn ? "Logged In" : "Logged out"
        return (
            <div>
                <button onClick={this.handleClick}>{buttonText}</button>
                <h1>{displayText}</h1>
            </div>
        )
    }
}

export default App