import React from 'react';
import { storiesOf } from '@storybook/react';

import Editor from './Editor';

const allData = {
  loading: false,
  allBios: [
    {
      location: 'Prague, Czechia',
      email: 'contact@yakovlevyuri.com',
      dateOfBirth: '1989-11-27T16:30:00.457Z',
      lastName: 'Yakovlev',
      firstName: 'Yuri',
      id: 'cj23tgt5n2jz10168ynlo415h',
      phone: '+420776278743',
    },
  ],
  allWorks: [
    {
      companyWebsite: 'http://kiwi.com',
      startYear: '2017',
      companyLocation: ' Prague, Czechia',
      endYear: 'NaN',
      id: 'cj782je7n09sq01100d8j69vp',
      workProjects: [],
      companyName: 'Kiwi.com',
      position: ' frontend developer',
      responsibilities: [],
    },
    {
      companyWebsite: 'https://www.cngroup.dk/',
      startYear: '2016',
      companyLocation: 'Prague, Czechia',
      endYear: '2017',
      id: 'cj23zyjgq44zy01681j7g8nwi',
      workProjects: [
        {
          website: 'http://www.bunte.de/',
          name: 'BUNTE.de',
          description:
            'Germany’s leading people news website BUNTE.de (30m+ visits/month)',
          myRole: 'Javascript (ES6, React, React Native), Java (Groovy)',
          goal: 'complete relaunch of the website',
        },
      ],
      companyName: 'CN Group',
      position: 'software/frontend developer',
      responsibilities: [
        'creating Single Page Apps using React.js library',
        'android and iOS mobile apps development using React Native technology',
      ],
    },
    {
      companyWebsite: 'https://www.lundegaard.eu/en/',
      startYear: '2014',
      companyLocation: 'Prague, Czechia',
      endYear: '2016',
      id: 'cj2c5e8zeuebp0119sx9xtah6',
      workProjects: [],
      companyName: 'Lundegaard',
      position: ' frontend developer',
      responsibilities: [
        'implementation of the front-end part of internet solutions (coding using HTML, CSS, JavaScript)',
        'cooperation in a team with web consultants, designers and programmers',
        'responsibility for quality of code, accuracy of displaying and functioning of frontend code in various browsers',
        'work on Tesco, 3M, Cetelem, Metlife, Airbank, Prague Airport, KRKA projects',
      ],
    },
    {
      companyWebsite: 'http://electronictourguide.com/en/',
      startYear: '2012',
      companyLocation: 'Prague, Czechia',
      endYear: '2014',
      id: 'cj2c9k5j30tho01195yqam4tn',
      workProjects: [],
      companyName: 'Electronic Tour Guide',
      position: 'product manager',
      responsibilities: [
        'collaborating with partners and technical consulting',
        'promotional campaign planning',
      ],
    },
  ],
};

const bioData = {
  loading: false,
  allBios: [
    {
      location: 'Prague, Czechia',
      email: 'contact@yakovlevyuri.com',
      dateOfBirth: '1989-11-27T16:30:00.457Z',
      lastName: 'Yakovlev',
      firstName: 'Yuri',
      id: 'cj23tgt5n2jz10168ynlo415h',
      phone: '+420776278743',
    },
  ],
  allWorks: [],
};

const workData = {
  loading: false,
  allBios: [],
  allWorks: [
    {
      companyWebsite: 'http://kiwi.com',
      startYear: '2017',
      companyLocation: ' Prague, Czechia',
      endYear: 'NaN',
      id: 'cj782je7n09sq01100d8j69vp',
      workProjects: [],
      companyName: 'Kiwi.com',
      position: ' frontend developer',
      responsibilities: [],
    },
    {
      companyWebsite: 'https://www.cngroup.dk/',
      startYear: '2016',
      companyLocation: 'Prague, Czechia',
      endYear: '2017',
      id: 'cj23zyjgq44zy01681j7g8nwi',
      workProjects: [
        {
          website: 'http://www.bunte.de/',
          name: 'BUNTE.de',
          description:
            'Germany’s leading people news website BUNTE.de (30m+ visits/month)',
          myRole: 'Javascript (ES6, React, React Native), Java (Groovy)',
          goal: 'complete relaunch of the website',
        },
      ],
      companyName: 'CN Group',
      position: 'software/frontend developer',
      responsibilities: [
        'creating Single Page Apps using React.js library',
        'android and iOS mobile apps development using React Native technology',
      ],
    },
    {
      companyWebsite: 'https://www.lundegaard.eu/en/',
      startYear: '2014',
      companyLocation: 'Prague, Czechia',
      endYear: '2016',
      id: 'cj2c5e8zeuebp0119sx9xtah6',
      workProjects: [],
      companyName: 'Lundegaard',
      position: ' frontend developer',
      responsibilities: [
        'implementation of the front-end part of internet solutions (coding using HTML, CSS, JavaScript)',
        'cooperation in a team with web consultants, designers and programmers',
        'responsibility for quality of code, accuracy of displaying and functioning of frontend code in various browsers',
        'work on Tesco, 3M, Cetelem, Metlife, Airbank, Prague Airport, KRKA projects',
      ],
    },
    {
      companyWebsite: 'http://electronictourguide.com/en/',
      startYear: '2012',
      companyLocation: 'Prague, Czechia',
      endYear: '2014',
      id: 'cj2c9k5j30tho01195yqam4tn',
      workProjects: [],
      companyName: 'Electronic Tour Guide',
      position: 'product manager',
      responsibilities: [
        'collaborating with partners and technical consulting',
        'promotional campaign planning',
      ],
    },
  ],
};

storiesOf('Editor', module).add('complete data', () => (
  <Editor data={allData} />
));

storiesOf('Editor', module).add('bio data only', () => (
  <Editor data={bioData} />
));

storiesOf('Editor', module).add('work data only', () => (
  <Editor data={workData} />
));
