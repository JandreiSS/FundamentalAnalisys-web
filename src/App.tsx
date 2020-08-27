import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from './utils/usePersistedState';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import Header from './components/Header';

import Dashboard from './pages/Dashboard';
// import SignIn from './pages/SignIn';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <ThemeProvider theme={theme}>
        <Header toggleTheme={toggleTheme}/>
        {/* <SignIn /> */}
        <Dashboard />
        <GlobalStyle />
      </ThemeProvider>
    </DndProvider>
  );
};

export default App;
