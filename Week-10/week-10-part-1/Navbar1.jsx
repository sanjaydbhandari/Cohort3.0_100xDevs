import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";

export default function Navbar1() {
  const routes = [
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/notification",
      element: <Notification />,
    },
    {
      path: "/jobportal",
      element: <JobPortal />,
    },
    {
      path: "/*",
      element: <ErrorPage />,
    },
  ];

  return (
    <div className="navbar">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout></Layout>}>
            {routes.map((route) => (
              <Route path={route.path} element={route.element} />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Layout() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

function Header() {
  return (
    <div className="header">
      <Link to="/">Home</Link>|<Link to="/notification">Notification</Link>|
      <Link to="/jobportal">JobPortal</Link>|
      <Link to="/anyotherroutes">Error</Link>
    </div>
  );
}
function Footer() {
  return <div className="footer">Footer | Contact Us</div>;
}

function Landing() {
  return <div className="landing">this is a landing page</div>;
}

function ErrorPage() {
  //useNavigate is used inside routes component and return a function that takes a route/path
  const navigate = useNavigate();

  function redirect() {
    navigate("/");
  }

  return (
    <div className="errorPage">
      Something got wrong
      <button onClick={redirect}>Back to Home</button>
    </div>
  );
}

function Notification() {
  return <div className="landing">this is a Notification page</div>;
}

function JobPortal() {
  return <div className="landing">this is a jobportal page</div>;
}
