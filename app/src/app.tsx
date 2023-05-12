import './app.scss';
import Course from './course/course';
import { ThemeProvider } from './themeProvider';
import { DarkMode } from './darkMode';
import { Footer } from './footer';

const App = () => (
  <div className="app">
    <ThemeProvider>
      <DarkMode />

      <Course />

      <Footer />
    </ThemeProvider>
  </div>
);

export default App;
