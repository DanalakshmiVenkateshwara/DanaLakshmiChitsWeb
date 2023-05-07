import React from 'react'
import useFetch from '../../hooks/useFetch';
import Card from '../../shared/card'
import AcDetailsGrid from './acdetailsgrid'

export default function Acdetails() {

    const { response, loading } = useFetch({ url: `/User/GetUserAcCopy?userId=${4}&groupId=${4}`, Options: { method: 'GET', initialRender: true } });

  return (
    <><Card noPadding title="Users Ac Details"
    >
      <AcDetailsGrid data={response} loading={loading} />
     </Card>
    </>
  )
}
