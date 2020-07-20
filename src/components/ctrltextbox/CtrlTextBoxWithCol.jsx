import React, { Component } from 'react';

class CtrlTextBoxWithCol extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.sendNilaiToParent = this.sendNilaiToParent.bind(this);
        this.state = {
            nilai: "",
            type: ""
        };
    }

    componentWillReceiveProps = (props) => {
        this.setState({
            nilai: props.nilai ?? "",
            type: props.type ?? ""
        })
    }

    handleChange = (e) => {
        this.setState({nilai: e.target.value}, () => {
            this.sendNilaiToParent();
        });
    }

    sendNilaiToParent = () => {
        this.props.handle(this.state.nilai);
    }

    render() {
        const nilai = this.state.nilai;
        const fa_class = this.props.fa_class ? this.props.fa_class : "fa fa-bookmark";

        if(this.state.type == "") {
            return (
                <div className={"col-sm-" + this.props.col}>
                    <div className="ctrltextbox form-group">
                        <label className="control-label"><i className={fa_class} style={{fontSize: "70%"}}></i>&nbsp;{this.props.label}</label>
                        <input type="text" className="form-control" value={nilai} onChange={this.handleChange} />
                    </div>
                </div>
            );
        } else {
            switch(this.props.type) {
                case "datepicker" :
                    return (
                        <div className={"col-sm-" + this.props.col}>
                            <div className="ctrltextbox form-group">
                                <label className="control-label"><i className={fa_class} style={{fontSize: "70%"}}></i>&nbsp;{this.props.label}</label>
                                <input type="date" className="form-control datepicker" value={nilai} onChange={this.handleChange} onBlur={this.handleChange} />
                            </div>
                        </div>
                    );
                    break;
                case "password" :
                    return (
                        <div className={"col-sm-" + this.props.col}>
                            <div className="ctrltextbox form-group">
                                <label className="control-label"><i className={fa_class} style={{fontSize: "70%"}}></i>&nbsp;{this.props.label}</label>
                                <input type="password" className="form-control" value={nilai} onChange={this.handleChange} />
                            </div>
                        </div>
                    );
                    break;
            }
        }
    }
}

export default CtrlTextBoxWithCol;