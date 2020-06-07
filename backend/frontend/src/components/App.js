import React, {Component, Fragment} from 'react'
import ReactDom from 'react-dom'
import Header from "./layout/Header";



class App extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
            </Fragment>

        )


    }
}

export default App
ReactDom.render(<App/>, document.getElementById('app'));