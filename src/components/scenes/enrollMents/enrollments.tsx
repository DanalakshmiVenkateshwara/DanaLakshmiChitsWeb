import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import useNoninitialEffect from "../../hooks/useNoninitialEffect";
import Card from "../../shared/card";
import Footer from "../../shared/footer";
import Header from "../../shared/header";
import EnrollMentsGrid from "./forms/enrollments-grid";
import UserEnrollment from "./userEnrollment";
import useFetch from "../../hooks/useFetch";

export default function Enrollments() {
  const [isCrete, setIsCrete] = useState(false);
  const [isActiveEnrollMents, setIsActiveEnrollments] = useState(true);
  const [groupsData, setGroupsData] = useState<Array<any>>([]);
  const [groupId, setGroupId] = useState<any>(0);
  const { response: groupResponse, loading: groupsLoading } = useFetch({ url: `/User/GetAllChitPlans/${false}`, Options: { method: "GET", initialRender: true } });
  // useNoninitialEffect(() => {
  //   if (!isCrete) {
  //     EnrollMentDetails();
  //   }
  // }, [isCrete])
  useNoninitialEffect(() => {
    debugger
    let data: any = groupResponse;
    debugger
    setGroupsData(data)
  }, [groupResponse])
  const onGroupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debugger
    setGroupId(Number(e.target.value));
    // let gropWiseDetails = userChits.filter((f: any) => f.groupId  == e.target.value);
    // setEnrollments(gropWiseDetails)
  }
  return (
    <>
    {!isCrete && <Form.Control as="select" className="col-6 col-sm-3 col-xl-2" size="sm" value={groupId}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        onGroupChange(e)
      }
    >
      <option key={-1} value={-1}>
        {"..Choose group.."}
      </option>
      {groupsData.map((item) => {
        return (
          <option key={item.id} value={item.id}>
            {item.groupName}
          </option>
        );
      })}
    </Form.Control> }
     <Card noPadding title="EnrollMents List"
                headerAction={!isCrete ? <Button size="sm" onClick={() => { setIsCrete(true) }}>Create</Button> : <Button size="sm" onClick={() => { setIsCrete(false) }}>List</Button>}
            >
              {isCrete ? <UserEnrollment setIsCrete={setIsCrete} /> :
      <EnrollMentsGrid groupId = {groupId}/>}</Card>
    </>
  );
}