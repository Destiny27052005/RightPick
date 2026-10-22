import { useState } from "react";
import { ArrowRight, Check, ChevronDown, ChevronUp, CircleCheck, Keyboard, User, Zap } from "lucide-react";

const testimonial = [
    {
        id: "OA",
        name: "Engr. Olumide Adeleke",
        location: "FUNAAB, Ogun State",
        comment: "RightPick saved us millions. Before using their sizing engine, two local contractors recommended an undersized 3.5kVA system that would have blown under our inverter air conditioner start-up surge. RightPick accurately configured our 8kW setup with proper battery DoD. Flawless execution!"
    },
    {
        id: "FA",
        name: "Dr. Folashade Adebayo",
        location: "Bodija, Ibadan",
        comment: "The precision of the load audit tool is unmatched. It correctly factored our peak sun hours and DisCo tariff tiers. Our home has been running smoothly off-grid for months without a single inverter trip."
    },
    {
        id: "KO",
        name: "Kazeem Olayinka",
        location: "Abeokuta, Ogun State",
        comment: "From the pre-dispatch IV curve testing to doorstep delivery with full GPS tracking, the transparency gave me total peace of mind. Excellent engineering standards!"
    }
];

function Index() {
    const [openIndex, setOpenIndex] = useState(0);
    const [isActive, setIsActive] = useState(0);

    const faqs = [
        {
            question: "What should I expect during my initial consultation?",
            answer: "Our solar engineering consultation encompasses conducting comprehensive real-time load demand audits, rooftop azimuth orientation, tilt angle shading analysis, and local DisCo tariff tier evaluations to ensure zero over-spending and optimal system sizing."
        },
        {
            question: "How does it differ from basic calculations?",
            answer: "Unlike generic rules of thumb, our precision sizing engine accounts for inductive start-up surges (such as air conditioners and water pumps), temperature derating coefficients, inverter efficiency curves, and accurate battery depth of discharge (DoD) limits."
        },
        {
            question: "What is the typical timeline for system delivery and installation?",
            answer: "Standard component delivery across major Nigerian states typically spans 3 to 7 business days following pre-dispatch IV testing. Full professional installation by COREN-certified engineers generally takes 1 to 3 days depending on system capacity."
        }
    ];

    return (
        <main className="px-4 sm:px-8 lg:px-12 overflow-x-hidden">
            {/* Hero section */}
            <section id="home" className="min-h-screen flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-16 py-18">
                <div className="space-y-6 lg:space-y-8 max-w-2xl">
                    <div className="w-fit flex items-center gap-2 text-[#166534] bg-[#F0FDF4] border border-[#e5e7eb] rounded-2xl px-3 py-1 text-xs sm:text-sm font-medium">
                        <span className="w-2 h-2 bg-[#22C55E] rounded-full shrink-0"></span> PRECISION SOLAR ENERGY PLATFORM NIGERIA
                    </div>
                    <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight">
                        Choose Wisely <br />
                        <span className="bg-linear-to-t from-[#047857] via-green-500 to-[#16A34A] bg-clip-text text-transparent">Remove uncertainty</span>
                    </h1>
                    <p className="text-[#4B5563] text-base sm:text-lg">Pick the right solar system that best suits your household from your own comfort.</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="border border-[#D1D5DB] flex items-center justify-center gap-2 rounded-xl px-6 py-3 cursor-pointer hover:bg-gray-50 transition">
                            <img src="/youtube.png" alt="" className="w-5 h-5" /> Watch Video
                        </button>
                        <button className="bg-[#16A34A] text-white flex items-center justify-center gap-2 rounded-xl px-6 py-3 cursor-pointer hover:bg-green-700 transition">
                            Free Demo <ArrowRight className="h-4 w-4" />
                        </button>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 border-t border-[#E5E7EBCC] pt-6">
                        <p className="text-xs sm:text-sm font-semibold text-[#4B5563]">AVAILABLE ON:</p>
                        <div className="flex items-center gap-3">
                            <img src="/google_play.png" alt="Google Playstore" className="h-9" />
                            <img src="/app_store.png" alt="Apple Store" className="h-9" />
                        </div>
                    </div>
                </div>
                <div className="relative w-full max-w-md lg:max-w-lg flex justify-center">
                    <div className="w-56 sm:w-72 absolute -top-10 -left-5 lg:-left-15 -z-10 h-56 sm:h-72 bg-[#FACC1533] rounded-full blur-2xl"></div>
                    <img src="/live_load.png" alt="Life load" className="z-30 w-full h-auto object-contain" />
                    <div className="w-56 sm:w-72 h-56 sm:h-72 -bottom-10 -right-5 lg:-right-15 -z-10 absolute bg-[#22C55E33] rounded-full blur-2xl"></div>
                </div>
            </section>

            {/* Services section */}
            <section id="services" className="space-y-16 lg:space-y-24 border-y border-[#F3F4F6] py-16 lg:py-24">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-[#030712] font-extrabold text-3xl sm:text-4xl text-center">Services</h2>
                    <p className="text-[#4b5563] text-center mt-2 text-sm sm:text-base">Engineered end-to-end solar infrastructure tailored to real power realities in Nigeria.</p>
                </div>

                {/* Service 1 */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
                    <div className="w-full lg:max-w-xl border border-[#D1FAE5] shadow-md rounded-2xl space-y-6 p-6 sm:p-8">
                        <div className="flex gap-3 items-center border-b border-[#F3F4F6] rounded-2xl pb-4">
                            <div className="w-fit text-[#047857] bg-[#D1FAE5] text-base font-bold p-2.5 rounded-lg">kW</div>
                            <div>
                                <h3 className="text-[#111827] text-sm sm:text-base font-bold">Maximum Load Voltage</h3>
                                <p className="text-[#6B7280] text-xs sm:text-sm">Peak Sun: 5.2 hrs/day</p>
                            </div>
                        </div>
                        <div>
                            <table className="w-full font-bold space-y-3">
                                <tbody className="space-y-2 block">
                                    <tr className="w-full flex justify-between bg-[#F9FAFB] rounded-lg p-3 text-xs sm:text-sm">
                                        <td className="text-[#374151]">Depth of Discharge (DoD)</td>
                                        <td className="text-[#15803D] font-bold text-right">80% Tubular Lead Acid</td>
                                    </tr>
                                    <tr className="w-full flex justify-between bg-[#F9FAFB] rounded-lg p-3 text-xs sm:text-sm">
                                        <td className="text-[#374151]">System Losses & Derating</td>
                                        <td className="text-[#D97706] font-bold text-right">18.5% factored</td>
                                    </tr>
                                    <tr className="w-full flex justify-between bg-[#F9FAFB] rounded-lg p-3 text-xs sm:text-sm">
                                        <td className="text-[#374151]">Required Battery Capacity</td>
                                        <td className="text-[#15803D] font-bold text-right">200Ah @ 48V</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-[#16A34A] text-xs sm:text-sm flex items-center justify-center gap-2 text-center"><CircleCheck className="shrink-0" /> Verified against national grid voltage spikes</p>
                    </div>
                    <div className="w-full lg:max-w-xl space-y-6">
                        <h3 className="font-bold text-2xl sm:text-3xl text-[#111827]">Solar Panel Sizing</h3>
                        <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed">We assist you in picking the right inverter and panels. Account for daily energy demand, peak sun hours, system losses, and the energy needed to recharge the battery. Calculate capacity using the daily energy requirement, desired backup duration, battery voltage, usable depth of discharge, and conversion losses.</p>
                        <button className="bg-[#F3F4F6] font-semibold border border-[#E5E7EB] shadow-md rounded-xl cursor-pointer px-6 py-3 hover:bg-gray-100 transition">See how it works</button>
                    </div>
                </div>

                {/* Service 2 */}
                <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-24 items-center">
                    <div className="w-full lg:max-w-xl space-y-6">
                        <h3 className="text-[#111827] font-bold text-2xl sm:text-3xl">Delivery</h3>
                        <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed">We assist you in picking the right inverter and panel, accounting for daily energy demand, peak sun hours, system losses, and safe certified transport across Nigerian states directly to your doorstep. We coordinate bonded shipping, insured in-transit logistics, and pre-delivery inspection.</p>
                        <button className="bg-[#F3F4F6] font-semibold border border-[#E5E7EB] shadow-md rounded-xl cursor-pointer px-6 py-3 hover:bg-gray-100 transition">See how it works</button>
                    </div>

                    <div className="w-full lg:max-w-xl border border-[#FEF3C7CC] rounded-2xl p-6 sm:p-8 space-y-8 bg-white shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                            <h3 className="text-[#111827] text-sm sm:text-base font-bold">Insured State-wide Transport</h3>
                            <span className="w-fit text-[#92400E] font-medium bg-[#FEF3C7] flex items-center gap-1.5 rounded-2xl px-2.5 py-1 text-xs">GPS Tracked <span className="h-2 w-2 bg-[#F59E0B] rounded-full"></span></span>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-[#F0FDF4] text-[#16A34A] font-bold flex items-center justify-center rounded-full shrink-0">01</div>
                                <div>
                                    <h4 className="text-[#111827] font-bold text-sm sm:text-base">Pre-dispatch Optical & IV Curve Test</h4>
                                    <p className="text-[#6B7280] text-xs sm:text-sm">Warehouse inspection for micro-cracks</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-[#16A34A] text-[#F0FDF4] font-bold flex items-center justify-center rounded-full shrink-0">02</div>
                                <div>
                                    <h4 className="text-[#111827] font-bold text-sm sm:text-base">Doorstep Arrival & Unloading</h4>
                                    <p className="text-[#6B7280] text-xs sm:text-sm">Direct delivery to Ogun, Lagos, Abuja, Ibadan, PHC & beyond</p>
                                </div>
                            </div>
                        </div>
                        <div className="text-[#4B5563] text-xs sm:text-sm text-center border border-black/10 rounded-2xl py-3 px-4 bg-gray-50">Zero transit loss guarantee with full insurance.</div>
                    </div>
                </div>

                {/* Service 3 */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
                    <div className="w-full lg:max-w-xl border border-[#D1FAE5] shadow-md rounded-2xl space-y-6 p-6 sm:p-8">
                        <div className="flex justify-between items-center border-b border-[#F3F4F6] rounded-2xl pb-4">
                            <div className="w-fit text-[#1D4ED8] bg-[#EFF6FF] text-xs font-bold p-2 rounded-lg">CERTIFIED ENGINEERS</div>
                            <div>
                                <h3 className="text-[#6B7280] text-xs sm:text-sm font-bold">COREN & NEMSA Compliant</h3>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-[#F9FAFB80] border border-[#F3F4F6] rounded-xl p-4">
                                <h4 className="text-[#16A34A] font-extrabold text-2xl">100%</h4>
                                <p className="text-[#374151] text-xs sm:text-sm mt-1">Copper Earthing & Lightning Arrester</p>
                            </div>
                            <div className="bg-[#F9FAFB80] border border-[#F3F4F6] rounded-xl p-4">
                                <h4 className="text-[#16A34A] font-extrabold text-2xl">3%</h4>
                                <p className="text-[#374151] text-xs sm:text-sm mt-1">Total Harmonic Distortion (THD)</p>
                            </div>
                        </div>
                        <p className="text-[#064E3B] bg-[#D1FAE5] text-xs sm:text-sm flex items-center gap-2 rounded-xl border border-[#D1FAE5] p-3 leading-relaxed"><CircleCheck className="text-[#16A34A] shrink-0" /> Automatic transfer switch (ATS) configured to protect against low/high grid voltage surges.</p>
                    </div>
                    <div className="w-full lg:max-w-xl space-y-6">
                        <h3 className="font-bold text-2xl sm:text-3xl text-[#111827]">Installation</h3>
                        <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed">Professional installation by accredited engineers ensuring clean wiring, proper trunking, balanced load distribution, and strict adherence to safety standards.</p>
                        <button className="bg-[#16A34A] text-white font-semibold shadow-xl rounded-xl cursor-pointer px-6 py-3 hover:bg-green-700 transition">See how it works</button>
                    </div>
                </div>
            </section>

            {/* Journey steps section */}
            <section className="bg-linear-to-b from-[#F8FAFC] to-[#FFFFFF] border-y border-[#E5E7EBB2] py-16 lg:py-24 space-y-12">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-extrabold">Start your solar journey here!</h2>
                    <p className="text-[#4B5563] text-sm sm:text-base mt-2">A frictionless step-by-step sizing algorithm built for precision and transparency.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="rounded-xl border border-[#e5e7eb] shadow-md p-6 sm:p-8 bg-white flex flex-col justify-between">
                        <div>
                            <div className="w-fit bg-[#F0FDF4] text-[#15803D] text-lg font-black border border-[#E5E7EB] rounded-xl px-3.5 py-2">1</div>
                            <User className="w-10 h-10 bg-[#F3F4F6] rounded-lg p-2.5 mt-6 text-[#16A34A]" />
                            <h3 className="text-[#111827] font-bold text-lg sm:text-xl mb-3 mt-4">Open website & sign up</h3>
                            <p className="text-[#4B5563] text-sm mb-6">Create your secure user profile to save your property audit history.</p>
                        </div>
                        <p className="text-[#16A34A] text-xs sm:text-sm font-semibold border-t border-[#F3F4F6] pt-4">Phase 01 · Account setup</p>
                    </div>
                    <div className="rounded-xl border border-[#e5e7eb] shadow-md p-6 sm:p-8 bg-white flex flex-col justify-between">
                        <div>
                            <div className="w-fit bg-[#F0FDF4] text-[#15803D] text-lg font-black border border-[#E5E7EB] rounded-xl px-3.5 py-2">2</div>
                            <Zap className="w-10 h-10 bg-[#F3F4F6] rounded-lg p-2.5 mt-6 text-[#16A34A]" />
                            <h3 className="text-[#111827] font-bold text-lg sm:text-xl mb-3 mt-4">Upload wattage</h3>
                            <p className="text-[#4B5563] text-sm mb-6">Input your home appliances and daily operational run hours.</p>
                        </div>
                        <p className="text-[#16A34A] text-xs sm:text-sm font-semibold border-t border-[#F3F4F6] pt-4">Phase 02 · Load rating</p>
                    </div>
                    <div className="rounded-xl border border-[#e5e7eb] shadow-md p-6 sm:p-8 bg-white flex flex-col justify-between">
                        <div>
                            <div className="w-fit bg-[#F0FDF4] text-[#15803D] text-lg font-black border border-[#E5E7EB] rounded-xl px-3.5 py-2">3</div>
                            <Keyboard className="w-10 h-10 bg-[#F3F4F6] rounded-lg p-2.5 mt-6 text-[#16A34A]" />
                            <h3 className="text-[#111827] font-bold text-lg sm:text-xl mb-3 mt-4">Enter sizing tool</h3>
                            <p className="text-[#4B5563] text-sm mb-6">Run the calculation engine to view recommended inverter and battery setups.</p>
                        </div>
                        <p className="text-[#16A34A] text-xs sm:text-sm font-semibold border-t border-[#F3F4F6] pt-4">Phase 03 · Mathematical sizing</p>
                    </div>
                    <div className="rounded-xl border border-[#e5e7eb] shadow-md p-6 sm:p-8 bg-white flex flex-col justify-between">
                        <div>
                            <div className="w-fit bg-[#F0FDF4] text-[#15803D] text-lg font-black border border-[#E5E7EB] rounded-xl px-3.5 py-2">4</div>
                            <Check className="w-10 h-10 bg-[#F3F4F6] rounded-lg p-2.5 mt-6 text-[#16A34A]" />
                            <h3 className="text-[#111827] font-bold text-lg sm:text-xl mb-3 mt-4">Click confirm</h3>
                            <p className="text-[#4B5563] text-sm mb-6">Approve your system configuration and schedule delivery & installation.</p>
                        </div>
                        <p className="text-[#16A34A] text-xs sm:text-sm font-semibold border-t border-[#F3F4F6] pt-4">Phase 04 · Deployment</p>
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="flex flex-col lg:flex-row items-center gap-12 py-16 lg:py-24">
                <div className="space-y-4 lg:max-w-md w-full">
                    <p className="text-[#16A34A] font-bold text-sm sm:text-base">TESTIMONIALS</p>
                    <h2 className="text-[#030712] text-3xl sm:text-4xl font-extrabold">What people say about us</h2>
                    <p className="text-[#4B5563] text-sm sm:text-base">Discover how Nigerian homes and commercial setups eliminated generator noise and fuel expenses with mathematically sized solar solutions.</p>

                    <div className="flex gap-2 pt-2">
                        <div className={`h-3.5 w-3.5 rounded-full cursor-pointer transition ${isActive === 0 ? 'bg-[#16A34A]' : 'bg-[#D1D5DB]'}`} onClick={() => setIsActive(0)}></div>
                        <div className={`h-3.5 w-3.5 rounded-full cursor-pointer transition ${isActive === 1 ? 'bg-[#16A34A]' : 'bg-[#D1D5DB]'}`} onClick={() => setIsActive(1)}></div>
                        <div className={`h-3.5 w-3.5 rounded-full cursor-pointer transition ${isActive === 2 ? 'bg-[#16A34A]' : 'bg-[#D1D5DB]'}`} onClick={() => setIsActive(2)}></div>
                    </div>
                </div>
                <div className="w-full lg:max-w-2xl bg-linear-to-t from-[#F9FAFB] to-[#ECFDF566] border border-[#E5E7EB] rounded-3xl p-6 sm:p-10 space-y-6 shadow-sm">
                    <div>
                        <img src="/Star Ratings.png" alt="Star Ratings" className="h-5" />
                    </div>
                    <p className="text-[#1F2937CC] text-base sm:text-xl font-medium leading-relaxed">“{testimonial[isActive].comment}”</p>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t border-[#E5E7EBB2] pt-4">
                        <div className="flex items-center gap-3">
                            <div className="w-11 h-11 font-black text-white bg-[#15803D] flex justify-center items-center rounded-full shrink-0">{testimonial[isActive].id}</div>
                            <div>
                                <h3 className="text-[#111827] font-bold text-sm sm:text-base">{testimonial[isActive].name}</h3>
                                <p className="text-[#6B7280] text-xs sm:text-sm">{testimonial[isActive].location}</p>
                            </div>
                        </div>
                        <div className="bg-[#D1FAE5B2] text-[#047857] font-semibold flex items-center gap-1.5 rounded-2xl py-1 px-3 text-xs sm:text-sm">
                            <Check className="h-4 w-4 shrink-0" />
                            <p>Verified Solar Owner</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Question Section */}
            <section className="px-2 sm:px-6 md:px-12 py-16 max-w-4xl mx-auto flex flex-col items-center space-y-12">
                <div className="text-center">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#030712] font-extrabold mb-3">Frequently Asked Questions</h2>
                    <div className="bg-[#16A34A] w-16 h-1.5 mx-auto rounded-2xl"></div>
                </div>
                <div className="w-full space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                onClick={() => setOpenIndex(isOpen ? null : index)}
                                className={`w-full bg-[#FAFAFA] rounded-2xl p-5 sm:p-6 transition-all duration-200 cursor-pointer ${
                                    isOpen ? "border border-[#E5E7EB] shadow-sm space-y-4" : "border border-transparent hover:border-gray-200"
                                }`}
                            >
                                <div className="flex justify-between items-center gap-4">
                                    <h3 className="text-[#111827] text-lg sm:text-xl lg:text-2xl font-bold leading-snug">
                                        {faq.question}
                                    </h3>
                                    {isOpen ? (
                                        <ChevronUp className="text-[#6B7280] w-6 h-6 shrink-0" />
                                    ) : (
                                        <ChevronDown className="text-[#6B7280] w-6 h-6 shrink-0" />
                                    )}
                                </div>
                                {isOpen && (
                                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed pr-2 sm:pr-8">
                                        {faq.answer}
                                    </p>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* CTA section */}
            <section className="py-8">
                <div className="bg-linear-to-r from-[#15803D] to-[#142711] p-6 sm:p-12 text-center space-y-6 rounded-2xl shadow-md">
                    <h2 className="text-[#FFFFFF] text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight">Need help picking and installing <br /> your solar?</h2>
                    <p className="text-[#D1D5DB] text-sm sm:text-base max-w-2xl mx-auto">Get help from qualified professionals and get your solar journey started, don't let unreliable grid power hold you hostage.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-white text-[#111827] px-6 py-3 rounded-2xl font-medium cursor-pointer hover:bg-gray-100 transition">Free Demo</button>
                        <button className="bg-[#16A34A] text-white border border-[#86D06BAD] px-6 py-3 rounded-2xl font-medium cursor-pointer hover:bg-green-700 transition">Get Started</button>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <section className="px-4 sm:px-8 lg:px-12 py-12 border-t border-gray-100 mt-8">
                <div className="flex flex-col lg:flex-row justify-between gap-12">
                    <div className="max-w-sm">
                        <div className="flex items-center gap-2">
                            <img src="/logo.png" alt="Logo icon" className="w-8 h-8 object-contain" />
                            <h1 className="text-2xl sm:text-3xl font-black">Right<span className="text-[#16A34A]">PICK</span></h1>
                        </div>
                        <p className="text-[#4B5563] mt-3 text-sm sm:text-base">Precision solar sizing, delivery, and installation engineering across Nigeria.</p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                        <div>
                            <h3 className="font-black mb-3 text-sm sm:text-base">Company</h3>
                            <ul className="space-y-2 text-[#4B5563] text-sm">
                                <li className="hover:text-green-600 cursor-pointer">About</li>
                                <li className="hover:text-green-600 cursor-pointer">Careers</li>
                                <li className="hover:text-green-600 cursor-pointer">Mobile</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-black mb-3 text-sm sm:text-base">Contact</h3>
                            <ul className="space-y-2 text-[#4B5563] text-sm">
                                <li className="hover:text-green-600 cursor-pointer">Help/FAQ</li>
                                <li className="hover:text-green-600 cursor-pointer">Press</li>
                                <li className="hover:text-green-600 cursor-pointer">Affiliates</li>
                            </ul>
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <h3 className="font-black mb-3 text-sm sm:text-base">More</h3>
                            <ul className="space-y-2 text-[#4B5563] text-sm mb-4">
                                <li className="hover:text-green-600 cursor-pointer">Brand</li>
                                <li className="hover:text-green-600 cursor-pointer">Color</li>
                                <li className="hover:text-green-600 cursor-pointer">Subscription</li>
                            </ul>
                            <h4 className="font-black mb-2 text-sm sm:text-base">Discover our app</h4>
                            <div className="flex flex-wrap items-center gap-2.5">
                                <img src="/google_play.png" alt="Google Playstore" className="h-8" />
                                <img src="/app_store.png" alt="Apple Store" className="h-8" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Index;