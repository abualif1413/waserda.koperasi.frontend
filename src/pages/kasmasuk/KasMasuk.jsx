import React from 'react';
import PageHeading from '../../components/pageheading/PageHeading';
import FormHeading from '../../components/formheading/FormHeading';
import CtrlTextBox from '../../components/ctrltextbox/CtrlTextBox';
import CtrlTextArea from '../../components/ctrltextarea/CtrlTextArea';
import CtrlTextCOA from '../../components/ctrltextcoa/CtrlTextCOA';

class KasMasuk extends React.Component {

    constructor(props) {
        super(props);
        this.pushAkunKas = this.pushAkunKas.bind(this);
        this.pushJumlah = this.pushJumlah.bind(this);
        this.pushUraian = this.pushUraian.bind(this);
        this.goInsert = this.goInsert.bind(this);
        this.state = {
            id_akun_kas: 0,
            jumlah: 0,
            uraian: ""
        };
    }

    pushAkunKas = (nilai) => {
        this.setState({id_akun_kas: nilai});
    }

    pushJumlah = (nilai) => {
        this.setState({jumlah: nilai});
    }

    pushUraian = (nilai) => {
        this.setState({uraian: nilai});
    }

    goInsert = (e) => {
        e.preventDefault();
        alert(JSON.stringify(this.state));
    }

    render = () => {
        console.log(this.state);
        return (
            <React.Fragment>
                <PageHeading
                        fa_icon="fa fa-file" judul_besar="Kas Masuk"
                        judul_kecil="Proses penerimaan pada akun kas / setara kas" />
                <br />
                <FormHeading judul="Rincian jurnal" />
                <br />
                <form onSubmit={this.goInsert}>
                    <div className="row">
                        <div className="form-group col-sm-7">
                            <CtrlTextCOA label="Akun Kas" handle={this.pushAkunKas} id="coa_kredit" />
                        </div>
                        <div className="form-group col-sm-3">
                            <CtrlTextBox label="Jumlah" handle={this.pushJumlah} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-sm-12">
                            <CtrlTextArea label="Uraian" handle={this.pushUraian} />
                        </div>
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary">Tambah Rincian</button>
                </form>
            </React.Fragment>
        );
    }
}

export default KasMasuk;