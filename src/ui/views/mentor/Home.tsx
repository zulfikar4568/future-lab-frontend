import React from 'react';
import { Input, InputGroup } from 'rsuite';
import { Search } from '@rsuite/icons';
import { MentorList } from '../../components/home/MentorList';

export const Home: React.FunctionComponent = () => {
  const data = ['Zulfikar Isnaen', 'Jack', 'Alex John', 'Sandra'];
  return (
    <>
      <div className="container mentor">
        <InputGroup>
          <InputGroup.Button>
            <Search />
          </InputGroup.Button>
          <Input placeholder="Search" />
        </InputGroup>
        <MentorList name={data} title={'Mentors for you'} />
      </div>
    </>
  );
};
