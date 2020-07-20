import React, { Component, Fragment } from 'react';
import './List01.css';

class List01 extends Component {
    constructor(props) {
        super(props);
        this.setValue = this.setValue.bind(this);
        this.state = {
            id: 0
        };
    }

    componentDidMount = () => {
        this.setState({id: this.props.id ?? 0})
    }

    setValue = () => {
        this.props.choose(this.state.id);
    }

    render() {
        return (
            <Fragment>
                <div className="list01">
                    <div className="row">
                        <div className="col-sm-11">
                            <div className="row row_item">
                                <div className="col-sm-6">
                                    <span className="badge badge-primary item1">
                                        {this.props.item1}
                                    </span>
                                </div>
                                <div className="col-sm-6 text-muted text-right item2"><strong>{this.props.item2}</strong></div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 keterangan">
                                    {this.props.keterangan}
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-1">
                            <button type="button" className="btn btn-default btn-block" onClick={this.setValue}><i className="fa fa-chevron-right"></i></button>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default List01;