import { useState, FormEvent } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { ContactFormData } from '../types';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface ContactFormProps {
  onSuccess: () => void;
}

export function ContactForm({ onSuccess }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Invalid phone number';
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
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
            email: formData.email,
            phone: formData.phone,
            project_type: formData.projectType,
            message: formData.message,
            created_at: new Date().toISOString(),
          },
        ]);

      if (error) throw error;

      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: '',
      });
      setSubmitStatus('idle');
      onSuccess();
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div
          ref={ref}
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 className="mb-4 text-4xl font-bold text-[#333333] md:text-5xl">
            Let's Create Your Dream Space
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Get in touch with us today and let's discuss your interior design project
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className={`space-y-6 transition-all duration-700 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-semibold text-[#333333]">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full border-2 px-4 py-3 transition-colors duration-300 focus:outline-none ${
                  errors.name
                    ? 'border-red-500 focus:border-red-600'
                    : 'border-gray-300 focus:border-[#FF6633]'
                }`}
                placeholder="Enter your name"
              />
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[#333333]">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full border-2 px-4 py-3 transition-colors duration-300 focus:outline-none ${
                  errors.email
                    ? 'border-red-500 focus:border-red-600'
                    : 'border-gray-300 focus:border-[#FF6633]'
                }`}
                placeholder="your.email@example.com"
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-[#333333]">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full border-2 px-4 py-3 transition-colors duration-300 focus:outline-none ${
                  errors.phone
                    ? 'border-red-500 focus:border-red-600'
                    : 'border-gray-300 focus:border-[#FF6633]'
                }`}
                placeholder="9876543210"
              />
              {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="projectType" className="mb-2 block text-sm font-semibold text-[#333333]">
                Project Type *
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className={`w-full border-2 px-4 py-3 transition-colors duration-300 focus:outline-none ${
                  errors.projectType
                    ? 'border-red-500 focus:border-red-600'
                    : 'border-gray-300 focus:border-[#FF6633]'
                }`}
              >
                <option value="">Select project type</option>
                <option value="2 BHK">2 BHK Interior</option>
                <option value="3 BHK">3 BHK Interior</option>
                <option value="Commercial">Commercial Space</option>
                <option value="Renovation">Renovation</option>
                <option value="Other">Other</option>
              </select>
              {errors.projectType && <p className="mt-1 text-sm text-red-500">{errors.projectType}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-semibold text-[#333333]">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className={`w-full border-2 px-4 py-3 transition-colors duration-300 focus:outline-none ${
                errors.message
                  ? 'border-red-500 focus:border-red-600'
                  : 'border-gray-300 focus:border-[#FF6633]'
              }`}
              placeholder="Tell us about your project..."
            />
            {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex w-full items-center justify-center gap-2 bg-[#FF6633] px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-[#FF6633]/90 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                Send Message
              </>
            )}
          </button>

          {submitStatus === 'success' && (
            <div className="flex items-center gap-2 rounded bg-green-50 border-2 border-green-500 p-4 text-green-700 animate-fade-in">
              <CheckCircle className="h-5 w-5" />
              <p>Thank you! We'll be in touch soon.</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="flex items-center gap-2 rounded bg-red-50 border-2 border-red-500 p-4 text-red-700 animate-fade-in">
              <AlertCircle className="h-5 w-5" />
              <p>Something went wrong. Please try again or contact us directly.</p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
