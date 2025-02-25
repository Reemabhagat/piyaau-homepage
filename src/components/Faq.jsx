import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

const FAQ = () => {
    const faqData = [
        { question: "Is it actually sourced from Himalayas?", answer: "Yes, Piyaau's natural mineral water is genuinely sourced from the pristine Himalayas. We tap into the pure, naturally alkaline waters of the Giri Ganga River in Himachal Pradesh, ensuring the highest quality and purity in every can." },
        { question: "How does ₹1 donation work?", answer: "For every can of Piyaau water sold, we donate ₹1 to charity. These funds are used to set up permanent water solutions in both rural and urban areas, helping communities gain reliable access to clean water." },
        { question: "How can I advertise on the can?", answer: "Scroll to the Advertise section and click on it. Fill out the form, and our team will provide you with all the details on how you can advertise with us effectively." },
        { question: "How can I buy the can?", answer: "We are glad you made a smart choice. Our cans will soon be available in your nearest shops and on quick commerce websites. For now, you can click on the Buy button to get these beautifully crafted cans. Happy Hydrating 😉" },

    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="px-6 py-16 faq-text">
            <h2 className="text-6xl font-bold mb-10 text-center text-black">FAQs</h2>
            <div className="max-w-3xl mx-auto space-y-4">
                {faqData.map((faq, index) => (
                    <div key={index} className=" overflow-hidden">

                        <button
                            className="w-full text-left p-4 font-semibold accordin-text flex justify-between items-center"
                            onClick={() => toggleFAQ(index)}
                        >
                            {faq.question}
                            {openIndex === index ? (
                                <ChevronUpIcon className="w-6 h-6 " style={{ color: "#00043b" }} />
                            ) : (
                                <ChevronDownIcon className="w-6 h-6 " style={{ color: "#00043b" }} />
                            )}
                        </button>


                        {openIndex === index && (
                            <div className="p-4 accordian-pannel">{faq.answer}</div>
                        )}
                    </div>
                ))}
            </div>




            {/* New section */}
            <div className="w-full text-black text-center py-10 sm:py-5 md:py-10 mt-10 sm:mt-12 md:mt-16 px-4">
                <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                    Become a Water Warrior
                </h2>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-[950px] mx-auto mb-6 text-center p-small">
                    Every time you purchase a can of Piyaau, you're also supporting our community efforts.
                    Join our movement and become a water warrior with every refreshing sip of Piyaau!
                </p>
                <button className="button-nav text-white transition">Join The Movement</button>
            </div>

        </div>
    );
};

export default FAQ;
