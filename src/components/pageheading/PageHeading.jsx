import React from 'react';
import './PageHeading.css';

const PageHeading = (props) => {
    return (
        <React.Fragment>
            <div className="page_heading">
                <h3><i className={props.fa_icon}></i>&nbsp;{props.judul_besar}</h3>
                <span className="text-muted">{props.judul_kecil}</span>
            </div>
            {/* <hr /> */}
            <br />
        </React.Fragment>
    )
}

export default PageHeading;