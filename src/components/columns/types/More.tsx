import { FC, ReactNode } from "react";

import data from "../data";
import Bottom from "./Bottom";

interface MoreProps {
  handelClick: (type: string, id: string) => void;
}

const More: FC<MoreProps> = ({ handelClick }) => {
  return (
    <>
      {data.dataMoreType.map(({ operation, ...more }, index) => (
        <li
          onClick={() => {
            handelClick(operation, "sadasdasd");
          }}
          key={index}
        >
          <Bottom {...more} />
        </li>
      ))}
    </>
  );
};

export default More;
