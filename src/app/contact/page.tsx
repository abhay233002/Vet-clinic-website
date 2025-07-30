import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="p-6">
        <h1 className="text-3xl font-semibold">Contact Us</h1>
        <p className="mt-4">📍 Location: 123 Pet Street, Canine City, 456789</p>
        <p>📞 Phone: +91 98765 43210</p>
        <p>📧 Email: happypaws@vetclinic.com</p>
        <p className="mt-4">⏰ Timings: Monday to Saturday – 9:00 AM to 6:00 PM</p>
      </main>
      <Footer />
    </>
  );
}
