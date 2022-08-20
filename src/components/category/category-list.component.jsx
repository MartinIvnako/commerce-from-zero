import CategoryItem from "./category-item.component";

export default function CategoryList() {
    const categories = [
        {
            id: 1,
            title: "ULTRASOFT TRIČKO IRON AESTHETICS, VOJENSKÁ ZELENÁ",
            imgSrc: "https://ironaesthetics.cz/150-home_default/ultrasoft-tricko-iron-aesthetics-vojenska-zelena.jpg",
        },
        {
            id: 2,
            title: "ULTRASOFT TRIČKO IRON AESTHETICS, ČERNÝ MASKÁČ",
            imgSrc: "https://ironaesthetics.cz/156-home_default/ultrasoft-tricko-iron-aesthetics-cierny-maskac.jpg",
        },
        {
            id: 3,
            title: "PÁNSKÉ FITNESS TRIČKO IRON AESTHETICS FORCE, BLACK&GOLD",
            imgSrc: "https://ironaesthetics.cz/185-home_default/fitness-tricko-iron-aesthetics-blackgold.jpg",
        },
        {
            id: 4,
            title: "PÁNSKÉ FITNESS TRIČKO IRON AESTHETICS BOXED, BORDOVÉ",
            imgSrc: "https://ironaesthetics.cz/4855-large_default/panske-fitness-tricko-iron-aesthetics-boxed-bordove.jpg",
        },
        {
            id: 5,
            title: "ULTRASOFT TRIČKO IRON AESTHETICS SKULL, VOJENSKÁ ZELENÁ",
            imgSrc: "https://ironaesthetics.cz/256-large_default/ultrasoft-tricko-iron-aesthetics-skull-vojenska-zelena.jpg",
        },
    ];
    return (
        <section className="py-4 bg-coolGray-50">
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap -m-3">
                    {categories.map((category) => (
                        <CategoryItem category={category} key={category.id} />
                    ))}
                </div>
            </div>
        </section>
    );
}
