import React, { useEffect, useState } from "react";

interface Iprops {
  rowProps?: any;
}
export default function useGrid() {
  const [rowProps, setRowProps] = useState();
  return { rowProps, setRowProps };
}
