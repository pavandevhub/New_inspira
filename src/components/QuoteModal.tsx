import { useState, FormEvent } from 'react';
import { X, Loader } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface QuoteFormData {
  name: string;
  phone: string;
}

export function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    phone: '',
  });
  const [errors, setErrors] = useState<Partial<QuoteFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');

  if (!isOpen) return null;

  const validateForm = (): boolean => {
    const newErrors: Partial<QuoteFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Invalid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('inquiries')
        .insert([
          {
            name: formData.name,
            email: 'quote-request@inspirainteriors.net',
            phone: formData.phone,
            project_type: 'Online Consultation',
            message: 'Customer requested online consultation via quick quote form',
            created_at: new Date().toISOString(),
          },
        ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({ name: '', phone: '' });

      setTimeout(() => {
        onClose();
        setSubmitStatus('idle');
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof QuoteFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-lg shadow-2xl max-w-md w-full mx-4 animate-slide-down"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-[#FF6633] transition-colors duration-300"
          aria-label="Close modal"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="p-8">
          <h2 className="text-3xl font-bold text-[#333333] mb-2">Get Free Quote</h2>
          <p className="text-gray-600 mb-6">Book your online consultation today</p>

          {submitStatus === 'success' ? (
            <div className="text-center py-8">
              <div className="mb-4 flex justify-center">
                <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#333333] mb-2">Request Submitted!</h3>
              <p className="text-gray-600">We'll contact you shortly for your consultation.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="quote-name" className="block text-sm font-semibold text-[#333333] mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="quote-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full border-2 px-4 py-3 rounded-lg transition-colors duration-300 focus:outline-none ${
                    errors.name
                      ? 'border-red-500 focus:border-red-600'
                      : 'border-gray-300 focus:border-[#FF6633]'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="quote-phone" className="block text-sm font-semibold text-[#333333] mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="quote-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full border-2 px-4 py-3 rounded-lg transition-colors duration-300 focus:outline-none ${
                    errors.phone
                      ? 'border-red-500 focus:border-red-600'
                      : 'border-gray-300 focus:border-[#FF6633]'
                  }`}
                  placeholder="9876543210"
                />
                {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#FF6633] text-white px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-[#FF6633]/90 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader className="h-5 w-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  'BOOK ONLINE CONSULTATION'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
