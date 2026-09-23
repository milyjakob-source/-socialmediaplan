import { useCallback, useEffect, useState, type FormEvent } from 'react';
import { HashRouter, NavLink, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { OhneLoginProvider } from '../auth/AuthContext';
import { ToastProvider } from '../components/Toasts';
import { Loading } from '../components/ui';
import { CrmProvider, type CrmBackend } from '../data/CrmContext';
import { ZugangError } from '../data/sheets/scriptSheets';
import { errorMessage } from '../lib/errors';
import { useIch } from '../lib/useIch';
import { SocialAufgabenPage } from '../social/AufgabenPage';
import { SocialInhaltDetailPage } from '../social/InhaltDetailPage';
import { SocialInhaltePage } from '../social/InhaltePage';
import { SocialMessungPage } from '../social/MessungPage';
import { SocialPlanPage } from '../social/PlanPage';
import { SocialStrategiePage } from '../social/StrategiePage';
import { SocialUebersichtPage } from '../social/UebersichtPage';
import { erstelleBackend, gespeicherterCode, merkeCode } from './backend';
import { SKRIPT_URL, istVorschau } from './config';
import { TINTENBLUT_TEAM } from './profil';

const NUTZER = { email: 'social@tintenblut.local', name: 'Tintenblut' };

const NAVIGATION = [
  { label: 'Übersicht', pfad: '/social', end: true },
  { label: 'Redaktionsplan', pfad: '/social/plan' },
  { label: 'Inhalte', pfad: '/social/inhalte' },
  { label: 'Aufgaben', pfad: '/social/aufgaben' },
  { label: 'Messung', pfad: '/social/messung' },
  { label: 'Strategie', pfad: '/social/strategie' },
];

const navClass = ({ isActive }: { isActive: boolean }) => `nav-item${isActive ? ' is-active' : ''}`;

function IchWahl() {
  const [ich, setIch] = useIch(TINTENBLUT_TEAM);
  return (
    <label className="tb-ich">
      <span className="field-label">Ich bin</span>
      <select value={ich ?? ''} onChange={(e) => setIch(e.target.value)}>
        <option value="">Bitte wählen</option>
        {TINTENBLUT_TEAM.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
    </label>
  );
}

function Rahmen() {
  return (
    <div className="app">
      <aside className="sidebar tb-sidebar">
        <div className="brand">
          <NavLink to="/social" end className="lockup tb-lockup" aria-label="Tintenblut Social – Übersicht">
            <img src="./logo.webp" alt="" />
            <span>
              <span className="wordmark">Tintenblut</span>
              <span className="tb-sub">Social Media</span>
            </span>
          </NavLink>
        </div>
        <nav className="nav" aria-label="Social Media">
          {NAVIGATION.map((n) => (
            <NavLink key={n.pfad} to={n.pfad} end={n.end} className={navClass}>
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="sidebar-footer">
          <IchWahl />
          <p className="tb-fuss">Tintenblut Tattoo · Stuttgart-Süd</p>
        </div>
      </aside>
      <main className="main">
        {istVorschau && (
          <div className="demo-banner">
            <strong>Vorschau</strong> Der Plan ist geladen, aber noch nicht mit dem Google Sheet verbunden. Änderungen gehen beim Neuladen verloren.
          </div>
        )}
        <Outlet />
      </main>
    </div>
  );
}

function CodeAbfrage({ fehler, onCode }: { fehler: string; onCode(code: string): void }) {
  const [code, setCode] = useState('');
  const senden = (e: FormEvent) => {
    e.preventDefault();
    if (code.trim()) onCode(code.trim());
  };
  return (
    <div className="tb-zugang">
      <form className="card tb-zugang-karte" onSubmit={senden}>
        <img src="./logo.webp" alt="Tintenblut Tattoo" className="tb-zugang-logo" />
        <h1>Social-Media-Plan</h1>
        <p className="muted">Bitte den Zugangscode eingeben. Er wird in diesem Browser gespeichert.</p>
        <label className="field">
          <span className="field-label">Zugangscode</span>
          <input id="zugangscode" type="password" value={code} onChange={(e) => setCode(e.target.value)} autoFocus autoComplete="current-password" />
        </label>
        {fehler && <p className="form-error">{fehler}</p>}
        <button type="submit" className="button primary large">
          Öffnen
        </button>
      </form>
    </div>
  );
}

type Start = { art: 'laedt' } | { art: 'code'; fehler: string } | { art: 'fehler'; fehler: string } | { art: 'bereit'; backend: CrmBackend };

export function TintenblutApp() {
  const [start, setStart] = useState<Start>({ art: 'laedt' });
  const nutzer = useCallback(() => NUTZER.email, []);

  const verbinde = useCallback(() => {
    setStart({ art: 'laedt' });
    erstelleBackend(SKRIPT_URL, nutzer).then(
      (backend) => setStart({ art: 'bereit', backend }),
      (err: unknown) =>
        setStart(
          err instanceof ZugangError
            ? { art: 'code', fehler: gespeicherterCode() ? errorMessage(err) : '' }
            : { art: 'fehler', fehler: errorMessage(err) },
        ),
    );
  }, [nutzer]);

  useEffect(verbinde, [verbinde]);

  const backendFabrik = useCallback(() => (start.art === 'bereit' ? Promise.resolve(start.backend) : new Promise<never>(() => {})), [start]);

  if (start.art === 'laedt') return <Loading label="Plan wird geladen …" />;
  if (start.art === 'code')
    return (
      <CodeAbfrage
        fehler={start.fehler}
        onCode={(code) => {
          merkeCode(code);
          verbinde();
        }}
      />
    );
  if (start.art === 'fehler')
    return (
      <div className="tb-zugang">
        <div className="card tb-zugang-karte">
          <h1>Keine Verbindung</h1>
          <p>{start.fehler}</p>
          <button type="button" className="button primary" onClick={verbinde}>
            Erneut versuchen
          </button>
        </div>
      </div>
    );

  return (
    <OhneLoginProvider user={NUTZER}>
      <ToastProvider>
        <CrmProvider backend={backendFabrik}>
          <HashRouter>
            <Routes>
              <Route element={<Rahmen />}>
                <Route path="social">
                  <Route index element={<SocialUebersichtPage />} />
                  <Route path="plan" element={<SocialPlanPage />} />
                  <Route path="inhalte" element={<SocialInhaltePage />} />
                  <Route path="inhalte/:id" element={<SocialInhaltDetailPage />} />
                  <Route path="aufgaben" element={<SocialAufgabenPage />} />
                  <Route path="messung" element={<SocialMessungPage />} />
                  <Route path="strategie" element={<SocialStrategiePage />} />
                </Route>
                <Route path="*" element={<Navigate to="/social" replace />} />
              </Route>
            </Routes>
          </HashRouter>
        </CrmProvider>
      </ToastProvider>
    </OhneLoginProvider>
  );
}
