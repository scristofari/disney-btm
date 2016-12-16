import React from 'react'

import './FastPass.css'
import Barcode from './Barcode.jpg'

class FastPass extends React.Component {
    render() {
        return (
            <div className="FastPass">
                <span className="FastPass-title">Big Thunder Mountain</span>
                <span>FASTPASS</span>
                <span>Enter Between</span>
                <span className="FastPass-date">13:25</span>
                <span>BETWEEN</span>
                <span className="FastPass-date">13:55</span>
                <span>12/12/2016</span>
                <img src={Barcode} alt="Barcode"/>
            </div>
        );
    }
}

export default FastPass;