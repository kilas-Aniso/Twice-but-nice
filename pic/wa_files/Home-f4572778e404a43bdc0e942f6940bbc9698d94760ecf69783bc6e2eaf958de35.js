(self.webpackJsonp=self.webpackJsonp||[]).push([["Home"],{"./node_modules/@shopify/css-utilities/build/node/index.js":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"classNames",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"variationName",{enumerable:!0,get:function(){return i.variationName}});var n,o=(n=a("./node_modules/classnames/index.js"))&&n.__esModule?n:{default:n},i=a("./node_modules/@shopify/css-utilities/build/node/variation-name.js")},"./node_modules/@shopify/css-utilities/build/node/variation-name.js":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.variationName=function(e,t){const a="number"==typeof t?String(t):`${t[0].toUpperCase()}${t.substring(1)}`;return`${e}${a}`}},"./node_modules/@shopify/css-utilities/index.js":function(e,t,a){e.exports=a("./node_modules/@shopify/css-utilities/build/node/index.js")},"./web/components/LogosMadeSimpleSection/LogosMadeSimpleSection.tsx":function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("./node_modules/react/index.js"),o=a.n(n),i=a("./web/helpers/i18n.ts"),s=a("./web/components/ImageText/ImageText.tsx"),r=a.p+"e826a7bd6d2a11117be5c4fb2d482ea6.jpg";function l(){const[e]=Object(i.b)("Homepage"),t=[e.translate("Homepage.LogoMadeSimple.Paragraph1"),e.translate("Homepage.LogoMadeSimple.Paragraph2"),e.translate("Homepage.LogoMadeSimple.Paragraph3")];return o.a.createElement("section",null,o.a.createElement(s.a,{image:r,title:e.translate("Homepage.LogoMadeSimple.Title"),text:t,alttext:e.translate("Homepage.LogoMadeSimple.ImageAlt"),reverse:!0}))}},"./web/components/TestimonialsSection/TestimonialsSection.tsx":function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a("./node_modules/react/index.js"),o=a.n(n),i=a("./web/helpers/i18n.ts"),s=a("./web/components/CardComponent/CardComponent.tsx"),r=a.p+"718a55c905bd090c52c46e8af7c62fdd.svg",l="_2XuWf",c="tRumJ",m="bcN2D",d="_2W4-9",p="_22GNL",g="_1zsBm",u="_11kx9";function b(){const[e]=Object(i.b)("Homepage"),t=[...Array(6).keys()];return o.a.createElement("section",{className:l,id:"testimonials"},o.a.createElement("h2",{className:m},e.translate("Homepage.Testimonials.Title")),o.a.createElement("div",{className:c},t.map((t=>o.a.createElement(s.a,{key:t},o.a.createElement("div",{className:u},o.a.createElement("img",{src:r,className:d,alt:e.translate("Homepage.Testimonials.5Star")}),o.a.createElement("p",{className:p},e.translate(`Homepage.Testimonials.Testimonial${t+1}.Text`)),o.a.createElement("p",{className:g},e.translate(`Homepage.Testimonials.Testimonial${t+1}.Author`))))))))}},"./web/features/Home/Home.tsx":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return ie}));var n=a("./node_modules/react/index.js"),o=a.n(n),i=a("./node_modules/react-router/esm/react-router.js"),s=a("./node_modules/@shopify/react-network/build/esnext/components/Redirect.esnext"),r=a("./node_modules/@shopify/network/build/esnext/network.esnext"),l=a("./web/helpers/i18n.ts"),c=a("./web/components/ImageText/ImageText.tsx"),m=a.p+"037ee37ac79475692be3cc826e73cdcc.jpg",d=a.p+"7f46518e874f8832088cc82a36e931f1.jpg",p=a.p+"7b898d52ac45dd82e3b1b9a973552e48.jpg";function g(){const[e]=Object(l.b)("Homepage");return o.a.createElement("section",{id:"benefits"},o.a.createElement(c.a,{image:m,title:e.translate("Homepage.Benefits.SectionLogos.Title"),subtitle:e.translate("Homepage.Benefits.SectionLogos.Subtitle"),text:e.translate("Homepage.Benefits.SectionLogos.Text"),alttext:e.translate("Homepage.Benefits.SectionLogos.Image"),reverse:!0}),o.a.createElement(c.a,{image:d,title:e.translate("Homepage.Benefits.SectionBrand.Title"),subtitle:e.translate("Homepage.Benefits.SectionBrand.Subtitle"),text:e.translate("Homepage.Benefits.SectionBrand.Text"),alttext:e.translate("Homepage.Benefits.SectionBrand.Image")}),o.a.createElement(c.a,{image:p,title:e.translate("Homepage.Benefits.SectionAudience.Title"),subtitle:e.translate("Homepage.Benefits.SectionAudience.Subtitle"),text:e.translate("Homepage.Benefits.SectionAudience.Text"),alttext:e.translate("Homepage.Benefits.SectionAudience.Image"),reverse:!0}))}var u=a("./web/components/CardComponent/CardComponent.tsx"),b=a.p+"d4bd2adab19561c4303698d516577b7c.png",h=a.p+"4a14e7b2de7f6eaf5a6c98cb8c00b8de.png",f=a.p+"525858954db2db7a24eb0d1070d316de.png",S=a.p+"0d70200090b21d6e0d3fde7eb894b303.png",x=a.p+"7e55eb3d6a1a096058955ae7d64ee9d5.png",y=a.p+"aff2c7c41798a9e8d510293d676b1308.png",v=a.p+"45cf387098ad46bd9ea51bc56d1eb166.png",E=a.p+"b251bccd4dd602b7f894cea11547f1fb.png",I=a.p+"fcbdd3a228648ac062e4977b0eda8c76.png",_=a.p+"ef27eb63d05f168ce948e3d43c9ba9d0.png",H="eqqMx",w="_2yzGA",T="_5_3mm",k="_1e0mA";function F(){const[e]=Object(l.b)("Homepage"),t=[{image:b},{image:h},{image:f},{image:S},{image:x},{image:y},{image:v},{image:E},{image:I},{image:_}];return o.a.createElement("section",{className:H,id:"logos"},o.a.createElement("h2",{className:k},e.translate("Homepage.Templates.Title")),o.a.createElement("div",{className:w},t.map((({image:t})=>o.a.createElement(u.a,{key:`${t}`,className:T},o.a.createElement("img",{src:t,alt:e.translate("Homepage.Templates.SampleLogo")}))))))}var C=a("./web/components/TestimonialsSection/TestimonialsSection.tsx"),L=a("./web/helpers/localstorage/localStorage.ts"),j={"SlideInRight-appear":"_126kf","SlideInRight-appear-active":"_3Wj3C","SlideInRight-enter":"_2psd2","SlideInRight-enter-active":"_2m36f","SlideInLeft-appear":"_3lC54","SlideInLeft-appear-active":"_1-oWw","SlideInLeft-enter":"bGs1z","SlideInLeft-enter-active":"_2QHqU","SlideInTop-appear":"_2ZO4Y","SlideInTop-appear-active":"CkuHu","SlideInTop-enter":"hgT6l","SlideInTop-enter-active":"_2zbUD","SlideInBottom-appear":"_3LAn8","SlideInBottom-appear-active":"_3lYBJ","SlideInBottom-enter":"_3Laee","SlideInBottom-enter-active":"_1CQcS",wrapper:"_3sKZL",wrapperList:"_3uDJG",grid:"wbTq2",list:"_1nqOd",HeaderSecondary:"_1IrTD",FAQQuestionsContainer:"gAP0w",padding:"_1HIx8",paddingList:"p3Hbh",collapsedPaddingList:"NKpxh",questionHeaderRow:"_2hccz",questionHeaderRowTitle:"CfcDr",questionHeaderRowIconArea:"_1OPil",questionHeaderRowIcon:"_3wcBQ",linkToFaqItem:"Q3yuM"},A=o.a.createElement("path",{d:"M17 9h-6V3a1 1 0 1 0-2 0v6H3a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2z"}),N=function(e){return o.a.createElement("svg",Object.assign({viewBox:"0 0 20 20"},e),A)},B=o.a.createElement("path",{d:"M15 9H5a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2z"}),P=function(e){return o.a.createElement("svg",Object.assign({viewBox:"0 0 20 20"},e),B)},q=a("./node_modules/@shopify/polaris/dist/esnext/components/Icon/Icon.tsx.esnext"),$=a("./node_modules/@shopify/polaris/dist/esnext/components/Collapsible/Collapsible.tsx.esnext"),O=a("./node_modules/@shopify/css-utilities/index.js"),M=a("./node_modules/react-router-hash-link/dist/react-router-hash-link.esm.js");function R(){const[e]=Object(l.b)("Homepage"),t=["free","reason","logoAddition","mechanics","goodLogo","sharing","byShopify"],a=new Map;a.set("free",{seoKey:"is-the-hatchful-logo-maker-free",question:"Homepage.Faq.free.heading",expanded:!0}),a.set("reason",{seoKey:"why-choose-the-hatchful-logo-creator",question:"Homepage.Faq.reason.heading",expanded:!0}),a.set("logoAddition",{seoKey:"can-you-add-a-slogan-to-the-logo-on-hatchful",question:"Homepage.Faq.logoAddition.heading",expanded:!0}),a.set("mechanics",{seoKey:"how-does-the-hatchful-logo-maker-work",question:"Homepage.Faq.mechanics.heading",expanded:!0}),a.set("goodLogo",{seoKey:"what-makes-a-good-logo",question:"Homepage.Faq.goodLogo.heading",expanded:!0}),a.set("sharing",{seoKey:"where-can-i-share-my-new-logo",question:"Homepage.Faq.sharing.heading",expanded:!0}),a.set("byShopify",{seoKey:"hatchful-is-a-free-logo-maker-created-by-shopify",question:"Homepage.Faq.byShopify.heading",expanded:!0});const[i,s]=Object(n.useState)(a),r=e=>{let t={...i.get(e)};t.expanded=!t.expanded;let a=new Map(i);a.set(e,t),s(a)};return o.a.createElement("section",{className:j.wrapperList,itemScope:!0,itemType:"https://schema.org/FAQPage"},o.a.createElement("div",{className:j.FAQHeaderContainer},o.a.createElement("h2",{className:j.HeaderSecondary},e.translate("Homepage.Faq.headingExpended")),o.a.createElement("div",{className:j.FAQQuestionsContainer},t.map((t=>{let a=i.get(t),n=`#${null==a?void 0:a.seoKey}`;return e.translationKeyExists(a.question)?o.a.createElement("div",{id:`linkTo${null==a?void 0:a.seoKey}`,className:j.linkToFaqItem},o.a.createElement(M.a,{smooth:!0,to:n},e.translate(a.question))):o.a.createElement(o.a.Fragment,null)})))),o.a.createElement("div",{className:j.list},t.map((t=>{let a=i.get(t);return o.a.createElement(u.a,{key:t},o.a.createElement("div",{id:null==a?void 0:a.seoKey,className:Object(O.classNames)(j.paddingList,{[j.collapsedPaddingList]:!a.expanded}),itemScope:!0,itemProp:"mainEntity",itemType:"https://schema.org/Question"},o.a.createElement("div",{className:j.questionHeaderRow},o.a.createElement("div",{className:j.questionHeaderRowTitle},o.a.createElement("h3",{itemProp:"name"},e.translate(a.question))),o.a.createElement("div",{className:j.questionHeaderRowIconArea,onClick:()=>r(t),onKeyDown:()=>r(t)},o.a.createElement("div",{className:j.questionHeaderRowIcon},(e=>{let t=o.a.createElement(q.a,{source:N,color:"subdued"}),a=o.a.createElement(q.a,{source:P,color:"subdued"});return e?a:t})(a.expanded)))),o.a.createElement($.a,{open:a.expanded,id:"basic-collapsible",transition:{duration:"250ms",timingFunction:"ease-in-out"},expandOnPrint:!0},o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{itemScope:!0,itemProp:"acceptedAnswer",itemType:"https://schema.org/Answer"},e.translationKeyExists(`Homepage.Faq.${t}.content`)&&o.a.createElement("span",{itemProp:"text"},e.translate(`Homepage.Faq.${t}.content`))),o.a.createElement("span",{itemScope:!0,itemProp:"acceptedAnswer",itemType:"https://schema.org/Answer"},e.translationKeyExists(`Homepage.Faq.${t}.htmlContent`)&&o.a.createElement("span",{itemProp:"text",dangerouslySetInnerHTML:{__html:e.translate(`Homepage.Faq.${t}.htmlContent`)}}),e.translationKeyExists(`Homepage.Faq.${t}.htmlContentSecondary`)&&o.a.createElement("span",{itemProp:"text",dangerouslySetInnerHTML:{__html:e.translate(`Homepage.Faq.${t}.htmlContentSecondary`)}}))))))}))))}const K=({listType:e,children:t})=>"ol"===e?o.a.createElement("ol",null,t):o.a.createElement("ul",null,t);function z(){const[e]=Object(l.b)("Homepage"),t={how:"ol",good:"ul"};return"en"==(Object(L.a)("locale")||"en")?o.a.createElement(R,null):o.a.createElement("section",{className:j.wrapper,itemScope:!0,itemType:"https://schema.org/FAQPage"},o.a.createElement("h2",{className:j.HeaderSecondary},e.translate("Homepage.Faq.heading")),o.a.createElement("div",{className:j.grid},["price","slogan","how","good","time"].map((a=>{let n;try{n=e.translate(`Homepage.Faq.${a}.list`)}catch(i){}return o.a.createElement(u.a,{key:a},o.a.createElement("div",{className:j.padding,itemScope:!0,itemProp:"mainEntity",itemType:"https://schema.org/Question"},o.a.createElement("h3",{itemProp:"name"},e.translate(`Homepage.Faq.${a}.heading`)),o.a.createElement("p",{itemScope:!0,itemProp:"acceptedAnswer",itemType:"https://schema.org/Answer"},o.a.createElement("span",{itemProp:"text"},e.translate(`Homepage.Faq.${a}.content`))),n&&o.a.createElement(K,{listType:t[a]},o.a.createElement(o.a.Fragment,null,n.split(";").map((e=>o.a.createElement("li",{key:e},e)))))))}))))}var Q=a("./web/components/FeaturesSection/FeaturesSection.tsx"),W=a("./web/components/WhatAreYouWaitingForSection/WhatAreYouWaitingForSection.tsx"),G=a("./web/components/Hero/Hero.tsx"),J=a("./web/components/IndustrySection/IndustrySection.tsx"),Y=a("./web/components/LogosMadeSimpleSection/LogosMadeSimpleSection.tsx"),D=a("./node_modules/classnames/index.js"),V=a.n(D),U=a("./web/components/Button/Button.tsx"),Z=a("./web/helpers/monorail/monorail.ts"),X={"SlideInRight-appear":"gF8Ez","SlideInRight-appear-active":"_2Gu6o","SlideInRight-enter":"_1j9a8","SlideInRight-enter-active":"_2pD8N","SlideInLeft-appear":"qucg8","SlideInLeft-appear-active":"xuOaU","SlideInLeft-enter":"_2xVYu","SlideInLeft-enter-active":"_2E2yW","SlideInTop-appear":"AtkwB","SlideInTop-appear-active":"_1kHEJ","SlideInTop-enter":"kbGmc","SlideInTop-enter-active":"_3lR35","SlideInBottom-appear":"_Imix","SlideInBottom-appear-active":"WJtpZ","SlideInBottom-enter":"_2XATV","SlideInBottom-enter-active":"_2Ipvt",wrapper:"_2Ve0f",title:"_2wHPL",titleContainer:"_3lr7C",subtitle:"_1IGoa",sectionText:"lNVPM",flexReverse:"_1VZm4",imageContainer:"_1l_8d",image:"_2cIQ2","text-container":"vCpJ6",paragraphs:"KHQrY",ButtonContainer:"_2LmxQ"},ee=a.p+"a97374cfd2e03a6a06033cb3c0714a5c.png";function te({title:e,imageAltText:t,content:a,reverse:n,tight:s,ctaButtonText:r}){const l=Object(i.g)();return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:X.titleContainer},o.a.createElement("h2",{className:X.title},e)),o.a.createElement("div",{className:V()(X.wrapper,{[X.flexReverse]:n,[X.tight]:s})},o.a.createElement("div",{className:X.imageContainer},o.a.createElement("img",{className:X.image,src:ee,alt:t})),o.a.createElement("div",{className:X["text-container"]},Array.isArray(a)&&o.a.createElement(o.a.Fragment,null,a.map((e=>o.a.createElement("div",{className:X.paragraphs,key:e.subtitle},o.a.createElement("p",{className:X.subtitle,key:e.subtitle},e.subtitle),o.a.createElement("p",{className:X.sectionText,key:e.text},e.text))))))),o.a.createElement("div",{className:X.ButtonContainer},o.a.createElement(U.a,{size:"large",onClick:async()=>(Object(Z.b)({urlPath:window.location.pathname}),l.push("/tools/logo-maker/onboarding/pick-space")),uppercase:!0,className:X.BannerButton},r)))}var ae=a("./web/components/Footer/Footer.tsx"),ne=a("./web/helpers/hatchfulRoutes.ts"),oe=a("./web/foundation/App.tsx");function ie(){const[e]=Object(l.b)("Homepage"),t=Object(i.g)(),a=Object(i.h)(),c=Object(ne.b)(a.pathname),m=Object(n.useContext)(oe.b)||"en";var d;if("undefined"!=typeof window&&(m&&(null===(d=window.location)||void 0===d?void 0:d.pathname)===`/${m}`))return t.push("/"),o.a.createElement(s.a,{url:"/",code:r.b.MovedPermanently});const p="en"===m?[{anchor:"Art logos",link:"/tools/logo-maker/art"},{anchor:"Drink logos",link:"/tools/logo-maker/drink"},{anchor:"Fitness logos",link:"/tools/logo-maker/fitness"},{anchor:"Garden logos",link:"/tools/logo-maker/garden"},{anchor:"Media logos",link:"/tools/logo-maker/media"},{anchor:"Social media logos",link:"/tools/logo-maker/social-media"},{anchor:"Technology logos",link:"/tools/logo-maker/technology"},{anchor:"Other logos",link:"/tools/logo-maker/other"},{anchor:"Logos by Color",link:"/tools/logo-maker/color"},{anchor:"Logos by Style",link:"/tools/logo-maker/style"}]:[];return o.a.createElement("main",{className:"Main"},o.a.createElement(G.a,{kicker:e.translate("Homepage.Banner.Kicker"),title:e.translate("Homepage.Banner.Title"),text:e.translate("Homepage.Banner.Subtitle"),ctaText:e.translate("Homepage.CTA.GetStarted"),ctaLink:`${c}onboarding/pick-space`,localeProp:m}),o.a.createElement(F,null),o.a.createElement(g,null),o.a.createElement(Q.a,null),"en"===m&&o.a.createElement(te,{title:e.translate("Homepage.CreateALogoForFreeSection.Title"),imageAltText:e.translate("Homepage.CreateALogoForFreeSection.ImageAltText"),content:[{subtitle:e.translate("Homepage.CreateALogoForFreeSection.Subheading1"),text:e.translate("Homepage.CreateALogoForFreeSection.Content1")},{subtitle:e.translate("Homepage.CreateALogoForFreeSection.Subheading2"),text:e.translate("Homepage.CreateALogoForFreeSection.Content2")},{subtitle:e.translate("Homepage.CreateALogoForFreeSection.Subheading3"),text:e.translate("Homepage.CreateALogoForFreeSection.Content3")}],reverse:!0,ctaButtonText:e.translate("Homepage.CreateALogoForFreeSection.CTAButtonText")}),o.a.createElement(C.a,null),o.a.createElement(Y.a,null),o.a.createElement(J.a,{additionalLinks:p}),o.a.createElement(z,null),o.a.createElement(W.a,null),o.a.createElement(ae.a,null))}},"./web/features/Industries/Industries.tsx":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return R}));var n=a("./node_modules/react/index.js"),o=a.n(n),i=a("./web/helpers/i18n.ts"),s=a("./node_modules/react-router/esm/react-router.js"),r=a("./web/components/Hero/Hero.tsx"),l=a("./web/components/TestimonialsSection/TestimonialsSection.tsx"),c=a("./web/components/FeaturesSection/FeaturesSection.tsx"),m=a("./web/components/WhatAreYouWaitingForSection/WhatAreYouWaitingForSection.tsx"),d=a("./web/components/IndustrySection/IndustrySection.tsx"),p=a("./web/components/LogosMadeSimpleSection/LogosMadeSimpleSection.tsx"),g=a("./web/components/ImageText/ImageText.tsx"),u=a("./web/helpers/industryPages.ts"),b=a("./web/components/Footer/Footer.tsx"),h=a("./web/helpers/hatchfulRoutes.ts"),f=a("./node_modules/@shopify/react-network/build/esnext/components/Redirect.esnext"),S=a("./node_modules/@shopify/network/build/esnext/network.esnext"),x=a.p+"c320fcd334a44f29cd4cb92f5c603f66.png",y=a.p+"bf6b34141589463d2679c84571638b1d.png",v=a.p+"1bc9352e41ca703dca2199d7a4cbf16e.jpg",E=a.p+"760f0e29f73651b55d33dc71134c1c97.jpg",I=a.p+"3d1ef8b4e0dfb49976dbd8b129676362.jpg",_=a.p+"450016d6b74ac2dbedaf0a7df20c81a1.jpg",H=a.p+"07c2d1925c011c5bea8ccabbf7bb5704.png",w=a.p+"cc2a407286eb5e92bd0ab07e9b577872.png",T=a.p+"ddcd7b3df80743cc054b9c4bb1dd0f87.jpg",k=a.p+"1eb0517aa76adf44f05ecd2c7ab559dc.jpg",F=a.p+"e386975789b98c50fb81cbb3d9a59f08.jpg",C=a.p+"bc37620c6f94875de8d6bae6ebc9ab3a.jpg",L=a.p+"2380febfc147e67c8fa3197b44f72213.png",j=a.p+"8b9db07b84e227a37bca9fd882e3b0d1.png",A=a.p+"dc01fd147f3c0a17baea0e682f5e60f9.png",N=a.p+"6815134f8b0e8c386c6a39032e5cff60.png",B=a.p+"184a876ff7c9ccd495125f2ec92a766a.png",P=a.p+"6005f58e823d3dc80f019d163fef9ba3.png";var q={clothing:{img:x,img2x:y},beauty:{img:H,img2x:w},"electronics-gadgets":{img:I,img2x:_},fashion:{img:x,img2x:y},food:{img:v,img2x:E},furniture:{img:T,img2x:k},health:{img:H,img2x:w},home:{img:T,img2x:k},restaurant:{img:v,img2x:E},sports:{img:F,img2x:C},"telecom-service":{img:I,img2x:_},service:{img:B,img2x:P},"business-services":{img:B,img2x:P},photography:{img:B,img2x:P},"financial-services":{img:B,img2x:P},graphic1:{img:L,img2x:j},graphic2:{img:A,img2x:N}},$=a("./web/helpers/hatchfulPathsMappings.json"),O=a("./web/features/Industries/industriesMappings.json"),M={"SlideInRight-appear":"_38iKQ","SlideInRight-appear-active":"_1r-v2","SlideInRight-enter":"_3GflC","SlideInRight-enter-active":"_15GeB","SlideInLeft-appear":"_1MlXa","SlideInLeft-appear-active":"_2S7RP","SlideInLeft-enter":"_20Zdx","SlideInLeft-enter-active":"LTU_n","SlideInTop-appear":"_1a8Br","SlideInTop-appear-active":"lcSeQ","SlideInTop-enter":"_2dA1m","SlideInTop-enter-active":"KT3iP","SlideInBottom-appear":"_2xLcS","SlideInBottom-appear-active":"_3FbNK","SlideInBottom-enter":"_16qWv","SlideInBottom-enter-active":"_287Rs",CategoryFashionClothing:"_2YNzj",CategoryHealthBeauty:"_4SWX1",CategoryHome:"x82ya",CategoryFood:"_2oQRu",CategorySports:"a-Eys",CategoryElectronics:"_2sbw-",CategoryGeneric:"_12MKn"};function R({locale:e}){const[t]=Object(i.b)("Industry"),a=Object(s.h)(),n=Object(h.b)(a.pathname),x=$,{translationKey:y,bannerCategory:v,industry:E,additionalLinks:I}=(e=>{const t=O,a=Object(s.h)();let n,o=["/logo-maker","/createur-de-logo","/creatore-di-logo","/criador-de-logo","/generador-de-logos"].find((e=>!!a.pathname.includes(e)));return n=a.pathname.split(`${o}`)[1].replace("/",""),"/logo-maker"!==o&&(n=t[n]),u.a[n]?{translationKey:u.a[n].translationKey,bannerCategory:u.a[n].bannerCategory,industry:n,additionalLinks:"en"===e?u.a[n].additionalLinks:[]}:{translationKey:"",bannerCategory:"",industry:""}})(e),_=Object(s.g)();if(!y)return _.push(`/${x[e]["tools/logo-maker/not-found"]}`),o.a.createElement(f.a,{url:`/${x[e]["tools/logo-maker/not-found"]}`,code:S.b.NotFound});const H=[t.translate(`Industry.${y}.Sections.Section1.Paragraphs.Paragraph1`),t.translate(`Industry.${y}.Sections.Section1.Paragraphs.Paragraph2`)],w=[t.translate(`Industry.${y}.Sections.Section2.Paragraphs.Paragraph1`),t.translate(`Industry.${y}.Sections.Section2.Paragraphs.Paragraph2`)],T=[t.translate(`Industry.${y}.Sections.Section3.Paragraphs.Paragraph1`),t.translate(`Industry.${y}.Sections.Section3.Paragraphs.Paragraph2`)];return o.a.createElement("main",{className:"Main"},o.a.createElement(r.a,{type:"secondary",title:t.translate(`Industry.${y}.Banner.Header`),text:t.translate(`Industry.${y}.Banner.Caption`),ctaText:t.translate("Industry.CTA"),ctaLink:`${n}onboarding/pick-space`,backgroundClass:M[v],localeProp:e}),o.a.createElement("section",null,o.a.createElement(g.a,{image:q[E].img,title:t.translate(`Industry.${y}.Sections.Section1.Title`),subtitle:t.translate(`Industry.${y}.Sections.Section1.Subtitle`),text:H,alttext:t.translate(`Industry.${y}.Sections.Section1.Title`),reverse:!0,tight:!0}),o.a.createElement(g.a,{image:q.graphic2.img,title:t.translate(`Industry.${y}.Sections.Section2.Title`),subtitle:t.translate(`Industry.${y}.Sections.Section2.Subtitle`),text:w,alttext:t.translate(`Industry.${y}.Sections.Section2.Title`),tight:!0}),o.a.createElement(g.a,{image:q.graphic1.img,title:t.translate(`Industry.${y}.Sections.Section3.Title`),subtitle:t.translate(`Industry.${y}.Sections.Section3.Subtitle`),text:T,alttext:t.translate(`Industry.${y}.Sections.Section3.Title`),reverse:!0,tight:!0})),o.a.createElement(c.a,null),o.a.createElement(l.a,null),o.a.createElement(p.a,null),o.a.createElement(d.a,{additionalLinks:I||[]}),o.a.createElement(m.a,null),o.a.createElement(b.a,null))}},"./web/features/Industries/industriesMappings.json":function(e){e.exports=JSON.parse('{"beaute":"beauty","services-aux-entreprises":"business-services","vetements":"clothing","gadgets-electroniques":"electronics-gadgets","mode":"fashion","services-financiers":"financial-services","alimentation":"food","meubles":"furniture","sante":"health","decoration-interieur":"home","photographie":"photography","restaurant":"restaurant","service":"service","sports":"sports","service-telecom":"telecom-service","beauty":"beauty","servizi-per-aziende":"business-services","abbigliamento":"clothing","dispositivi-elettronici":"electronics-gadgets","servizi-finanziari":"financial-services","alimentare":"food","arredamento":"furniture","salute":"health","casa":"home","ristorante":"restaurant","servizi":"service","sport":"sports","servizi-telecomunicazione":"telecom-service","beleza":"beauty","empresas":"business-services","roupas":"clothing","eletronicos":"electronics-gadgets","financas":"financial-services","moveis":"furniture","saude":"health","casa-e-decoracao":"home","servicos":"service","esportes":"sports","telecomunicacao":"telecom-service","belleza":"beauty","servicios-para-empresas":"business-services","ropa":"clothing","gadgets":"electronics-gadgets","moda":"fashion","servicios-financieros":"financial-services","comida":"food","muebles":"furniture","salud":"health","hogar":"home","fotografia":"photography","restaurante":"restaurant","servicios":"service","deportes":"sports","servicio-de-telecomunicacion":"telecom-service"}')}}]);