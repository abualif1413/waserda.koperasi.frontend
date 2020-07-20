import React, { Component, Fragment } from 'react';
import './CtrlTextCOA.css';
import List01 from '../list01/List01';
import axios from 'axios';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import {connect} from 'react-redux';

class CtrlTextCOAWithCol extends Component {
    constructor(props) {
        super(props);
        this.hidePanelSearch = this.hidePanelSearch.bind(this);
        this.showPanelSearch = this.showPanelSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.chooseCoa = this.chooseCoa.bind(this);
        this.findShowCOAName = this.findShowCOAName.bind(this);
        this.state = {
            search: "",
            coaLoading: false,
            coa: [],
            id_coa: 0
        };
    }

    componentWillReceiveProps = (props) => {
        if(props.nilai !== this.state.id_coa) {
            this.setState({id_coa: props.nilai ?? 0}, () => {
                if(!props.nilai || props.nilai === 0) {
                    this.setState({search: ""});
                } else {
                    this.findShowCOAName();
                }
            });
        }
    }

    hidePanelSearch = (e) => {
        const elm_close = document.querySelector("#panel_search_" + this.props.id);
        elm_close.style.display = "none";
    }

    handleChange = (e) => {
        this.setState({search: e.target.value}, () => {
            this.getCoa();
        });
    }

    chooseCoa = (id_coa) => {
        this.setState({
            id_coa: id_coa
        }, () => {
            this.findShowCOAName();
            this.props.handle(this.state.id_coa);
            this.hidePanelSearch();
        })
    }

    findShowCOAName = () => {
        this.setState({search: "Loading..."})
        axios.get(this.props.API + 'coa/find/' + this.state.id_coa,
            {
                headers: {
                    Authorization: "Bearer " + this.props.token.user_token
                }
            })
            .then((r) => {
                var data = r.data;
                this.setState({search: data.acc_number + " - " + data.acc_name})
                //this.setState({coa: data});
            })
            .catch((e) => {

            })
            .finally((f) => {

            });
    }

    getCoa = () => {
        this.setState({coaLoading: true}, () => {
            axios.get(this.props.API + 'coa/getcoa', {
                params : {search: this.state.search},
                headers: {
                    Authorization: "Bearer " + this.props.token.user_token
                }
            })
                .then((r) => {
                    var data = r.data.data;
                    this.setState({
                        coa: data,
                        coaLoading: false
                    });
                })
                .catch((e) => {

                })
                .finally((f) => {

                });
        })
    }

    showPanelSearch = (e) => {
        var childsOfParent = e.target.parentElement.childNodes;
        for(var i=0; i<childsOfParent.length; i++) {
            if(childsOfParent[i].className === "panel_search") {
                childsOfParent[i].style.display = "inline";
            }
        }
    }

    render() {
        const search = this.state.search;
        const fa_class = this.props.fa_class ? this.props.fa_class : "fa fa-bookmark";

        return (
            <div className={"col-sm-" + this.props.col}>
                <div className="ctrltextcoa form-group">
                    <label className="control-label"><i className={fa_class} style={{fontSize: "70%"}}></i>&nbsp;{this.props.label}</label>
                    <input type="text" className="form-control" onChange={this.handleChange} onKeyUp={this.showPanelSearch} value={search} />
                    <div className="panel_search" id={"panel_search_" + this.props.id}>
                        <div style={{width: "98%"}}>
                            <div className="badge badge-success float-right" style={{margin: "0.2rem"}}><i className="fa fa-times" id={"close_panel_" + this.props.id} onClick={this.hidePanelSearch}></i></div>
                            <div style={{clear: "both"}}></div>
                            <br />
                            {
                                this.state.coaLoading === true ?
                                    <Fragment>
                                        <Skeleton height={40} />
                                        <Skeleton height={40} />
                                        <Skeleton height={40} />
                                    </Fragment> :
                                    this.state.coa.map(v => {
                                        return <List01 key={v.id}
                                                        item1={v.tipe_logical} item2={v.kelompok}
                                                        keterangan={v.acc_number + ' - ' + v.acc_name}
                                                        id={v.id}
                                                        choose={this.chooseCoa}></List01>
                                    })
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        API: state.APIAddress,
        token: state.UserToken
    }
}

export default connect(mapStateToProps)(CtrlTextCOAWithCol);