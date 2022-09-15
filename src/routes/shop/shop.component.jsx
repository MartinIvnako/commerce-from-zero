import { useRecoilState } from "recoil";
import { listOfProductsState } from "../../atom/productsState.atom";
import ProductCard from "../../components/category/product-card.component";

const Shop = () => {
    const [products] = useRecoilState(listOfProductsState);

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
