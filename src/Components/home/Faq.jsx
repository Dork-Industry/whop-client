import React , {useState} from 'react'

const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleAnswer = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="border-whop-stroke bg-whop-background border cursor-pointer rounded-lg">
        <div className="flex select-none items-center justify-between p-3" onClick={toggleAnswer}>
          <div className="text-base font-semibold">{question}</div>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="chevron-down"
            className={`w-5 transition duration-500 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path fill="currentColor" d="M239 401c9.4 9.4 24.6 9.4 33.9 0L465 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-175 175L81 175c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L239 401z"></path>
          </svg>
        </div>
        <div
          className={`grid overflow-hidden transition-all duration-300 ${
            isOpen ? '[grid-template-rows:1fr]' : '[grid-template-rows:0fr]'
          }`}
        >
          <div className="min-h-0">
            <div className="paragraph2 text-whop-dark-gray p-4 pt-0">{answer}</div>
          </div>
        </div>
      </div>
    );
  };
  
  const Faq = () => {
    return (
      <div className="padded-container py-8 lg:py-16">
        <div className="flex flex-col gap-4">
          <div className="sm:display3 font-semibold text-2xl text-whop-black">Frequently Asked Questions</div>
          <FaqItem
            question="What is Whop?"
            answer="Whop is your one-stop-shop for all the latest and greatest digital products. From trading software to reselling communities, we've got you covered! We manually approve each product to ensure that every listing on our marketplace is top-notch. Simply browse through the categories that interest you and discover the many amazing offerings available to you!"
          />
          <FaqItem
            question="What types of digital products do we support?"
            answer="We support the sale of a variety of digital products, including access to downloadable software, links, Discord communities, files, web apps, and exclusive content. With so many options, you're sure to find the perfect product to meet your needs!"
          />
          <FaqItem
            question="What payment options do you offer for purchasing digital products?"
            answer="We offer a variety of payment options to make your purchasing experience as seamless as possible. Choose from credit card, Apple Pay, Google Pay, or even crypto (if the company allows it)."
          />
        </div>
      </div>
    );
  };

export default Faq