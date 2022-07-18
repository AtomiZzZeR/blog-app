import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1500px;
  margin: 0 auto;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  height: 80px;
  margin: 15px 0px 0px 0px;
  padding: 0px 25px;
  border-radius: 50px;
  align-items: center;
  background: rgb(255, 107, 107);
  background: linear-gradient(90deg, rgba(255, 107, 107, 1) 0%, rgba(255, 107, 107, 1) 37%, rgba(85, 98, 112, 1) 100%);
`;

const BoxForTitleAndHome = styled.div`
  display: flex;
  align-items: center;
`;

const SiteTitle = styled.h1`
  padding: 7px 11px 7px 16px;
  color: #222;
  font-weight: bold;
  font-size: 1.65em;
  transition: 0.5s;
  border-radius: 100px 0px 0px 100px;

  &:hover {
    color: #ff6b6b;
    background-color: #222;
  }
`;

const HomePageLink = styled.div`
  padding: 7px 15px 7px 8px;
  color: #222;
  font-weight: bold;
  font-size: 1.65em;
  transition: 0.5s;
  border-radius: 0px 100px 100px 0px;
  border-left: 5px solid #222;

  &:hover {
    color: #ff6b6b;
    background-color: #222;
  }

  &:active {
    transform: translate(10px);
  }
`;

const AddPostPageLink = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 10px;
  color: #222;
  font-weight: bold;
  font-size: 1.65em;
  transition: 0.5s;
  border-radius: 30px;
  border: 4px solid #222;

  &:hover {
    background-color: #222;
    color: #ff6b6b;
  }

  & span {
    transition: 0.5s;
  }

  & div {
    transition: 0.5s;
  }

  &:hover span {
    transform: translateX(-38px);
  }

  &:hover div {
    transform: translateX(123px);
  }

  &:active {
    transform: rotate(15deg);
  }
`;

const BoxForIconAddPost = styled.div`
  display: inline-block;
  margin: 0px 5px 0px 0px;
  font-size: 1.3em;
`;

const ProfilePageLink = styled.div`
  padding: 7px 13px 4px;
  color: #222;
  font-weight: bold;
  font-size: 1.65em;
  transition: 0.8s;
  border-bottom: 5px solid #222;

  &:hover {
    color: #556270;
    background-color: #222;
    border-radius: 100px;
    border-bottom: 5px solid #333;
  }

  &:active {
    transform: scale(1.3);
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

const StyledLayout = {
  Wrapper,
  Header,
  Main,
  BoxForTitleAndHome,
  SiteTitle,
  HomePageLink,
  AddPostPageLink,
  BoxForIconAddPost,
  ProfilePageLink,
  LogOutBtn,
};
export default StyledLayout;
