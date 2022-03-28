import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav/Nav";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
const HOSTED_URL = process.env.REACT_APP_HOSTED_URL;

const client = new ApolloClient({
  uri: HOSTED_URL,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route exact strict path="/" component={LandingPage} />
            <Route
              exact
              strict
              path="/products/:slug"
              component={CategoryPage}
            />
            <Route exact strict path="/product/:slug" component={ProductPage} />
          </Switch>
        </BrowserRouter>
      </ApolloProvider>
    </div>
  );
}

export default App;
