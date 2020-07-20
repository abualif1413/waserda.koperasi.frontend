import React, { Component } from 'react';

class CtrlComboBoxWithCol extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            items: [],
            id: ""
        };
    }

    componentWillReceiveProps = (new_props) => {
        this.setState({
            items: new_props.items,
            id: new_props.nilai
        });
    }

    handleChange = (e) => {
        this.setState({id: e.target.value}, () => {
            this.props.handle(this.state.id);
        });
    }

    render() {
        const unselect_text = this.props.unselect_text ?? "- Pilih -";
        const fa_class = this.props.fa_class ?? "fa fa-bookmark";
        //console.log(this.state);
        return (
            <div className={"col-sm-" + this.props.col}>
                <div className="ctrltextbox form-group">
                    <label className="control-label"><i className={fa_class} style={{fontSize: "70%"}}></i>&nbsp;{this.props.label}</label>
                    <select className="form-control" onChange={this.handleChange} value={this.state.id}>
                        <option value="">{unselect_text}</option>
                        {
                            this.state.items.map(v => {
                                const show = v[this.props.show];
                                const value = v[this.props.value];

                                return <option key={value} value={value}>{show}</option>
                            })
                        }
                    </select>
                </div>
            </div>
        );
    }
}

export default CtrlComboBoxWithCol;