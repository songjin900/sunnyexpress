import { NextPage } from "next";
import Button from "../../components/button";
import Layout from "../../components/layout";

const ItemDetail: NextPage = () => {
    return (
        <Layout title="Selected Flower" hasTabBar >
            <div className="px-4 py-4 w-full bg-gray-100">
                <div className="flex flex-col items-center lg:items-start lg:flex-row lg:justify-center lg:space-x-5">
                    <div className="bg-gray-600 md:bg-red-300 w-full h-[30rem] max-w-[30rem] m-1" />

                    <div className="flex flex-col w-full lg:w-full max-w-[30rem]">
                        <div className="flex flex-col pl-3 space-y-2 lg:w-full lg:p-1">
                            <span className="font-bold text-3xl">Sunflower</span>
                            <span className="text-lg">Model: sunflower-2-1</span>
                            <span className="text-2xl">$140</span>
                            <span className="text-lg">Availability: 10+</span>
                            <p>Description: Please call for availability. This is only available between Dec 01 to Dec 25 2022</p>
                        </div>
                        <div className="mt-3 p-1 border-t-2 border-gray-300 ">
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
            </div>
        </Layout>
    )
}

export default ItemDetail;