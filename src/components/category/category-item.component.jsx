export default function CategoryItem({ category }) {
    const { title, imgSrc } = category;
    return (
        <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/5 p-2 relative">
            <div className="bg-white border border-coolGray-100 shadow-dashboard rounded-md h-full">
                <img
                    className="object-cover h-48 w-full rounded-t"
                    src={imgSrc}
                    alt={title}
                />
                <div className="flex flex-col px-4 pt-8 pb-6 space-y-4 text-center ">
                    <h2 className="text-sm font-medium text-coolGray-900  mb-6">
                        {title}
                    </h2>

                    <div className="inline-block absolute top-1 right-4 px-2 py-px text-xs text-green-500 font-medium bg-green-100 rounded shadow-sm">
                        sale
                    </div>
                    <div className="flex flex-wrap justify-between w-full -m-2">
                        <div className="w-full md:w-1/2 p-2">
                            <button className="flex flex-wrap justify-center w-full px-4 py-2.5 text-sm font-medium  text-coolGray-600 border border-green-500 rounded-md shadow-button">
                                <p>Detail</p>
                            </button>
                        </div>
                        <div className="w-full md:w-1/2 p-2">
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

/*   <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/5 p-2 relative">
            <div className="bg-white border border-coolGray-100 shadow-dashboard rounded-md h-full">
                <img
                    className="object-cover h-48 w-full"
                    src={imgSrc}
                    alt={title}
                />
                <div className="flex flex-col px-4 pt-8 pb-6 space-y-4 text-center ">
                    <h2 className="text-sm font-medium text-coolGray-900  mb-6">
                        {title}
                    </h2>

                    <div className="inline-block absolute top-1 right-4 px-2 py-px text-xs text-green-500 font-medium bg-green-100 rounded shadow-sm">
                        sale
                    </div>
                    <div className="flex flex-wrap justify-between w-full -m-2">
                        <div className="w-full md:w-1/2 p-2">
                            <button className="flex flex-wrap justify-center w-full px-4 py-2.5 text-sm font-medium  text-coolGray-600 border border-green-500 rounded-md shadow-button">
                                <p>Detail</p>
                            </button>
                        </div>
                        <div className="w-full md:w-1/2 p-2">
                            <button className="flex flex-wrap justify-center w-full px-4 py-2.5  text-sm bg-green-500 hover:bg-green-600 font-medium text-white border border-green-500 rounded-md shadow-button">
                                <p data-config-id="auto-txt-5-4">Buy</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div> */
