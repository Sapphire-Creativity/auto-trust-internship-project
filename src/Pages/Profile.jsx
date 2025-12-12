// src/components/Profile.jsx
import React, {useState} from "react";
import {mechanicProfile} from "../assets/data.js";
import BookingModal from "../components/BookingModal";

const StatCard = ({item}) => (
    <div className={`${item.bg} p-2 rounded-xl text-center shadow-sm`}>
        <img src={item.icon} alt={item.label} className="w-6 h-6 mx-auto"/>
        <p className="text-sm md:text-base font-bold mt-2">{item.value}</p>
        <p className="text-gray-500 text-xs md:text-sm">{item.label}</p>
    </div>
);

// UPDATED SERVICE CARD — now sends full service info
const ServiceCard = ({s, handleOrder}) => (
    <div className="bg-white rounded-xl shadow p-5 flex flex-col justify-between min-h-[160px]">

        <div>
            <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
            <div className="text-sm text-gray-400 mb-2 bg-blue-50 px-3 py-1 rounded-md w-fit">
                {s.tag}
            </div>
            <p className="text-sm text-gray-600 mb-3">{s.desc}</p>
        </div>

        <div className="flex justify-between items-center mb-4 w-full">
            <div className="text-sm text-gray-800 font-semibold">{s.priceRange}</div>

            {s.duration && (
                <div className="flex items-center gap-2 text-xs text-gray-500">
                    <img src="/icons/stopwatch.svg" alt="time" className="w-4 h-4"/>
                    <span>{s.duration}</span>
                </div>
            )}

            {s.estDays && (
                <div className="text-xs text-gray-500">{s.estDays}</div>
            )}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <button
                onClick={() =>
                    handleOrder({
                        service: s,
                        estimatedPrice: s.priceRange,
                        duration: s.duration || s.estDays,
                    })
                }
                className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex justify-center items-center gap-2"
            >
                <img src="/icons/order.svg" alt="make-order" className="w-4 h-4"/>
                <span className="text-sm md:text-md">Book Service</span>
            </button>

            <button
                className="w-full cursor-pointer border border-gray-300 px-4 py-2 rounded-md flex justify-center items-center gap-2"
            >
                <img src="/icons/bookmark.svg" className="w-4 h-4" alt="bookmark"/>
                <span className="text-sm md:text-md">Save for Later</span>
            </button>
        </div>

    </div>
);

const ReviewCard = ({r}) => (
    <div className="bg-white rounded-xl p-4 shadow-sm flex gap-4">
        <img src={r.avatar} alt={r.name} className="w-12 h-12 rounded-full object-cover"/>

        <div className="flex-1">
            <div className="flex items-center justify-between">
                <div>
                    <div className="font-semibold">{r.name}</div>
                    <div className="text-xs text-gray-400">{r.time}</div>
                </div>

                <div className="text-yellow-400 flex gap-1">
                    {Array.from({length: r.rating}).map((_, i) => (
                        <img key={i} src="/icons/gold-star.svg" alt="star" className="w-4 h-4"/>
                    ))}
                </div>
            </div>

            <p className="text-sm text-gray-700 mt-2">{r.text}</p>

            <div className="mt-3">
                <span className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-md">
                    {r.serviceTag}
                </span>
            </div>
        </div>
    </div>
);

