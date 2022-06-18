import React from "react";
import { NotFound } from '../../Assets';

function PageNotFound() {
  return (
    <React.Fragment>
        <div className="container-fluid vh-100">
            <div className="d-flex flex-wrap flex-column flex-1 justify-content-center align-items-center vh-100">
                <img src={NotFound} width="450" height="450"></img>
                <h1 className="text-muted">PAGE NOT FOUND</h1>
                <a href="/" className="btn btn-primary btn-sm"><span className="glyphicon glyphicon-home"></span>HOME</a>
            </div>
        </div>
    </React.Fragment>
  );
}

export default PageNotFound;
