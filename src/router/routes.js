import AddPostPage from '../pages/AddPostPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';
import PersonalAreaPage from '../pages/PersonalAreaPage';

export const routes = [
  { path: '', element: <HomePage /> },
  { path: 'addPost', element: <AddPostPage /> },
  { path: 'login', element: <LoginPage /> },
  { path: 'profile', element: <PersonalAreaPage /> },
  { path: '*', element: <NotFoundPage /> },
];
