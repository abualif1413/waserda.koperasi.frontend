import React from 'react';
import './CtrlTextCOA.css';
import List01 from '../list01/List01';
import axios from 'axios';

class CtrlTextCOA extends React.Component {
    constructor(props) {
        super(props);
        this.hidePanelSearch = this.hidePanelSearch.bind(this);
        this.showPanelSearch = this.showPanelSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.chooseCoa = this.chooseCoa.bind(this);
        this.state = {
            search: "",
            coa: [],
            id_coa: 0
        };
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

    chooseCoa = (id_coa, str_coa) => {
        this.setState({
            id_coa: id_coa,
            search: str_coa
        }, () => {
            this.hidePanelSearch();
        })
    }

    getCoa = () => {
        axios.get('http://localhost/waserda/waserda.koperasi.backend/api/coa/getcoa', {
            params : {search: this.state.search}
        })
            .then((r) => {
                var data = r.data.data;
                this.setState({coa: data});
            })
            .catch((e) => {

            })
            .finally((f) => {

            });
    }

    showPanelSearch = (e) => {
        var childsOfParent = e.target.parentElement.childNodes;
        for(var i=0; i<childsOfParent.length; i++) {
            if(childsOfParent[i].className === "panel_search") {
                childsOfParent[i].style.display = "inline";
            }
        }
    }

    render = () => {
        const search = this.state.search;
        const fa_class = this.props.fa_class ? this.props.fa_class : "fa fa-bookmark";

        console.log(this.state);
        return (
            <div className="ctrltextcoa">
                <label className="control-label"><i className={fa_class} style={{fontSize: "70%"}}></i>&nbsp;{this.props.label}</label>
                <input type="text" className="form-control" onChange={this.handleChange} onKeyUp={this.showPanelSearch} value={search} />
                <div className="panel_search" id={"panel_search_" + this.props.id}>
                    <div className="badge badge-success float-right" style={{margin: "0.2rem"}}><i className="fa fa-times" id={"close_panel_" + this.props.id} onClick={this.hidePanelSearch}></i></div>
                    <div style={{clear: "both"}}></div>
                    <br />
                    {
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
        );
    }
}

export default CtrlTextCOA;