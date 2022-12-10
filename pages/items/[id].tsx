import { NextPage } from "next";
import Button from "../../components/buttons";

const ItemDetail: NextPage = () => {
    return (
        <div className="px-4 py-4">
            <div className="flex items-center justify-between border-b pb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
            </div>
            <div className=" flex justify-center p-2">
                <div className="bg-slate-500 w-full h-96" />
            </div>
            <div className="flex flex-col pl-3 space-y-2">
                <span className="font-bold text-3xl">Sunflower</span>
                <span className="text-2xl">$140</span>
                <span className="text-lg">Availability: 5</span>
                <p>Description: Please call for availability. This is only available between Dec 01 to Dec 25 2022</p>
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

            </div>

        </div>
    )
}

export default ItemDetail;