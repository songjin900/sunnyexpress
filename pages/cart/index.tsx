import { NextPage } from "next";
import Link from "next/link";
import Button from "../../components/button";
import Item from "../../components/items";
import ItemsWide from "../../components/itemsWide";
import Layout from "../../components/layout";

const cart: NextPage = () => {
    return (
        <Layout title="My Cart" hasTabBar>
            <div className="px-4 md:px-20 py-4 bg-gray-100">
                <div className="flex flex-col md:flex-row md:space-x-4 justify-center">
                    <div className="md:hidden p-2">
                        <Button text="Continue To Checkout" />
                    </div>
                    <div className="w-full md:min-w-[30rem] md:max-w-[50rem]">
                        {[1,2,3,4,5].map((_, i) => (
                            <ItemsWide id={i}
                                key={i}
                                title="Sun Flowers"
                                price={25}
                                comments={1}
                                hearts={1} />
                        ))}
                    </div>
                    <div className="p-2 border-t-2 flex flex-col md:min-w-[15rem] md:w-[35rem]">
                        <span className="text-xl font-medium">Order Summary</span>
                        <div className="flex justify-between mt-2">
                            <div className="flex flex-col space-y-1">
                                <span>Product Subtotal</span>
                                <span>Estimated Shipping</span>
                                <span>Estimated Taxes</span>
                            </div>
                            <div className="flex flex-col items-end space-y-1">
                                <span>$479.22</span>
                                <span>$8</span>
                                <span>$55.90</span>
                            </div>
                        </div>
                        <div className="flex justify-between border-t-2 mt-3">
                            <span className="my-3">Estimated Total</span>
                            <span className="my-3">$485.88</span>
                        </div>
                        <Button text="Continue To Checkout" />
                    </div>
                </div>              
            </div >
        </Layout>
    )
}

export default cart;