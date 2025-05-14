import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from 'emailjs-com';
import { useState } from "react";

export const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = './David_Jordan_-_Software_Developer.pdf';
    link.download = 'David_Jordan_Resume.pdf'; // Replace with the desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const SERVICE_ID = 'service_51eoy8v';
  const TEMPLATE_ID = 'template_7arzgcz';
  const PUBLIC_KEY = 'BVykj_AWbxwv1pBLr';

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY).then((result) => {
      alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        message: ''
      })
    }).catch(() => alert('Failed to send message. Please try again.'));
  };

  return (
    
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">

      <RevealOnScroll>
        <div className="px-4 w-100 md:w-xl">
          <h2 className="text-6xl p-3 text-center font-bold mb-8 bg-gradient-to-r from-white to-red-600 bg-clip-text text-transparent"> Contact Me </h2>
          <form action="submit" className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input type="text" id="name" name="name" required 
              value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full border border-red-500 rounded px-4 py-3 text-white transition focus:outline-none focus:bg-red-700 focus:border-white
              " placeholder="Name..."/>
            </div>
            <div className="relative">
              <input type="email" id="email" name="email" value={formData.email} 
              required onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full border border-red-500 rounded px-4 py-3 text-white transition focus:outline-none focus:bg-red-700 focus:border-white
              " placeholder="example@gmail.com"/>
            </div>
            <div className="relative">
              <textarea id="message" name="message" rows={5} value={formData.message} 
              required onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full border border-red-500 rounded px-4 py-3 text-white transition focus:outline-none focus:bg-red-700 focus:border-white
              " placeholder="Your message..."/>
            </div>
            <button type="submit" className="cursor-pointer w-full bg-red-500 text-white py-3 px-6 rounded font-semibold font-medium transition relative overflow-hidden
            hover:-translate-y-0.5">Send Message</button>
            <button id="downloadBtn" value="download" className="cursor-pointer w-full bg-red-500 text-white py-3 px-6 rounded font-semibold font-medium transition relative overflow-hidden
            hover:-translate-y-0.5" onClick={downloadResume}>Download My Resume</button>
          </form>
        </div>
      </RevealOnScroll>

    </section>

  )
}