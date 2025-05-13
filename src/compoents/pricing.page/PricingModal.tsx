'use client';

import { useState, useRef, useEffect } from "react";
import emailjs from '@emailjs/browser';

// Define the shape of the component's props
interface Props {
  visible: boolean;
  onClose: () => void;
  selectedPackage: string | null;
  addOns: string[];
}

// Define the shape of the form data
interface FormDataState {
  user_name: string;
  user_email: string;
  user_phone: string;
  company_name: string;
  inquiry_type: string; // New field to match contact form
  selected_package: string;
  message: string;
}

export default function PricingModal({ visible, onClose, selectedPackage, addOns }: Props) {
  // Explicitly type the useRef hook for the form element
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState<FormDataState>({
    user_name: '',
    user_email: '',
    user_phone: '',
    company_name: '',
    inquiry_type: 'quote', // Set a default value to identify the form type
    selected_package: selectedPackage || '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (visible) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
    
    // Update selected package when props change
    setFormData(prevData => ({ ...prevData, selected_package: selectedPackage || '' }));
    setSubmitStatus('idle'); // Reset status when modal opens
  }, [visible, selectedPackage]);

  // Type the event to handle changes from different form elements
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  // Type the form submission event
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
      // The "clever workaround" is passing the selected package and add-ons
      // as hidden form fields to a single EmailJS template.
      // This allows you to use one template for both contact and quote requests.
      const form = formRef.current;
      if (form) {
        // Create hidden fields for data not directly in the form
        const inquiryTypeInput = document.createElement('input');
        inquiryTypeInput.type = 'hidden';
        inquiryTypeInput.name = 'inquiry_type';
        inquiryTypeInput.value = 'Pricing Inquiry';
        form.appendChild(inquiryTypeInput);

        const selectedPackageInput = document.createElement('input');
        selectedPackageInput.type = 'hidden';
        selectedPackageInput.name = 'selected_package';
        selectedPackageInput.value = selectedPackage || 'N/A';
        form.appendChild(selectedPackageInput);

        const addOnsInput = document.createElement('input');
        addOnsInput.type = 'hidden';
        addOnsInput.name = 'selected_addons';
        addOnsInput.value = addOns.join(', ') || 'None';
        form.appendChild(addOnsInput);
      }
      
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSubmitStatus('success');
      setTimeout(() => {
        onClose();
      }, 3000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Get Started with {selectedPackage}</h2>
        <p className="text-gray-600 text-center mb-6">Fill out the form below to receive a personalized quote.</p>
        
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
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Selected Add-ons</label>
              <div className="flex flex-wrap gap-2 mt-2">
                {addOns.length > 0 ? (
                  addOns.map((addOn, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1.5 rounded-full">
                      {addOn}
                    </span>
                  ))
                ) : (
                  <span className="text-sm text-gray-500">No add-ons selected</span>
                )}
              </div>
            </div>
          </div>
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
            <label className="block text-sm font-medium text-gray-700">Additional Details (optional)</label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
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