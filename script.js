!DOCTYPE html
html lang=en
head
  meta charset=UTF-8 
  meta name=viewport content=width=device-width, initial-scale=1.0 
  titleMacau Concert STO · Investor Portaltitle
  !-- 引入 Google Fonts (Inter & Roboto Mono) 與 FontAwesome 圖示 --
  link href=httpsfonts.googleapis.comcss2family=Interwght@400;600;800&family=Roboto+Monowght@400;700&display=swap rel=stylesheet
  link rel=stylesheet href=httpscdnjs.cloudflare.comajaxlibsfont-awesome6.4.0cssall.min.css
  link rel=stylesheet href=style.css 
head
body
  header
    h1 class=gradient-texti class=fa-solid fa-microphone-linesi Macau Concert STOh1
    p class=subtitle
      i class=fa-solid fa-network-wiredi Polygon Amoy Testnet · Chain ID 80002br
      span style=display inline-block; margin-top 12px; padding 6px 12px; background rgba(0, 240, 255, 0.1); border 1px solid rgba(0, 240, 255, 0.3); border-radius 8px;
        i class=fa-solid fa-file-contracti 智能合約地址 
        a href=httpsamoy.polygonscan.comaddress0x16e6d8bA0Cc81eB16d553Ae0197864973d242817 target=_blank style=color #00f0ff; text-decoration none; letter-spacing 0.5px; class=mono
          0x16e6d8bA0Cc81eB16d553Ae0197864973d242817 i class=fa-solid fa-arrow-up-right-from-square style=font-size 12px; margin-left 4px;i
        a
      span
    p
    button id=connectBtn class=glow-btni class=fa-brands fa-ethereumi Connect Walletbutton
    p id=walletInfo class=wallet-info monop
  header

  main
    !-- Vault Overview --
    section class=card glass
      h2i class=fa-solid fa-vaulti Vault Overviewh2
      div class=grid
        divspani class=fa-regular fa-id-badgei Current Rolespanb id=userRole class=highlight-bdiv
        divspani class=fa-solid fa-file-signaturei Token Namespanb id=tokenName-bdiv
        divspani class=fa-solid fa-tagi Token Symbolspanb id=tokenSymbol-bdiv
        divspani class=fa-solid fa-chart-piei Total Supplyspanb id=totalSupply class=mono-bdiv
        divspani class=fa-solid fa-chart-linei Total Distributedspanb id=totalRevenue class=mono-bdiv
        divspani class=fa-solid fa-walleti My Balancespanb id=myBalance class=mono highlight-bdiv
        divspani class=fa-solid fa-shield-halvedi Whitelist Statusspanb id=whitelistStatus-bdiv
      div
    section

    !-- Investor Minting --
    section class=card glass
      h2i class=fa-solid fa-coinsi Investor · Purchase Tokensh2
      div class=input-group
        labeli class=fa-solid fa-walleti Recipient Addresslabel
        input id=mintTo type=text placeholder=0x... class=mono 
      div
      div class=input-group
        labeli class=fa-solid fa-money-bill-trend-upi Amount to Purchaselabel
        input id=mintAmount type=number placeholder=e.g. 1000 class=mono 
      div
      button id=mintBtn class=action-btni class=fa-solid fa-hammeri Mint Tokensbutton
      p id=mintStatus class=status monop
    section

   !-- Admin Panel --
    section class=card glass admin-card
      h2i class=fa-solid fa-solar-paneli Admin Panel · System Controlsh2
      div class=input-group
        labeli class=fa-solid fa-user-shieldi 1. KYC Whitelist (Add VIP)label
        input id=whitelistAddress type=text placeholder=Enter VIP Address 0x... class=mono 
      div
      button id=whitelistBtn class=action-btn secondaryi class=fa-solid fa-address-booki Approve VIP Statusbutton
      p id=whitelistStatusMsg class=status monop
      
      hr style=border 0; border-top 1px solid rgba(123, 92, 255, 0.3); margin 24px 0;

      !-- 原有的：票房分紅區 --
      button id=loadRevenueBtn class=action-btn secondaryi class=fa-solid fa-file-invoice-dollari 2. Load concert_revenue.jsonbutton
      pre id=revenuePreview class=preview monoRevenue data not loaded yet...pre
      button id=distributeBtn class=action-btn distribute disabledi class=fa-solid fa-hand-holding-dollari 3. Call distributeRevenue()button
      p id=distributeStatus class=status monop
    section
  main

  script src=httpscdn.jsdelivr.netnpmethers@6.13.2distethers.umd.min.jsscript
  script src=script.jsscript
body
html