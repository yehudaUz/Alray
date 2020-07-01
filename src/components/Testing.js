import React from 'react';

const Testing = () => {
    return (

        <div className="container my-4">
            <button className="btn btn-primary dropdown-toggle mr-4" type="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">Basic dropdown</button>

            <div className="dropdown-menu">
                <a className="dropdown-item">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="checkbox1"></input>
                        <label className="custom-control-label" for="checkbox1">Check me</label>
                    </div>
                </a>
                <a className="dropdown-item" href="/">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="checkbox2" checked></input>
                        <label className="custom-control-label" for="checkbox2">Check me</label>
                    </div>
                </a>
                <a className="dropdown-item" href="/">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="checkbox3"></input>
                        <label className="custom-control-label" for="checkbox3">Check me</label>
                    </div>
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="checkbox4" checked></input>
                        <label className="custom-control-label" for="checkbox4">Check me</label>
                    </div>
                </a>
            </div>

        </div>

    )
}

export default Testing;

