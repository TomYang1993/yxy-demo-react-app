import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import "./App.css";
import Routes from "./Routes";
import { LinkContainer } from "react-router-bootstrap";
import { AppContext } from "./libs/userContext";
import { Auth } from "aws-amplify";
import { onError } from "./libs/onError"

function App() {

  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const history = useHistory();

  async function handleLogout() {
    await Auth.signOut();
    userHasAuthenticated(false);
    history.push('/login');
  }

  useEffect(() => {
    onLoad();
  }, []);



  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    }
    catch (e) {
      if (e !== 'No current user') {
        onError(e);
      }
    }

    setIsAuthenticating(false);
  }

  return (
    !isAuthenticating && <div className="App container">
      <Navbar collapseOnSelect>
        <Navbar.Brand>
          <Link to={process.env.PUBLIC_URL + '/'}>Fountain Pen Notes</Link>
        </Navbar.Brand>
        <Navbar.Toggle />

        <Navbar.Collapse className="justify-content-end">
          <Nav>
            {isAuthenticated
              ? <>
                <LinkContainer to="/settings">
                  <Nav.Link>Settings</Nav.Link>
                </LinkContainer>
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              </>
              : <>
                <LinkContainer to="/signup">
                  <Nav.Link>Signup</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/login">
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>
              </>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
        <Routes />
      </AppContext.Provider>

    </div>
  );
}

export default App;
