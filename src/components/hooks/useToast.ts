import React, { useEffect } from "react";
import { toast } from "react-toastify";
export default function useToast() {
  const getToast = (
    text: any,
    type?: "info" | "success" | "warning" | "error",
    time?: any
  ) => {
    if (type) {
      toast[type](text, {
        position: "top-center",
        autoClose: time,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "light",
      });
    } else {
      toast(text, {
        position: "top-center",
        autoClose: time,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "light",
      });
    }
  };

  return { getToast };
}
