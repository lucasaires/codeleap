import { ThemeProvider } from "styled-components";
import { Providers } from "./hooks";
import { MainScreen } from "./pages/Main";
import { SignUp } from "./pages/SignUp";
import { GlobalStyle } from "./styles/global";
import { theme } from "./styles/themes/theme";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Providers>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<SignUp />} />
                <Route path="/main" element={<MainScreen />} />
              </Routes>
            </BrowserRouter>
          </Providers>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
