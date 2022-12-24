import Link from "next/link";

interface ItemProps {
    title: string;
    id: number;
    price: number;
    comments: number;
    hearts: number;
}

export default function ItemsWide({
    title,
    price,
    comments,
    hearts,
    id,
}: ItemProps) {
    return (
        <Link legacyBehavior href={`/items/${id}`}>
            {/* <a className="bg-gray-200 p-2 rounded-2xl shadow-md shadow-gray-400 cursor-pointer"> */}
            <div className="p-2 cursor-pointer border-y-8 border-gray-100 bg-white">
                <div className="flex flex-col md:flex-row">
                    <div className="flex justify-center">
                        <div className="bg-red-300 w-80 h-40 rounded-lg"></div>
                    </div>
                    <div className="flex flex-col pl-2 mt-2 w-full">
                        <span className="text-lg font-md text-gray-800">{title}</span>
                        <div className="flex flex-col md:mt-2 md:items-end">
                        <span className="text-sm text-gray-500">model-1-2-3</span>
                        <span className="text-sm text-gray-500">${price}</span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between mt-4 flex-row  md:gap-x-4 border-t-2 p-1 items-center">
                    <div className="flex items-center gap-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                        <span className="text-sm font-medium">Remove</span>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>5</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                </div>
                {/* </a> */}
            </div>
        </Link>
    );
}