import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../AuthProvider';

const Privacy = () => {
    return (
        <>
          <div className="padded-container px-10 space-y-10 pb-6 pt-8">
   <div className="align-start flex flex-col justify-between gap-5">
      <time datetime="2023-11-02T04:29:02.787Z" className="text-subtitle3 font-medium text-[#FF6243]">Last Updated: November 2, 2023</time>
      <h1 className="text-displayL5 text-whop-black text-4xl font-semibold md:text-5xl  font-display">Privacy Policy</h1>
      <div className="space-y-4">
         <p className="text-paragraph2 text-whop-black inline-table w-full">Frosted, Inc. d/b/a Whop and its affiliates (“<b>Whop</b>,” “<b>we</b>,” “<b>our</b>,” and/or “<b>us</b>”) value the privacy of individuals who use our applications, including any mobile applications, websites (including <a href="https://whop.com/" className="text-whop-primary underline"><u>whop.com</u></a>), or services that link to this Privacy Policy (collectively, our “<b>Services</b>”).&nbsp; This privacy policy (the “<b>Privacy Policy</b>”) explains how we collect, use, and share information from users of our Services (“<b>Users</b>”).&nbsp; As used in this Privacy Policy, “Personal Information” means any information relating to an identified or identifiable individual.&nbsp; By using our Services, you agree to the collection, use, disclosure, and procedures this Privacy Policy describes.&nbsp; Beyond the Privacy Policy, your use of our Service is also subject to our <u>Terms of Service</u> and our <u>California Resident Privacy Notice</u>.</p>
         <p className="text-paragraph2 text-whop-black inline-table w-full"><b><u>Information We Collect</u></b></p>
         <p className="text-paragraph2 text-whop-black inline-table w-full">We may collect a variety of information from or about you or your devices from various sources, as described below.</p>
         <p className="text-paragraph2 text-whop-black inline-table w-full">If you do not provide your information when requested, you may not be able to use our Services if that information is necessary to provide you with our Services or if we are legally required to collect it.</p>
         <p className="text-paragraph2 text-whop-black inline-table w-full"><b>A. Information You Provide to Us</b></p>
         <p className="text-paragraph2 text-whop-black inline-table w-full"><b>Registration and Profile Information</b>.&nbsp; When you sign up for an account, register to use our Services, or sign up for notifications or updates, we ask you for your Personal Information, including your email address.</p>
         <p className="text-paragraph2 text-whop-black inline-table w-full"><b>Communications</b>.&nbsp; If you contact us directly, we may receive additional Personal Information about you.&nbsp; For example, when you contact us for customer support, we may receive your name, email address, Discord username, phone number, the contents of the messages or attachments that you may send to us, and other information you choose to provide.&nbsp; If you subscribe to our newsletter, then we will collect your email address.&nbsp; When we send you emails, we may track whether you open them to learn how to deliver a better customer experience and improve our Services.</p>
         <p className="text-paragraph2 text-whop-black inline-table w-full"><b>Payment Information</b>.&nbsp; When you make a payment to Whop, your credit card information, debit card information, billing information, and any other financial information necessary to complete your payment (“<b>Payment Information</b>”) is processed by our third-party payment processor (Stripe or Checkout.com), and we do not collect, store, or process your Payment Information.&nbsp; For more information, please see the Payment Processing section below.</p>
         <p className="text-paragraph2 text-whop-black inline-table w-full"><b>B. Information We Collect When You Use Our Services</b></p>
         <p className="text-paragraph2 text-whop-black inline-table w-full"><b>Location Information</b>.&nbsp; When you use our Services, we may infer your general location information (for example, your IP address may indicate your general geographic region).&nbsp;&nbsp;</p>
         <p className="text-paragraph2 text-whop-black inline-table w-full"><b>Device Information</b>.&nbsp; We receive information about the device and software you use to access our Services, including IP address, web browser type, operating system version, and device identifiers (including unique device identifiers and MAC addresses).</p>
         <p className="text-paragraph2 text-whop-black inline-table w-full"><b>Usage Information</b>.&nbsp; To help us understand how you use our Services and to help us improve them, we automatically receive information about your interactions with our Services, such as the pages or other content you view, the searches you conduct, telemetry data, and the dates and times of your visits.</p>
         <p className="text-paragraph2 text-whop-black inline-table w-full"><b>Analytics Partners</b>.&nbsp; We use analytics services such as Google Analytics, Hotjar, and Amplitude to collect and process certain analytics data.&nbsp; These services may also collect information about your use of other websites, apps, and online resources.&nbsp; You can learn about Google’s practices by going to <a href="https://www.google.com/policies/privacy/partners/" className="text-whop-primary underline"><u>https://www.google.com/policies/privacy/partners/</u></a> and opt out of them by downloading the Google Analytics Opt-out Browser Add-on, available at <a href="https://tools.google.com/dlpage/gaoptout" className="text-whop-primary underline"><u>https://tools.google.com/dlpage/gaoptout</u></a>.</p>
         <p className="text-paragraph2 text-whop-black inline-table w-full"><b>Information from Cookies and Similar Technologies</b>.&nbsp; We and our third-party partners may collect Personal Information using cookies, which are small files of letters and numbers that we store on your browser or the hard drive of your computer.&nbsp; They contain information that is transferred to your computer’s hard drive.&nbsp; We and our third-party partners may also use pixel tags and web beacons on our Services.&nbsp; These are tiny graphic images placed on web pages or in our emails that allow us to determine whether you have performed a specific action.&nbsp; We use cookies, beacons, invisible tags, and similar technologies (collectively “<b>Cookies</b>”) to collect information about your browsing activities and to distinguish you from other users of our Services.&nbsp; This aids your experience when you use our Services and allows us to improve the functionality of our Services.&nbsp; Cookies can be used for performance management (i.e., collecting information on how our Services are being used for analytics purposes).&nbsp; They can also be used for functionality management, enabling us to make your visit more efficient by, for example, remembering language preferences, passwords, and log-in details.&nbsp; Below is an overview of the types of Cookies we and third parties may use to collect Personal Information.</p>
         <ul className="text-paragraph2 text-whop-black list-inside list-disc pl-4">
            <li><b>Strictly Necessary Cookies</b>.&nbsp; Some Cookies are strictly necessary to make our Services available to you.&nbsp; We cannot provide you with our Services without this type of Cookies.&nbsp; We use the following necessary Cookies:&nbsp;</li>
         </ul>
         <table className="border-whop-stroke-dark mb-10 w-full rounded border">
            <tr className="border-whop-stroke-dark divide-whop-stroke-dark divide-x border-b">
               <td className="text-whop-black p-2">
                  <p className="text-paragraph2 text-whop-black inline-table w-full"><b>Name</b></p>
               </td>
               <td className="text-whop-black p-2">
                  <p className="text-paragraph2 text-whop-black inline-table w-full"><b>More Information</b></p>
               </td>
               <td className="text-whop-black p-2">
                  <p className="text-paragraph2 text-whop-black inline-table w-full"><b>Retention</b></p>
               </td>
            </tr>
            <tr className="border-whop-stroke-dark divide-whop-stroke-dark divide-x border-b">
               <td className="text-whop-black p-2">
                  <p className="text-paragraph2 text-whop-black inline-table w-full">Whop Authenticator</p>
               </td>
               <td className="text-whop-black p-2">
                  <p className="text-paragraph2 text-whop-black inline-table w-full">Internal company authenticator&nbsp;</p>
               </td>
               <td className="text-whop-black p-2">
                  <p className="text-paragraph2 text-whop-black inline-table w-full">2 years</p>
               </td>
            </tr>
         </table>
         <ul className="text-paragraph2 text-whop-black list-inside list-disc pl-4">
            <li><b>Functional Cookies</b>.&nbsp; Functional Cookies are used to recognize you when you return to our Services.&nbsp; This enables us to adapt our content for you and remember your preferences.&nbsp; For example, we use functional Cookies to remember your choice of language or region.&nbsp; We use the following functional Cookies:&nbsp;</li>
         </ul>
         <table className="border-whop-stroke-dark mb-10 w-full rounded border">
            <tr className="border-whop-stroke-dark divide-whop-stroke-dark divide-x border-b">
               <td className="text-whop-black p-2">
                  <p className="text-paragraph2 text-whop-black inline-table w-full"><b>Name</b></p>
               </td>
               <td className="text-whop-black p-2">
                  <p className="text-paragraph2 text-whop-black inline-table w-full"><b>More Information</b></p>
               </td>
               <td className="text-whop-black p-2">
                  <p className="text-paragraph2 text-whop-black inline-table w-full"><b>Retention</b></p>
               </td>
            </tr>
            <tr className="border-whop-stroke-dark divide-whop-stroke-dark divide-x border-b">
               <td className="text-whop-black p-2">
                  <p className="text-paragraph2 text-whop-black inline-table w-full">Stripe Session ID</p>
                  <p className="text-paragraph2 text-whop-black inline-table w-full">Hotjar Session</p>
                  <p className="text-paragraph2 text-whop-black inline-table w-full">Intercom Session</p>
                  <p className="text-paragraph2 text-whop-black inline-table w-full">Intercom ID</p>
                  <p className="text-paragraph2 text-whop-black inline-table w-full">Stripe mid</p>
               </td>
               <td className="text-whop-black p-2">
                  <p className="text-paragraph2 text-whop-black inline-table w-full">To provide fraud prevention</p>
                  <p className="text-paragraph2 text-whop-black inline-table w-full">Provide functions across pages</p>
                  <p className="text-paragraph2 text-whop-black inline-table w-full">Customer service chat</p>
                  <p className="text-paragraph2 text-whop-black inline-table w-full">Tracking ID of user with service</p>
                  <p className="text-paragraph2 text-whop-black inline-table w-full">To provide fraud prevention</p>
               </td>
               <td className="text-whop-black p-2">
                  <p className="text-paragraph2 text-whop-black inline-table w-full">30 minutes</p>
                  <p className="text-paragraph2 text-whop-black inline-table w-full">Session duration</p>
                  <p className="text-paragraph2 text-whop-black inline-table w-full">1 week</p>
                  <p className="text-paragraph2 text-whop-black inline-table w-full">9 months</p>
                  <p className="text-paragraph2 text-whop-black inline-table w-full">1 year</p>
               </td>
            </tr>
         </table>
         <ul className="text-paragraph2 text-whop-black list-inside list-disc pl-4">
            <li><b>Analytical or Performance Cookies</b>.&nbsp; We also use Cookies for website analytics purposes to operate, maintain and improve our Services.&nbsp; We may use our own analytics Cookies or use third-party analytics providers such as Google Analytics.&nbsp; Google uses the data collected to track and monitor the use of our Service. For more information on the privacy practices of Google, please visit the Google Privacy Terms web page: <a href="https://policies.google.com/privacy?hl=en" className="text-whop-primary underline"><u>https://policies.google.com/privacy?hl=en</u></a>.&nbsp; We also encourage you to review the Google's policy for safeguarding your data: https://support.google.com/analytics/answer/6004245.&nbsp; These providers may also collect information about your use of other websites, apps, and online resources.&nbsp; We also use the following analytical or performance Cookies:&nbsp;</li>
         </ul>
         <table className="border-whop-stroke-dark mb-10 w-full rounded border">
            <tr className="border-whop-stroke-dark divide-whop-stroke-dark divide-x border-b">
               <td className="text-whop-black p-2">
                  <p className="text-paragraph2 text-whop-black inline-table w-full"><b>Name</b></p>
               </td>
               <td className="text-whop-black p-2">
                  <p className="text-paragraph2 text-whop-black inline-table w-full"><b>More Information</b></p>
               </td>
               <td className="text-whop-black p-2">
                  <p className="text-paragraph2 text-whop-black inline-table w-full"><b>Retention</b></p>
               </td>
            </tr>
            <tr className="border-whop-stroke-dark divide-whop-stroke-dark divide-x border-b">
               <td className="text-whop-black p-2">
                  <p className="text-paragraph2 text-whop-black inline-table w-full">Google Analytics ID</p>
                  <p className="text-paragraph2 text-whop-black inline-table w-full">Amplitude&nbsp;</p>
               </td>
               <td className="text-whop-black p-2">
                  <p className="text-paragraph2 text-whop-black inline-table w-full">To store and count page views</p>
                  <p className="text-paragraph2 text-whop-black inline-table w-full">To store and count user behavior</p>
               </td>
               <td className="text-whop-black p-2">
                  <p className="text-paragraph2 text-whop-black inline-table w-full">1 day</p>
                  <p className="text-paragraph2 text-whop-black inline-table w-full">At lease one session</p>
               </td>
            </tr>
         </table>
         <p className="text-paragraph2 text-whop-black inline-table w-full">Please review your web browser’s “Help” file to learn the proper way to modify your cookie settings.&nbsp; Please note that if you delete or choose not to accept cookies from our Services, you may not be able to utilize the features of our Services to their fullest potential.&nbsp; You can find more information about your rights and choices, and how to block the use of certain Cookies in the section Your Rights and Choices below.</p>
         <p className="text-paragraph2 text-whop-black inline-table w-full"><b>C. Payment Processing</b></p>
         <p className="text-paragraph2 text-whop-black inline-table w-full">When you make purchases through our Services, your payment is processed by a third-party payment processor such as Stripe or Checkout.com (“<b>Payment Processor</b>”).&nbsp; This Payment Processor may collect Payment Information and other Personal Information from you, including your name, email address, and billing address.&nbsp; The use of your Personal Information by the Payment Processor is governed by its terms and conditions and privacy policy, and Personal Information we receive about you from our Payment Processor is governed by this Privacy Policy.</p>
         <p className="text-paragraph2 text-whop-black inline-table w-full"><b>D. Information We Receive from Third Parties</b>.&nbsp;</p>
         <p className="text-paragraph2 text-whop-black inline-table w-full"><b>Information From Third-Party Services</b>.&nbsp; If you choose to link our Services to a third-party account, such as Discord or Twitter we may receive Personal Information about you including your profile information and your photo, and your use of the third-party account.&nbsp; If you wish to limit the information available to us, you should visit the privacy settings of your third-party accounts to learn about your options.</p>
         <p className="text-paragraph2 text-whop-black inline-table w-full"><b>Other Third Parties</b>.&nbsp; We may receive additional information about you, such as demographic data, from third parties such as data or marketing partners and combine it with other information we have about you.&nbsp;</p>
         <p className="text-paragraph2 text-whop-black inline-table w-full"><b><u>How We Use the Information We Collect</u></b></p>
         <p className="text-paragraph2 text-whop-black inline-table w-full">We use the Personal Information we collect:</p>
         <ul className="text-paragraph2 text-whop-black list-inside list-disc pl-4">
            <li>To provide, maintain, improve, and enhance our Services;</li>
            <li>To personalize your experience on our Services such as by providing tailored content;</li>
            <li>To understand and analyze how you use our Services and develop new products, services, features, and functionalities;</li>
            <li>To communicate with you, provide you with updates and other information relating to our Services, provide information that you request, respond to comments and questions, and otherwise provide customer support;</li>
            <li>To send you SMS messages and push notifications;</li>
            <li>For marketing and advertising purposes, such as developing and providing promotional and advertising materials that may be relevant, valuable, or otherwise of interest to you;</li>
            <li>In de-identified and aggregated form for any lawful purpose;</li>
            <li>To facilitate transactions and payments;</li>
            <li>To find and prevent fraud, and respond to trust and safety issues that may arise;</li>
            <li>For compliance purposes, including enforcing our Terms of Service or other legal rights, or as may be required by applicable laws and regulations or requested by any judicial process or governmental agency; and</li>
            <li>For other purposes for which we provide specific notice at the time the Personal Information is collected.</li>
         </ul>
         <p className="text-paragraph2 text-whop-black inline-table w-full"><b><u>Legal Bases For Processing European Information</u></b></p>
         <p className="text-paragraph2 text-whop-black inline-table w-full">If you are located in the European Economic Area or the United Kingdom (collectively, “<b>Europe</b>”),&nbsp; we only process your Personal Information when we have a valid legal basis to do so including as set forth below.</p>
         <ul className="text-paragraph2 text-whop-black list-inside list-disc pl-4">
            <li><b>Consent</b>.&nbsp; We may process your Personal Information where you have consented to certain processing of your Personal Information.&nbsp; For example, we may process your Personal Information to send you marketing communications or to use Cookies where you have consented to such use.</li>
            <li><b>Contractual Necessity</b>.&nbsp; We may process your Personal Information where required to provide you with our Services.&nbsp; For example, we may need to process your Personal Information to respond to your inquiries or requests.</li>
            <li><b>Compliance with a Legal Obligation</b>.&nbsp; We may process your Personal Information where we have a legal obligation to do so.&nbsp; For example, we may process your Personal Information to comply with tax, labor and accounting obligations.</li>
            <li><b>Legitimate Interests</b>.&nbsp; We may process your Personal Information where we or a third party have a legitimate interest in processing your Personal Information.&nbsp; Specifically, we have a legitimate interest in using your Personal Information for product development and internal analytics purposes, and otherwise to improve the safety, security, and performance of our Services.&nbsp; We only rely on our or a third party’s legitimate interests to process your Personal Information when these interests are not overridden by your rights and interests.</li>
         </ul>
         <p className="text-paragraph2 text-whop-black inline-table w-full"><b><u>How We Share the Information We Collect</u></b></p>
         <p className="text-paragraph2 text-whop-black inline-table w-full">We do not share or otherwise disclose the Personal Information we collect from you except as described below or otherwise disclosed to you at the time of the collection.</p>
         <p className="text-paragraph2 text-whop-black inline-table w-full"><b>Partners and Affiliates</b>.&nbsp; We may share any information with our partners, corporate affiliates, parents, or subsidiaries for any purpose described in this Privacy Policy.</p>
         <p className="text-paragraph2 text-whop-black inline-table w-full"><b>Vendors and Service Providers</b>.&nbsp; We may share any information we receive with vendors and service providers retained in connection with the provision of our Services.</p>
         <p className="text-paragraph2 text-whop-black inline-table w-full"><b>Marketing</b>.&nbsp; We do not rent, sell, or share information about you with nonaffiliated companies for their direct marketing purposes unless we have your permission.</p>
         <p className="text-paragraph2 text-whop-black inline-table w-full"><b>Analytics Partners</b>.&nbsp; We use analytics services such as Google Analytics, Hotjar, Holistics, and Amplitude to collect and process certain analytics data.&nbsp; These services may also collect information about your use of other websites, apps, and online resources.&nbsp; You can learn about Google’s practices by going to <a href="https://www.google.com/policies/privacy/partners/" className="text-whop-primary underline"><u>https://www.google.com/policies/privacy/partners/</u></a> and opt out of them by downloading the Google Analytics Opt-out Browser Add-on, available at <a href="https://tools.google.com/dlpage/gaoptout" className="text-whop-primary underline"><u>https://tools.google.com/dlpage/gaoptout</u></a>.</p>
         <p className="text-paragraph2 text-whop-black inline-table w-full"><b>As Required by Law and Similar Disclosures</b>.&nbsp; We may access, preserve, and disclose your Personal Information if we believe doing so is required or appropriate to: (i) comply with law enforcement requests and legal process, such as a court order or subpoena; (ii) respond to your requests; or (iii) protect your, our, or others’ rights, property, or safety.&nbsp; For the avoidance of doubt, the disclosure of your information may occur if you post any objectionable content on or through our Services.</p>
         <p className="text-paragraph2 text-whop-black inline-table w-full"><b>Merger, Sale, or Other Asset Transfers</b>.&nbsp; We may disclose and transfer your Personal Information to service providers, advisors, potential transactional partners, or other third parties in connection with the consideration, negotiation, or completion of a corporate transaction in which we are acquired by or merged with another company or we sell, liquidate, or transfer all or a portion of our business or assets.</p>
         <p className="text-paragraph2 text-whop-black inline-table w-full"><b>Consent</b>.&nbsp; We may also disclose Personal Information from or about you or your devices with your permission.</p>
         <p className="text-paragraph2 text-whop-black inline-table w-full"><b><u>Your Choices</u></b></p>
         <p className="text-paragraph2 text-whop-black inline-table w-full"><b>Marketing Communications</b>.&nbsp; You can unsubscribe from our promotional emails via the link provided in the emails.&nbsp; Even if you opt out of receiving promotional messages from us, you will continue to receive administrative messages from us.</p>
         <p className="text-paragraph2 text-whop-black inline-table w-full"><b>Do Not Track</b>.&nbsp; There is no accepted standard on how to respond to Do Not Track signals, and we do not respond to such signals.</p>
         <p className="text-paragraph2 text-whop-black inline-table w-full">If you choose not to provide us with the Personal Information we collect, some features of our Services may not work as intended.</p>
         <p className="text-paragraph2 text-whop-black inline-table w-full"><b>Your European Privacy Rights</b>.&nbsp; If you are located in Europe, you have additional rights as described below.&nbsp;</p>
         <ul className="text-paragraph2 text-whop-black list-inside list-disc pl-4">
            <li>You may request access to the Personal Information we maintain about you, update and correct inaccuracies in your Personal Information, restrict or object to the processing of your Personal Information, have your Personal Information anonymized or deleted, as appropriate, or exercise your right to data portability to easily transfer your Personal Information to another company.&nbsp; In addition, you have the right to lodge a complaint with a supervisory authority, including in your country of residence, place of work or where an incident took place.</li>
            <li>You may withdraw any consent you previously provided to us regarding the processing of your Personal Information at any time and free of charge.&nbsp; We will apply your preferences going forward and this will not affect the lawfulness of the processing before you withdrew your consent.</li>
         </ul>
         <p className="text-paragraph2 text-whop-black inline-table w-full">You may exercise these rights by contacting us using the contact details at the end of this Privacy Policy.&nbsp; Before fulfilling your request, we may ask you to provide reasonable information to verify your identity.&nbsp; Please note that there are exceptions and limitations to each of these rights, and that while any changes you make will be reflected in active user databases instantly or within a reasonable period of time, we may retain Personal Information for backups, archiving, prevention of fraud and abuse, analytics, satisfaction of legal obligations, or where we otherwise reasonably believe that we have a legitimate reason to do so.</p>
         <p className="text-paragraph2 text-whop-black inline-table w-full"><b>How to Manage Cookies</b>.&nbsp; You can block Cookies by setting your internet browser to block some or all Cookies.&nbsp; However, if you use your browser settings to block all Cookies (including essential Cookies) you may not be able to access all or parts of our Services.&nbsp; By using our Services, you consent to our use of Cookies and our processing of Personal Information collected through such Cookies, in accordance with this Privacy Policy.&nbsp; You can withdraw your consent at any time by deleting placed Cookies and disabling Cookies in your browser, or as explained below.&nbsp; You can change your browser settings to block or notify you when you receive a Cookie, delete Cookies or browse our Services using your browser’s anonymous usage setting.&nbsp; Please refer to your browser instructions or help screen to learn more about how to adjust or modify your browser settings.&nbsp; If you do not agree to our use of Cookies or similar technologies which store information on your device, you should change your browser settings accordingly.&nbsp; You should understand that some features of our Services may not function properly if you do not accept Cookies or these technologies.&nbsp; Where required by applicable law, you will be asked to consent to certain Cookies and similar technologies before we use or install them on your computer or other device.</p>
         <p className="text-paragraph2 text-whop-black inline-table w-full"><b><u>Third Parties</u></b></p>
         <p className="text-paragraph2 text-whop-black inline-table w-full">Our Services may contain links to other websites, products, or services that we do not own or operate (“<b>Third-Party Services</b>”).&nbsp; We are not responsible for the privacy practices of these Third-Party Services.&nbsp; Please be aware that this Privacy Policy does not apply to your activities on these Third-Party Services or any information you disclose to these Third-Party Services.&nbsp; If you have any questions about how these other sites use your Personal Information, you should contact them directly.&nbsp; We encourage you to read their privacy policies before providing any information to them.</p>
         <p className="text-paragraph2 text-whop-black inline-table w-full"><b><u>Retention</u></b></p>
         <p className="text-paragraph2 text-whop-black inline-table w-full">We take measures to delete your Personal Information or keep it in a form that does not permit identifying you when such information is no longer necessary for the purposes for which we process it unless we are required by law to keep this information for a longer period.&nbsp; When we process Personal Information for our own purposes, we determine the retention period taking into account various criteria, such as the type of services provided to you, the nature and length of our relationship with you, possible re-enrollment with our Services, the impact on our Services we provide to you if we delete some Personal Information from or about you, and mandatory retention periods provided by law and the statute of limitations.</p>
         <p className="text-paragraph2 text-whop-black inline-table w-full"><b><u>Security</u></b></p>
         <p className="text-paragraph2 text-whop-black inline-table w-full">We make reasonable efforts to protect your Personal Information by using physical and electronic safeguards designed to improve the security of the Personal Information we maintain.&nbsp; However, as no electronic transmission or storage of Personal Information can be entirely secure, we can make no guarantees as to the security or privacy of your Personal Information.</p>
         <p className="text-paragraph2 text-whop-black inline-table w-full"><b><u>International Visitors</u></b></p>
         <p className="text-paragraph2 text-whop-black inline-table w-full">Our Services are hosted in the United States (“<b>U.S.</b>”) and intended for visitors located within the U.S.&nbsp; If you choose to use our Services from Europe or other regions of the world with laws governing data collection and use that may differ from U.S. law, then please note that you are transferring your Personal Information outside of those regions to the U.S. for storage and processing.&nbsp; We may transfer your Personal Information from Europe to the U.S. and other third countries based on European Commission-approved Standard Contractual Clauses, as needed to perform our services that you have requested from us, or with your consent.&nbsp; Also, we may transfer your Personal Information from the U.S. to other countries or regions in connection with storage and processing of data, fulfilling your requests, and operating our Services.&nbsp; By providing any information, including Personal Information, on or to our Services, you consent to such transfer, storage, and processing.</p>
         <p className="text-paragraph2 text-whop-black inline-table w-full"><b><u>Children’s Privacy</u></b></p>
         <p className="text-paragraph2 text-whop-black inline-table w-full">We do not knowingly collect, maintain, or use Personal Information from children under 16 years of age (“<b>Minors</b>”), and no parts of our Services are directed to Minors.&nbsp; If you learn that a Minor has provided us with Personal Information in violation of this Privacy Policy, then you may alert us at <a href="mailto:hello@whop.com?subject=Children's%20Privacy" className="text-whop-primary underline"><u>hello@whop.com</u></a>.</p>
         <p className="text-paragraph2 text-whop-black inline-table w-full"><b><u>Changes to this Privacy Policy</u></b></p>
         <p className="text-paragraph2 text-whop-black inline-table w-full">We will post any adjustments to the Privacy Policy on this page, and the revised version will be effective when it is posted.&nbsp; If we materially change the ways in which we use or share Personal Information previously collected from you through our Services, we will notify you through our Services, by email, or other communication.</p>
         <p className="text-paragraph2 text-whop-black inline-table w-full"><b><u>Contact Information</u></b></p>
         <p className="text-paragraph2 text-whop-black inline-table w-full">If you have any questions, comments, or concerns about our processing activities, please email us at <a href="mailto:hello@whop.com?subject=Privacy%20Inquiry" className="text-whop-primary underline"><u>hello@whop.com</u></a> or write to us at:</p>
         <p className="text-paragraph2 text-whop-black inline-table w-full">Frosted Inc. d/b/a Whop</p>
         <p className="text-paragraph2 text-whop-black inline-table w-full">109 S. 5th St.</p>
         <p className="text-paragraph2 text-whop-black inline-table w-full">Brooklyn, NY</p>
         <p className="text-paragraph2 text-whop-black inline-table w-full">11249</p>
         <p className="text-paragraph2 text-whop-black inline-table w-full"></p>
      </div>
   </div>
</div>
        </>
    );
};

export default Privacy;
