import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ArticleCategory from './pages/content/article/ArticleCategory';
import ArticleCreate from './pages/content/article/ArticleCreate';
import ArticleDetail from './pages/content/article/ArticleDetail';
import ArticleEdit from './pages/content/article/ArticleEdit';
import ArticleList from './pages/content/article/ArticleList';
import Main from './pages/Main';


function App() {
  return (
    <>
    <Header />
    <PagesLayout>
    <Sidebar />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="articles" element={<ArticleList />} />
      <Route path="articles/:id" element={<ArticleDetail />} />
      <Route path="articles/categories" element={<ArticleCategory />} />
      <Route path="articles/new" element={<ArticleCreate />} />
      <Route path="articles/:id/edit" element={<ArticleEdit />} />
    </Routes>
    </PagesLayout>
    </>
  );
}

const PagesLayout = styled.div`
  display: flex;
`;

export default App;
