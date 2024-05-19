// src/pages/routes.tsx
import React from 'react';
import { RouteObject } from 'react-router-dom';

const Hokushi = React.lazy(() => import('./hokushi')); // 最初の環境構築用の画面
const FlexDesign = React.lazy(() => import('./designs/flexdesign')); // flexboxのデザインの画面

const routes: RouteObject[] = [
  {
    path: '/hokushi',
    element: <Hokushi />,
  },
  {
    path: '/designs/flexdesign',
    element: <FlexDesign />,
  },
];

export default routes;
