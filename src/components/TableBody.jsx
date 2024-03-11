import React from "react";
import { useDispatch } from "react-redux";
import { singleProduct } from "../app/Products";
import { useNavigate } from "react-router-dom";

export default function TableBody({ data }) {

  const navigate = useNavigate()

  const dispatch = useDispatch()

  return (
    <tbody>
      {data.map((item) => (
        <tr key={item.id}>
          <td className="py-2">
            <input type="checkbox" className="checkbox-style mr-3" />
          </td>
          <td className="py-2 mx-3 flex items-center text-black-40 whitespace-nowrap">
            <img
              src={item.img}
              alt={item.productName}
              className="w-9 h-9 object-cover rounded-lg mr-5"
            />
            <p className="text-black-40 text-sm p-2 cursor-pointer" 
              onClick={()=>{dispatch(singleProduct(item.id));navigate(`/inventory/view-inventory/${item.id}`)}}>
                {item.productName}
              </p>
          </td>
          <td className="py-2 mx-3">
            <p className="text-black-40 text-sm p-2 ">{item.category}</p>
          </td>
          <td className="py-2 mx-3">
            <p className="text-black-40 text-sm p-2 ">{item.unitPrice} €</p>
          </td>
          <td className="py-2 mx-3">
            {item.inStock > 0 ? <p className="text-black-40 text-sm p-2 ">{item.inStock}</p> : <p className="text-gray text-sm p-2 ">Out of Stock</p>}
          </td>
          <td className="py-2 mx-3">
            <p className="text-black-40 text-sm p-2 ">{item.discount ? item.discount : 0} €</p>
          </td>
          <td className="py-2">
            <p className="text-black-40 text-sm p-2 ">{item.totalValue} €</p>
          </td>
          <td className="py-2">
            <select className="bg-gray text-black-30 rounded-xl text-xs py-1 px-2 inline" defaultValue={item.status}>
              <option value= {true}>Publish</option>
              <option value= {false}>Unpublish</option>
            </select>
          </td>
          <td className="py-2 mx-3">
            <p className={`${item.status === true ? 'bg-primary-10 text-primary-100' : 'bg-secondary-30 text-black-100'} rounded-xl text-xs py-1 px-2 inline`}>
              {item.status === true ? 'Published' : 'UnPublished'}
            </p>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
