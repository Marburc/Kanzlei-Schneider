import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import DesignTest from './DesignTest.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DesignTest />
  </StrictMode>,
);
