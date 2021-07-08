import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {get} from "lodash";
import swal from 'sweetalert'

import Datatable from "../../../../components/Datatable";
import {columns} from "./columns";
import {SOCIETE_FACTURATIONS} from "../../../../redux/actions/constants";
import Loader from "../../../../Layout/Loader";
import {createDeleteAction, createListAction} from "../../../../redux/actions";

const Facturations = ({history, listSocietes, societes, deleteSociete}) => {

    useEffect(() => {
        listSocietes();
    }, []);

    const actions = [
        {
            action: 'edit',
            icon: 'fa fa-pen',
            color: 'warning',
            name: 'Modifier',
            onClick: (id) => {
                history.push("/administration/facturations/modifier/" + id)
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
            text: "Une fois supprimé, vous ne pourrez plus récupérer cette sociétés de facturation!",
            icon: "warning",
            buttons: {
                cancel: "Annuler",
                supprimer: true
            }
        }).then((willDelete) => {
            if (willDelete) {
                deleteSociete({id}, () => {
                    listSocietes();
                    swal("La sociétés de facturation a été supprimée!", {
                        icon: "success",
                    });
                });
            }
        });
    };

    if (!Array.isArray(societes)) return <Loader/>;

    return (
        <div className="row">
            <div className="col-lg-12">
                <Datatable data={societes}
                           title={"Gestions des sociétés de facturation"}
                           columns={columns}
                           actions={actions}
                           options={{
                               customToolbar: () => {
                                   return (
                                       <button className="btn btn-primary"
                                               onClick={() => history.push("/administration/facturations/ajouter")}
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
        societes: get(state, 'app.societe_facturations.data', [])
    }
};

export default connect(mapStateToProps, {
    listSocietes: createListAction(SOCIETE_FACTURATIONS),
    deleteSociete: createDeleteAction(SOCIETE_FACTURATIONS)
})(Facturations);
