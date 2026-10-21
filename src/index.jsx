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
        id: "OB",
        name: "Engr. Olumide Adeleke",
        location: "FUNAAB, Ogun State",
        comment: "RightPick saved us millions. Before using their sizing engine, two local contractors recommended an undersized 3.5kVA system that would have blown under our inverter air conditioner start-up surge. RightPick accurately configured our 8kW setup with proper battery DoD. Flawless execution!"
    },
    {
        id: "OC",
        name: "Engr. Olumide Adeleke",
        location: "FUNAAB, Ogun State",
        comment: "RightPick saved us millions. Before using their sizing engine, two local contractors recommended an undersized 3.5kVA system that would have blown under our inverter air conditioner start-up surge. RightPick accurately configured our 8kW setup with proper battery DoD. Flawless execution!"
    }
]

function Index() {
    const [openIndex, setOpenIndex] = useState(0);
    const [isActive, setIsActive] = useState(0)

    const faqs = [
        {
            question: "What should I expect during my initial consultation?",
            answer: "Personal styling crafts the wardrobe and presence of an individual. Brand styling builds the end-to-end visual lexicon for fashion campaigns, runway presentations, lookbooks, and luxury commercial productions. In the context of our solar engineering process, this encompasses conducting comprehensive real-time load demand audits, rooftop azimuth orientation, tilt angle shading analysis, and local DisCo tariff tier evaluations to ensure zero over-spending."
        },
        {
            question: "How does it differ from basic calculations?",
            answer: "Personal styling crafts the wardrobe and presence of an individual. Brand styling builds the end-to-end visual lexicon for fashion campaigns, runway presentations, lookbooks, and luxury commercial productions."
        },
        {
            question: "What is the typical time duration for a 1000kW solar?",
            answer: "Timelines vary depending on the scope of the project. Personal wardrobe curations typically span 2 to 4 weeks, while seasonal brand campaigns are structured around your production milestones."
        }
    ];
    return (
        <main className="px-12">
            {/* Hero section */}
            <section id="home" className="h-screen flex justify-center place-items-center gap-16">
                <div className="space-y-8">
                    <div className="w-fit flex place-items-center gap-2 text-[#166534] bg-[#F0FDF4] border border-[#e5e7eb] rounded-2xl px-3 py-1"><div className="w-2 h-2 bg-[#22C55E] rounded-full"></div> PRECISION SOLAR ENERGY PLATFORM NIGERIA</div>
                    <h1 className="font-bold text-5xl">Choose Wisely <br /><span className="bg-linear-to-t from-[#047857] via-green-500 to-[#16A34A] bg-clip-text text-transparent">Remove uncertainty</span></h1>
                    <p className="text-[#4B5563]">Pick the right solar system that bests suits your household
                        from your own comfort.</p>
                    <div className="flex space-x-6">
                        <button className="border border-[#D1D5DB] flex place-items-center gap-2 rounded-xl px-6 py-1.5 cursor-pointer"><img src="/youtube.png" alt="" /> Watch Video</button>
                        <button className="bg-[#16A34A] text-white flex place-items-center rounded-xl px-6 py-1.5 cursor-pointer">Free Demo <ArrowRight className="h-4 w-4" /></button>
                    </div>
                    <div className="flex place-items-center gap-3 border-t border-t-[#E5E7EBCC] pt-6.25">
                        <p>AVAILABLE ON:</p>
                        <img src="/google_play.png" alt="Google Playstore" />
                        <img src="/app_ store.png" alt="Apple Store" />
                    </div>
                </div>
                <div className="relative">
                    <div className="w-72 absolute -top-15 -left-15 -z-10 h-72 bg-[#FACC1533] rounded-full blur-2xl"></div>
                    <img src="/live_load.png" alt="Life load" className="z-30" />
                    <div className="w-72 h-72 -bottom-15 -right-15 -z-10 absolute bg-[#22C55E33] rounded-full blur-2xl"></div>
                </div>
            </section>

            {/* services section */}
            <section id="services" className="space-y-20 border border-x-0 border-[#F3F4F6] py-24">
                <div>
                    <h2 className="text-[#030712] font-extrabold text-[36px] text-center">Services</h2>
                    <p className="text-[#4b5563] text-center">Engineered end-to-end solar infrastructure tailored to real power realities in Nigeria.</p>
                </div>

                <div className="flex gap-24.25 place-items-center">
                    <div className="max-w-150 border border-[#D1FAE5] drop-shadow-[0,1,2, #00000040] rounded-2xl space-y-10.75 p-6.25">
                        <div className="flex gap-2 border-b border-b-[#F3F4F6] rounded-2xl pb-4.25">
                            <div className="w-fit text-[#047857] bg-[#D1FAE5] text-[16px] p-2 rounded-lg">kW</div>
                            <div>
                                <h3 className="text-[#111827] text-[14px] font-bold ">Maximum Load Votage</h3>
                                <p className="text-[#6B7280] text-[12px]">Peak Sun: 5.2 hrs/day</p>
                            </div>
                        </div>
                        <div>
                            <table className="w-full font-bold space-y-3">
                                <tr className="w-full flex justify-between bg-[#F9FAFB] rounded-lg p-2.5">
                                    <td className="text-[#374151]"> Depth of Discharge (DoD)</td>
                                    <td className="text-[#15803D] font-bold">80% Tubular Lead Acid</td>
                                </tr>
                                <tr className="w-full flex justify-between bg-[#F9FAFB] rounded-lg p-2.5">
                                    <td className="text-[#374151]"> System Losses & Temperature Derating</td>
                                    <td className="text-[#D97706] font-bold">18.5% factored</td>
                                </tr>
                                <tr className="w-full flex justify-between bg-[#F9FAFB] rounded-lg p-2.5">
                                    <td className="text-[#374151]"> Required Battery Capacity</td>
                                    <td className="text-[#15803D] font-bold">200Ah @ 48V</td>
                                </tr>
                            </table>
                        </div>
                        <p className="text-[#16A34A] flex place-items-center place-self-center"><CircleCheck /> Verified against national grid voltage spikes</p>
                    </div>
                    <div className="max-w-xl space-y-6">
                        <h3 className="font-bold text-[30px] text-[#111827]">Solar Panel Sizing</h3>
                        <p className="text-[#4B5563]">We assist you in picking the right inverter, panel. Account for daily energy
                            demand, peak sun hours, system losses, and the energy needed to
                            recharge the battery. Calculate capacity using the daily energy requirement,
                            desired backup duration, battery voltage, usable depth of discharge, and
                            conversion losses. The required capacity in ampere-hours depends on the
                            selected battery-bank voltage.</p>
                        <button className="bg-[#F3F4F6] font-semibold border border-[#E5E7EB] drop-shadow-xl rounded-xl cursor-pointer px-6.25 py-3.25">See how it works</button>
                    </div>
                </div>

                <div className="flex place-items-center gap-24.25">
                    <div className="max-w-xl space-y-6">
                        <h3 className="text-[#111827] text-[30px] font-bold">Delivery</h3>
                        <p className="text-[#4B5563]">We assist you in picking the right inverter,panel. Account for daily energy
                            demand, peak sun hours, system losses, and safe certified transport across
                            Nigerian states directly to your doorstep. We coordinate bonded shipping,
                            insured in-transit logistics, and pre-delivery inspection so every single tier-1
                            mono panel arrives unbroken and tested.</p>
                        <button className="bg-[#F3F4F6] font-semibold border border-[#E5E7EB] drop-shadow-xl rounded-xl cursor-pointer px-6.25 py-3.25">See how it works</button>
                    </div>

                    <div className="w-full border border-[#FEF3C7CC] rounded-2xl p-6.25 space-y-13.5">
                        <div className="flex place-items-center justify-between">
                            <h3 className="text-[#111827] text-[14px] font-bold">Insured State-wide Transport</h3>
                            <p className="w-fit text-[#92400E] font-medium bg-[#FEF3C7] flex place-items-center gap-1 rounded-2xl px-1.5">GPS Tracked <div className="h-2 w-2 bg-[#F59E0B] rounded-full"></div></p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex place-items-center gap-3">
                                <div className="w-10 h-10 bg-[#F0FDF4] text-[#16A34A] font-bold flex place-items-center justify-center rounded-full">01</div>
                                <div>
                                    <h4 className="text-[#111827] font-bold ">Pre-dispatch Optical & IV Curve Test</h4>
                                    <p className="text-[#6B7280]">Warehouse inspection for micro-cracks</p>
                                </div>
                            </div>
                            <img src="/VerticalBorder.png" alt="Vertical Border" className="px-5" />
                            <div className="flex place-items-center gap-3">
                                <div className="w-10 h-10 bg-[#16A34A] text-[#F0FDF4] font-bold flex place-items-center justify-center rounded-full">02</div>
                                <div>
                                    <h4 className="text-[#111827] font-bold ">Doorstep Arrival & Unloading</h4>
                                    <p className="text-[#6B7280]">Direct delivery to Ogun, Lagos, Abuja, Ibadan, PHC & beyond</p>
                                </div>
                            </div>
                        </div>
                        <div className="text-[#4B5563] text-center border-[0.5px] border-[#000000B2] rounded-2xl py-2.5">Zero transit loss guarantee with full insurance.</div>
                    </div>
                </div>

                <div className="flex gap-24.25 place-items-center">
                    <div className="max-w-150 border border-[#D1FAE5] drop-shadow-[0,1,2, #00000040] rounded-2xl space-y-10.75 p-6.25">
                        <div className="flex justify-between place-items-center border-b border-b-[#F3F4F6] rounded-2xl pb-4.25">
                            <div className="w-fit text-[#1D4ED8] bg-[#EFF6FF] text-[12px] p-2 rounded-lg">CERTIFIED ENGINEERS</div>
                            <div>
                                <h3 className="text-[#6B7280] text-[12px] font-bold ">COREN & NEMSA Compliant</h3>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="bg-[#F9FAFB80] border border-[#F3F4F6] rounded-xl p-3.25">
                                <h4 className="text-[#16A34A] font-extrabold text-[24px]">100%</h4>
                                <p className="text-[#374151]">Copper Earthing & Lightning
                                    Arrester</p>
                            </div>
                            <div className="bg-[#F9FAFB80] border border-[#F3F4F6] rounded-xl p-3.25">
                                <h4 className="text-[#16A34A] font-extrabold text-[24px]">3%</h4>
                                <p className="text-[#374151]">Total Harmonic Distortion (THD)</p>
                            </div>
                        </div>
                        <p className="text-[#064E3B] bg-[#D1FAE5] flex place-items-center place-self-center gap-2 rounded-xl border border-[#D1FAE5] p-3.25"><CircleCheck className="text-white " /> Automatic transfer switch (ATS) configured to protect against
                            low/high grid voltage surges.</p>
                    </div>
                    <div className="max-w-xl space-y-6">
                        <h3 className="font-bold text-[30px] text-[#111827]">Installation</h3>
                        <p className="text-[#4B5563]">We assist you in picking the right inverter,panel. Account for daily energy
                            demand, peak sun hours, system losses, and the energy needed to
                            recharge the battery. Calculate capacity using the daily energy requirement,
                            desired backup duration, battery voltage, usable depth of discharge, and
                            conversion losses. The required capacity in ampere-hours depends on the
                            selected battery-bank voltage.</p>
                        <button className="bg-[#16A34A] text-white font-semibold border  drop-shadow-xl drop-shadow-[#ECFDF540] rounded-xl cursor-pointer px-6.25 py-3.25">See how it works</button>
                    </div>
                </div>
            </section>

            <section className="bg-linear-to-b from-[#F8FAFC] to-[#FFFFFF] border-y border-[#E5E7EBB2] py-24.25 space-y-16">
                <div className="text-center">
                    <h2 className="text-4xl font-extrabold">Start your solar journey here!</h2>
                    <p className="text-[#4B5563]">A frictionless step-by-step sizing algorithm built for precision and transparency.</p>
                </div>
                <div className="grid grid-cols-4 gap-6">
                    <div className="rounded-xl border border-[#e5e7eb] drop-shadow-xl p-7.25">
                        <div className="w-fit bg-[#F0FDF4] text-[#15803D] text-xl font-black border border-[#E5E7EB] rounded-xl px-4 py-2.5">1</div>
                        <User className=" w-10 h-10 bg-[#F3F4F6] rounded-lg p-2.5 mt-6" />
                        <h3 className="text-[#111827] font-bold text-xl mb-2.75 mt-5">Open the website & sign up</h3>
                        <p className="text-[#4B5563] mb-6">The display recommended system
                            specifications, explain the
                            calculations, and allow users to
                            adjust their selections to compare
                            alternatives</p>
                        <p className="text-[#16A34A] font-semibold border-t border-t-[#F3F4F6] pt-6.25">Phase 01 · Account setup</p>
                    </div>
                    <div className="rounded-xl border border-[#e5e7eb] drop-shadow-xl p-7.25">
                        <div className="w-fit bg-[#F0FDF4] text-[#15803D] text-xl font-black border border-[#E5E7EB] rounded-xl px-4 py-2.5">2</div>
                        <Zap className=" w-10 h-10 bg-[#F3F4F6] rounded-lg p-2.5 mt-6" />
                        <h3 className="text-[#111827] font-bold text-xl mb-2.75 mt-5">Upload wattage</h3>
                        <p className="text-[#4B5563] mb-6">The display recommended system
                            specifications, explain the
                            calculations, and allow users to
                            adjust their selections to compare
                            alternatives</p>
                        <p className="text-[#16A34A] font-semibold border-t border-t-[#F3F4F6] pt-6.25">Phase 02 · Load rating</p>
                    </div>
                    <div className="rounded-xl border border-[#e5e7eb] drop-shadow-xl p-7.25">
                        <div className="w-fit bg-[#F0FDF4] text-[#15803D] text-xl font-black border border-[#E5E7EB] rounded-xl px-4 py-2.5">3</div>
                        <Keyboard className=" w-10 h-10 bg-[#F3F4F6] rounded-lg p-2.5 mt-6" />
                        <h3 className="text-[#111827] font-bold text-xl mb-2.75 mt-5">Enter the sizing tool</h3>
                        <p className="text-[#4B5563] mb-6">The display recommended system
                            specifications, explain the
                            calculations, and allow users to
                            adjust their selections to compare
                            alternatives</p>
                        <p className="text-[#16A34A] font-semibold border-t border-t-[#F3F4F6] pt-6.25">Phase 03 · Mathematical sizing</p>
                    </div>
                    <div className="rounded-xl border border-[#e5e7eb] drop-shadow-xl p-7.25">
                        <div className="w-fit bg-[#F0FDF4] text-[#15803D] text-xl font-black border border-[#E5E7EB] rounded-xl px-4 py-2.5">4</div>
                        <Check className=" w-10 h-10 bg-[#F3F4F6] rounded-lg p-2.5 mt-6" />
                        <h3 className="text-[#111827] font-bold text-xl mb-2.75 mt-5">Click confirm</h3>
                        <p className="text-[#4B5563] mb-6">The display recommended system
                            specifications, explain the
                            calculations, and allow users to
                            adjust their selections to compare
                            alternatives</p>
                        <p className="text-[#16A34A] font-semibold border-t border-t-[#F3F4F6] pt-6.25">Phase 04 · Deployment</p>
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="flex place-items-center gap-12 py-24.25">
                <div className="space-y-4">
                    <p className="text-[#16A34A] font-bold">TESTIMONIALS</p>
                    <h2 className="text-[#030712] text-4xl font-extrabold">What people say about us</h2>
                    <p className="text-[#4B5563]">Discover how Nigerian homes and commercial setups
                        eliminated generator noise and fuel expenses with
                        mathematically sized solar solutions.</p>

                    <div className="flex gap-2">
                        <div className="h-4 w-4 bg-[#D1D5DB] rounded-full" onClick={() => { setIsActive(0) }}></div>
                        <div className="h-4 w-4 bg-[#D1D5DB] rounded-full" onClick={() => { setIsActive(1) }}></div>
                        <div className="h-4 w-4 bg-[#D1D5DB] rounded-full" onClick={() => { setIsActive(2) }}></div>
                    </div>
                </div>
                <div className="max-w-172.25 bg-linear-to-t from-[#F9FAFB] to-[#ECFDF566] border border-[#E5E7EB] rounded-3xl p-10.25 space-y-6">
                    <div>
                        <img src="/Star Ratings.png" alt="" />
                    </div>
                    <p className="text-[#1F2937CC] text-xl font-medium">“{testimonial[isActive].comment}”</p>
                    <div className="flex justify-between place-items-center border-t border-[#E5E7EBB2] pt-4.25">
                        <div className="flex place-items-center gap-2">
                            <div className="w-11 h-11 font-black text-white bg-[#15803D] flex justify-center place-items-center rounded-full">OA</div>
                            <div>
                                <h3 className="text-[#111827] font-bold">{testimonial[isActive].name}</h3>
                                <p className="text-[#6B7280]">{testimonial[isActive].location}</p>
                            </div>
                        </div>
                        <div className="bg-[#D1FAE5B2] text-[#047857] font-semibold flex place-items-center gap-2 rounded-2xl py-1 px-2">
                            <Check className="h-4 w-4" />
                            <p>Verified Solar Owner</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Question Section */}
            <section className="px-6 md:px-12 py-16 max-w-4xl mx-auto flex flex-col items-center space-y-16">
                <div>
                    <h2 className="text-3xl text-[#030712] md:text-4xl font-extrabold text-center mb-3">
                        Frequently Asked Questions
                    </h2>
                    <div className="bg-[#16A34A] w-16 h-1.5 flex justify-self-center rounded-2xl"></div>
                </div>
                <div className="w-full space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                onClick={() => setOpenIndex(isOpen ? null : index)}
                                className={`w-full bg-[#FAFAFA] rounded-2xl p-6 transition-all duration-200 cursor-pointer ${isOpen
                                    ? "border border-[#E5E7EB] shadow-sm space-y-4"
                                    : "border border-transparent hover:border-gray-200"
                                    }`}
                            >
                                <div className="flex justify-between items-center gap-4">
                                    <h3 className="text-[#111827] text-xl md:text-[28px] font-bold leading-snug">
                                        {faq.question}
                                    </h3>
                                    {isOpen ? (
                                        <ChevronUp className="text-[#6B7280] w-6 h-6 shrink-0" />
                                    ) : (
                                        <ChevronDown className="text-[#6B7280] w-6 h-6 shrink-0" />
                                    )}
                                </div>

                                {isOpen && (
                                    <p className="text-gray-600 text-base leading-relaxed pr-8">
                                        {faq.answer}
                                    </p>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Identity section */}
            <section>
                <div className="bg-linear-to-r from-[#15803D] to-[#142711] p-9 text-center space-y-4 rounded-2xl">
                    <h2 className="text-[#FFFFFF] text-3xl font-extrabold">Need help picking and installing <br />
                        your solar?</h2>
                    <p className="text-[#D1D5DB]">Get help from qualified professional and get your solar journey started, don't
                        let IBEDC hold you hostage</p>
                    <div className="md:flex place-self-center gap-4 space-y-3">
                        <button className="bg-white text-[#111827] px-6 py-1 rounded-2xl">Free Demo</button>
                        <button className="bg-[#16A34A] text-white border border-[#86D06BAD] px-6 py-1 rounded-2xl">Get Started</button>
                    </div>
                </div>
            </section>

            {/* Malson Section */}
            <section className="px-12 py-8">
                <div className="sm:flex justify-between space-y-3">
                    <div className="max-w-3xl">
                        <div className="flex place-items-center">
                            <img src="/logo.png" alt="Logo icon" />
                            <h1 className="text-3xl font-black">Right<span className="text-[#16A34A]">PICK</span></h1>
                        </div>
                        <p className="text-[#4B5563]"> Precision solar sizing, delivery, and
                            installation engineering across Nigeria.</p>
                    </div>
                    <div className="flex gap-x-6">
                        <div>
                            <h3 className="font-black">Company</h3>
                            <ul className="space-y-1">
                                <li>About</li>
                                <li>Careers</li>
                                <li>Mobile</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-black">Contact</h3>
                            <ul className="space-y-1">
                                <li>Help/FAQ</li>
                                <li>Press</li>
                                <li>Affilates</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-black">More</h3>
                            <ul className="space-y-1">
                                <li>Brand</li>
                                <li>Color</li>
                                <li>Subscription</li>
                            </ul>
                            <h4>Discover our app</h4>
                            <div className="flex place-items-center gap-3">
                                <img src="/google_play.png" alt="Google Playstore" />
                                <img src="/app_ store.png" alt="Apple Store" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Index;