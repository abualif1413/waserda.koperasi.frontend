import React, { Component, Fragment } from 'react';

class ListTree extends Component {
    constructor(props) {
        super(props);
        this.goEdit = this.goEdit.bind(this);
        this.goDelete = this.goDelete.bind(this);
        this.state = {
            id: 0
        };
    }

    componentDidMount = () => {
        this.setState({id: this.props.id ?? 0})
    }

    goEdit = () => {
        this.props.handleEdit(this.state.id);
    }

    goDelete = () => {
        this.props.handleDelete(this.state.id);
    }

    render() {
        return (
            <Fragment>
                <div className="list01Tree">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title" style={{fontSize: "95%"}}><strong>{this.props.item1}</strong></h5>
                            <h6 className="card-subtitle mb-2 text-muted" style={{fontSize: "95%"}}>{this.props.item2}</h6>
                            <p className="card-text" style={{fontSize: "90%"}}>{this.props.keterangan}</p>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-outline-primary btn-sm" onClick={this.goEdit}><i className="fa fa-edit"></i>&nbsp;Ubah</button>&nbsp;
                            <button className="btn btn-outline-warning btn-sm" onClick={this.goDelete}><i className="fa fa-trash"></i>&nbsp;Hapus</button>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default ListTree;