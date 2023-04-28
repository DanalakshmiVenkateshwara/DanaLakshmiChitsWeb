import React, { ReactElement } from "react";
import { JsxElement } from "typescript";
import SideBarItem from "./SideBarItem";
import "./_Sidebar.scss";
interface IProps {
  children: JSX.Element;
}
export default function Sidebar(props: IProps) {
  const styles = {
    height: "calc(100vh - 107px)",
    width: "280px",
  };

  return (
    <ul className="bg-dark list-unstyled mb-0" style={styles}>
      {props.children}

      <li className="text-white p-3 text-end">
        <i className="fas fa-angles-right"></i>
      </li>
    </ul>
  );
}
