import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background: #fff;
  padding: 0 30px;
  z-index: 1050;

  @media (max-width: 767px) {
    padding: 0 15px;
  }
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;

      @media (max-width: 767px) {
        margin-right: 10px;
        padding-right: 10px;
      }
    }

    a {
      font-weight: bold;
      color: #7159c1;
    }
  }

  aside {
    display: flex;
    align-items: center;
    max-width: 160px;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;

  @media (max-width: 767px) {
    margin-left: 10px;
    padding-left: 10px;
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #333;

      @media (max-width: 767px) {
        max-height: 18px;
        overflow: hidden;
      }
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }

  img {
    width: 32px;
    min-width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
  }
`;
