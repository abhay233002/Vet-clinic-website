import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



export default function Home() {
  return (
    <>
      <Navbar />
      <main className="p-6">
        <h1 className="text-4xl font-bold">Welcome to Happy Paws Vet Clinic 🐾</h1>
        <p className="mt-4 text-lg">Caring for your furry friends with love and expertise.</p>
      </main>
      <Footer />
    </>
  );
}
