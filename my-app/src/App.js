import React, {Component} from "react"

class App extends  React.Component{
    constructor() {
        super()
        this.state = {
            count: 1
        }
        this.doubleNumber = this.doubleNumber.bind(this)
        this.halfNumber = this.halfNumber.bind(this)
    }

    doubleNumber(){
        this.setState(prevState => {
            return {
                count: prevState.count * 2
            }
        })
    }

    halfNumber(){
        this.setState(prevState => {
            return {
                count: prevState.count / 2
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onMouseDown={this.doubleNumber}>Double!</button>
                <button onMouseDown={this.halfNumber}>Half!</button>
            </div>

        )
    }
}

export default App