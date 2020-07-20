import React from 'react';
import './CtrlTextBox.css';

class CtrlTextBox extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.sendNilaiToParent = this.sendNilaiToParent.bind(this);
        this.state = {
            nilai: ""
        };
    }

    componentDidMount = () => {
        if(this.props.nilai) {
            this.setState({nilai: this.props.nilai});
        } else {
            this.setState({nilai: ""});
        }
    }

    handleChange = (e) => {
        this.setState({nilai: e.target.value}, () => {
            this.sendNilaiToParent();
        });
    }

    sendNilaiToParent = () => {
        this.props.handle(this.state.nilai);
    }

    render = () => {
        const nilai = this.state.nilai;
        const fa_class = this.props.fa_class ? this.props.fa_class : "fa fa-bookmark";

        if(!this.props.type) {
            return (
                <div className="ctrltextbox">
                    <label className="control-label"><i className={fa_class} style={{fontSize: "70%"}}></i>&nbsp;{this.props.label}</label>
                    <input type="text" className="form-control" value={nilai} onChange={this.handleChange} />
                </div>
            );
        } else {
            switch(this.props.type) {
                case "datepicker" :
                    return (
                        <div className="ctrltextbox">
                            <label className="control-label"><i className={fa_class} style={{fontSize: "70%"}}></i>&nbsp;{this.props.label}</label>
                            <input type="text" className="form-control datepicker" value={nilai} onChange={this.handleChange} onBlur={this.handleChange} />
                        </div>
                    );
                    break;
            }
        }
    }
}

export default CtrlTextBox;