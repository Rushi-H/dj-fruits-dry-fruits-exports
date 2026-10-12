"use client"

import * as React from "react"
import WaterRippleCarousel, { type Slide } from "@/components/ui/water-ripple-carousel"
import { Waves } from "lucide-react"

interface FruitsCarouselProps {
  lang?: 'en' | 'mr'
  className?: string
}

export default function FruitsCarousel({ lang = 'en', className = '' }: FruitsCarouselProps) {
  const isMr = lang === 'mr'

  // Curated slides featuring fresh fruits & dry fruits with same-origin fallback assets
  const fruitSlides: Slide[] = React.useMemo(() => [
    {
      image: "/images/grapes.jpg",
      title: isMr ? "थॉमसन सिडलेस द्राक्षे" : "Export Thompson Grapes",
      caption: isMr 
        ? "सांगली व तासगाव पट्ट्यातील १६ मिमी+ मणी व उच्च ब्रिक्स गोडवा असलेली ताजी द्राक्षे."
        : "Direct Krishna valley harvest: 16mm+ berry diameter, 18°+ Brix sweetness, export Grade-A sort.",
      alt: "Fresh Green Grapes from Sangli"
    },
    {
      image: "/images/pomegranate.jpg",
      title: isMr ? "भगवा डाळिंब" : "Bhagwa Pomegranate",
      caption: isMr
        ? "सोलापूर व आटपाडी भागातील चमकदार लाल दाण्यांचे आणि मऊ बियांचे दर्जेदार भगवा डाळिंब."
        : "Solapur & Sangola belt: deep ruby arils, sweet soft seeds, flawless rind for global export.",
      alt: "Fresh Bhagwa Pomegranate"
    },
    {
      image: "/images/raisins.jpg",
      title: isMr ? "सांगली-तासगाव पिवळा बेदाणा" : "Sangli Golden Raisins",
      caption: isMr
        ? "नैसर्गिक शेड वाळवण पद्धतीमध्ये तयार केलेला शुद्ध आणि गोड पिवळा व हिरवा बेदाणा."
        : "Tasgaon shed drying beds: 100% naturally processed, AAA export quality golden kishmish.",
      alt: "Sangli Golden Raisins"
    },
    {
      image: "/images/almonds.jpg",
      title: isMr ? "कॅलिफोर्निया व मामरा बदाम" : "California & Mamra Almonds",
      caption: isMr
        ? "घाऊक वितरण व पॅकिंगसाठी निवडक, एकसमान आकाराचे गोड संपूर्ण बदाम गर."
        : "Hand-sorted whole kernels: Nonpareil 27/30 count, crisp crunch, zero bitter pieces.",
      alt: "Jumbo Almonds"
    },
    {
      image: "/images/dates.jpg",
      title: isMr ? "शाही मेदजूल खजूर" : "Royal Medjool Dates",
      caption: isMr
        ? "सण-उत्सव आणि घाऊक विक्रीसाठी नैसर्गिक मऊ, रसाळ आणि जम्बो आकाराचे खजूर."
        : "Succulent caramel texture, jumbo size, high natural sugars, premium festive lots.",
      alt: "Royal Medjool Dates"
    },
    {
      image: "/images/cashews.jpg",
      title: isMr ? "कोकण काजू गर (W-240)" : "Konkan Coast Cashews",
      caption: isMr
        ? "पांढरे शुभ्र, कुरकुरीत आणि एकसमान आकाराचे संपूर्ण एक्सपोर्ट-ग्रेड काजू गर."
        : "Vengurla & Ratnagiri origin: W-180 and W-240 jumbo whole white cashew kernels.",
      alt: "Jumbo White Cashews"
    }
  ], [isMr])

  return (
    <div className={`relative w-full overflow-hidden bg-[#061811] text-white ${className}`}>
      {/* 3D Visual Water-Ripple Canvas Carousel */}
      <WaterRippleCarousel
        slides={fruitSlides}
        height="65svh"
        duration={1800}
        strength={1.25}
        autoplay={5500}
        ink="#E8F5E9"
        ariaLabel={isMr ? "३D फळे व सुका मेवा कॅरोसेल" : "3D Fruits & Dry Fruits Ripple Showcase"}
      />

      {/* Floating 3D Interaction Badge */}
      <div className="absolute top-5 left-5 md:top-7 md:left-8 z-20 pointer-events-none">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0F3B2C]/80 border border-[#8FBF6A]/50 backdrop-blur-md text-[#8FBF6A] text-xs font-semibold shadow-lg tracking-wide">
          <Waves className="w-4 h-4 animate-pulse text-[#8FBF6A]" />
          <span>{isMr ? "३D वॉटर रिपल: फोटोवर कुठेही टॅप करा" : "3D WebGL Ripple: Tap image anywhere"}</span>
        </div>
      </div>
    </div>
  )
}
