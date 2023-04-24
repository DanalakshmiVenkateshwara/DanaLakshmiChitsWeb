import React from "react";

interface Iprops {
  title: string;
  targetField: string;
  width?: string;
  children?: any;
}
export default function GridColumn(props: Iprops) {
  debugger
  return <th style={{ width: props.width }}>{props.title}</th>;
}
