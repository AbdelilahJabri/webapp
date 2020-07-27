import React from 'react';
import {PuffLoader} from "react-spinners";

const Loader = () => (
    <div className="container mt-5">
        <div className="row mt-5">
            <div className="col-12 d-flex justify-content-center mt-5">
                <PuffLoader
                    size={60}
                    color={"#123abc"}
                    loading={true}
                />
            </div>
        </div>
    </div>
);

export default Loader;