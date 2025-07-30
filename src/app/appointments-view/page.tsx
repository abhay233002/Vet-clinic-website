'use client';
import { useEffect, useState } from 'react';

export default function AppointmentsViewPage() {
  const [appointments, setAppointments] = useState<{ name: string; date: string }[]>([]);

  useEffect(() => {
    const storedAppointments = JSON.parse(localStorage.getItem('appointments') || '[]');
    setAppointments(storedAppointments);
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Appointments</h1>
      {appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        <ul className="space-y-2">
          {appointments.map((appt, index) => (
            <li key={index} className="p-4 border rounded shadow">
              <p><strong>Name:</strong> {appt.name}</p>
              <p><strong>Date:</strong> {appt.date}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
