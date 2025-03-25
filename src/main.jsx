import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Categories } from "./components/Categories";
import { ProductList } from "./components/ProductList";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <ProductList />
      <Footer />
    </div>
  );
}
