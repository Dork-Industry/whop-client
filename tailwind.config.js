/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'whop-field-highlight': 'rgba(98, 91, 246, 1)',
        'whop-field-highlight-10': 'rgba(98, 91, 246, 0.1)',
        'whop-field-highlight-30': 'rgba(98, 91, 246, 0.3)',
        'whop-field-highlight-10p': 'rgba(98, 91, 246, 10%)',
        'whop-field-highlight-14p': 'rgba(98, 91, 246, 14%)',
        'whop-field-highlight-6p': 'rgba(98, 91, 246, 6%)',
      },
      colors: {
        whop: {
          black: 'rgb(14,14,15)',
          offBlack: 'rgb(40,41,46)',
          darkGray: 'rgb(83,89,97)',
          gray: 'rgb(136,142,150)',
          strokeDark: 'rgb(210,209,209)',
          stroke: 'rgb(232,232,232)',
          hoverPress: 'rgb(235,235,235)',
          hover: 'rgb(246,246,246)',
          hover50: 'rgb(251,251,252)',
          background: 'rgb(255,255,255)',
          primary: 'rgb(255,98,67)',
          primaryHover: 'rgb(154,42,20)',
          fieldHighlight: 'rgb(98,91,246)',
          fieldHighlightHover: 'rgb(72,66,196)',
          successGreen: 'rgb(74,179,37)',
          warningYellow: 'rgb(226,177,0)',
          errorRed: 'rgb(255,51,51)',
          blueAccent: 'rgb(22,160,251)',
          purpleAccent: 'rgb(163,58,213)',
          lavenderAccent: 'rgb(125,105,247)',
          indigoAccent: 'rgb(39,31,106)',
          brandsDiscord: 'rgb(88,101,242)',
          brandsTwitter: 'rgb(29,161,242)',
          brandsCoinbase: 'rgb(17,82,240)',
          brandsInstagram: 'rgb(221,42,123)',
          brandsOpensea: 'rgb(32,129,226)',
          brandsPaypal: 'rgb(0,69,124)',
          brandsTradingview: 'rgb(41,98,255)',
          brandsTelegram: 'rgb(36,129,204)',
          brandsStripe: 'rgb(99,91,255)',
          tagGreen: 'rgb(56,134,62)',
          tagGreenBackground: 'rgb(230,247,207)',
          tagBlue: 'rgb(40,87,185)',
          tagBlueBackground: 'rgb(216,244,246)',
          tagGray: 'rgb(85,90,104)',
          tagGrayBackground: 'rgb(235,238,241)',
          tagPurple: 'rgb(156,57,212)',
          tagPurpleBackground: 'rgb(240,225,249)',
          tagWarning: 'rgb(129,80,22)',
          tagWarningBackground: 'rgb(251,236,184)',
          tagError: 'rgb(207,22,22)',
          tagErrorBackground: 'rgb(252,229,221)',
          perkSoftwareStart: 'rgb(255,98,67)',
          perkSoftwareEnd: 'rgb(255,168,67)',
          perkDiscordStart: 'rgb(62,72,194)',
          perkDiscordEnd: 'rgb(88,101,242)',
          perkContentStart: 'rgb(0,94,235)',
          perkContentEnd: 'rgb(100,155,238)',
          perkFileStart: 'rgb(240,0,70)',
          perkFileEnd: 'rgb(253,87,165)',
          perkLinkStart: 'rgb(218,148,44)',
          perkLinkEnd: 'rgb(242,201,53)',
          perkCustomStart: 'rgb(0,180,0)',
          perkCustomEnd: 'rgb(135,226,147)',
          gradientPurpleStart: 'rgb(128,51,201)',
          gradientPurpleMiddle: 'rgb(95,55,182)',
          gradientPurpleEnd: 'rgb(65,42,139)',
          gradientFireStart: 'rgb(154,6,6)',
          gradientFireMiddle: 'rgb(239,69,8)',
          gradientFireEnd: 'rgb(254,223,1)',
          fixedBlack: 'rgb(0,0,0)',
          fixedWhite: 'rgb(255,255,255)',
          avatarStroke: 'rgb(248,248,250)',
          primaryButtonText: 'rgb(255,255,255)',
        },
        },
        fontSize: {
          'paragraph1': '14px',
       
          'paragraph2': '1rem',
        
          'paragraph3': '0.875rem',
          
          'paragraph4': '0.75rem',
        
          'text1': '1rem',
        
          'text2': '0.938rem',
          
          'text3': '0.875rem',
         
          'text4': '0.813rem',
          
          'text5': '0.75rem',
         
          'text6': '0.688rem',
        
          'text7': '0.625rem',
        
          'subtitle1': '1rem',
        
          'subtitle2': '0.938rem',
          
          'subtitle3': '0.875rem',
         
          'subtitle4': '0.813rem',
         
          'subtitle5': '0.75rem',
         
          'subtitle6': '0.688rem',
         
          'subtitle7': '0.625rem',
        
          'button1': '1.063rem',
         
          'button2': '1rem',
        
          'button3': '0.938rem',
         
          'button4': '0.875rem',
          
          'button5': '0.813rem',
          
          'overline1': '0.875rem',
         
          'overline2': '0.813rem',
         
          'overline3': '0.75rem',
         
          'overline4': '0.688rem',
          
          'header1': '2.5rem',
         
          'header2': '2rem',
        
          'header3': '1.5rem',
         
          'header4': '1.125rem',
         
          'header5': '1rem',
         
          'display1': '2.5rem',
          
          'display2': '2rem',
        
          'display3': '1.5rem',
         
          'display4': '1.125rem',
        
          'displayL1': '4.5rem',
         
          'displayL2': '4rem',
          
          'displayL3': '3.5rem',
         
          'displayL4': '3rem',
         
          'mono1': '1.125rem',
        
          'mono2': '1rem',
          
          'mono3': '0.938rem',
         
          'mono4': '0.875rem',
         
          'mono5': '0.813rem',
         
          'mono6': '0.75rem',
         
        },
    },
  },
  plugins: [],
}

