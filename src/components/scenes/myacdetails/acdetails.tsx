import React, { useState } from 'react'
import useFetch from '../../hooks/useFetch';
import Card from '../../shared/card'
import AcDetailsGrid from './acdetailsgrid'
import uniqid from 'uniqid';
import useNoninitialEffect from '../../hooks/useNoninitialEffect';
import { Form, Button, Col } from "react-bootstrap";
import { useStore } from '../../store';

export default function Acdetails() {
  
  const [groupsData, setGroupsData] = useState<Array<any>>([]);
  const [userChits, setuserChits] = useState<Array<any>>([]);
  const [groupId, setGroupId] = useState<any>(-1);
  const {State,Store} = useStore();

  const { response: groupResponse, loading: groupsLoading } = useFetch({ url: `/User/GetChitsDropDown?userId=${State.user.id}`, Options: { method: "GET", initialRender: true } });
  const { response, loading,onRefresh: getAcDetails } = useFetch({ url: `/User/GetUserAcCopy?userId=${State.user.id}&groupId=${groupId}`, Options: { method: 'GET', initialRender: false } });
  useNoninitialEffect(() => {
    
    let data: any = groupResponse;
    
    setGroupsData(data)
  }, [groupResponse])
  const onGroupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    setGroupId(Number(e.target.value));
    getAcDetails()
    
    let gropWiseDetails = userChits.filter((f: any) => f.groupId  == e.target.value);
    setuserChits(gropWiseDetails)
  }
  useNoninitialEffect(() => {
    let data: any = response;
    
    setuserChits(data)
  }, [response,groupId])
  return (
    <>
    <Card noPadding title="Users payment Details" headerAction={<Col sm={4} className="d-flex align-items-end justify-content-end">
      <Form.Control as="select" className="col-6 col-sm-3 col-xl-2" size="sm" value={groupId}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onGroupChange(e)
        }
      >
        <option key={-1} value={-1}>
          {"..Choose group.."}
        </option>
        {groupsData.map((item) => { return (
            <option key={item.id} value={item.id}>
              {item.groupName}
            </option>
          );
        })}
      </Form.Control>
      </Col>}
      >
        <AcDetailsGrid data={userChits} loading={loading} />
      </Card>
    </>
  )
}
