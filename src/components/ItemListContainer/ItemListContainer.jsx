import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncmock'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    const { idCategory } = useParams();

    useEffect(() => {

        const functionProducts = idCategory ? getProductsByCategory : getProducts;

        functionProducts(idCategory)
            .then(res => setProducts(res))
            .catch(error => console.error(error))
    }, [idCategory])


    return (
        <>
            <div className="container">
            <ItemList products={products} />
            </div>
        </>
    )
}

export default ItemListContainer