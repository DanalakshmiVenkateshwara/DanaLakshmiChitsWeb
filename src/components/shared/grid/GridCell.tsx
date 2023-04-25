import React from "react";
interface Iprops {
  targetField?: string;
  children?: JSX.Element;
  title: string;
}
export default function GridCell(props: Iprops) {
  debugger
  return (
    <td>
      <div>{props?.children}</div>
    </td>
  );
}
