import React from 'react';
import { createHashRouter } from 'react-router-dom';
import Nav from './navigation';
import Home from './pages/home/page';
import About from './pages/about/page';
import Projects from './pages/projects/page';
import Reading from './pages/books/page';
import Blog from './pages/blog/page';
import BlogPost from './pages/blog/blog-post';
import { EBlogPost } from './pages/blog/types';

const router = createHashRouter([
  {
    path: '/',
    element: <Nav />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'reading',
        element: <Reading />,
      },
      {
        path: 'blog',
        element: <Blog />,
        children: [
          {
            path: 'quitting',
            element: <BlogPost post={EBlogPost.PREVENTING_QUITING} />,
          },
          {
            path: 'incentives',
            element: <BlogPost post={EBlogPost.INCENTIVE_PROBLEM} />,
          },
        ],
      },
    ],
  },
]);

export default router;
