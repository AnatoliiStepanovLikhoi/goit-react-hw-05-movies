import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';

export const DetailsContainer = styled.section`
  padding: 15px;
`;

export const DescSection = styled.section`
  display: grid;
  grid-template-columns: 400px 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 36px;

  margin: 16px 0;
`;

export const InfoSection = styled.section`
  padding: 8px;

  margin-bottom: 16px;
`;

export const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export const MovieTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;

  /* margin-bottom: 16px; */
`;

export const GenresList = styled.ul`
  display: flex;
  gap: 4px;
`;

export const InfoLink = styled(NavLink)`
  color: black;
  padding: 4px 8px;

  &.active {
    color: #ffffff;
    background-color: #eb8596;

    border-radius: 4px;
  }
`;

export const InfoList = styled.ul`
  display: flex;
  gap: 16px;
`;

export const InfoTitle = styled.h2`
  margin-bottom: 8px;
`;
