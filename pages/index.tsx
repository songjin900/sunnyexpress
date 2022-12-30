import useUser from "@libs/client/useUser";
import Item from "@components/items";
import Layout from "@components/layout";

export default function Home() {
  const {user, isLoading} = useUser();
  // console.log(user)
  return (
    <Layout title="Home" hasTabBar>
      <div className="grid grid-cols-2 items-center p-2 border border-gray-300 lg:hidden">
        <span className="items-center flex justify-center cursor-pointer border-r-2">Refine</span>
        <span className="items-center flex justify-center cursor-pointer">Sort</span>
      </div>
      <div className="flex">
        <div className="hidden lg:block w-[18rem]  pl-6">
          <div className="flex flex-col mt-6">
            <span className="text-gray-600 cursor-pointer text-md font-bold">All Categories</span>
            <span className="text-gray-600 mt-1 cursor-pointer text-sm">Green</span>
            <span className="text-gray-600 mt-1 cursor-pointer text-sm">Bouquet</span>
            <span className="text-gray-600 mt-1 cursor-pointer text-sm">Seasonal</span>
            <span className="text-gray-600 mt-4 text-md font-bold">Sort</span>
            <span className="text-gray-600 mt-1 cursor-pointer text-sm">Price: Low to high</span>
            <span className="text-gray-600 mt-1 cursor-pointer text-sm">Price: High to low</span>
            <span className="text-gray-600 mt-1 cursor-pointer text-sm">Name: Ascending</span>
            <span className="text-gray-600 mt-1 cursor-pointer text-sm">Name: Descending</span>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2
        sm:grid-cols-3    
        lg:grid-cols-4  
        gap-5 bg-gray-100 py-5 px-5">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((_, i) => (
            <Item id={i}
              key={i}
              title="Sun Flowers"
              price={25}
              comments={1}
              hearts={1} />
          ))}
        </div>
      </div>
    </Layout>

  )
}
