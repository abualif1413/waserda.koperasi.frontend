import React, { Component, Fragment } from 'react';
import PageHeading from '../../components/pageheading/PageHeading';
import Panel from '../../components/panel/Panel';
import Axios from 'axios';
import accounting from 'accounting';
import CtrlTextBoxWithCol from '../../components/ctrltextbox/CtrlTextBoxWithCol';
import moment from 'moment';
import ListNavigation from '../../components/navigation/ListNavigation';
import Swal from 'sweetalert2';
import List02 from '../../components/list01/List02';
import ListLoading from '../../components/list01/ListLoading';
import {connect} from 'react-redux';

class KasKeluarList extends Component {
    constructor(props) {
        super(props);
        this.handlePencarian = this.handlePencarian.bind(this);
        this.loadList = this.loadList.bind(this);
        this.rincianEdit = this.rincianEdit.bind(this);
        this.rincianDelete = this.rincianDelete.bind(this);
        this.state = {
            listLoading: false,
            list: [],
            pencarian: "",
            dari: "",
            sampai: ""
        };
    }

    componentDidMount = () => {
        this.setState({
            dari: moment().format("YYYY-MM-DD"),
            sampai: moment().format("YYYY-MM-DD")
        }, () => {
            this.loadList();
        });
    }

    loadList = () => {
        this.setState({listLoading: true}, () => {
            Axios.get(this.props.API + "pengeluarankas/headerlist",
                {
                    params: {
                        src: this.state.pencarian,
                        dari: this.state.dari,
                        sampai: this.state.sampai
                    },
                    headers: {
                        Authorization: "Bearer " + this.props.token.user_token
                    }
                })
                .then((r) => {
                    var data = r.data.data;
                    this.setState({
                        list: data,
                        listLoading: false
                    });
                })
                .catch((c) => {

                });
        });
    }

    handlePencarian = (v) => {
        this.setState({pencarian: v});
    }

    handleDari = (v) => {
        this.setState({dari: v});
    }

    handleSampai = (v) => {
        this.setState({sampai: v});
    }

    rincianEdit = (id) => {
        /*
         | -----------------------------------------------------------------------------
         | Penggunaan this.props.history.push hanya bisa dilakukan didalam component
         | yang diolah didalam route. Jika dia diluar component route,
         | maka gunakan useHistory dan harus dilakukan melalui function component
         | (stateless component)
         | -----------------------------------------------------------------------------
        */
        this.props.history.push({
            pathname: '/kaskeluaredit',
            state: {id_penerimaan_kas: id}
        });
    }

    rincianDelete = (id) => {
        Swal.fire({
            title: 'Delete data?',
            text: "Anda yakin akan menghapus data rincian penerimaan kas ini?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya'
          }).then((result) => {
            if(result.value) {
                Axios.get(this.props.API + "pengeluarankas/deleteheader/" + id,
                    {
                        headers: {
                            Authorization: "Bearer " + this.props.token.user_token
                        }
                    })
                    .then((r) => {
                        Swal.fire({
                            icon: 'success',
                            title: 'Berhasil',
                            text: r.data.message,
                        });
                        this.loadList();
                    })
                    .catch((c) => {

                    });
            }
          });
    }

    render() {
        //console.log(this.state);
        return (
            <div>
                <PageHeading
                    fa_icon="fa fa-file" judul_besar="Pengeluaran Kas"
                    judul_kecil="Menu pengeluaran kas untuk mencatat penguranan saldo akun-akun kas dan setara kas"></PageHeading>

                {/* <LNav add="/kasmasukadd" /> */}
                <ListNavigation history={this.props.history} add="/kaskeluaradd" />
                <div className="row">
                    <div className="col-sm-6">
                        <Panel header="Pencarian Data">
                            <div className="row">
                                <CtrlTextBoxWithCol col="12" label="Pencarian" handle={this.handlePencarian} nilai={this.state.pencarian} />
                                <CtrlTextBoxWithCol col="6" label="Dari" type="datepicker" handle={this.handleDari} nilai={this.state.dari} />
                                <CtrlTextBoxWithCol col="6" label="Sampai" type="datepicker" handle={this.handleSampai} nilai={this.state.sampai} />
                            </div>
                            <hr />
                            <button className="btn btn-primary" onClick={() => {this.loadList()}}><i className="fa fa-search"></i>&nbsp;Cari</button>
                        </Panel>
                    </div>
                    <div className="col-sm-6">
                        <Panel header="Daftar Pengeluaran Kas">
                            {
                                this.state.listLoading == true ?
                                    <Fragment>
                                        <ListLoading />
                                        <ListLoading />
                                        <ListLoading />
                                        <ListLoading />
                                    </Fragment> :
                                    this.state.list.map((v) => {
                                        let item1 = "#" + v.kode + ", Tgl : " + moment(v.tanggal).format("DD/MMMM/YYYY (dddd)");
                                        let item2 = "Acc : " + v.acc_number + " - " + v.acc_name + ", Jml : " + accounting.formatNumber(v.jumlah, 2);
                                        let keterangan = v.keterangan;
    
                                        return <List02
                                                    key={v.id}
                                                    item1={item1}
                                                    item2={item2}
                                                    keterangan={keterangan}
                                                    id={v.id} handleEdit={this.rincianEdit} handleDelete={this.rincianDelete}/>
                                    })
                            }
                        </Panel>
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

export default connect(mapStateToProps)(KasKeluarList);