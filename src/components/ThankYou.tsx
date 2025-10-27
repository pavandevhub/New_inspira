import { CheckCircle, Home, Phone } from 'lucide-react';

interface ThankYouProps {
  onClose: () => void;
}

export function ThankYou({ onClose }: ThankYouProps) {
  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-50 to-white flex items-center justify-center px-6 py-20">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8 flex justify-center animate-bounce">
          <div className="h-24 w-24 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle className="h-16 w-16 text-green-600" />
          </div>
        </div>

        <h1 className="text-5xl font-bold text-[#333333] mb-6 animate-fade-in">
          Thank You!
        </h1>

        <p className="text-xl text-gray-700 mb-4">
          Your message has been received successfully.
        </p>

        <p className="text-lg text-gray-600 mb-8">
          Our team will review your inquiry and get back to you within 24 hours.
          We're excited to help transform your space!
        </p>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-[#333333] mb-4">
            What Happens Next?
          </h2>
          <div className="space-y-4 text-left">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF6633] text-white flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-[#333333] mb-1">Review & Contact</h3>
                <p className="text-gray-600">
                  Our team will review your requirements and contact you via phone or email.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF6633] text-white flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-[#333333] mb-1">Consultation</h3>
                <p className="text-gray-600">
                  Schedule a detailed consultation to discuss your vision and preferences.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF6633] text-white flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-[#333333] mb-1">Design Proposal</h3>
                <p className="text-gray-600">
                  Receive a customized design proposal tailored to your needs and budget.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onClose}
            className="flex items-center justify-center gap-2 bg-[#FF6633] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-[#FF6633]/90 hover:scale-105 hover:shadow-lg"
          >
            <Home className="h-5 w-5" />
            Back to Home
          </button>

          <a
            href="tel:9154658651"
            className="flex items-center justify-center gap-2 bg-white text-[#FF6633] border-2 border-[#FF6633] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-[#FF6633] hover:text-white hover:scale-105 hover:shadow-lg"
          >
            <Phone className="h-5 w-5" />
            Call Us Now
          </a>
        </div>

        <p className="mt-8 text-gray-500 text-sm">
          Need immediate assistance? Call us at{' '}
          <a href="tel:9154658651" className="text-[#FF6633] font-semibold hover:underline">
            +91 91546 58651
          </a>
        </p>
      </div>
    </section>
  );
}
