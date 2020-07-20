import React from 'react';
import './CtrlTextArea.css'

class CtrlTextArea extends React.Component {
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

        return (
            <div className="ctrltextarea">
                <label className="control-label"><i className={fa_class} style={{fontSize: "70%"}}></i>&nbsp;{this.props.label}</label>
                <textarea className="form-control" onChange={this.handleChange} value={nilai}></textarea>
            </div>
        );
    }
}

export default CtrlTextArea;