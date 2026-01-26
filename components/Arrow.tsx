import React from "react";
import BlueArrow from "./BlueArrow";
import VioletArrow from "./VioletArrow";
import GreenArrow from "./GreenArrow";

type ArrowImageProps = {
  color: string;
};

export default function ArrowImage({ color }: ArrowImageProps) {
  switch (color) {
    case "blue":
      return <BlueArrow />;
    case "violet":
      return <VioletArrow />;
    case "green":
      return <GreenArrow />;
    default:
      return <div></div>;
  }
}
