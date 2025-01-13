import { Card } from "@/app/component/ui/cardsPrjHover";
import React from "react";
import { CardHoverEffectDemo } from "./CardHoverEffectDemo";

const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return (
    <div>
        <h1 className=" text-white font-bold" >
            Project {id}
            <CardHoverEffectDemo />
        </h1>

    </div>
  );
};

export default Page;