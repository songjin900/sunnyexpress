import type { NextPage } from "next";
import Link from "next/link";
import Layout from "@components/layout";
import Item from "@components/items";

const Profile: NextPage = () => {
    return (
        <Layout hasTabBar title="Profile">
            <div className="bg-gray-100 w-full p-2">
                <div className="flex pl-5 items-cente pt-10">
                    <div className="text-3xl">Hi, Lisa!</div>
                </div>
                <div className="grid grid-rows-4 grid-cols-1 md:grid-rows-2 md:grid-cols-2 lg:grid-cols-4 bg-gray-100 p-2 md:gap-2">
                    <a className="bg-white p-2 cursor-pointer flex items-center md:items-start border h-[4rem] hover:border-orange-400 md:h-[15rem] md:rounded-2xl hover:md:shadow-2xl hover:md:shadow-orange-300 ">
                        <div className="flex flex-col pl-2">
                            <span className="text-lg font-md text-gray-800">Order History</span>
                        </div>
                    </a>
                    <a className="bg-white p-2 cursor-pointer flex items-center md:items-start border h-[4rem] hover:border-orange-400 md:h-[15rem] md:rounded-2xl hover:md:shadow-2xl hover:md:shadow-orange-300 ">
                    <div className="flex flex-col pl-2">
                            <span className="text-lg font-md text-gray-800">Payment Methods</span>
                        </div>
                    </a>
                    <a className="bg-white p-2 cursor-pointer flex items-center md:items-start border h-[4rem] hover:border-orange-400 md:h-[15rem] md:rounded-2xl hover:md:shadow-2xl hover:md:shadow-orange-300 ">
                    <div className="flex flex-col pl-2">
                            <span className="text-lg font-md text-gray-800">Addresses</span>
                        </div>
                    </a>
                    <a className="bg-white p-2 cursor-pointer flex items-center md:items-start border h-[4rem] hover:border-orange-400 md:h-[15rem] md:rounded-2xl hover:md:shadow-2xl hover:md:shadow-orange-300 ">
                    <div className="flex flex-col pl-2">
                            <span className="text-lg font-md text-gray-800">Personal Details</span>
                        </div>
                    </a>
                </div>
            </div>
        </Layout>
    );
};

export default Profile;