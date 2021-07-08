import React from 'react';
import Datatable from "../../../../components/Datatable";
import columns from "./columns";

const Users = ({history}) => {

    const actions = [
        {
            action: 'edit',
            icon: 'fa fa-pen',
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

    return (
        <div className="row">
            <div className="col-lg-12">
                <Datatable data={[]}
                           title={"Gestions des utilisateurs"}
                           columns={columns}
                           actions={actions}
                           options={{
                               customToolbar: () => {
                                   return (
                                       <button className="btn btn-primary"
                                               onClick={() => history.push("/administration/utilisateurs/ajouter")}
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

export default Users;
