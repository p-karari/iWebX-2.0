'use client';

import { useState, useRef, useEffect } from "react";
import emailjs from '@emailjs/browser';

// Define the shape of the component's props for type safety.
interface CustomQuoteModalProps {
  visible: boolean;
  onClose: () => void;
}

// Define the shape of the form data for state management.
interface FormDataState {
  user_name: string;
  user_email: string;
  user_phone: string;
  company_name: string;
  inquiry_type: string;
  message: string;
}

export default function CustomQuoteModal({ visible, onClose }: CustomQuoteModalProps) {
  // Explicitly type the useRef hook for the form element.
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState<FormDataState>({
    user_name: '',
    user_email: '',
    user_phone: '',
    company_name: '',
    inquiry_type: 'quote',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Use useEffect to reset the form state whenever the modal becomes visible.
  useEffect(() => {
    if (visible) {
      setFormData({
        user_name: '',
        user_email: '',
        user_phone: '',
        company_name: '',
        inquiry_type: 'quote',
        message: ''
      });
      setSubmitStatus('idle');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [visible]);

  // Type the event to handle changes from different form elements.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  // Type the form submission event and add EmailJS functionality.
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    if (!formRef.current) {
      console.error("Form reference is null.");
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      // Use the provided EmailJS environment variables to send the form.
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSubmitStatus('success');
      
      setTimeout(() => {
        setSubmitStatus('idle');
        onClose(); // Close the modal after a successful submission
      }, 3000);

    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000); // Reset status
    } finally {
      setIsSubmitting(false);
    }
  };

  // If the modal is not visible, return null to hide it.
  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl relative p-8">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Request a <span className="text-gold-dark">Custom Quote</span>
          </h2>
          <p className="text-gray-600">
            Got a bold vision? We&apos;ll make it a reality.
          </p>
        </div>
        
        {submitStatus === 'success' && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-4 text-center">
            <p>Your request has been sent successfully! 🎉</p>
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4 text-center">
            <p>Failed to send your request. Please try again.</p>
          </div>
        )}

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="user_name"
                required
                value={formData.user_name}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="user_email"
                required
                value={formData.user_email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-colors"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                name="user_phone"
                required
                value={formData.user_phone}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Company Name</label>
              <input
                type="text"
                name="company_name"
                value={formData.company_name}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-colors"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Project Details
            </label>
            <textarea
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your dream project, and we'll show you a path to get there."
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-colors"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed text-gray-600"
                : "bg-gradient-to-r from-gold to-gold-dark hover:from-gold-dark hover:to-gold text-white"
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Send Request'}
          </button>
        </form>
      </div>
    </div>
  );
}
