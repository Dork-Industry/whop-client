import React, { useState } from 'react';

const Security = () => {
  const [selectedOption, setSelectedOption] = useState('app');

  const handleRadioChange = (value) => {
    setSelectedOption(value);
  };

  return (
    <div className='py-3'>
    <h5 className="text-header5 font-semibold">Two-factor authentication</h5>
    <span className="text-text3 text-whop-dark-gray pt-2">Protect your account by entering a code when signing in to your account.</span>
    <div className="my-6">
       <div role="radiogroup" className="space-y-2 disabled:cursor-not-allowed disabled:opacity-40 outline-none" tabindex="0" >
          <button onClick={()=> handleRadioChange('app')}  type="button" role="radio"   value="app" className={`bg-whop-background  hover:bg-whop-hover  group box-border flex w-full min-w-[250px] cursor-pointer items-start rounded-md border outline-none transition disabled:cursor-not-allowed disabled:opacity-40 p-2  ${selectedOption==='app'?'!border-2 !border-whop-primary  p-[15px] shadow-md':'border-whop-strokeDark'}`} >
             <div className={`border-whop-strokeDark mr-3 shrink-0 rounded-full border-2   h-[18px] w-[18px] ${selectedOption==='app'? "border-whop-primary bg-whop-primary " :" "}`}><span data-state="checked" className="after:bg-whop-background relative flex h-full w-full items-center justify-center after:block after:rounded-[50%] after:content-[''] after:h-[6.75px] after:w-[6.75px]"></span></div>
             <label className="cursor-pointer space-y-1 text-left group-disabled:cursor-not-allowed mt-[-0.75px]"><span className="text-whop-black block w-full font-semibold text-subtitle1">Authenticator App (recommended)</span><span className="text-whop-dark-gray block w-full paragraph3">Receive a code via an authenticator app.</span></label>
          </button>
          <button onClick={()=> handleRadioChange('text')} type="button" role="radio"  value="text" className={`bg-whop-background  hover:bg-whop-hover  group box-border flex w-full min-w-[250px] cursor-pointer items-start rounded-md border outline-none transition disabled:cursor-not-allowed disabled:opacity-40 p-2  ${selectedOption==='text'?'!border-2 !border-whop-primary  p-[15px] shadow-md':'border-whop-strokeDark'}`}>
             <div className={`border-whop-strokeDark mr-3 shrink-0 rounded-full border-2   h-[18px] w-[18px] ${selectedOption==='text'? "border-whop-primary bg-whop-primary " :" "}`}></div>
             <label className="cursor-pointer space-y-1 text-left group-disabled:cursor-not-allowed mt-[-0.75px]"><span className="text-whop-black block w-full font-semibold text-subtitle1">Text message</span><span className="text-whop-dark-gray block w-full paragraph3">Receive a code via SMS</span></label>
          </button>
       </div>
    </div>
    <button type="button" className="group/button relative shrink-0 items-center justify-center overflow-hidden rounded-md w-fit focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring hidden sm:block bg-whop-primary text-whop-fixed-white text-button4 h-10 px-[15px]">
       <div className="absolute inset-0 transition group-hover/button:bg-black/[12%] group-active/button:bg-black/[18%]"></div>
       <div className="z-10 flex items-center justify-center">
          <div className="text-white font-semibold">Enable two-factor authentication</div>
       </div>
    </button>
    <button type="button" className="group/button relative shrink-0 items-center justify-center overflow-hidden rounded-md w-fit focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring block sm:hidden bg-whop-primary text-whop-fixed-white text-button4 h-10 px-[15px]">
       <div className="absolute inset-0 transition group-hover/button:bg-black/[12%] group-active/button:bg-black/[18%]"></div>
       <div className="z-10 flex items-center justify-center">
          <div className="font-semibold">Enable two-factor authentication</div>
       </div>
    </button>
 </div>
  )
}

export default Security