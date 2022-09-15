import { useRecoilValue } from "recoil";
import ProductCard from "../../components/category/product-card.component";
import { listOfProductsState } from "../../state/products-state.atom";

const Shop = () => {
    const products = useRecoilValue(listOfProductsState);

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
