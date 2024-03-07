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
<div class="border-t-whop-stroke flex flex-col gap-6 border-t py-10 md:py-16 lg:flex-row lg:gap-6">
   <div class="flex-1">
      <div class="font-display text-whop-black font-semibold text-display3">FAQs</div>
   </div>
   <div class="lg:flex-1 lg:basis-[360px]">
      <div class="space-y-4">

        <FaqItem 
        question='Do I get charged when I sign up for the waitlist?'
        answer={`If you are accepted from the waitlist and haven't canceled your waitlist entry, your payment method will be charged at that time. Once accepted and successfully charged, you will be granted access to Profit Lounge immediately, as long as you have a Discord account linked to your Whop.`}
        />
        <FaqItem 
        question='I noticed you offer exclusive Lowes and Home Depot sections in your group, how do I get access to that?'
        answer={`Access to our exclusive Lowes and Home Depot deals are granted through success points. When you join our group, you can earn success points by posting valid success earned through the use of Profit Lounge's large variety of resources it has to offer customers. You will need a minimum of 50 success points each to gain access to both the Home Depot and Lowes sections. We also offer an additional way to gain access to these sections through 10 success points each and a verification process that is disclosed by our support team upon opening a ticket.`}
        />
        <FaqItem 
        question='As a member, will I get access to deals, price errors, freebies, and more, daily?'
        answer={`Yes! As a member of Profit Lounge, you will have access to daily deals, price errors, freebies, and more! We have a team of over 60 experienced staff members who specialize in the niche and they are constantly searching for the best deals and discounts from a large variety of retailers. Our team works around the clock to ensure that there is never an hour that goes by without finding multiple posts, which are then shared with Profit Lounge members. You can expect to see deals posted every day, so be sure to actively browse through all of what Profit Lounge has to offer and take advantage of the latest eye appealing posts as soon as possible!`}
        />
       
      </div>
   </div>
</div>  )
}

export default Faq