import React, { Component } from 'react'

export default class List extends Component {
    render() {
        const {deleteItem} = this.props
        return (
            <ul className="list-group my-3">
                {
                    this.props.items.map((value, index)=>{
                        return(
                            <React.Fragment key={index}>
                                <li className="list-group-item d-flex justify-content-between">
                                    {value}
                                    <button className="btn btn-danger" title="Eliminar" onClick={()=> {deleteItem(index)}}>X</button>
                                </li>
                            </React.Fragment>
                        )
                    })
                }
            </ul>
        )
    }
}
