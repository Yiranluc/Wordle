import React from 'react'
import Button from './Button'

export default function Popup(props) {
    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                {props.children}
                <Button className='close-btn' onClick={() => props.setTrigger(false)}> Close </Button>
            </div>
        </div>

    ) : "";
}