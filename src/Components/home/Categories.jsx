import React, { useState, useEffect } from 'react'
import Apiconnect from '../../services/Apiconnect.js'
import { IconContext } from 'react-icons';
import * as AllIcons from "react-icons/fa";


const Categories = () => {
    const [CatList, setCatList] = useState([]);
    useEffect(() => {
        getCatList();
    }, []);



    const getCatList = () => {
        Apiconnect.getData('cat/getAll').then((response) => {
            let _xtract = Apiconnect.decrypt_obj(response.data.data);
            setCatList(_xtract);
        });
    };

    const renderIcon = (icon) => {
        // Split the string by '-' and capitalize each word
        const words = icon.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1));

        // Join the words without any separator
        const camelCaseString = words.join('');
        const Icon = AllIcons[camelCaseString];
        return (
            <IconContext.Provider value={{ size: '2em' }}>
                <Icon />
            </IconContext.Provider>
        )
    }


    console.log("CatList", CatList)
    return (
        <div className="padded-container py-8 [content-visibility:auto] md:py-[60px]">
            <div className="display3 text-whop-black">Explore the Marketplace</div>
            <div className="mt-6 grid gap-2 [grid-template-columns:repeat(auto-fill,minmax(160px,1fr))]  md:gap-5 md:[grid-template-columns:repeat(auto-fill,minmax(240px,1fr))] lg:[grid-template-columns:repeat(auto-fill,minmax(282px,1fr))]">
                {CatList?.map((valz, keyz) => (
                    <a className="border-whop-stroke group flex cursor-pointer text-whop-black hover:text-whop-black select-none flex-col items-center justify-center gap-4 rounded-lg border border-solid p-6 shadow-md transition  duration-300 ease-in-out  hover:scale-[102%] hover:shadow-lg md:p-8" href="/">
                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="cart-shopping-fast" className="h-8   text-[32px] transition duration-300 group-hover:-rotate-6 group-hover:scale-110" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                            <path fill="currentColor" d="M64 24C64 10.7 74.7 0 88 0h45.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H234.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H552c13.3 0 24 10.7 24 24s-10.7 24-24 24H263.7c-34.6 0-64.3-24.6-70.7-58.5l-51.6-271c-.7-3.8-4-6.5-7.9-6.5H88C74.7 48 64 37.3 64 24zM225.6 240H523.2c10.9 0 20.4-7.3 23.2-17.8L584.7 80H195.1l30.5 160zM192 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM24 96h80c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80h96c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80H136c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24z"></path>
                        </svg>
                        {/* {valz.fa_icon && renderIcon(valz.fa_icon)} */}

                        <div className="border-whop-stroke w-10 rounded border border-solid"></div>
                        <div className="text-base text-center font-semibold">{valz?.name}</div>
                        <div className="text-base text-whop-darkGray hidden text-center md:block">{valz?.info}</div>
                    </a>
                ))}

            </div>
        </div>
    )
}

export default Categories