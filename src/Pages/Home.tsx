import { useTrafficTracker } from "../hook/useTrafficTracker";
import TrafficEventsTable from "../components/Dashboard/TrafficEventsTable";
function Home() {
    useTrafficTracker("page_view", "/");
  return (
    <div>
      <h1>Batistack</h1>
      <TrafficEventsTable/>
    </div>
  )
}

export default Home
