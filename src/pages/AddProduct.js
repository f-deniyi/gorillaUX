import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import ProductForm from '../components/ProductForm';
import ProductTable from '../components/ProductTable';
import Axios from 'axios';

const AddProducts = (props) => {
    const [productList, updateList] = useState([])
    useEffect(() => {
        if (localStorage.getItem('Products')) {
            updateList(JSON.parse(localStorage.getItem('Products')))
        }
    }, productList)

    const removeProduct = (id) => {
        let newProductList = productList.filter((obj) => {
            return (obj.id !== id)
        })
        console.log(newProductList);
        localStorage.setItem('Products', JSON.stringify(newProductList))
        updateList(JSON.parse(localStorage.getItem('Products')))

    }
    const storeProduct = async (data) => {
        let newProduct = []
        if ( data.image !== null) {
            let imageFile = new FormData()
            imageFile.append("file", data.image)
            imageFile.append("upload_preset", "fadeniyi")
            const uploadedImage = await Axios.post("https://api.cloudinary.com/v1_1/fadeniyi/image/upload", imageFile)
            let imageLink = uploadedImage.data.url;
            if (localStorage.getItem('Products')&& JSON.parse(localStorage.getItem('Products')).length) {
                let products = JSON.parse(localStorage.getItem('Products'));
                const newId = products[products.length - 1].id + 1;
                products.push(Object.assign({ image: imageLink }, { name: data.name, price: data.price, description: data.description, id: newId }))
                console.log(products);
                localStorage.setItem('Products', JSON.stringify(products))
                updateList(JSON.parse(localStorage.getItem('Products')))
            }
            else {
                const id = 0;
                newProduct.push(Object.assign({ image: imageLink }, { name: data.name, price: data.price, description: data.description, id: id }))
                localStorage.setItem('Products', JSON.stringify(newProduct))
                updateList(JSON.parse(localStorage.getItem('Products')))

            }

        } else {
            if (localStorage.getItem('Products')&& JSON.parse(localStorage.getItem('Products')).length) {
                let products = JSON.parse(localStorage.getItem('Products'));
                const newId = products[products.length - 1].id + 1;
                products.push(Object.assign({ id: newId }, {...data }))
                localStorage.setItem('Products', JSON.stringify(products))
                updateList(JSON.parse(localStorage.getItem('Products')))

            }
            else {
                const id = 0;
                newProduct.push(Object.assign({ id: id }, {...data }))
                localStorage.setItem('Products', JSON.stringify(newProduct))
                updateList(JSON.parse(localStorage.getItem('Products')))

            }
        }
    }
    return (
        <div className='my-5 py-5'>
            <Container>
                <div className='my-3 py-3 w-80 mx-auto '>
                    <ProductForm storeProduct={storeProduct} />
                    <div className='mt-5'>
                        <ProductTable productList={productList} removeProduct={removeProduct} />
                    </div>
                </div>
            </Container>
        </div >
    )
}

export default AddProducts;
