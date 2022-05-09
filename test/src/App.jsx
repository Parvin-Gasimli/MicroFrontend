import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import SafeComponent from "./SafeComponent";

// const Header = React.lazy(() => import("home/Header"))
import Footer from "home/Footer";
import Header from "home/Header";

const App = () => {
  // const [showHeader, setShowHeader] = useState(false);


  return (
    <div>
      <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <SafeComponent>
      <Header />
      </SafeComponent>
   
      
      
        <div className="my-10">
          App Component
        </div>
        <Footer />
      </div>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById("app"));
