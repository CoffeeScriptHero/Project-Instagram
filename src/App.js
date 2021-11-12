import React from "react";
import Button from "./components/button/button";
import Window from "./components/window/window";

class App extends React.Component {
    state = {
        isWindow: false
    }

    handleClick = () => {
        this.setState({isWindow: true})
    }

    closeModal = () => {
        this.setState({isFirstModalOpen: false, isSecondModalOpen: false})
    }

    render() {
        return (
            <div className="App">
                <Button text='Open first modal' backgroundColor='blue' onClick={() => this.handleClick()}/>
                {this.state.isWindow &&
                <Window header='Error' closeButton={true} text='First Modal'
                        close={this.closeModal}
                        actions={
                            <>
                                <Button text='Apply'/>
                                <Button text='Close'/>
                            </>}
                />}
            </div>
        );
    }

}

export default App;
