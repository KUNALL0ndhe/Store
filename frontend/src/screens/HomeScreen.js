import { Grid, Heading } from "@chakra-ui/react";
import ProductCards from "../components/ProductCard";
import products from "../products";

const HomeScreen = () => {
    return (
        <>
        <Heading as='h2' mb='8' fontSize='xl'>
            Latest Products
        </Heading>

        <Grid templateColumns='1fr 1fr 1fr 1fr' gap='8' >
            {products.map((prod) => {
                return  (
                    <ProductCards product={prod} key={prod._id} />
                )
            })}
        </Grid>
        </>
    )
};

export default HomeScreen;