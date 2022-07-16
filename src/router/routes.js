import AddPostPage from '../pages/AddPostPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';
import PersonalAreaPage from '../pages/PersonalAreaPage';

export const privateRoutes = [
  { path: '', element: <HomePage /> },
  { path: 'addPost', element: <AddPostPage /> },
  { path: 'profile', element: <PersonalAreaPage /> },
];

export const publicRoutes = [{ path: 'login', element: <LoginPage /> }];
