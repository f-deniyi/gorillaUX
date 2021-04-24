import React from 'react';
import { Col, Row, Container, Card, CardImg, CardBody } from 'reactstrap';
import noImage from '../assets/images/gux.jpg'
const ProductCard = (product) => {
    console.log(product.product);
    return (
        <Card style={{ maxHeight: '17em', minHeight: '17em', overflow: 'auto' }} className='mb-5'>
            {product.product.image ?
                <CardImg src={product.product.image} height='170' width='170' className='max' alt='' /> :
                <CardImg src={noImage} height='170' width='170' className='max' alt='' />
            }
            <CardBody>
                <Row>
                    <Col sm={6} md={6} xl={6}>

                        <h5><span className='font-weight-bold'>{product.product.name}</span></h5>
                    </Col>
                    <Col sm={6} md={6} xl={6}>
                        <h5><span className='font-weight-bold'>{product.product.price}</span></h5>
                    </Col>
                </Row>

            </CardBody>
        </Card>
    )
}
const ProductList = () => {
    return (
        <Container className='mx-auto w-85'>
            <Row>
                {JSON.parse(localStorage.getItem('Products')).map((el, id) => {
                    return (
                        <Col sm={6} md={4} xl={3}>
                            < ProductCard product={el} />
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}
export default ProductList;