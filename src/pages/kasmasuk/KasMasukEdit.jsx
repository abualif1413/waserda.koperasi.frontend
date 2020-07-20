import React, { Component, Fragment } from 'react';
import PageHeading from '../../components/pageheading/PageHeading';
import CtrlTextCOAWithCol from '../../components/ctrltextcoa/CtrlTextCOAWithCol';
import CtrlTextAreaWithCol from '../../components/ctrltextarea/CtrlTextAreaWithCol';
import CtrlTextBoxWithCol from '../../components/ctrltextbox/CtrlTextBoxWithCol';
import Axios from 'axios';
import Swal from 'sweetalert2';
import ListTree from '../../components/list01/ListTree';
import accounting from 'accounting';
import Panel from '../../components/panel/Panel';
import moment from 'moment';
import { useHistory } from 'react-router';
import ListLoading from '../../components/list01/ListLoading';
import {connect} from 'react-redux';

class KasMasukEdit extends Component {
    constructor(props) {
        super(props);
        this.handleAkunKredit = this.handleAkunKredit.bind(this);
        this.handleJumlah = this.handleJumlah.bind(this);
        this.handleKeterangan = this.handleKeterangan.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetFormRincian = this.resetFormRincian.bind(this);
        this.rincianList = this.rincianList.bind(this);
        this.rincianEdit = this.rincianEdit.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleSubmitHeader = this.handleSubmitHeader.bind(this);
        this.findHeader = this.findHeader.bind(this);
        this.state = {
            id: 0,
            id_akun_kredit: 0,
            jumlah: 0,
            keterangan: "",
            submit_state: "insert",
            rincianListLoading: false,
            rincianList: [],
            totalRincian: 0,
            id_akun_debet: 0,
            tanggal: "",
            id_penerimaan_kas: 0
        };
    }

    componentDidMount = () => {
        this.setState({id_penerimaan_kas: this.props.location.state.id_penerimaan_kas},
            () => {
                this.rincianList();
                this.findHeader();
            });
    }

    handleAkunKredit = (v) => {
        this.setState({id_akun_kredit: v});
    }

    handleAkunDebet = (v) => {
        this.setState({id_akun_debet: v});
    }

    handleJumlah = (v) => {
        this.setState({jumlah: v});
    }

    handleKeterangan = (v) => {
        this.setState({keterangan: v});
    }

