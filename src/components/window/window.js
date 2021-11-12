import React, {Component} from "react";
import './window.scss'

class Window extends Component {
    render() {
        return (
            <div className={'modal'}>
                <div className={'post'}>
                    <div className={'post__image'}>IMAGE</div>
                    <div className={'post__info'}>
                        <div className={'post__info-icon'}>Avatar's person</div>
                        <div className={'post__info-input'}>
                            <input type="text" placeholder={'Add comment'} className={'post__info-input-text'}/>
                            <button>Apply</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Window