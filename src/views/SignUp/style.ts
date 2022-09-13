import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #8c52e5;

  .card{
    display: grid;
    background-color: #f9f9f9;
    max-width: 300px;
    border-radius: 22px;
    padding: 22px;
    font-family: 'Roboto', sans-serif;

      h5{ 
        text-align: center;
        font-size: 22px;
        color: #8c52e5;
      }

      form{
        text-align: center;

        input{
          width: 100%;
          height: 32px;
          border-radius: 22px;
          border: 1px solid #e2e2e2;
          text-align: center;
          margin: 10px 0 0 0;
        }

        button{
          border: none;
          cursor: pointer;
          font-weight: bold;
          text-transform: uppercase;
          background-color: #68de5a;
          padding: 8px 13px;
          margin: 10px 0 5px 0;
          border-radius: 22px;
          transition: 0.6s;
          &:hover{
            background-color: #8c52e5;
            color: #fff;
          }
        }
      }

      a{
        text-decoration: none;
        text-align: center;
        font-size: 12px;
      }

        span{
          font-weight: bold;
        }
  }
`