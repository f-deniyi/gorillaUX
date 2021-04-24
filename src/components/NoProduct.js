import React from 'react';
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'
const NoProduct = () => {
    return (
        <div className='no-product-container'>
            <div className='no-product'>
                <h1>No Product has been addded</h1>
                <NavLink to='/addProduct'>
                    <Button color='primary' className='btn-primary'>
                        Add Product
                </Button>
                </NavLink>
            </div>

        </div>
    )
}
export default NoProduct
