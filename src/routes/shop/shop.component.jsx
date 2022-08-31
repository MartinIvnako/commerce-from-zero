import { useContext } from "react";
import ProductCard from "../../components/category/product-card.component";
import { ProductsContext } from "../../context/products.context";

const Shop = () => {
    const { products } = useContext(ProductsContext);

    return (
        <section className="py-4 bg-coolGray-50">
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap -m-3">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Shop;
