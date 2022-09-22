import React, { lazy, Suspense } from "react";
import Loading from "./components/Loader";
const Users = lazy(() => import("./components/User"));
function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <Users />
      </Suspense>
    </div>
  );
}

export default App;
