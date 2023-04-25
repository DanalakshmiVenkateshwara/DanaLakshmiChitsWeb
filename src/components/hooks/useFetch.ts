import React from "react";

export default function useFetch(
  url?: string,
  data?: any,
  contentType?: string,
  header?: string
) {
  const result = fetch("https://localhost:44303/api/User/GetAllChitPlans", {
    mode: "no-cors",
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then((response: any) => response.json()).then((data: any) => {console.log(data);return data})
  return result;
}
