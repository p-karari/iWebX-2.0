import Link from 'next/link';
import Reviews from '../portfolio.page/reviews';

const BrandComponent = () => {
  return (
    <>
      {/* Who We Help Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Who We <span className="text-yellow-500">Help</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our services are for anyone with a digital need. If you&apos;re a business, we&apos;re ready to help you thrive.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {['Schools', 'Colleges', 'Universities', 'Charities', 'Medical Institutions', 'Financial Institutions', 'SMEs', 'E-commerce', 'Franchises', 'Fashion Brands', 'NGOs', 'Individuals'].map((item, index) => (
            <div key={index} className="p-4 rounded-xl border border-gray-200 bg-white shadow-md hover:shadow-lg hover:border-yellow-400 transition-all duration-300 group">
              <span className="text-lg font-medium text-gray-800 group-hover:text-yellow-600 transition-colors duration-300">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <div className="border-t border-gray-200 my-16 max-w-7xl mx-auto"></div>
      <div className="bg-gray-50 py-16">
        {/* Replace with your Reviews component */}
        <Reviews />
      </div>
      <div className="border-t border-gray-200 my-16 max-w-7xl mx-auto"></div>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center bg-white">
        <div className="max-w-4xl mx-auto p-10 bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-100 shadow-xl">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Ready to create something amazing?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let&apos;s turn your vision into a digital masterpiece. Our team is ready to get started.
          </p>
          <Link href="/contact" passHref>
            <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold py-4 px-10 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
              Let&apos;s Talk
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default BrandComponent;