    handleTanggal = (v) => {
        this.setState({tanggal: v});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            title: 'Simpan data?',
            text: "Anda yakin akan menyimpan data rincian penerimaan kas ini?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya'
          }).then((result) => {
            if (result.value) {
                Axios.post(this.props.API + "penerimaankas/addrincian", 
                    {
                        id: this.state.id,
                        id_penerimaan_kas: this.state.id_penerimaan_kas,
                        id_coa: this.state.id_akun_kredit,
                        jumlah: this.state.jumlah,
                        keterangan: this.state.keterangan,
                        submit_state: this.state.submit_state
                    },
                    {
                        headers: {
                            Authorization: "Bearer " + this.props.token.user_token
                        }
                    })
                    .then((r) => {
                        Swal.fire({
                            icon: 'success',
                            title: 'Selesai',
                            text: 'Data telah berhasil disimpan',
                          }).then(() => {
                            this.resetFormRincian();
                            this.rincianList();
                          });
                    })
                    .catch((e) => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: JSON.stringify(e),
                          });
                    })
                    .finally((f) => {
                        
                    });
            }
          });
    }

    handleReset = () => {
        this.resetFormRincian();
        window.scrollTo(0, 20);
    }

    resetFormRincian = () => {
        this.setState({
            id: 0,
            id_akun_kredit: 0,
            jumlah: 0,
            keterangan: "",
            submit_state: "insert"
        });
    }

    rincianList = () => {
        this.setState({rincianListLoading: true}, () => {
            Axios.get(this.props.API + "penerimaankas/rincianlist/" + this.state.id_penerimaan_kas,
                {
                    headers: {
                        Authorization: "Bearer " + this.props.token.user_token
                    }
                })
                .then((r) => {
                    var total_rincian = 0;
                    var data = r.data.data;
                    for(var i=0; i<data.length; i++) {
                        total_rincian += parseFloat(data[i].jumlah);
                    }
                    this.setState({
                        rincianList: data,
                        totalRincian: total_rincian,
                        rincianListLoading: false
                    });
                })
                .catch((e) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: JSON.stringify(e),
                        });
                })
                .finally((f) => {
                    
                });
        })
    }

    rincianEdit = (id) => {
        Axios.get(this.props.API + "penerimaankas/findrincian/" + id,
                    {
                        headers: {
                            Authorization: "Bearer " + this.props.token.user_token
                        }
                    })
                    .then((r) => {
                        var data = r.data;
                        this.setState({
                            id: data.id,
                            id_akun_kredit: data.id_coa,
                            jumlah: data.jumlah,
                            keterangan: data.keterangan,
                            submit_state: "update"
                        }, () => {
                            window.scrollTo(0,20);
                        });
                    })
                    .catch((e) => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: JSON.stringify(e),
                          });
                    })
                    .finally((f) => {
                        
                    });
    }

    rincianDelete = (id) => {
        Swal.fire({
            title: 'Hapus data?',
            text: "Anda yakin akan menghapus data rincian penerimaan kas ini?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya'
          }).then((result) => {
            if (result.value) {
                Axios.get(this.props.API + "penerimaankas/deleterincian/" + id,
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
                        
                        this.rincianList();
                        this.handleReset();
                    })
                    .catch((e) => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: JSON.stringify(e),
                          });
                    })
                    .finally((f) => {
                        
                    });
            }
          });
    }

    handleSubmitHeader = (e) => {
        e.preventDefault();
        Swal.fire({
            title: 'Simpan data?',
            text: "Anda yakin akan menyimpan data penerimaan kas ini?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya'
          }).then((result) => {
            if (result.value) {
                Axios.post(this.props.API + "penerimaankas/addheader",
                    {
                        id_penerimaan_kas: this.state.id_penerimaan_kas,
                        id_akun_debet: this.state.id_akun_debet,
                        tanggal: this.state.tanggal
                    },
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
                          //document.location.href = "/kasmasuk";
                          this.props.history.push({
                            pathname: '/kasmasuk',
                            state: {}
                          });
                    })
                    .catch((e) => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: JSON.stringify(e),
                          });
                    })
                    .finally((f) => {
                        
                    });
            }
          });
    }

    findHeader = () => {
        Axios.get(this.props.API + "penerimaankas/findheader/" + this.state.id_penerimaan_kas,
            {
                headers: {
                    Authorization: "Bearer " + this.props.token.user_token
                }
            })
            .then((r) => {
                var data = r.data;
                this.setState({
                    id_akun_debet: data.id_akun_debet,
                    tanggal: moment(data.tanggal).format("YYYY-MM-DD")
                });
            })
            .catch((e) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: JSON.stringify(e),
                });
            })
            .finally((f) => {
                
            });
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <PageHeading
                    fa_icon="fa fa-file" judul_besar="Ubah Penerimaan Kas"
                    judul_kecil="Menu penerimaan kas untuk mencatat penambahan saldo akun-akun kas dan setara kas"></PageHeading>

                <div className="row">
                    <div className="col-sm-6">
                        <Panel header="Rincian Penerimaan Kas">
                            <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
                                <div className="row">
                                    <CtrlTextCOAWithCol col="12" label="Akun Kredit" id="txtAkunKredit" handle={this.handleAkunKredit} nilai={this.state.id_akun_kredit} />
                                </div>
                                <div className="row">
                                    <CtrlTextBoxWithCol col="5" label="Jumlah" id="txtJumlah" handle={this.handleJumlah} nilai={this.state.jumlah} />
                                </div>
                                <div className="row">
                                    <CtrlTextAreaWithCol col="12" label="Keterangan" id="txtKeterangan" handle={this.handleKeterangan} nilai={this.state.keterangan} />
                                </div>
                                <hr />
                                {
                                    (this.state.submit_state == "insert") ?
                                        <button type="submit" className="btn btn-primary"><i className="fa fa-save"></i>&nbsp;Simpan</button> :
                                        <button type="submit" className="btn btn-success"><i className="fa fa-edit"></i>&nbsp;Ubah</button>
                                }
                                    &nbsp;
                                    <button type="reset" className="btn btn-warning"><i className="fa fa-recycle"></i>&nbsp;Reset</button>
                                <hr />
                            </form>
                        </Panel>

                        <br />

                        <Panel header="Keterangan Penerimaan Kas">
                            <form onSubmit={this.handleSubmitHeader}>
                                <div className="row">
                                    <CtrlTextCOAWithCol col="12" label="Akun Debet (Kas dan Setara Kas)" id="txtAkunDebet" handle={this.handleAkunDebet} nilai={this.state.id_akun_debet} />
                                </div>
                                <div className="row">
                                    <CtrlTextBoxWithCol col="5" label="Tanggal" id="txtTanggal" type="datepicker" handle={this.handleTanggal} nilai={this.state.tanggal} />
                                </div>
                                <hr />
                                <button type="submit" className="btn btn-primary"><i className="fa fa-save"></i>&nbsp;Simpan</button>
                                <hr />
                            </form>
                        </Panel>
                    </div>
                    <div className="col-sm-6">
                        <Panel header="Daftar Rincian Penerimaan Kas" footer={"Total : " + accounting.formatNumber(this.state.totalRincian)}>
                            {
                                this.state.rincianListLoading == true ? 
                                    <Fragment>
                                        <ListLoading />
                                        <ListLoading />
                                        <ListLoading />
                                    </Fragment> :
                                    this.state.rincianList.map((v) => {
                                        return <ListTree
                                            key={v.id}
                                            item1={accounting.formatNumber(v.jumlah, 2)}
                                            item2={v.acc_number + " - " + v.acc_name}
                                            keterangan={v.keterangan}
                                            id={v.id} handleEdit={this.rincianEdit} handleDelete={this.rincianDelete}/>
                                })
                            }
                        </Panel>
                    </div>
                </div>
                <br />
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

export default connect(mapStateToProps)(KasMasukEdit);