import React, { useState } from "react";
import NavBar from "../components/NavBar";

import { CalendarDaysIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { ClockIcon, CloudArrowUpIcon, TrashIcon } from "@heroicons/react/24/outline";

import uploadImage from "../assets/Image.png";
import { useDispatch } from "react-redux";
import { addProductDraft, addProductPublish } from "../app/Products";
import { useNavigate } from "react-router-dom";


export default function NewInventory() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [discount, setDiscount] = useState(false);
  const [expiryDate, setExpiryDate] = useState(false);

  const [newProduct , setNewProduct] = useState({
    productName: '',
    img:'',
    category:'',
    unitPrice: null,
    costPrice: null,
    inStock: null,
    orderType: '',
    discount: null,
    expiryDiscount: '',
    shortDescription: '',
    description: '',
    dateAdded: '',
    timeAdded: ''
  })

  const types = ["image/jpeg", "image/png"]

  const [image , setImage] = useState('')

  const handelSetImage = (e)=>{
    let selected = e.target.files[0]
    let name = window.URL.createObjectURL(selected)
    if (selected && types.includes(selected.type)) {
      setImage(name)
      setNewProduct({...newProduct , img: name})
    }
  }

  return (
    <div className="bg-mainBg">
      <NavBar title="New Inventory" />
      <div className="m-5">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold justify-center">New Inventory Item</h2>
          <div className="flex items-center justify-center">
            <button className="flex items-center justify-center bg-black-100 text-white border-black-60 rounded-xl h-7 p-3 mx-6"
              onClick={()=>{dispatch(addProductDraft(newProduct));navigate('/inventory')}}
            >
              <span className="text-sm font-light justify-center items-center mx-2">
                Save as Draft
              </span>
              <span className="mx-2 text-black-70 pb-1">|</span>
              <span>
                <ChevronDownIcon className="h-4 w-4 cursor-pointer transition-all duration-100 active:scale-110 leading-tight" />
              </span>
            </button>
            <button className="flex items-center justify-center bg-primary-100 text-white border-black-60 rounded-xl h-7 p-3"
              onClick={()=>{dispatch(addProductPublish(newProduct));navigate('/inventory')}}
            >
              <span className="text-sm font-light justify-center items-center mx-2">
                Save and Publish
              </span>
            </button>
          </div>
        </div>
        <form className="grid grid-cols-12 gap-5 mt-5 mb-5 h-[75vh]">
          <div className="col-span-9 bg-white rounded-xl h-full">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1 m-5">
                <div className="mb-6">
                  <input
                    placeholder="Product Name"
                    type="text"
                    className="bg-mainBg w-full p-2 rounded-lg h-11 outline-none"
                    value={newProduct.productName}
                    onChange={(e)=>setNewProduct({...newProduct , productName: e.target.value})}
                  />
                </div>
                <div className="mb-6">
                  <select className="bg-mainBg w-full p-2 rounded-lg h-11 outline-none invalid:text-black-20"
                    value={newProduct.category}
                    onChange={(e)=>setNewProduct({...newProduct , category: e.target.value})}
                  >
                    <option disabled selected value="">
                      Select Product Category
                    </option>
                    <option value="Gadget">Gadget</option>
                    <option value="Fashion">Fashion</option>
                  </select>
                </div>
                <div className="mb-6 flex gap-3">
                  <input
                    value={newProduct.unitPrice}
                    onChange={(e)=>setNewProduct({...newProduct , unitPrice: e.target.value})}
                    placeholder="Selling Price"
                    type="text"
                    className="bg-mainBg w-1/2 p-2 rounded-lg h-11 outline-none"
                  />
                  <input
                    value={newProduct.costPrice}
                    onChange={(e)=>setNewProduct({...newProduct , costPrice: e.target.value})}
                    placeholder="Cost Price"
                    type="text"
                    className="bg-mainBg w-1/2 p-2 rounded-lg h-11 outline-none"
                  />
                </div>
                <div className="mb-6">
                  <input
                    value={newProduct.inStock}
                    onChange={(e)=>setNewProduct({...newProduct , inStock: e.target.value})}
                    placeholder="Quantity in Stock"
                    type="number"
                    className="bg-mainBg w-full p-2 rounded-lg h-11 outline-none"
                  />
                </div>
                <div className="mb-6">
                  <select className="bg-mainBg w-full p-2 rounded-lg h-11 outline-none invalid:text-black-20 "
                    value={newProduct.orderType}
                    onChange={(e)=>setNewProduct({...newProduct , orderType: e.target.value})}
                  >
                    <option disabled selected value="">
                      Order Type
                    </option>
                    <option value="Home Delivery">Home Delivery</option>
                  </select>
                </div>
                <div className="flex items-center justify-between mb-4 text-sm">
                  <div>
                    <p className="text-black-30">Discount</p>
                  </div>
                  <div className="flex">
                    <p className="text-sm mr-5">Add Discount</p>
                    <label htmlFor="toggle-switch">
                      <input
                        type="checkbox"
                        id="toggle-switch"
                        value={discount}
                        onChange={() => setDiscount(!discount)}
                        className="cursor-pointer h-5 w-10 rounded-full appearance-none bg-mainBg checked:bg-primary-50 transition duration-200 relative"
                      />
                    </label>
                  </div>
                </div>
                {discount && (
                  <div className="my-3 flex gap-3 transition-all duration-200">
                    <select className="bg-mainBg w-1/2 p-2 rounded-lg h-11 outline-none">
                      <option value="">Type</option>
                    </select>
                    <input
                      value={newProduct.discount}
                      onChange={(e)=>setNewProduct({...newProduct , discount: e.target.value})}
                      placeholder="value"
                      type="text"
                      className="bg-mainBg w-1/2 p-2 rounded-lg h-11 outline-none"
                    />
                  </div>
                )}
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <p className="text-black-30">Expiry Date</p>
                  </div>
                  <div className="flex ">
                    <p className="text-sm mr-5">
                      Add Expiry Date
                    </p>
                    <label htmlFor="toggle-switch">
                      <input
                        type="checkbox"
                        id="toggle-switch"
                        value={expiryDate}
                        onChange={() => setExpiryDate(!expiryDate)}
                        className="cursor-pointer h-5 w-10 rounded-full appearance-none bg-mainBg checked:bg-primary-50 transition duration-200 relative"
                      />
                    </label>
                  </div>
                </div>
                {expiryDate && (
                  <div className="my-3 flex bg-mainBg w-full p-2 rounded-lg h-11 outline-none items-center justify-center">
                    <CalendarDaysIcon className="icon-style text-black-70" />
                    <input
                      value={newProduct.expiryDiscount}
                      onChange={(e)=>setNewProduct({...newProduct , expiryDiscount: e.target.value})}
                      type="text"
                      placeholder="12/12/2020"
                      className="w-11/12 py-2 pl-4 bg-mainBg outline-none"
                    />
                  </div>
                )}
              </div>
              <div className="col-span-1 m-5">
                <div>
                  <textarea
                    value={newProduct.shortDescription}
                    onChange={(e)=>setNewProduct({...newProduct , shortDescription: e.target.value})}
                    placeholder="Short Description"
                    className="bg-mainBg w-full h-32 rounded-lg p-2 outline-none"
                  ></textarea>
                </div>
                <div className="flex flex-col mt-2">
                  <h3 className="text-sm m-1.5">Product Long Description</h3>
                  <div className="relative w-full">
                    <div className="w-full flex justify-between absolute top-0 left-0 m-1 mt-2">
                      <div>
                        <select className="bg-mainBg rounded-xl outline-none border border-black-10 text-black-20 text-xs w-20 h-7 text-center mr-1" defaultValue='robot'>
                          <option value="robot">Robot</option>
                        </select>
                        <select className="bg-mainBg rounded-xl outline-none border border-black-10 text-black-20 text-xs w-20 h-7 text-center" defaultValue='paragrah'>
                          <option value="paragrah">Paragrah</option>
                        </select>
                      </div>
                      <div className="mr-2">
                        <i className="fa-solid fa-bold text-xs ml-2"></i>
                        <i className="fa-solid fa-underline text-xs mx-2"></i>
                        <i className="fa-solid fa-italic text-xs"></i>
                        <i className="fa-solid fa-align-justify text-xs mx-2"></i>
                        <i className="fa-solid fa-align-left text-xs"></i>
                        <i className="fa-solid fa-align-right text-xs mx-2"></i>
                        <i className="fa-solid fa-link text-xs"></i>
                      </div>
                    </div>
                    <textarea
                      value={newProduct.description}
                      onChange={(e)=>setNewProduct({...newProduct , description: e.target.value})}
                      placeholder="Your text goes here"
                      className="bg-mainBg w-full h-40 rounded-lg p-2 outline-none pt-12"
                    ></textarea>
                  </div>
                  <p className="text-black-10 text-xs ">
                    Add a long description for your product
                  </p>
                </div>
                <div className="flex items-center justify-between my-3 text-sm text-black-30">
                  <div>
                    <p>Return Policy</p>
                  </div>
                  <div className="flex">
                    <p className="text-black-20 text-sm mr-5">Add Discount</p>
                    <label htmlFor="toggle-switch">
                      <input
                        type="checkbox"
                        id="toggle-switch"
                        className="cursor-pointer h-5 w-10 rounded-full appearance-none bg-mainBg checked:bg-primary-50 transition duration-200 relative"
                      />
                    </label>
                  </div>
                </div>
                <div>
                  <p className="text-xs">Date Addred</p>
                  <div className="flex gap-2">
                    <div className="my-3 flex bg-mainBg w-1/2 p-2 rounded-lg h-11 outline-none items-center justify-center">
                      <CalendarDaysIcon className="icon-style text-black-70" />
                      <input
                        value={newProduct.dateAdded}
                        onChange={(e)=>setNewProduct({...newProduct , dateAdded: e.target.value})}
                        type="text"
                        placeholder="12/12/2020"
                        className="w-11/12 py-2 pl-4 bg-mainBg outline-none"
                      />
                    </div>
                    <div className="my-3 flex bg-mainBg w-1/2 p-2 rounded-lg h-11 outline-none items-center justify-center">
                      <ClockIcon className="icon-style " />
                      <input
                        value={newProduct.timeAdded}
                        onChange={(e)=>setNewProduct({...newProduct , timeAdded: e.target.value})}
                        type="text"
                        placeholder="12:00 PM"
                        className="w-11/12 py-2 pl-4 bg-mainBg outline-none" 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 bg-white rounded-xl h-full">
            <div className="m-3">
              <div className="w-full bg-mainBg h-52 rounded-xl flex flex-col justify-center items-center border border-gray">
                {image ? (
                  <div className="relative h-full w-full bg-white rounded-xl">
                    <div className="absolute top-2 right-2 flex">
                      <div className="bg-secondary-30 mx-2 rounded-lg w-8 h-8 flex items-center justify-center" 
                        // onClick={()=>setNewProduct({...newProduct , img:image})}
                      >
                        <CloudArrowUpIcon className="icon-style text-black-100"/>
                      </div>
                      <div className="bg-secondary-30 rounded-lg w-8 h-8 flex items-center justify-center" onClick={()=>setImage('')}>
                        <TrashIcon className="icon-style text-black-100"/>
                      </div>
                    </div>
                    <img src={image} alt="cover" className="w-full h-52 rounded-xl p-1 px-7 object-contain" />
                  </div>
                  ) : 
                  (<div className="flex flex-col items-center justify-center">
                  <img
                    src={uploadImage}
                    alt="uploadImage"
                    className="w-12 h-12"
                  />
                  <div className="mt-3 flex flex-col items-center justify-center">
                    <span className="text-primary-100 text-sm flex mb-3">
                      <CloudArrowUpIcon className="icon-style" />
                      Upload Image
                    </span>
                    <p className="text-xs text-black-30">
                      Upload a cover image for your product.
                    </p>
                    <p className="text-xs text-black-30">
                      File Format{" "}
                      <span className="text-black-90">jpeg, png</span>{" "}
                      Recommened Size{" "}
                      <span className="text-black-90">600×600(1:1)</span>
                    </p>
                  </div>
                </div>)
                }
                
              </div>
              <span className="text-sm my-2">Additional Images</span>
              <div className="flex flex-wrap gap-8 mt-2">
                {image && (
                  <div className="bg-mainBg border border-gray w-32 h-32 rounded-xl">
                    <div className="relative h-full w-full bg-white rounded-xl">
                    <div className="absolute top-2 right-2 flex">
                      <div className="bg-secondary-30 mx-2 rounded-lg w-6 h-6 flex items-center justify-center" 
                      // onClick={()=>setNewProduct({...newProduct , img:image})}
                      >
                        <CloudArrowUpIcon className="icon-mini-style text-black-100"/>
                      </div>
                      <div className="bg-secondary-30 rounded-lg w-6 h-6 flex items-center justify-center" onClick={()=>setImage('')}>
                        <TrashIcon className="icon-mini-style text-black-100" />
                      </div>
                    </div>
                    <img src={image} alt="" className="w-32 h-32 pb-0.5 rounded-xl object-contain"/>
                    </div>
                  </div>
                )}
                <label htmlFor="addImage" className="cursor-pointer">
                  <div className="bg-mainBg border border-gray w-32 h-32 rounded-xl flex flex-col items-center justify-center">
                    <img
                      src={uploadImage}
                      alt="uploadImage"
                      className="w-12 h-12"
                    />
                    <span className="text-primary-100 text-xs font-light flex items-center justify-center mb-3">
                      <CloudArrowUpIcon className="icon-style mr-1" />
                      Upload Image
                    </span>
                  </div>
                </label>
                <input type="file" id="addImage" className="hidden" onChange={handelSetImage}/>
                <div className="border border-dashed border-black-30 w-32 h-32 rounded-xl"></div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
