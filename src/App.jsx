import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/header/Navbar";
import { Index } from "./components/home/Index";
import { BookingDetails } from "./ui/pages/BookSession/BookingDetails";
import { BookSessions } from "./ui/pages/BookSession/BookSessions";
import { Numerology } from "./ui/pages/BookSession/Numerology";
import { Payment } from "./ui/pages/BookSession/Payment";
import { TarrotReading } from "./ui/pages/BookSession/TarrotReading";
import { Contact } from "./ui/pages/Contact/Contact";
import { Service } from "./ui/pages/Service/Service";
import { WhatIDo } from "./ui/pages/WhatIDo/WhatIDo";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Index />} />
          <Route path="/WhatIDo" element={<WhatIDo />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/TarrotReading" element={<TarrotReading />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/BookingDetails" element={<BookingDetails />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/BookSessions" element={<BookSessions />} />
          <Route path="/Numerology" element={<Numerology />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
