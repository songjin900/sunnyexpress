import useUser from "@libs/client/useUser";
import Item from "@components/items";
import Layout from "@components/layout";
import useSWR from "swr"
import { Product, Category } from "@prisma/client";
import Link from "next/link";
import { useState, useEffect } from "react";

interface CategoriesWithProduct extends Product {
  Categories: Category[]
}

interface ProductsResponse {
  ok: boolean;
  products: CategoriesWithProduct[]
}


export default function Home() {
  const { user, isLoading } = useUser();
  const { data } = useSWR<ProductsResponse>("/api/products");
  const [category, setCategory] = useState("bouquet");
  const [allProducts, setAllProducts] = useState(data?.products);

  useEffect(() => {
    setAllProducts(data?.products)
  }, [data])

  // filter works!
  // if (data) {
  //   const aaa = data.products.filter((product) => {
  //     const productCat = product.Categories.map((pc) => pc.name.toLocaleLowerCase());
  //     return productCat.includes("bouquet")
  //   })
  //   console.log(aaa);

  // }


  const onCategoryChange = (category: string) => {
    setCategory(category);
  }

  //Filter by Category
  useEffect(() => {
    if (data) {
      if (category) {
        setAllProducts(data.products.filter((product) => {
          const productCat = product.Categories.map((pc) => pc.name.toLocaleLowerCase())
          return productCat.includes(category)
        }))
      }
      else {
        setAllProducts(data.products)
      }
    }
  }, [category, data])

  return (
    <Layout title="Home" hasTabBar>
      <div className="grid grid-cols-2 items-center p-2 border border-gray-300 lg:hidden">
        <span className="items-center flex justify-center cursor-pointer border-r-2">Refine</span>
        <span className="items-center flex justify-center cursor-pointer">Sort</span>
      </div>
      <div className="flex">
        <div className="hidden lg:block w-[18rem]  pl-6">
          <div className="flex flex-col mt-6">
            <span onClick={() => { onCategoryChange("") }} className="text-gray-600 cursor-pointer text-md font-bold">All Categories</span>
            <span onClick={() => { onCategoryChange("green") }} className="text-gray-600 mt-1 cursor-pointer text-sm">Green</span>
            <span onClick={() => { onCategoryChange("bouquet") }} className="text-gray-600 mt-1 cursor-pointer text-sm">Bouquet</span>
            <span onClick={() => { onCategoryChange("seasonal") }} className="text-gray-600 mt-1 cursor-pointer text-sm">Seasonal</span>
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
          <Link legacyBehavior href={`/products/upload`}>
            <a className="bg-white p-2 rounded-2xl shadow-md shadow-gray-400 cursor-pointer">
              <div className="flex justify-center border-dashed bg-gray-100 border-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-40 h-40 text-red-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex flex-col pl-2 mt-2">
                <span className="text-lg font-md text-gray-800 flex justify-center">Upload</span>
                <span className="text-sm text-gray-500">Click here to upload item</span>
              </div>
            </a>
          </Link>
          {allProducts?.map((product) => (
            <Item
              id={product.id}
              key={product.id}
              title={product.name}
              price={product.price}
              comments={1}
              hearts={1} />
          ))}
        </div>
      </div>
    </Layout>

  )
}
