import React, { useState } from 'react';
import General from '../Components/Account/General'
import ConnectedAccount from '../Components/Account/ConnectedAccount'
import Security from '../Components/Account/Security'
import PaymentInfo from '../Components/Account/PaymentInfo'
import Balance from '../Components/Account/Balance'
import BillingHistory from '../Components/Account/BillingHistory'
import ResolutionCenter from '../Components/Account/ResolutionCenter'
 import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
const Account = () => {
    const [activeTab, setActiveTab] = useState('general');
      const location =useLocation()
    useEffect(() => {
        if (location?.state) {
            const { tab } = location.state;
            if (tab) {
                setActiveTab(tab);
            }
        }
    }, [location]);

    const renderTabContent = () => {
      switch (activeTab) {
        case 'general':
          return <General />;
        case 'connected':
          return <ConnectedAccount />;
        case 'security':
          return <Security />;
        case 'payment':
          return <PaymentInfo />;
        case 'balance':
          return <Balance />;
        case 'billing':
          return <BillingHistory />;
        case 'resolution':
          return <ResolutionCenter />;
        default:
          return null;
      }
    };
  return (
    <div className="w-full max-w-[1300px] items-center mt-10 px-3 lg:px-5 sm:px-0">
    <h1 className="text-display3 sm:text-display2">Your Account Settings</h1>
    <div className="h-6"></div>
    <div className="border-whop-stroke flex appearance-none items-center space-x-3 overflow-auto border-b" role="tablist" aria-orientation="horizontal">
       <div className="relative flex items-center justify-center whitespace-nowrap outline-none" id="headlessui-tabs-tab-:rc:" role="tab" aria-selected="true" tabindex="0" data-headlessui-state="selected">
          <button className="hover:bg-whop-hover group flex cursor-pointer appearance-none items-center justify-center rounded-md outline-none transition mb-1.5 h-10 px-3" 
          onClick={()=> setActiveTab('general')}
          >
            <span className={`${activeTab === 'general' ? 'z-[2] text-whop-black text-button3' : 'text-whop-darkGray z-[2] text-button3 ' } font-semibold`}>General</span></button>
        {activeTab === 'general' && <div className="bg-whop-primary absolute bottom-0 z-[2] w-full rounded-t-full h-[3px] transform-none origin-center" ></div>}  
       </div>

       <div className="relative flex items-center justify-center whitespace-nowrap outline-none" id="headlessui-tabs-tab-:rc:" role="tab" aria-selected="true" tabindex="0" data-headlessui-state="selected">
          <button className="hover:bg-whop-hover group flex cursor-pointer appearance-none items-center justify-center rounded-md outline-none transition mb-1.5 h-10 px-3" 
          onClick={()=> setActiveTab('connected')}
          >
            <span className={`${activeTab === 'connected' ? 'z-[2] text-whop-black text-button3' : 'text-whop-darkGray z-[2] text-button3' } font-semibold`}>Connected accounts </span></button>
        {activeTab === 'connected' && <div className="bg-whop-primary absolute bottom-0 z-[2] w-full rounded-t-full h-[3px] transform-none origin-center" ></div>}  
       </div>

       <div className="relative flex items-center justify-center whitespace-nowrap outline-none" id="headlessui-tabs-tab-:rc:" role="tab" aria-selected="true" tabindex="0" data-headlessui-state="selected">
          <button className="hover:bg-whop-hover group flex cursor-pointer appearance-none items-center justify-center rounded-md outline-none transition mb-1.5 h-10 px-3" 
          onClick={()=> setActiveTab('security')}
          >
            <span className={`${activeTab === 'security' ? 'z-[2] text-whop-black text-button3' : 'text-whop-darkGray z-[2] text-button3' } font-semibold`}>Security</span></button>
        {activeTab === 'security' && <div className="bg-whop-primary absolute bottom-0 z-[2] w-full rounded-t-full h-[3px] transform-none origin-center" ></div>}  
       </div>

       <div className="relative flex items-center justify-center whitespace-nowrap outline-none" id="headlessui-tabs-tab-:rc:" role="tab" aria-selected="true" tabindex="0" data-headlessui-state="selected">
          <button className="hover:bg-whop-hover group flex cursor-pointer appearance-none items-center justify-center rounded-md outline-none transition mb-1.5 h-10 px-3" 
          onClick={()=> setActiveTab('payment')}
          >
            <span className={`${activeTab === 'payment' ? 'z-[2] text-whop-black text-button3' : 'text-whop-darkGray z-[2] text-button3' } font-semibold`}>Payment info</span></button>
        {activeTab === 'payment' && <div className="bg-whop-primary absolute bottom-0 z-[2] w-full rounded-t-full h-[3px] transform-none origin-center" ></div>}  
       </div>

       <div className="relative flex items-center justify-center whitespace-nowrap outline-none" id="headlessui-tabs-tab-:rc:" role="tab" aria-selected="true" tabindex="0" data-headlessui-state="selected">
          <button className="hover:bg-whop-hover group flex cursor-pointer appearance-none items-center justify-center rounded-md outline-none transition mb-1.5 h-10 px-3" 
          onClick={()=> setActiveTab('balance')}
          >
            <span className={`${activeTab === 'balance' ? 'z-[2] text-whop-black text-button3' : 'text-whop-darkGray z-[2] text-button3' } font-semibold`}>Balance</span></button>
        {activeTab === 'balance' && <div className="bg-whop-primary absolute bottom-0 z-[2] w-full rounded-t-full h-[3px] transform-none origin-center" ></div>}  
       </div>

       <div className="relative flex items-center justify-center whitespace-nowrap outline-none" id="headlessui-tabs-tab-:rc:" role="tab" aria-selected="true" tabindex="0" data-headlessui-state="selected">
          <button className="hover:bg-whop-hover group flex cursor-pointer appearance-none items-center justify-center rounded-md outline-none transition mb-1.5 h-10 px-3" 
          onClick={()=> setActiveTab('billing')}
          >
            <span className={`${activeTab === 'billing' ? 'z-[2] text-whop-black text-button3' : 'text-whop-darkGray z-[2] text-button3' } font-semibold`}>Billing history</span></button>
        {activeTab === 'billing' && <div className="bg-whop-primary absolute bottom-0 z-[2] w-full rounded-t-full h-[3px] transform-none origin-center" ></div>}  
       </div>

       <div className="relative flex items-center justify-center whitespace-nowrap outline-none" id="headlessui-tabs-tab-:rc:" role="tab" aria-selected="true" tabindex="0" data-headlessui-state="selected">
          <button className="hover:bg-whop-hover group flex cursor-pointer appearance-none items-center justify-center rounded-md outline-none transition mb-1.5 h-10 px-3" 
          onClick={()=> setActiveTab('resolution')}
          >
            <span className={`${activeTab === 'resolution' ? 'z-[2] text-whop-black text-button3' : 'text-whop-darkGray z-[2] text-button3' } font-semibold`}>Resolution center</span></button>
        {activeTab === 'resolution' && <div className="bg-whop-primary absolute bottom-0 z-[2] w-full rounded-t-full h-[3px] transform-none origin-center" ></div>}  
       </div>

     </div>
    <div className="h-6"></div>
    {renderTabContent()}
   {/* <General />
   <ConnectedAccount />
   <Security />
   <PaymentInfo />
   <Balance />
   <BillingHistory />
   <ResolutionCenter /> */}
   
 </div>
  )
}

export default Account