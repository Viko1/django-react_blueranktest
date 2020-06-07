import React, {Component, Fragment} from 'react'
import ReactDom from 'react-dom'
import Header from "./layout/Header";
import Parser from "./parser/Parser";



class App extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <Parser/>
            </Fragment>

        )


    }
}

export default App
ReactDom.render(<App/>, document.getElementById('app'));