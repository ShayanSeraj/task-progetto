import React from "react";
import NavBar from "../components/NavBar";

import {
  ChevronDownIcon,
  PlusIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { FolderMinusIcon } from "@heroicons/react/24/solid";
import InventoryItems from "../components/InventoryItems";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Inventory() {
  const navigate = useNavigate();
  const headTable = [
    "Product Name",
    "Category",
    "Unit Price",
    "In-Stock",
    "Discount",
    "Total Value",
    "Action",
    "Status",
  ];

  const all = useSelector((state)=> state.products.products)

  return (
    <div>
      <NavBar />
      <div className="m-5">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold justify-center">Inventory Summery</h2>
          <button
            className="flex items-center justify-center bg-primary-100 text-white border-black-60 rounded-xl h-7 p-3"
            onClick={() => navigate("/inventory/new-inventory")}
          >
            <span className="text-4xl items-center mx-2">
              <PlusIcon className="icon-style" />
            </span>
            <span className="text-sm font-light justify-center items-center mr-2">
              Add a New Product
            </span>
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4 h-36">
          <div className="bg-primary-100 rounded-xl flex flex-col">
            <div className="m-4 w-9 h-9 bg-primary-20 flex items-center justify-center rounded-lg">
              <FolderMinusIcon className="icon-style text-primary-100 stroke-stroke" />
            </div>
            <div className="flex items-center text-white m-4">
              <div className="flex flex-col">
                <h2 className="text-lg">All Product</h2>
                <span className="mx-1 text-2xl">{all.length}</span>
              </div>
              <div className="flex flex-col mx-auto">
                <h2 className="text-lg">Active</h2>
                <div className="flex">
                  <span className="mx-1 text-2xl">316</span>{" "}
                  <p className="mx-1 font-light text-sm flex items-center justify-center">
                    86%
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl">
            <div className="m-4">
              <div className="flex justify-between">
                <div className="w-9 h-9 flex items-center justify-center bg-secondary-20 rounded-lg">
                  <UsersIcon className="icon-style" />
                </div>
                <span className="flex items-center justify-center text-black-10 text-sm">
                  This Week
                  <ChevronDownIcon className="icon-style ml-2" />
                </span>
              </div>
            </div>
            <div className="flex items-center m-4">
              <div className="flex flex-col mt-3">
                <h2 className="text-lg text-action-red">Low Stock Alert</h2>
                <span className="mx-1 text-2xl text-black-60">23</span>
              </div>
              <div className="flex flex-col mx-auto mt-3">
                <h2 className="text-lg text-black-30">Expired</h2>
                <span className="mx-1 text-2xl text-black-60">3</span>
              </div>
              <div className="flex flex-col mx-auto mt-3">
                <h2 className="text-lg text-black-30">1 Start Rating</h2>
                <span className="mx-1 text-2xl text-black-60">2</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 bg-white rounded-xl">
          <InventoryItems title="Inventory Items" headTable={headTable} />
        </div>
      </div>
    </div>
  );
}
