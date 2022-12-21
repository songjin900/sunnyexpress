import { NextPage } from "next";
import Button from "../../components/button";
import Layout from "../../components/layout";

const ItemDetail: NextPage = () => {
    return (
        <Layout title="Selected Flower" canGoBack>
            <div className="px-4 py-4 bg-gray-100">
                {/* horizontal */}
                <div className="flex flex-col items-center lg:items-center lg:flex-row lg:justify-center lg:space-x-5">
                    <div className="bg-gray-600 md:bg-red-300 h-[30rem] w-[30rem] m-1" />

                    <div className="flex flex-col lg:h-[30rem] justify-between">
                        <div className="flex justify-center lg:mt-3">
                            <div className="flex flex-col pl-3 space-y-2 w-[30rem] lg:w-full lg:p-1">
                                <span className="font-bold text-3xl">Sunflower</span>
                                <span className="text-lg">Model: sunflower-2-1</span>
                                <span className="text-2xl">$140</span>
                                <span className="text-lg">Availability: 10+</span>                                
                                <p>Description: Please call for availability. This is only available between Dec 01 to Dec 25 2022</p>
                            </div>
                        </div>
                        <div className="mt-3 p-1 border-t-2 border-gray-300">
                        <div className="flex items-center gap-x-2 m-3">
                                    <span className="text-lg">Qty: </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-lg">5</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            <Button text="Add To Cart" />
                        </div>
                    </div>

                </div>

                {/* vertical
                <div className="flex flex-col justify-center items-center">
                    <div className="bg-gray-600 h-[30rem] w-[30rem] m-1" />
                    <div className="flex justify-center">
                        <div className="flex flex-col pl-3 space-y-2 w-[30rem]">
                            <span className="font-bold text-3xl">Sunflower</span>
                            <span className="text-2xl">$140</span>
                            <span className="text-lg">Availability: 5</span>
                            <p>Description: Please call for availability. This is only available between Dec 01 to Dec 25 2022</p>
                        </div>
                    </div>
                    <div className="mt-3 flex items-center justify-between space-x-2 w-[30rem]">
                        <Button large text="Add To Cart" />
                        <button className="p-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                            <svg
                                className="h-6 w-6 "
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                            </svg>
                        </button>
                    </div>
                </div> */}




                {/* <div className="flex justify-center p-2">
                    <div className="bg-slate-500 w-[30rem] h-96" />
                </div>
                <div className="flex bg-red-300 justify-center">
                    <div className="flex flex-col pl-3 space-y-2 w-[30rem]">
                        <span className="font-bold text-3xl">Sunflower</span>
                        <span className="text-2xl">$140</span>
                        <span className="text-lg">Availability: 5</span>
                        <p>Description: Please call for availability. This is only available between Dec 01 to Dec 25 2022</p>
                    </div>
                </div>
                <div className="mt-3 flex items-center justify-between space-x-2 px-1">
                    <Button large text="Add To Cart" />
                    <button className="p-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                        <svg
                            className="h-6 w-6 "
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                        </svg>
                    </button>
                </div> */}
            </div>
        </Layout>
    )
}

export default ItemDetail;