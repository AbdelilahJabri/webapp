import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {get} from "lodash";
import swal from 'sweetalert'

import Datatable from "../../../../components/Datatable";
import {columns} from "./columns";
import {ORIGINE_DEVIS} from "../../../../redux/actions/constants";
import Loader from "../../../../Layout/Loader";
import {createDeleteAction, createListAction} from "../../../../redux/actions";

const OriginesDevis = ({history, listOrigin, origins, deleteOrigin}) => {

    useEffect(() => {
        listOrigin();
    }, []);

    const actions = [
        {
            action: 'edit',
            icon: 'fa fa-pen',
            color: 'warning',
            name: 'Modifier',
            onClick: (id) => {
                history.push("/administration/originesDevis/modifier/" + id)
            }
        },
        {
            action: 'delete',
            icon: 'fa fa-trash-alt',
            name: 'Supprimer',
            color: 'danger',
            onClick: (id) => confirmDeleteSociete(id)
        }
    ];


    const confirmDeleteSociete = (id) => {
        swal({
            title: "Êtes-vous sûr?",
            text: "Une fois supprimé, vous ne pourrez plus récupérer cet origine de devis!",
            icon: "warning",
            buttons: {
                cancel: "Annuler",
                supprimer: true
            }
        }).then((willDelete) => {
            if (willDelete) {
                deleteOrigin({id}, () => {
                    listOrigin();
                    swal("L'origine de devis a été supprimée!", {
                        icon: "success",
                    });
                });
            }
        });
    };

    if (!Array.isArray(origins)) return <Loader/>;

    return (
        <div className="row">
            <div className="col-lg-12">
                <Datatable data={origins}
                           title={"Gestions des origines de devis"}
                           columns={columns}
                           actions={actions}
                           options={{
                               customToolbar: () => {
                                   return (
                                       <button className="btn btn-primary"
                                               onClick={() => history.push("/administration/originesDevis/ajouter")}
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
    console.log("state", state.app);
    return {
        origins: get(state, 'app.origine_devis.data', [])
    }
};

export default connect(mapStateToProps, {
    listOrigin: createListAction(ORIGINE_DEVIS),
    deleteOrigin: createDeleteAction(ORIGINE_DEVIS)
})(OriginesDevis);
