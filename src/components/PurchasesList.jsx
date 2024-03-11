import React from "react";
import NavTable from "./NavTable";
import TableHeade from "./TableHeade";

export default function PurchasesList({ title }) {
  const headTable = [
    "Order Data",
    "Order Type",
    "Unit Price",
    "Qty",
    "Discount",
    "Order Total",
    "Status",
  ];

  return (
    <div className="py-6 px-3">
      <NavTable title={title} />
      <div>
        <table className="my-5 border-y-[1px] border-gray min-w-full text-center table-auto">
          <TableHeade headTable={headTable} />
          <tbody>
            <tr>
              <td className="py-2">
                <input type="checkbox" className="checkbox-style mr-3" />
              </td>
              <td className="py-2 mx-3">
                <p className="text-black-40 text-sm p-2 ">12 Aug 2022 - 12:25 am</p>
              </td>
              <td className="py-2 mx-3">
                <p className="text-black-40 text-sm p-2 ">Home Delivery</p>
              </td>
              <td className="py-2 mx-3">
                <p className="text-black-40 text-sm p-2 ">129 €</p>
              </td>
              <td className="py-2 mx-3">
                <p className="text-black-40 text-sm p-2 ">2</p>
              </td>
              <td className="py-2 mx-3">
                <p className="text-black-40 text-sm p-2 ">0 €</p>
              </td>
              <td className="py-2 mx-3">
                <p className="text-black-40 text-sm p-2 ">5000 €</p>
              </td>
              <td className="py-2 mx-3">
                <p className="bg-[#32936f] bg-opacity-15 text-action-green rounded-xl text-xs py-1 px-2 inline ">Completed</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
