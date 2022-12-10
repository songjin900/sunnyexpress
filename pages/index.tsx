export default function Home() {
  return (
    <div className="grid grid-cols-2 grid-rows-3 gap-5 bg-slate-200 py-20 px-5 lg:grid-cols-2 min-h-screen">

    {[1,2,3,4,5,6].map((i)=>(
        <div key={i} className="bg-white p-2 xs:col-span-1 rounded-2xl shadow-2xl shadow-cyan-700 cursor-pointer">
        <div className="flex">
          <div className="bg-red-400 w-80 h-40 rounded-lg"></div>
        </div>
        <div className="flex flex-col pl-2 mt-2">
          <span className="text-md font-md text-gray-800">Sun Flower</span>
          <span className="text-sm text-gray-700">$200</span>
          <span className="text-sm text-gray-700">Availability: 5</span>
        </div>
      </div>    
    ))}   
    </div>
  )
}
