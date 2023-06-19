import React, { ReactElement, useState } from "react";
import { JsxElement } from "typescript";
import SideBarItem from "./SideBarItem";
import "./_Sidebar.scss";
interface IProps {
  children: JSX.Element;
  className:'string'|any
}
export default function Sidebar(props: IProps) {
  const [sidebarClose, setSidebarClose] = useState(false);
  const styles = {
    height: "calc(100vh - 107px)",
    width: "auto",
    maxWidth: "280px"
  };

  return (
    <ul className={`sidebar bg-dark list-unstyled mb-0 px-0 ${sidebarClose ? 'close' : 'open'} ${props.className}`} style={styles}>
      {props.children}
      <li className="text-white p-3 text-end" onClick={() => { setSidebarClose(prev => !prev) }}>
        <i className="fas fa-angles-right"></i>
      </li>
    </ul>
  );
}
