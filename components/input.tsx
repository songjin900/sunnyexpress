import type { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  label: string;
  name: string;
  kind?: "text" | "phone" | "price" | "checkbox";
  type: string;
  register?: UseFormRegisterReturn;
  required?: boolean;
  // [key: string]: any;
  disabled?: boolean;
  value?: string;
}

export default function Input({
  label,
  name,
  kind = "text",
  register,
  type,
  required,
  disabled = false,
  value
  // ...rest
}: InputProps) {
  return (
    <div>
      <label
        className="mb-1 block text-sm font-medium text-gray-700"
        htmlFor={name}
      >
        {label}
      </label>
      {kind === "text" ? (
        <div className="rounded-md relative flex  items-center shadow-sm">
          <input
            id={name}
            required={required}
            {...register}
            type={type}
            className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            disabled={disabled}
            value={value}
          />
        </div>
      ) : null}
      {kind === "price" ? (
        <div className="rounded-md relative flex  items-center shadow-sm">
          <div className="absolute left-0 pointer-events-none pl-3 flex items-center justify-center">
            <span className="text-gray-500 text-sm">$</span>
          </div>
          <input
            id={name}
            required={required}
            {...register}
            type={type}
            className="appearance-none pl-7 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
          {/* <div className="absolute right-0 pointer-events-none pr-3 flex items-center">
            <span className="text-gray-500">KRW</span>
          </div> */}
        </div>
      ) : null}
      {kind === "phone" ? (
        <div className="flex rounded-md shadow-sm">
          {/* <span className="flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 select-none text-sm">
            +82
          </span> */}
          <input
            id={name}
            required={required}
            {...register}
            type={type}
            className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md rounded-l-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
      ) : null}     
      {kind === "checkbox" ? (
        <div className="grid grid-cols-2 rounded-md shadow-sm bg-gray-200 p-3 ">
           <div className="flex items-center">
              <input 
                id = {name}
                required = {required}
                {...register}                
                type="checkbox" 
                value="green" 
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Green</label>
            </div>
            <div className="flex items-center">
            <input 
                id = {name}
                required = {required}
                {...register}                
                type="checkbox" 
                value="season" 
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />             
                 <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Season</label>
            </div>
            <div className="flex items-center">
            <input 
                id = {name}
                required = {required}
                {...register}                
                type="checkbox" 
                value="bouquet" 
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />              
                <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Bouquet</label>
            </div>
            <div className="flex items-center">
            <input 
                id = {name}
                required = {required}
                {...register}                
                type="checkbox" 
                value="other" 
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />              
                <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Other</label>
            </div>
        </div>
      ) : null}  
    </div>
  );
}