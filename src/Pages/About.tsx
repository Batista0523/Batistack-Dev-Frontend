import { useTrafficTracker } from "../hook/useTrafficTracker";

function About() {
      useTrafficTracker("page_view", "/about");
  return (
    <div>
      <h2>about</h2>
    </div>
  )
}

export default About
