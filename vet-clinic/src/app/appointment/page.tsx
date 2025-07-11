import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


export default function Appointment() {
  return (
    <>
      <Navbar />
      <main className="p-6 max-w-xl mx-auto">
        <h1 className="text-3xl font-semibold">Book an Appointment</h1>
        <form className="mt-6 space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
          <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
          <input type="tel" placeholder="Phone Number" className="w-full p-2 border rounded" />
          <input type="date" className="w-full p-2 border rounded" />
          <textarea placeholder="Pet Details (Breed, Age, Issue)" className="w-full p-2 border rounded"></textarea>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
        </form>
      </main>
      <Footer />
    </>
  );
}
