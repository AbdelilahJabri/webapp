import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import cs from 'classnames';


class TableActions extends React.Component {

    static defaultProps = {
        actions: []
    };

    render() {
        const {
            actions,
            row
        } = this.props;
        if (!actions.length) return null;
        return (
            <TableCell style={{backgroundColor: '#fff', width: 80}}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    {actions.map((item, idx) => {
                        return (
                            item.onClick ? <button
                                data-toggle="tooltip" data-placement="bottom" title={item.name}
                                key={idx}
                                className={cs('btn btn-outline btn-light ml-1 border-0 btn-outline-' + item.color)}
                                onClick={() => item.onClick(row.id ? row.id : row)}
                                disabled={item.isDisabled && item.isDisabled(row)}
                            >
                                <i className={cs('datatable-icon fas', item.icon,)}/>
                            </button> : null
                        );
                    })}
                </div>
            </TableCell>
        );
    }
}

export default TableActions;
