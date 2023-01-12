import styled from '@emotion/styled';

export const CastList = styled.ul`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  margin: 0 auto;
  max-width: calc(100vw - 30px);

  padding: 12px;
`;

export const CastImage = styled.img`
  width: 180px;
  object-fit: cover;
  border-radius: 8px;
`;

export const CastName = styled.p`
  font-weight: 500;
`;

export const CastItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 4px;
`;

export const CastInfo = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  /* gap: 4px; */
`;
