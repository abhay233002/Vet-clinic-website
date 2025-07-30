'use client'

import React, { useState } from 'react';

export default function AppointmentPage() {
  const [formData, setFormData] = useState({ name: '', date: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  // Get existing appointments or initialize with []
  const existingAppointments = JSON.parse(localStorage.getItem('appointments') || '[]');

  // Add the new appointment
  const updatedAppointments = [...existingAppointments, formData];

  // Save to localStorage
  localStorage.setItem('appointments', JSON.stringify(updatedAppointments));

  console.log('Appointment booked:', formData);
  alert('Appointment booked successfully!');
  setFormData({ name: '', date: '' }); // Reset form
};


  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Book an Appointment</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="p-2 border rounded w-full"
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="p-2 border rounded w-full"
          required
        />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">
          Book Appointment
        </button>
      </form>
    </div>
  );
}
