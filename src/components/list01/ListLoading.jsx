import React, { Component, Fragment } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

class ListLoading extends Component {
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
                            <Skeleton height={30} />
                            <Skeleton height={20} />
                            <Skeleton height={50} />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default ListLoading;