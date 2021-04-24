import React from 'react';
import * as Yup from 'yup'
import { Formik, Form, Field } from 'formik';
import { FormGroup, Label, Col, Button, Input, Row } from 'reactstrap';


const formSchema = Yup.object().shape({
    // audio: Yup.mixed().required('Required').test('fileFormat', 'Unsupported File Format', value => {
    //     value && ['audio/*'].includes(value.type)
    //     console.log(value);
    // })
    name: Yup.string().required('Name Required'),
    price: Yup.number().required('Price Required')
})

const ProductForm = (props) => {
    const {storeProduct}=props
    return (
        <Formik
            initialValues={{
                name: "",
                description: '',
                price: '',
                image: null,

            }}
            validationSchema={formSchema}
            onSubmit={(values, actions) => {
                console.log(values);
                storeProduct(values);
            }}
        >
            {({ errors, touched, setFieldValue, }) => (
                <Form >
                    <Row>
                        <Col xl={6} sm={12} md={6}>

                            <FormGroup>
                                <Label className='mb-2' for="name">Product name</Label>
                                <Field
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Enter Product Name"
                                    className={`form-control ${errors.name &&
                                        touched.name &&
                                        "is-invalid"}`}
                                />
                                {errors.name && touched.name ? (
                                    <div className="invalid-tooltip mt-25">{errors.name}</div>
                                ) : null}
                            </FormGroup>
                        </Col >
                        <Col xl={6} sm={12} md={6}>
                        <FormGroup>
                                <Label className='mb-2' for="price">Product price</Label>
                                <Field
                                    type="number"
                                    name="price"
                                    id="price"
                                    placeholder="Enter Product price"
                                    className={`form-control ${errors.price &&
                                        touched.price &&
                                        "is-invalid"}`}
                                />
                                {errors.price && touched.price ? (
                                    <div className="invalid-tooltip mt-25">{errors.price}</div>
                                ) : null}
                            </FormGroup>
                        </Col>

                        <Col xl={6} sm={12} md={6}>
                            <FormGroup>

                                <Label className='mb-2' for="description">Product Description (optional)</Label>
                                <Field
                                    component='textarea'
                                    name="description"
                                    id="description"
                                    placeholder="Enter description"
                                    className={`form-control ${errors.description &&
                                        touched.description &&
                                        "is-invalid"}`}
                                />
                                {errors.description && touched.description ? (
                                    <div className="invalid-tooltip mt-25">{errors.description}</div>
                                ) : null}
                            </FormGroup>
                        </Col >

                        <Col xl={6} sm={12} md={6}>
                            <FormGroup>
                                <Label className='mb-2' for="image">Product Image (optional)</Label>
                                <Input
                                    type='file'
                                    name="image"
                                    accept='image/*'
                                    id="image"
                                    placeholder="Image"
                                    onChange={(event) => {
                                        setFieldValue('image', event.currentTarget.files[0]);
                                    }}
                                    className={`form-control ${errors.image &&
                                        touched.image &&
                                        "is-invalid"}`}
                                />
                                {errors.image && touched.image ? (
                                    <div className="invalid-tooltip mt-25">{errors.image}</div>
                                ) : null}
                            </FormGroup>
                        </Col>
                    </Row>

                    <Button type='submit' color='primary'>
                        Add Product
                        </Button>
                </Form>
            )
            }
        </Formik>
    )
}

export default ProductForm;
