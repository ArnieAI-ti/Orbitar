import React, { Fragment, Suspense, lazy, useState, useEffect } from "react";
import { ThemeProvider, StyledEngineProvider, CssBaseline, Fab } from "@mui/material";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SmartToyIcon from '@mui/icons-material/SmartToy';
import theme from "./theme";
import GlobalStyles from "./GlobalStyles";
import Pace from "./shared/components/Pace";
import AIChatInterface from "./shared/components/AIChatInterface";

const LoggedInComponent = lazy(() => import("./logged_in/components/Main"));

const LoggedOutComponent = lazy(() => import("./sesion_cerrada/componentes/Main"));

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isChatMinimized, setIsChatMinimized] = useState(false);

  const handleToggleChat = () => {
    setIsChatOpen(!isChatOpen);
    // If closing the chat, ensure it's not minimized
    if (isChatOpen) {
      setIsChatMinimized(false);
    }
  };

  const handleMinimizeStatusChange = (minimizedStatus) => {
    setIsChatMinimized(minimizedStatus);
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on every page load
  }, []);

  // New useEffect for Ctrl+R to scroll to top
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Check for Ctrl + R
      if (event.ctrlKey && event.key === 'r') {
        event.preventDefault(); // Prevent browser refresh
        window.scrollTo(0, 0); // Scroll to top instantly
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []); // Empty dependency array means this runs once on mount and cleans up on unmount

  return (
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyles />
          <Pace color={theme.palette.primary.light} />
          <Suspense fallback={<Fragment />}>
            <Switch>
              <Route path="/c">
                <LoggedInComponent />
              </Route>
              <Route>
                <LoggedOutComponent />
              </Route>
            </Switch>
          </Suspense>
          {isChatOpen && (
            <AIChatInterface
              onClose={handleToggleChat}
              onMinimizeStatusChange={handleMinimizeStatusChange}
            />
          )}
          {!isChatOpen && !isChatMinimized && (
            <Fab
              color="primary"
              aria-label="chat"
              onClick={handleToggleChat}
              sx={{
                position: 'fixed',
                bottom: 16,
                right: 16,
              }}
            >
              <SmartToyIcon />
            </Fab>
          )}
        </ThemeProvider>
      </StyledEngineProvider>
    </BrowserRouter>
  );
}

export default App;