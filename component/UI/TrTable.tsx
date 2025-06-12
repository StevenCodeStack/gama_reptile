import React from "react";

const TrTable = ({ title, value }: { title: string; value: string }) => {
  return (
    <tr className="align-text-top">
      <td className="text-nowrap font-bold">{title}</td>
      <td className="px-3">:</td>
      <td>{value}</td>
    </tr>
  );
};

export default TrTable;
