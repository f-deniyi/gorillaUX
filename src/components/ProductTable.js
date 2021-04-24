import React, { useState } from 'react'
import { Button, Table } from 'reactstrap';



const ProductTable = (props) => {
    const { productList, removeProduct } = props


    let products = productList.map((el, id) => {
        return (
            <tr key={id} className='align-items-center'>
                <th scope="row">
                    <img className='rounded img-fluid' width="74" height="74" src={el.image} alt='productimage' />
                </th>
                <td>{el.name}</td>
                <td>{el.description}</td>
                <td>{el.price}</td>
                <td>
                    <button color='primary' className='btn btn-link' onClick={() => { removeProduct(el.id) }} >Remove</button>
                </td>
            </tr>

        )
    })
    return (
        <Table>
            <thead>
                <tr>
                    <th>  </th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th></th>

                </tr>
            </thead>
            {localStorage.getItem('Products') === null ?
                <tbody>

                    <div className=' mx-auto my-4'>
                        <h2 className='text-center'>No Product has been Added</h2>
                    </div>
                </tbody>
                :
                <tbody>
                    {products}
                </tbody>

            }


        </Table>
    )
}
export default ProductTable;