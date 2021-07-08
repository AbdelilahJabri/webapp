import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {get} from "lodash";
import swal from 'sweetalert'

import Datatable from "../../../../components/Datatable";
import {columns} from "./columns";
import {TITRES} from "../../../../redux/actions/constants";
import Loader from "../../../../Layout/Loader";
import {createDeleteAction, createListAction} from "../../../../redux/actions";

const Titres = ({history, listTitres, titres, deleteTitre}) => {

    useEffect(() => {
        listTitres();
    }, []);

    const actions = [
        {
            action: 'show',
            icon: 'fa fa-eye',
            color: 'info',
            name: 'Détails',
            onClick: (id) => {
                history.push("/administration/titres/" + id)
            }
        },
        {
            action: 'edit',
            icon: 'fa fa-pen',
            color: 'warning',
            name: 'Modifier',
            onClick: (id) => {
                history.push("/administration/titres/modifier/" + id)
            }
        },
        {
            action: 'delete',
            icon: 'fa fa-trash-alt',
            name: 'Supprimer',
            color: 'danger',
            onClick: (id) => confirmDeleteTitre(id)
        }
    ];

    const confirmDeleteTitre = (id) => {
        swal({
            title: "Êtes-vous sûr?",
            text: "Une fois supprimé, vous ne pourrez plus récupérer ce titre!",
            icon: "warning",
            buttons: {
                cancel: "Annuler",
                supprimer: true
            }
        }).then((willDelete) => {
            if (willDelete) {
                deleteTitre({id}, () => {
                    listTitres();
                    swal("Le titre a été supprimé!", {
                        icon: "success",
                    });
                });
            }
        });
    };

    if (!Array.isArray(titres)) return <Loader/>;

    return (
        <div className="row">
            <div className="col-lg-12">
                <Datatable data={titres}
                           title={"Gestions des titres"}
                           columns={columns}
                           actions={actions}
                           options={{
                               customToolbar: () => {
                                   return (
                                       <button className="btn btn-primary"
                                               onClick={() => history.push("/administration/titres/ajouter")}
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
        titres: get(state, 'app.titres.data', [])
    }
};

export default connect(mapStateToProps, {
    listTitres: createListAction(TITRES),
    deleteTitre: createDeleteAction(TITRES)
})(Titres);
