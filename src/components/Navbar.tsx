import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">🐾 Happy Paws</h1>
        <div className="space-x-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/services" className="hover:underline">Services</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <Link href="/appointment" className="hover:underline">Book Appointment</Link>
          <Link href="/login" className="text-blue-600 hover:underline bg-white px-3 py-1 rounded">
            Doctor Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
