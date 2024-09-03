import { Grid, Heading } from "@chakra-ui/react";
import ProductCards from "../components/ProductCard";
import { listProducts } from "../actions/productActions";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";

const HomeScreen = () => {

    const dispatch = useDispatch();

    const productList = useSelector((state) => state.productList);
    const { loading, products, error } = productList
    
    useEffect (() => {
        dispatch(listProducts());       
    }, [dispatch]);
    return (
        <>
        <Heading as='h2' mb='8' fontSize='xl'>
            Latest Products
        </Heading>

        { loading ? (
            <p>Loading ...</p>
        ) : error ?(
             <p> {error} ...</p>
        ) : (
        <Grid templateColumns='1fr 1fr 1fr 1fr' gap='8' >
        {products.map((prod) => {
            return  (
                <ProductCards product={prod} key={prod._id} />
            )
        })}
    </Grid>)}
        </>
    )
};

export default HomeScreen;