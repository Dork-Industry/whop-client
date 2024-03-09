import React,{useState} from 'react'

const Balance = () => {
    const [activeTab, setActiveTab] = useState('withdrawals');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
const data= []

  return (
    <div>
        <div className="bg-whop-hover-50 border-whop-stroke relative flex flex-col items-start justify-between rounded-md border py-3 pl-3.5 pr-3 md:flex-row" role="alert" aria-live="polite">
   <div className="flex flex-1 items-start">
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="building-columns" className="svg-inline--fa fa-building-columns fa-fw text-whop-gray mr-2.5 mt-0.5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
         <path fill="currentColor" d="M243.4 2.6l-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160v8c0 13.3 10.7 24 24 24H456c13.3 0 24-10.7 24-24v-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96c-8-3.4-17.2-3.4-25.2 0zM128 224H64V420.3c-.6 .3-1.2 .7-1.8 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512H480c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1V224H384V416H344V224H280V416H232V224H168V416H128V224zM256 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path>
      </svg>
      <div className="flex-1 space-y-1">
         <p className="text-subtitle2 dark-gray border-whop-stroke">Setup Withdrawals</p>
         <p className="text-paragraph3 dark-gray border-whop-stroke pr-2">Please connect your bank account to receive your first payout.</p>
      </div>
   </div>
   <div className="mt-3 self-stretch md:mt-0 md:self-center">
      <button type="button" className="group/button relative flex shrink-0 items-center justify-center overflow-hidden rounded-md focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring w-full bg-whop-background text-whop-black border-whop-stroke-dark border text-button4 h-10 px-[15px] shadow-sm">
         <div className="absolute inset-0 transition group-hover/button:bg-black/[4%] group-active/button:bg-black/[8%] biz-dark-1:group-hover/button:bg-white/[8%] biz-dark-1:group-active/button:bg-white/[16%] biz-dark-2:group-hover/button:bg-white/[8%] biz-dark-2:group-active/button:bg-white/[16%]"></div>
         <div className="z-10 flex items-center justify-center">
            <div className="">Begin Setup</div>
         </div>
      </button>
   </div>
</div>

<div className="flex justify-end gap-x-3 py-4">
   <button disabled="" type="button" className="group/button relative flex shrink-0 items-center justify-center overflow-hidden rounded-md w-fit focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring bg-whop-background text-whop-black border-whop-stroke-dark border text-button4 h-10 px-[15px] !cursor-not-allowed opacity-40 shadow-sm">
      <div className="absolute inset-0 transition"></div>
      <div className="z-10 flex items-center justify-center">
         <div className="">Withdraw to Bank</div>
      </div>
   </button>
   <div></div>
</div>

<div className="flex flex-col gap-12">
   <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <div className="border-whop-stroke flex flex-col gap-[6px] rounded-2xl border px-6 py-5 shadow-sm">
         <div className="flex flex-row items-center gap-x-2">
            <span className="text-whop-dark-gray text-text2">Lifetime net revenue</span>
            <div data-state="closed" className="text-whop-gray focus:outline-none cursor-default inline-block">
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-info" className="svg-inline--fa fa-circle-info fa-fw h-3 w-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path>
               </svg>
            </div>
         </div>
         <span className="text-whop-off-black text-display3 font-normal">$0.00</span>
      </div>
      <div className="border-whop-stroke flex flex-col gap-[6px] rounded-2xl border px-6 py-5 shadow-sm">
         <div className="flex flex-row items-center gap-x-2">
            <span className="text-whop-dark-gray text-text2">Pending balance</span>
            <div data-state="closed" className="text-whop-gray focus:outline-none cursor-default inline-block">
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-info" className="svg-inline--fa fa-circle-info fa-fw h-3 w-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path>
               </svg>
            </div>
         </div>
         <span className="text-whop-off-black text-display3 font-normal">$0.00</span>
      </div>
      <div className="border-whop-stroke flex flex-col gap-[6px] rounded-2xl border px-6 py-5 shadow-sm">
         <div className="flex flex-row items-center gap-x-2">
            <span className="text-whop-dark-gray text-text2">Available to pay out</span>
            <div data-state="closed" className="text-whop-gray focus:outline-none cursor-default inline-block">
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-info" className="svg-inline--fa fa-circle-info fa-fw h-3 w-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path>
               </svg>
            </div>
         </div>
         <span className="text-whop-off-black text-display3 font-normal">$0.00</span>
      </div>
      <div className="border-whop-stroke flex flex-col gap-[6px] rounded-2xl border px-6 py-5 shadow-sm">
         <div className="flex flex-row items-center gap-x-2">
            <span className="text-whop-dark-gray text-text2">In transit to bank</span>
            <div data-state="closed" className="text-whop-gray focus:outline-none cursor-default inline-block">
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-info" className="svg-inline--fa fa-circle-info fa-fw h-3 w-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path>
               </svg>
            </div>
         </div>
         <span className="text-whop-off-black text-display3 font-normal">$0.00</span>
      </div>
   </div>
   <div className="flex flex-col gap-4 [&amp;>div>div>div]:rounded-[6px] [&amp;>div]:rounded-[8px]">
      <div className="bg-whop-hover flex h-10 appearance-none items-center overflow-auto rounded-full p-1 max-w-fit" role="tablist" aria-orientation="horizontal">
                    <button onClick={() => handleTabClick('withdrawals')}>
                        <div className={`relative flex h-8 min-w-[150px] sm:min-w-[180px] cursor-pointer appearance-none items-center justify-center focus:outline-none ${activeTab === 'withdrawals' ? ' border-whop-stroke absolute inset-0 z-[1]' : ''}`} role="tab" aria-selected={activeTab === 'myLinks'} tabindex={activeTab === 'myLinks' ? '0' : '-1'} data-headlessui-state={activeTab === 'myLinks' ? 'selected' : ''}>
                            <div className={` flex items-center justify-center rounded-full border-[0.5px]  opacity-100 ${activeTab === 'withdrawals' ? 'bg-whop-background border-whop-stroke absolute inset-0 z-[1] ' : 'bg-transparent'}`} ></div>

                            <span className="text-subtitle3 z-[2] whitespace-nowrap">Withdrawals</span>
                        </div>
                    </button>
                    <button onClick={() => handleTabClick('deposits')}>
                        <div className={`relative flex h-8 min-w-[150px] sm:min-w-[180px] cursor-pointer appearance-none items-center justify-center focus:outline-none ${activeTab === 'deposits' ? 'border-whop-stroke absolute inset-0 z-[1]' : ''}`} role="tab" aria-selected={activeTab === 'products'} tabindex={activeTab === 'products' ? '0' : '-1'} data-headlessui-state={activeTab === 'products' ? 'selected' : ''}>
                            <div className={` flex items-center justify-center rounded-full border-[0.5px]  opacity-100 ${activeTab === 'deposits' ? 'bg-whop-background border-whop-stroke absolute inset-0 z-[1] ' : 'bg-transparent'}`} ></div>
                            <span className="text-subtitle3 z-[2] whitespace-nowrap">Deposits</span>
                        </div>
                    </button>
                    <button onClick={() => handleTabClick('deductions')}>
                        <div className={`relative flex h-8 min-w-[150px] sm:min-w-[180px] cursor-pointer appearance-none items-center justify-center focus:outline-none ${activeTab === 'deductions' ? ' border-whop-stroke absolute inset-0 z-[1]' : ''}`} role="tab" aria-selected={activeTab === 'categories'} tabindex={activeTab === 'categories' ? '0' : '-1'} data-headlessui-state={activeTab === 'categories' ? 'selected' : ''}>
                            <div className={` flex items-center justify-center rounded-full border-[0.5px]  opacity-100 ${activeTab === 'deductions' ? 'bg-whop-background border-whop-stroke absolute inset-0 z-[1] ' : 'bg-transparent'}`} ></div>
                            <span className="text-subtitle3 z-[2] whitespace-nowrap">Deductions</span>
                        </div>
                    </button>
                </div>
             <div>
       { data?.length===0 && <div className="focus:outline-none" id="headlessui-tabs-panel-:r2i:" role="tabpanel" tabindex="0" data-headlessui-state="selected" aria-labelledby="headlessui-tabs-tab-:r2f:">
            <div className="flex flex-col gap-y-4">
               <div className="flex items-center justify-between">
                  <div></div>
               </div>
               <div className="border-whop-stroke-dark bg-whop-background w-full rounded-[10px] px-10 py-6 border">
                  <div className="mx-auto flex max-w-[400px] flex-col gap-6 text-center">
                     <div className="border-whop-stroke-dark bg-whop-background mx-auto flex animate-pulse items-center justify-center border drop-shadow-lg h-12 w-12 rounded-2xl">
                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="money-bill-transfer" className="svg-inline--fa fa-money-bill-transfer fa-fw text-whop-gray h-6 w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                           <path fill="currentColor" d="M558.1 64L535 41c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l64 64c4.5 4.5 7 10.6 7 17s-2.5 12.5-7 17l-64 64c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l23-23-64.6 0 0 0H160v16c0 35.3-28.7 64-64 64H80v93.5L50.7 314.7 32 333.5V128c0-35.3 28.7-64 64-64H383.6l.4 0 174.1 0zM560 320V226.5l29.3-29.3L608 178.5V384c0 35.3-28.7 64-64 64H146.5l0 0-64.6 0 23 23c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L7 441c-4.5-4.5-7-10.6-7-17s2.5-12.5 7-17l64-64c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-23 23L256 400c.1 0 .3 0 .4 0H480V384c0-35.3 28.7-64 64-64h16zM320 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path>
                        </svg>
                     </div>
                     <div>
                        <p className="text-whop-offBlack text-header4 font-semibold">No {activeTab}</p>
                        <p className="text-whop-dark-gray mt-1 text-paragraph3">Nothing here yet!</p>
                     </div>
                     <div className="mx-auto flex w-full flex-col-reverse gap-2 sm:flex-row sm:justify-center"></div>
                  </div>
               </div>
            </div>
         </div>}
      </div>
   </div>
</div>
    </div>
  )
}

export default Balance