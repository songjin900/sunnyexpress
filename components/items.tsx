import Link from "next/link";

interface ItemProps {
    title: string;
    id: number;
    price: number;
    comments: number;
    hearts: number;
}

export default function Item({
    title,
    price,
    comments,
    hearts,
    id,
}: ItemProps) {
    return (
        <Link legacyBehavior href={`/products/${id}`}>
            <a className="bg-white p-2 rounded-2xl shadow-md shadow-gray-400 cursor-pointer">
                <div className="flex">
                    <div className="bg-red-300 w-80 h-40 rounded-lg"></div>
                </div>
                <div className="flex flex-col pl-2 mt-2">
                    <span className="text-lg font-md text-gray-800">{title}</span>
                    <span className="text-sm text-gray-500">${price}</span>
                </div>
            </a>
        </Link>
    );
}