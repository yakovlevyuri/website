import nanoid from 'nanoid/generate';
import React from 'react';

import HrGame from '../src/components/hrGame/HrGame';

const GamePage = ({ email }) => <HrGame email={email} />;

GamePage.getInitialProps = async () => {
  return { email: `job-${nanoid('1234567890abcdef', 10)}@mynameisyuri.com` };
};

export default GamePage;
