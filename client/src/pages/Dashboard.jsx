import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "null");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
  };

  return (
    <main className="dashboard-page">
      <section className="dashboard-card">
        <div className="brand-mark">C</div>
        <p className="eyebrow">YOUR PERSONAL SPACE</p>
        <h1>Welcome{user?.name ? `, ${user.name}` : ""}<span>!</span></h1>
        <p className="subtitle">
          You have successfully signed in to your account.
        </p>
        {user?.email && <p className="user-email">{user.email}</p>}
        <button onClick={logout}>Sign out ↗</button>
      </section>
    </main>
  );
}

