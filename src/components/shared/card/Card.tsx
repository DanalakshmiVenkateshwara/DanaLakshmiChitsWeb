import React from "react";
import { Card as BSCard, Row } from "react-bootstrap";

interface Iprops {
  title?: string;
  children?: JSX.Element;
  noPadding?: boolean;
  actionButtons?: JSX.Element;
  headerAction?: JSX.Element;
}
export default function Card(props: Iprops) {
  return (
    <BSCard>
      <BSCard.Header className="bg-white justify-content-between align-items-center d-flex" >
        <h5 className="mb-0  fw-bold">{props.title}</h5>
        {props.headerAction && <div>{props.headerAction}</div>}
      </BSCard.Header>
      <BSCard.Body className={props.noPadding ? "p-0" : ""}>{props.children}</BSCard.Body>
      {props.actionButtons && <BSCard.Footer as={'div'} className="bg-white justify-content-end d-flex"><>{props.actionButtons}</></BSCard.Footer>}
    </BSCard>
  );
}
