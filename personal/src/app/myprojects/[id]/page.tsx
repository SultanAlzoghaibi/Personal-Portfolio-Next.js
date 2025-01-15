import { CardHoverEffectDemo } from "./CardHoverEffectDemo";
import React from "react";

const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const idd = parseInt(id, 10);

  // If id cannot be converted to a valid number, handle it appropriately (e.g., error message)
  if (isNaN(idd)) {
    return <div>Invalid Project ID</div>;
  }

  return (
    <div>
      <CardHoverEffectDemo idd={idd} /> {/* Passing the parsed id (idd) */}
    </div>
  );
};

export default Page;