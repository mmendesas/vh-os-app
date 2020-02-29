/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useParams } from 'react-router-dom';

import VHSkills from 'vh-os-packages/dist/Sections/skills';
import VHIcon from 'vh-os-packages/dist/Components/Icon';

import { Container } from './styles';

const items = [
  {
    label: 'Item 1',
    value: 'c',
  },
  {
    label: 'Item 2',
    value: 'b',
  },
  {
    label: 'Item 3',
    value: 'o',
  },
];
const apiResponse = {
  position: {
    current: items[0],
    yearOfExperience: items[2],
  },
  workAs: {
    current: items,
  },
  mainSkills: [
    {
      current: items[1],
      order: 0,
      yearOfExperience: items[1],
    },
    {
      current: items[2],
      order: 1,
      yearOfExperience: items[1],
    },
    {
      current: items[0],
      order: 2,
      yearOfExperience: items[1],
    },
  ],
  secondarySkills: [
    {
      current: items[1],
      order: 0,
      yearOfExperience: items[1],
      badge: 'Code Test',
    },
    {
      current: items[2],
      order: 1,
      yearOfExperience: items[1],
    },
    {
      current: items[0],
      order: 2,
      yearOfExperience: items[1],
      badge: 'Code Score: 85%',
    },
  ],
  suggestions: [
    { label: 'Vue.js' },
    { label: 'Python' },
    { label: 'Ruby on Rails' },
    { label: 'C#' },
    { label: 'Jquery' },
  ],
  openedPosition: true,
};

const controls = {
  position: {
    loading: false,
    error: false,
    success: false,
    message: 'Database error',
  },
  workAs: {
    loading: false,
    error: false,
    success: false,
    message: 'Database error',
  },
  openedPosition: {
    loading: false,
    error: false,
    success: false,
    message: 'Database error',
  },
};

export default function User() {
  const { id } = useParams();

  return (
    <Container>
      <VHSkills
        controls={controls}
        workAs={items}
        mainSkills={items}
        secondarySkills={items}
        positions={items}
        yearOfExperiences={items}
        data={apiResponse}
        onEvent={e => {
          console.log(e);
        }}
      />
    </Container>
  );
}
