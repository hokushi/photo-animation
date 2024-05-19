// src/App.tsx
import React from 'react';
import { Box } from '@mui/material';
import { useRoutes } from 'react-router-dom';
import routes from './pages/routes';
import './App.css';

const App: React.FC = () => {
  const element = useRoutes(routes);

  return <Box sx={{ backgroundColor: 'black' }}>{element}</Box>;
};

export default App;
