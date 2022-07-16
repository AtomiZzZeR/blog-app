import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1500px;
  margin: 0 auto;
  height: 100%;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  height: 80px;
  margin: 15px 0px 0px 0px;
  padding: 0px 25px;
  border-radius: 50px;
  align-items: center;
  background: #556270;
  background: -webkit-linear-gradient(to right, #ff6b6b, #556270);
  background: linear-gradient(to right, #ff6b6b, #556270);
`;

const BoxForTitleAndHome = styled.div`
  display: flex;
  align-items: center;
`;

const SiteTitle = styled.h1`
  padding: 7px 11px 7px 11px;
  color: #222;
  font-weight: bold;
  font-size: 1.65em;

  transition: 0.5s;
  border-radius: 100px 0px 0px 100px;
  border-right: 2.5px solid #222;

  &:hover {
    color: #ff6b6b;
    background-color: #222;
  }
`;

const HomePageLink = styled.div`
  padding: 7px 10px 7px 11px;
  color: #222;
  font-weight: bold;
  font-size: 1.65em;

  transition: 0.5s;
  border-radius: 0px 100px 100px 0px;
  border-left: 2.5px solid #222;

  &:hover {
    color: #ff6b6b;
    background-color: #222;
  }
`;

const AddPostPageLink = styled.div`
  padding: 6px 10px;
  color: #222;
  font-weight: bold;
  font-size: 1.65em;

  transition: 0.5s;

  &:hover {
    color: #556270;
    background-color: #222;
    border-radius: 100px;
    border-bottom: 5px solid #333;
  }
`;

const ProfilePageLink = styled.div`
  padding: 6px 10px;
  color: #222;
  font-weight: bold;
  font-size: 1.65em;

  transition: 0.5s;
  border-bottom: 5px solid #222;

  &:hover {
    color: #556270;
    background-color: #222;
    border-radius: 100px;
    border-bottom: 5px solid #333;
  }
`;

const LogOutBtn = styled.button`
  font-size: 1.8em;
  width: 100px;
  border-radius: 30px;
`;

const Main = styled.main`
  flex: 1 1 auto;
  margin: 15px 0px;
  padding: 0px 30px;
`;

const Container = styled.div``;

const StyledLayout = {
  Wrapper,
  Header,
  Main,
  Container,
  BoxForTitleAndHome,
  SiteTitle,
  HomePageLink,
  AddPostPageLink,
  ProfilePageLink,
  LogOutBtn,
};

export default StyledLayout;
