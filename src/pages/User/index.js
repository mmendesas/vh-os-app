/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import VHSkills from 'vh-os-packages/dist/Sections/skills';

import { Container } from './styles';

import api from '../../services/api';
import parseResp from '../../utils/parseResponse';

const controls = {
  position: {
    loading: false,
    error: false,
    success: true,
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
  const [profile, setProfile] = useState(parseResp({}));

  useEffect(() => {
    async function loadInfo() {
      if (id) {
        const response = await api.get(`/api/Profile/${id}`);
        const data = parseResp(response.data);
        setProfile(data);
      }
    }
    loadInfo();
  }, []);

  return (
    <Container>
      <VHSkills
        title="skills"
        controls={controls}
        positions={profile.positionList}
        workAs={profile.workAsList}
        mainSkills={profile.mainSkillsList}
        yearOfExperiences={profile.yearsList}
        data={profile}
        onEvent={e => {
          console.log(e);
        }}
      />
    </Container>
  );
}
