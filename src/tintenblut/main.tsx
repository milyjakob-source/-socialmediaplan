import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { aktiviereSocialProfil } from '../data/social';
import '../styles.css';
import './tintenblut.css';
import { TintenblutApp } from './App';
import { TINTENBLUT_PROFIL } from './profil';

// Before the first render: every social page reads pillars, channels and wording from the active profile.
aktiviereSocialProfil(TINTENBLUT_PROFIL);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TintenblutApp />
  </StrictMode>,
);
