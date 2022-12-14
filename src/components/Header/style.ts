import styled from 'styled-components';

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 12px 0;

    img{ 
      max-width:50px;
      height: auto;
    }

    .nav-links{
      display: flex;

      a{
        text-decoration: none;
        color: #000;
        font-family: 'Roboto', sans-serif;
        font-size: 13px;
        margin: 12px;
        cursor: pointer;
        transition: 0.6s;

          &:hover{
            color: #676666;
          }
      }
    }
`