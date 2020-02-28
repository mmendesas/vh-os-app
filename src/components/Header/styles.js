import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: center;
  height: 50px;
  margin-bottom: 50px;

  font-size: 18px;
  box-shadow: 0 2px 20px rgba(182, 182, 182, 0.5);

  nav {
    display: flex;
    align-items: center;

    ul {
      display: flex;
      li {
        margin-right: 20px;
        a {
          text-decoration: none;
          color: #0aa;

          &:hover {
            color: #099;
          }
        }
      }
    }
  }
`;
