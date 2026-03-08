import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Home from "@/pages/Home";
import WhoItsFor from "@/pages/WhoItsFor";
import Events from "@/pages/Events";
import Community from "@/pages/Community";
import Join from "@/pages/Join";
import Partner from "@/pages/Partner";
import About from "@/pages/About";
import { ScrollToTop } from "@/components/ScrollToTop";

function App() {
  return (
    <div className="App min-h-screen flex flex-col">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/who-its-for" element={<WhoItsFor />} />
            <Route path="/events" element={<Events />} />
            <Route path="/community" element={<Community />} />
            <Route path="/join" element={<Join />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
      <Toaster position="bottom-right" />
    </div>
  );
}

export default App;
