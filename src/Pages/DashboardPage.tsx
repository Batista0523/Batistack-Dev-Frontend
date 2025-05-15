import Dashboard from "../components/Dashboard/Dashboard";
import { Helmet } from "react-helmet-async";

function DashboardPage() {
  return (
    <>
      <Helmet>
        <title>Admin Dashboard | Batistack Development</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta
          name="description"
          content="Secure admin dashboard for managing Batistack leads, analytics, and content."
        />
        <meta name="author" content="Batistack Development" />
      </Helmet>

      <div>
        <Dashboard />
      </div>
    </>
  );
}

export default DashboardPage;
