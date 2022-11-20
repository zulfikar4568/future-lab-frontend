import { ArowBack } from '@rsuite/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'rsuite';

interface Props {
  urlBack: string;
}

export const BackButton: React.FC<Props> = (props) => {
  return (
    <div style={{ marginTop: '20px' }}>
      <Link to={props.urlBack}>
        <Button appearance="subtle" style={{ color: 'black' }}>
          <ArowBack /> Back
        </Button>
      </Link>
    </div>
  );
};
