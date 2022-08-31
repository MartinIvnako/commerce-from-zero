export default function ProductCard({ product }) {
    const { name, imageUrl, price } = product;
    return (
        <div className="relative w-full p-2 sm:w-1/2 lg:w-1/3 xl:w-1/5">
            <div className="h-full bg-white border rounded-md border-coolGray-100 shadow-dashboard">
                <img
                    className="object-cover w-full h-48 rounded-t"
                    src={imageUrl}
                    alt={name}
                />
                <div className="flex flex-col px-4 pt-8 pb-6 space-y-4 text-center ">
                    <h2 className="mb-1 text-sm font-medium text-coolGray-900">
                        {name}
                    </h2>
                    <div className="mb-6 text-sm font-medium text-coolGray-900">
                        {price} €
                    </div>

                    <div className="absolute inline-block px-2 py-px text-xs font-medium text-green-500 bg-green-100 rounded shadow-sm top-1 right-4">
                        sale
                    </div>
                    <div className="flex flex-wrap justify-between w-full -m-2">
                        <div className="w-full p-2 md:w-1/2">
                            <button className="flex flex-wrap justify-center w-full px-4 py-2.5 text-sm font-medium  text-coolGray-600 border border-green-500 rounded-md shadow-button">
                                <p>Detail</p>
                            </button>
                        </div>
                        <div className="w-full p-2 md:w-1/2">
                            <button className="flex flex-wrap justify-center w-full px-4 py-2.5  text-sm bg-green-500 hover:bg-green-600 font-medium text-white border border-green-500 rounded-md shadow-button">
                                <p data-config-id="auto-txt-5-4">Buy</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
