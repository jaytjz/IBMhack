import Header from "./components/Header";
import Footer from "./components/Footer";
import ImageUpload from "./components/ImageUpload";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <ImageUpload/>
      </main>
      <Footer />
    </div>
  );
}
