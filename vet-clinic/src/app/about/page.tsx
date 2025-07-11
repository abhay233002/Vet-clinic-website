import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


export default function About() {
  return (
    <>
      <Navbar />
      <main className="p-6">
        <h1 className="text-3xl font-semibold">About Us</h1>
        <p className="mt-4">
          At Happy Paws Vet Clinic, we’re passionate about keeping pets healthy and happy.
          With over 10 years of experience, our certified veterinarians provide top-notch care, surgeries, vaccinations, and wellness checkups.
        </p>
        <p className="mt-2">
          🐶 We treat dogs, cats, rabbits, and exotic pets with love, patience, and respect.
        </p>
      </main>
      <Footer />
    </>
  );
}
