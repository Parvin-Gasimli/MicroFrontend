import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom";
import "./index.scss";

const Header = React.lazy(() => import("home/Header"))
import Footer from "home/Footer";

const App = () => {
  const [showHeader, setShowHeader] = useState(false);


  return (
    <div>
      <div className="mt-10 text-3xl mx-auto max-w-6xl">
        {
          showHeader && <Suspense fallback={<div>Loading..</div>}>
            <Header />
          </Suspense>
        }
        <button className="text-3xl p-5 bg-black text-white" onClick={()=>setShowHeader(true)} > Show Header</button>
        <div className="my-10">
          App Component
        </div>
        <Footer />
      </div>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById("app"));
