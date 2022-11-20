import React from 'react';
import { SessionList } from '../components/session/SessionList';

interface IDataDetails {
  name: string;
  fromDate: string;
  toDate: string;
}

export const Session: React.FunctionComponent = () => {
  const dataSessions: IDataDetails[] = [
    {
      name: 'Zulfikar',
      fromDate: '2022-11-19T13:57:30',
      toDate: '2022-11-19T13:57:30',
    },
    {
      name: 'Arif',
      fromDate: '2022-11-19T13:57:30',
      toDate: '2022-11-19T13:57:30',
    },
    {
      name: 'Noval',
      fromDate: '2022-11-19T13:57:30',
      toDate: '2022-11-19T13:57:30',
    },
    {
      name: 'Irpan',
      fromDate: '2022-11-19T13:57:30',
      toDate: '2022-11-19T13:57:30',
    },
  ];

  return (
    <>
      <div className="container session">
        <h4>Sessions</h4>
        <SessionList data={dataSessions} title={'Upcomming sessions'} />
      </div>
    </>
  );
};
