import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom"

export default function Navbar() {
  return (
    <div className="navbar">
      <BrowserRouter>
        <Link to="/">Home</Link>|<Link to="/notifications">Notification</Link>|
        <Link to="/jobportal">JobPortal</Link>|<Link to="/anything">Error</Link>
        <Routes>
          |<Route path="/" element={<Landing></Landing>}></Route>
          <Route
            path="/notifications"
            element={<Notification></Notification>}
          ></Route>
          <Route path="/jobportal" element={<JobPortal></JobPortal>}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
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
    <div className="landing">
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
