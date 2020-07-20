import React, { Component, Fragment } from 'react';
import PageHeading from '../../components/pageheading/PageHeading';
import FormHeading from '../../components/formheading/FormHeading';
import CtrlTextBoxWithCol from '../../components/ctrltextbox/CtrlTextBoxWithCol';
import axios from 'axios';
import ListTree from '../../components/list01/ListTree';
import CtrlTextCOAWithCol from '../../components/ctrltextcoa/CtrlTextCOAWithCol';
import CtrlComboBoxWithCol from '../../components/ctrlcombobox/CtrlComboBoxWithCol';
import Swal from 'sweetalert2';
import Panel from '../../components/panel/Panel';
import ListLoading from '../../components/list01/ListLoading';
import {connect} from 'react-redux';

class MasterDataCoa extends Component {
    
    constructor(props) {
        super(props);
        this.handleParentId = this.handleParentId.bind(this);
        this.handleAccNumber = this.handleAccNumber.bind(this);
        this.handleAccName = this.handleAccName.bind(this);
        this.handleCariCOA = this.handleCariCOA.bind(this);
        this.getKelompok = this.getKelompok.bind(this);
        this.getCoa = this.getCoa.bind(this);
        this.handleIdKelompokCOA = this.handleIdKelompokCOA.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.goEdit = this.goEdit.bind(this);
        this.goDelete = this.goDelete.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            id: 0,
            id_parent: 0,
            acc_number: "",
            acc_name: "",
            kelompok_coa: [],
            id_kelompok_coa: 0,
            coaLoading: false,
            coa: [],
            cari_coa: "",
            submit_state: "insert"
        };
    }

    componentDidMount = () => {
        this.getKelompok();
        this.getCoa();
    }

    getCoa = () => {
        this.setState({coaLoading: true}, () => {
            axios.get(this.props.API + 'coa/getcoa', {
                params : {search: this.state.cari_coa},
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

    getKelompok = () => {
        axios.get(this.props.API + 'coa/getkelompokcoa', {
            params : {search: this.state.cari_coa},
            headers: {
                Authorization: "Bearer " + this.props.token.user_token
            }
        })
            .then((r) => {
                var data = r.data.data;
                this.setState({kelompok_coa: data});
            })
            .catch((e) => {

            })
            .finally((f) => {

            });
    }

    handleParentId = (nilai) => {
        this.setState({id_parent: nilai});
    }

    handleAccNumber = (nilai) => {
        this.setState({acc_number: nilai});
    }

    handleAccName = (nilai) => {
        this.setState({acc_name: nilai});
    }

    handleCariCOA  = (nilai) => {
        this.setState({cari_coa: nilai}, () => {
            this.getCoa();
        });
    }

    handleIdKelompokCOA = (nilai) => {
        this.setState({id_kelompok_coa: nilai});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            title: 'Simpan data?',
            text: "Anda yakin akan menyimpan data COA ini?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya'
          }).then((result) => {
            if (result.value) {
                axios.post(this.props.API + 'coa/addcoa',
                    {
                        id: this.state.id,
                        parent_id: this.state.id_parent,
                        id_kelompok: this.state.id_kelompok_coa,
                        acc_number: this.state.acc_number,
                        acc_name: this.state.acc_name,
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
                            text: 'Data COA telah selesai disimpan',
                          });
                        
                          this.handleReset();
                          this.getCoa();
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
        //alert(JSON.stringify(this.state));
    }

    handleReset = () => {
        this.setState({
            id: 0,
            id_parent: 0,
            acc_number: "",
            acc_name: "",
            kelompok_coa: [],
            id_kelompok_coa: 0,
            submit_state: "insert"
        }, () => {
            this.getKelompok();
        });
    }

    goEdit = (id) => {
        // alert(id);
        axios.get(this.props.API + 'coa/find/' + id,
            {
                headers: {
                    Authorization: "Bearer " + this.props.token.user_token
                }
            })
            .then((r) => {
                var data = r.data;
                this.setState({
                    id: data.id,
                    id_parent: data.parent_id,
                    acc_number: data.acc_number,
                    acc_name: data.acc_name,
                    id_kelompok_coa: data.id_kelompok,
                    submit_state: "update"
                }, () => {
                    window.scrollTo(0, 0);
                })
                //this.setState({coa: data});
            })
            .catch((e) => {

            })
            .finally((f) => {

            });
    }

    goDelete = (id) => {
        Swal.fire({
            title: 'Simpan data?',
            text: "Anda yakin akan menghapus data COA ini?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya'
          }).then((result) => {
            if (result.value) {
                axios.get(this.props.API + 'coa/deletecoa/' + id,
                    {
                        headers: {
                            Authorization: "Bearer " + this.props.token.user_token
                        }
                    })
                    .then((r) => {
                        Swal.fire({
                            icon: 'success',
                            title: 'Selesai',
                            text: 'Data COA telah selesai dihapus',
                        });
                        
                        this.handleReset();
                        this.getCoa();
                    })
                    .catch((e) => {

                    })
                    .finally((f) => {
        
                    });
            }
          });
    }

    render() {
        const {acc_number, acc_name, kelompok_coa} = this.state;
        //console.log(this.state);
        return (
            <div>
                <PageHeading
                    fa_icon="fa fa-file" judul_besar="Master Data COA"
                    judul_kecil="Pengaturan COA (Chart of Account) yang akan diolah dalam setiap kegiatan akuntansi didalam aplikasi ini"></PageHeading>
                
                {/* <FormHeading judul="Form master data COA"></FormHeading> */}
                <Panel header="Form COA">
                    <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
                        <div className="row">
                            <CtrlTextCOAWithCol label="COA Induk" col="12"
                                id="coa_parent" nilai={this.state.id_parent}
                                handle={this.handleParentId} />
                        </div>
                        <div className="row">
                            <CtrlTextBoxWithCol label="No. Perkiraan" col="4" handle={this.handleAccNumber} nilai={this.state.acc_number} />
                            <CtrlTextBoxWithCol label="Nama Perkiraan" col="4" handle={this.handleAccName} nilai={this.state.acc_name} />
                            <CtrlComboBoxWithCol label="Kelompok" col="4"
                                items={kelompok_coa} show="kelompok" value="id"
                                unselect_text="- Pilih kelompok COA -"
                                nilai={this.state.id_kelompok_coa} handle={this.handleIdKelompokCOA} />
                        </div>
                        <hr />
                        {
                            (this.state.submit_state == "insert")  ?
                                <button type="submit" className="btn btn-primary"><i className="fa fa-save"></i>&nbsp;Tambah</button> :
                                <button type="submit" className="btn btn-success"><i className="fa fa-edit"></i>&nbsp;Ubah</button>
                        }
                            &nbsp;
                            <button type="reset" className="btn btn-warning"><i className="fa fa-recycle"></i>&nbsp;Reset</button>
                        <hr />
                    </form>
                </Panel>
                <br />
                {/* <FormHeading judul="Daftar COA" /> */}
                <Panel header="Daftar COA">
                    <form>
                        <div className="row">
                            <CtrlTextBoxWithCol label="Pencarian" col="12" handle={this.handleCariCOA} nilai={this.state.cari_coa} />
                        </div>
                    </form>
                    {
                        this.state.coaLoading == true ?
                            <Fragment>
                                <ListLoading />
                                <ListLoading />
                                <ListLoading />
                                <ListLoading />
                                <ListLoading />
                                <ListLoading />
                            </Fragment> :
                            this.state.coa.map((v) => {
                                let item2 = "kelompok: " + v.kelompok + ", sisa saldo: 0";
                                return <ListTree
                                            key={v.id}
                                            item2={v.tipe_logical} keterangan={item2}
                                            item1={v.acc_number + ' - ' + v.acc_name}
                                            id={v.id} handleEdit={this.goEdit} handleDelete={this.goDelete} />
                        })
                    }
                </Panel>
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

export default connect(mapStateToProps)(MasterDataCoa);