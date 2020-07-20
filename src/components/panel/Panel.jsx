import React, { Component } from 'react';
import './Panel.css';

class Panel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card panel">
                <div className="card-header bg-primary text-white">{this.props.header}</div>
                <div className="card-body">
                    {this.props.children}
                </div>
                {
                    (this.props.footer) ?
                        <div className="card-footer">{this.props.footer}</div> : ""
                }
            </div>
        );
    }
}

export default Panel;