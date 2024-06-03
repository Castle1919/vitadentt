import { Switch, Route, useLocation, useHistory } from 'react-router-dom'
import { useTranslation, } from "react-i18next";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { Header } from "./components/header"
import { Main } from "./components/main"
import Service from "./components/service"
import AboutUs from "./components/aboutUs"
import FAQ from './components/faq';
import ScrollToTop from './ScrollToTop';
import NotFound from './components/notFound';


function App() {

  return (
    <div>
      <Header />
      <ScrollToTop/>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/aboutUs" component={AboutUs} />
        <Route exact path="/faq" component={FAQ} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}
export default App;
