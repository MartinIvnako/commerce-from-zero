import Card from "./card";

export default function ListOfCards() {
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
    ];
    return (
        <section class="bg-white dark:bg-gray-900">
            <div class="container px-6 py-8 mx-auto">
                <div class="lg:flex lg:-mx-2">
                    <div class="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
                        <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {categories.map((category) => (
                                <Card category={category} id={category.id} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
