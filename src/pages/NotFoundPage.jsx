import React from 'react';
import { Link } from 'react-router-dom';
import Styled from './NotFoundPage.styles';

const NotFoundPage = () => {
  return (
    <Styled.NotFound>
      This page is not found. Please link <Link to="/">home</Link>
    </Styled.NotFound>
  );
}

export default NotFoundPage;
