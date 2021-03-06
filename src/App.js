import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav/Nav";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import SearchPage from "./pages/SearchPage/SearchPage";

const client = new ApolloClient({
  uri: "https://planazon-server.herokuapp.com/",
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
            <Route exact strict path="/search" component={SearchPage} />
            <Route exact strict path="/product/:slug" component={ProductPage} />
          </Switch>
        </BrowserRouter>
      </ApolloProvider>
    </div>
  );
}

export default App;
