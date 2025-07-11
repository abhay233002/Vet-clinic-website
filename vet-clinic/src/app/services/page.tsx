import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


export default function Services() {
  return (
    <>
      <Navbar />
      <main className="p-6">
        <h1 className="text-3xl font-semibold">Our Services</h1>
        <ul className="list-disc ml-6 mt-4 space-y-2">
          <li>🐾 General Health Checkups</li>
          <li>💉 Vaccinations</li>
          <li>🦷 Dental Care</li>
          <li>🩺 Diagnostic Tests & Lab</li>
          <li>✂️ Grooming & Bathing</li>
          <li>🚨 Emergency Care</li>
          <li>🏥 Pet Surgery & Recovery</li>
        </ul>
      </main>
      <Footer />
    </>
  );
}
