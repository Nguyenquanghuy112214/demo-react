import '../node_modules/swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import DefaultLayout from './components/layout/DefauLayout';

import publicRoutes from './config/Index';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <DefaultLayout>
                    <Page />
                  </DefaultLayout>
                }
              />
            )

          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