const Profile = () => {
    const p = mechanicProfile;

    // Modal State
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedServiceData, setSelectedServiceData] = useState(null);

    // UPDATED handleOrder
    const handleOrder = ({service, estimatedPrice, duration}) => {
        setSelectedServiceData({
            service,
            estimatedPrice,
            duration,
        });
        setModalOpen(true);
    };

    return (
        <div className="min-h-screen bg-[#f5f6f8] pb-20">

            {/* --- BREADCRUMB --- */}
            <div className="px-6 pt-6 text-sm flex gap-2 items-center text-gray-500">
                <span>Verified Mechanics</span>
                <span>/</span>
                <span className="text-blue-600 font-medium">{p.name}</span>
            </div>


            {/* ------ PROFILE HEADER ------ */}
            <div className="mx-6 mt-4 bg-white rounded-2xl shadow p-4">
                <div className="flex gap-6 items-start">
                    <div className="flex gap-4 items-center">
                        <div className="relative w-24 h-24 rounded-lg overflow-hidden">
                            <img src={p.profileImg} alt={p.name} className="w-full h-full object-cover"/>
                            <img src={p.badgeHeart} alt="fav" className="absolute top-2 left-2 w-6 h-6"/>
                        </div>

                        <div className="flex items-center gap-4">
                            <h1 className="text-4xl font-semibold text-gray-800">{p.shop}</h1>
                            <img src={p.shopIcon} alt="shop" className="w-12 h-12"/>
                        </div>
                    </div>
                </div>

                <div className="ml-auto text-left flex justify-between items-center w-full">

                    <div>
                        <div className="mt-3 flex items-center gap-3">
                            <div className="flex items-center gap-2 md:flex-col">
                                <div className="font-semibold">{p.name}</div>

                                {p.verified && (
                                    <span
                                        className="text-green-600 bg-green-50 rounded-full text-sm flex items-center px-2 py-1 gap-1">
                                        <img src="/icons/certified.svg" alt="verified" className="w-4 h-4"/>
                                        Verified
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="text-gray-600 text-sm mt-3 flex items-center gap-2">
                            <img src="/icons/location.svg" alt="location" className="w-4 h-4"/>
                            <span className="text-xs md:text-base max-w-[12rem] md:max-w-fit">{p.address}</span>
                        </div>

                        <div className="text-gray-600 text-sm mt-2 flex items-center gap-2">
                            <img src="/icons/distance.svg" alt="distance" className="w-4 h-4"/>
                            <span className="text-xs md:text-base">{p.distance}</span>
                        </div>

                    </div>

                    <div>
                        <div className="flex items-center gap-2 justify-end">
                            <img src="/icons/gold-star.svg" alt="rating" className="w-5 h-5"/>
                            <div className="text-2xl font-semibold">{p.rating.toFixed(1)}</div>
                        </div>

                        <div className="text-xs md:text-base text-gray-500 mt-1 text-right">
                            ({p.reviewsCount} reviews)
                        </div>

                        <div className="text-xs text-gray-400 mt-3 line-through text-right">
                            {p.priceNote}
                        </div>
                    </div>

                </div>
            </div>

            {/* ------- STATS ------- */}
            <div className="mx-6 mt-6 grid grid-cols-4 gap-4">
                {p.stats.map((s, i) => (
                    <StatCard key={i} item={s}/>
                ))}
            </div>

            {/* ------- ABOUT ------- */}
            <div className="mx-6 mt-6">
                <h3 className="font-semibold mb-2">About {p.name}</h3>
                <p className="text-md text-gray-700">{p.about}</p>
            </div>

            {/* ------- META TABLE ------- */}
            <div className="mx-6 mt-6">
                <h3 className="font-semibold my-4">Professional Details</h3>

                <div className="bg-white rounded-lg p-4 shadow-sm space-y-4">
                    <div className="flex justify-between">
                        <div className="text-xs text-gray-500">Title:</div>
                        <div className="font-medium text-right">{p.meta.title}</div>
                    </div>

                    <div className="flex justify-between">
                        <div className="text-xs text-gray-500">Workshop:</div>
                        <div className="font-medium text-right">{p.meta.workshop}</div>
                    </div>

                    <div className="flex justify-between">
                        <div className="text-xs text-gray-500">Education:</div>
                        <div className="font-medium text-right max-w-[14rem] md:max-w-fit">{p.meta.education}</div>
                    </div>

                    <div className="flex justify-between">
                        <div className="text-xs text-gray-500">Languages:</div>
                        <div className="font-medium text-right">{p.meta.languages.join(", ")}</div>
                    </div>
                </div>
            </div>

            {/* ------- CONTACT & HOURS ------- */}
            <div className="mx-6 mt-6">
                <div className="bg-white rounded-lg p-5 shadow-sm">

                    <h4 className="font-semibold mb-4">Contact Information</h4>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <img src="/icons/phone.svg" className="w-5 h-5" alt="phone"/>
                            <span className="text-sm text-gray-700">{p.contact.phone}</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <img src="/icons/mail.svg" className="w-5 h-5" alt="mail"/>
                            <span className="text-sm text-gray-700">{p.contact.email}</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <img src="/icons/venue.svg" className="w-5 h-5" alt="venue"/>
                            <span className="text-sm text-gray-700">{p.contact.distance}</span>
                        </div>
                    </div>

                    <div className="pt-4 mt-4 border-t border-gray-200">
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <img src="/icons/working-hours.svg" className="w-5 h-5" alt="hours"/>
                            <span>Working Hours</span>
                        </h4>

                        <div className="text-sm">
                            {p.workingHours.map((w, i) => (
                                <div key={i} className="flex justify-between py-2">
                                    <span className="text-gray-600">{w.day}</span>
                                    <span className="font-medium">{w.hours}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-4 space-y-2">
                            <button
                                className="w-full bg-blue-600 text-white py-2 rounded-md flex items-center justify-center gap-2">
                                <img src="/icons/call.svg" className="w-4 h-4" alt="call"/>
                                <span>Call Now</span>
                            </button>

                            <button
                                className="w-full border border-gray-300 py-2 rounded-md flex items-center justify-center gap-2">
                                <img src="/icons/message.svg" className="w-4 h-4" alt="message"/>
                                <span>Send Message</span>
                            </button>

                            <button
                                className="w-full border border-gray-300 py-2 rounded-md flex items-center justify-center gap-2">
                                <img src="/icons/distance.svg" className="w-4 h-4" alt="distance"/>
                                <span>Get Directions</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            {/* ------- SERVICE CATEGORIES ------- */}
            <div className="mx-6 mt-6">
                <h2 className="my-4 text-xl font-medium">Services & Pricing</h2>
                <div className="flex flex-wrap gap-3">
                    {p.serviceCategories.map((cat, i) => (
                        <button
                            key={i}
                            className={`text-sm px-3 py-1 rounded-md border ${i === 0 ? "bg-blue-600 text-white" : "bg-white text-gray-700"}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>


            {/* SERVICES GRID */}
            <div className="mx-6 mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {p.services.map((s) => (
                    <ServiceCard key={s.id} s={s} handleOrder={handleOrder}/>
                ))}
            </div>

            {/* REVIEWS */}
            <div className="mx-6 mt-6">
                <h3 className="font-semibold mb-4">Reviews</h3>
                <div className="space-y-4">
                    {p.reviews.map((r) => (
                        <ReviewCard key={r.id} r={r}/>
                    ))}
                </div>
            </div>

            {/* BOOKING MODAL */}
            {modalOpen && selectedServiceData && (
                <BookingModal
                    service={selectedServiceData.service}
                    estimatedPrice={selectedServiceData.estimatedPrice}
                    duration={selectedServiceData.duration}
                    onClose={() => setModalOpen(false)}
                />
            )}
        </div>
    );
};

export default Profile;
