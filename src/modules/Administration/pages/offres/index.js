import React, {useEffect} from 'react';
import {get} from "lodash";
import {connect} from "react-redux";
import Loader from "../../../../Layout/Loader";

import Datatable from "../../../../components/Datatable";
import columns from "./columns";
import {createListAction} from "../../../../redux/actions";
import {OFFRES} from "../../../../redux/actions/constants";

const Offres = ({offres, history, listOffres}) => {

    useEffect(() => {
        listOffres();
    }, []);

    const actions = [
        {
            action: 'edit',
            icon: ' fa fa-pen',
            color: 'warning',
            name: 'Modifier',
            onClick: (id) => console.log(id)
        },
        {
            action: 'delete',
            icon: 'fa fa-trash-alt',
            name: 'Supprimer',
            color: 'danger',
            onClick: (id) => console.log(id)
        }
    ];

    if (!Array.isArray(offres)) return <Loader/>;

    return (
        <div className="row">
            <div className="col-lg-12">
                <Datatable data={offres}
                           title={"Gestions des offres"}
                           columns={columns}
                           actions={actions}
                           options={{
                               customToolbar: () => {
                                   return (
                                       <button className="btn btn-primary"
                                               onClick={() => history.push("/administration/offres/ajouter")}
                                       >
                                           <i className="fa fa-plus mr-2"/>
                                           Ajouter
                                       </button>
                                   );
                               }
                           }}/>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        offres: get(state, 'app.offres.data', [])
    }
};

export default connect(mapStateToProps, {listOffres: createListAction(OFFRES)})(Offres);
