import { useState, FormEvent } from 'react';
import { Send } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface HeroFormProps {
  onSuccess: () => void;
}

interface FormData {
  name: string;
  phone: string;
  projectType: string;
}

export function HeroForm({ onSuccess }: HeroFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    projectType: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Invalid phone number';
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Select project type';
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

    try {
      const { error } = await supabase
        .from('inquiries')
        .insert([
          {
            name: formData.name,
            email: 'hero-form@inspirainteriors.net',
            phone: formData.phone,
            project_type: formData.projectType,
            message: `Quick inquiry from hero section - ${formData.projectType}`,
            created_at: new Date().toISOString(),
          },
        ]);

      if (error) throw error;

      setFormData({ name: '', phone: '', projectType: '' });
      onSuccess();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-6 w-full max-w-sm">
      <h3 className="text-2xl font-bold text-[#333333] mb-2">
        Get Started Today
      </h3>
      <p className="text-gray-600 text-sm mb-6">
        Tell us about your project
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full border-2 px-4 py-3 rounded-lg transition-colors duration-300 focus:outline-none ${
              errors.name
                ? 'border-red-500 focus:border-red-600'
                : 'border-gray-300 focus:border-[#FF6633]'
            }`}
            placeholder="Your Name *"
          />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
        </div>

        <div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full border-2 px-4 py-3 rounded-lg transition-colors duration-300 focus:outline-none ${
              errors.phone
                ? 'border-red-500 focus:border-red-600'
                : 'border-gray-300 focus:border-[#FF6633]'
            }`}
            placeholder="Phone Number *"
          />
          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
        </div>

        <div>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className={`w-full border-2 px-4 py-3 rounded-lg transition-colors duration-300 focus:outline-none ${
              errors.projectType
                ? 'border-red-500 focus:border-red-600'
                : 'border-gray-300 focus:border-[#FF6633]'
            }`}
          >
            <option value="">Select Project Type *</option>
            <option value="2 BHK">2 BHK Interior</option>
            <option value="3 BHK">3 BHK Interior</option>
            <option value="Commercial">Commercial Space</option>
            <option value="Renovation">Renovation</option>
            <option value="Other">Other</option>
          </select>
          {errors.projectType && (
            <p className="mt-1 text-xs text-red-500">{errors.projectType}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 bg-[#FF6633] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-[#FF6633]/90 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              Sending...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Get Free Quote
            </>
          )}
        </button>
      </form>
    </div>
  );
}
