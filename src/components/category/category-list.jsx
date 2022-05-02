import CategoryItem from "./category-item";

export default function CategoryList() {
    const categories = [
        {
            id: 1,
            title: "Hats",
        },
        {
            id: 2,
            title: "Jacket",
        },
        {
            id: 3,
            title: "Sneakers",
        },
        {
            id: 4,
            title: "Womens",
        },
        {
            id: 5,
            title: "Mens",
        },
    ];
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container  mx-auto px-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {categories.map((category) => (
                        <CategoryItem category={category} key={category.id} />
                    ))}
                </div>
            </div>
        </section>
    );
}
