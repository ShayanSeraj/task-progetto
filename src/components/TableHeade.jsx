import React from "react";

export default function TableHeade({headTable}) {
  return (
    <thead className="border-y-[1px] border-gray">
      <tr>
        <th>
          <input type="checkbox" className="checkbox-style mr-3" />
        </th>
        {headTable.map((item , i)=> (
            <th key={i}>
              <p className="text-sm font-normal mx-1 py-3">{item}</p>
              <span></span>
            </th>
        ))}
      </tr>
    </thead>
  );
}
