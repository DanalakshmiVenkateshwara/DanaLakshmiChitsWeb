import React from "react";
import { Card as BSCard } from "react-bootstrap";

interface Iprops {
  title?: string;
  children?: JSX.Element;
  noPadding?: boolean;
  actionButtons?: JSX.Element;
}
export default function Card(props: Iprops) {
  return (
    <BSCard>
      <BSCard.Header as={"h5"}>{props.title}</BSCard.Header>
      <BSCard.Body className={props.noPadding ? "p-0" : ""}>{props.children}</BSCard.Body>
      {props.actionButtons && <BSCard.Footer>{props.actionButtons}</BSCard.Footer>}
    </BSCard>
  );
}
