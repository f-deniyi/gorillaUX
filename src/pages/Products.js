import React from 'react';
import { Col, Row } from 'reactstrap'
import NoProduct from '../components/NoProduct';
import ProductList from '../components/ProductList';
import Header from '../components/Header';


const Products = () => {
    let activeState='product'
    return (
        <>
        <Header activeState={activeState}/>
            <div className='mt-5 pt-5'>
                <Col className='mt-3 pt-3'>
                    <Row>
                        {localStorage.getItem('Products') && JSON.parse(localStorage.getItem('Products')).length > 0 ?
                            <ProductList /> :
                            <NoProduct />
                        }

                    </Row>
                </Col>
            </div>
        </>


    )
}
export default Products;

