import React, { useEffect, useState } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import { CardBody, CardHeader } from "reactstrap";
import GroupsGrid from "./groups-grid";
import Footer from "../../shared/footer";
import Header from "../../shared/header";
import Card from "../../shared/card/Card";
import FormControl from "../../shared/form/FormControl";
import Suggest from "../../shared/form/controls/Suggest";
import CreateGroup from "./CreateGroup";
import useFetch from "../../hooks/useFetch";
import useNoninitialEffect from "../../hooks/useNoninitialEffect";
import Form from "../../shared/form";

export default function Groups() {
  const [isCrete, setIsCrete] = useState(false);
  const [groupStatus, setGroupStatus] = useState(false);
  const { response, loading, onRefresh: CompletedGroupDetails } = useFetch({ url: `/User/GetAllChitPlans/${groupStatus}`, Options: { method: "GET", initialRender: true } });

  useNoninitialEffect(() => {
    CompletedGroupDetails();
  }, [groupStatus]);

  return (
    <Card noPadding title={isCrete ? "Create Group" :(groupStatus?"Closed Group List": "Groups List")}
      headerAction={
        <div className="d-flex align-items-center">
          {!isCrete && <Form.CheckBox
            label="Closed Groups"
            name="ClosedGroups"
            value={groupStatus == true ? "true" : "false"}
            checked={groupStatus}
            onChange={(e: any) => setGroupStatus(prev => !prev)}
            noPadding
            className="me-3" />}
          <Button size="sm" onClick={() => { setIsCrete(!isCrete ? true : false) }}>{!isCrete ? "Create" : "List"}</Button>
        </div>
      }
    // actionButtons={<><Button size="sm">Save</Button> </>}
    >
      {isCrete ? <CreateGroup setIsCrete={setIsCrete} setGroupStatus={setGroupStatus} CompletedGroupDetails={CompletedGroupDetails} /> :
        <GroupsGrid data={response} loading={loading} setGroupStatus={setGroupStatus} CompletedGroupDetails={CompletedGroupDetails} />}
    </Card>
  );
}