import React from "react";
import NavBar from "../components/NavBar";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { ChartPieIcon, EyeIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import PurchasesList from "../components/PurchasesList";
import { useSelector } from "react-redux";

export default function ViewInventory() {

  const filterProduct = useSelector((state)=> state.products.singleProduct)
  const {id,img,productName,unitPrice,inStock,dateAdded,timeAdded} = filterProduct[0]


  return (
    <div>
      <NavBar title="View Inventory" />
      <div className="m-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center">
            <h2 className="font-semibold justify-center mr-3">{productName}</h2>
            <h2 className="font-semibold justify-center mx-3">
              Date Added{" "}
              <span className="text-sm text-black-30">
                {dateAdded} - {timeAdded}
              </span>
            </h2>
            <h2 className="font-semibold justify-center mx-3">
              Product URL{" "}
              <span className="text-sm text-black-30">
                {/* 1nancystores.com/polot-shirt */}
                {`localhost:3000/inventory/view-inventort/${id}`}
              </span>
            </h2>
          </div>
          <div className="flex items-center justify-center">
            <button className="flex items-center justify-center bg-black-100 text-white border-black-60 rounded-xl h-7 p-3 mx-6">
              <span className="text-sm font-light justify-center items-center mx-2">
                Edit Product
              </span>
              <span className="mx-2 text-black-70 pb-1">|</span>
              <span>
                <ChevronDownIcon className="h-4 w-4 cursor-pointer transition-all duration-100 active:scale-110 leading-tight" />
              </span>
            </button>
            <button className="flex items-center justify-center bg-action-red text-white border-black-60 rounded-xl h-7 p-3">
              <span className="text-sm font-light justify-center items-center mx-2">
                Unpublish Product
              </span>
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center w-full gap-5 my-5">
          <div className="flex-[1_1_10%] bg-white h-36 rounded-xl items-center justify-center">
            <img
              className="w-full h-full object-fill px-3 py-2"
              src={img}
              alt={productName}
            />
          </div>
          <div className="flex-[1_1_40%] bg-white h-36 rounded-xl">
            <div className="p-2 h-full flex flex-col">
              <div className="flex items-center justify-between">
                <p className="text-xs text-black-30">
                  Last Order{" "}
                  <span className="ml-1 text-black-90 text-sm">
                    12 sep 2022
                  </span>
                </p>
                <p className="bg-[#32936f] bg-opacity-15 text-action-green rounded-xl text-xs py-1 px-2 inline">
                  Published
                </p>
              </div>
              <div className="flex flex-auto items-end">
                <div className="flex flex-col w-1/2">
                  <p className="text-black-30 text-xs">Price</p>
                  <h3 className="text-black-60 text-lg">{unitPrice} €</h3>
                </div>
                <div className="flex flex-col w-1/2">
                  <p className="text-black-30 text-xs">In-Stock</p>
                  <h3 className="text-black-60 text-lg">{inStock}</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-[1_1_20%] bg-white h-36 rounded-xl">
            <div className="p-2 h-full flex flex-col">
              <div className="flex items-center justify-between">
                <div className="bg-[#5570f1] bg-opacity-10 w-8 h-8 flex items-center justify-center rounded-lg">
                  <ChartPieIcon className="icon-style text-primary-100" />
                </div>
                <div className="flex items-center justify-center text-black-10 text-sm">
                  <p className="text-black-10 text-sm">All-time</p>
                  <ChevronDownIcon className="icon-mini-style ml-1 mt-1" />
                </div>
              </div>
              <div className="flex flex-auto items-end">
                <div className="flex flex-col">
                  <p className="text-black-30">Total Order</p>
                  <h3 className="text-black-60 text-lg font-semibold">
                    5000 €
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-[1_1_20%] bg-white h-36 rounded-xl">
            <div className="p-2 h-full flex flex-col">
              <div className="flex items-center justify-between">
                <div className="bg-[#ffcc91] bg-opacity-15 w-8 h-8 flex items-center justify-center rounded-lg">
                  <EyeIcon className="icon-style text-black-100" />
                </div>
                <div className="flex items-center justify-center text-black-10 text-sm">
                  <p className="text-black-10 text-sm">All-time</p>
                  <ChevronDownIcon className="icon-mini-style ml-1 mt-1" />
                </div>
              </div>
              <div className="flex flex-auto items-end">
                <div className="flex flex-col w-1/2">
                  <p className="text-black-30">View</p>
                  <h3 className="text-black-60 text-lg font-semibold">1200</h3>
                </div>
                <div className="flex flex-col w-1/2">
                  <p className="text-black-30">Favourite</p>
                  <h3 className="text-black-60 text-lg font-semibold">23</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex-[1_1_50%] bg-white rounded-xl h-32 items-center justify-center">
            <div className="p-3 flex flex-col h-full">
              <div className="flex items-center justify-between">
                <div className="bg-[#ffcc91] bg-opacity-15 w-8 h-8 flex items-center justify-center rounded-lg">
                  <ShoppingBagIcon className="icon-mini-style text-black-100" />
                </div>
                <div className="flex items-center justify-center text-black-10 text-sm">
                  <p className="text-black-10 text-sm">All-time</p>
                  <ChevronDownIcon className="icon-mini-style ml-1 mt-1" />
                </div>
              </div>
              <div className="flex flex-auto items-end">
                <div className="flex flex-col flex-grow">
                  <p className="text-black-30">All Orders</p>
                  <h3 className="text-black-60 text-lg font-semibold">1</h3>
                </div>
                <div className="flex flex-col flex-grow">
                  <p className="text-black-30">Pending</p>
                  <h3 className="text-black-60 text-lg font-semibold">0</h3>
                </div>
                <div className="flex flex-col flex-grow">
                  <p className="text-black-30">Completed</p>
                  <h3 className="text-black-60 text-lg font-semibold">1</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-[1_1_50%] bg-white rounded-xl h-32 items-center justify-center">
            <div className="p-3 flex flex-col h-full">
              <div className="flex items-center justify-between">
                <div className="bg-[#ffcc91] bg-opacity-15 w-8 h-8 flex items-center justify-center rounded-lg">
                  <ShoppingBagIcon className="icon-mini-style text-black-100" />
                </div>
                <div className="flex items-center justify-center text-black-10 text-sm">
                  <p className="text-black-10 text-sm">All-time</p>
                  <ChevronDownIcon className="icon-mini-style ml-1 mt-1" />
                </div>
              </div>
              <div className="flex flex-auto items-end">
                <div className="flex flex-col flex-grow">
                  <p className="text-black-30">Canceled</p>
                  <h3 className="text-black-60 text-lg font-semibold">0</h3>
                </div>
                <div className="flex flex-col flex-grow">
                  <p className="text-black-30">Returned</p>
                  <h3 className="text-black-60 text-lg font-semibold">0</h3>
                </div>
                <div className="flex flex-col flex-grow">
                  <p className="text-black-30">Damaged</p>
                  <h3 className="text-black-60 text-lg font-semibold">0</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 bg-white rounded-xl">
            <PurchasesList title='Purchases'/>
        </div>
      </div>
    </div>
  );
}
