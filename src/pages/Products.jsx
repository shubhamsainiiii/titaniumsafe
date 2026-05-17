/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import { FaSearch } from "react-icons/fa";

const Products = () => {

    // Dummy Products
    const allProducts = [
        {
            _id: 1,
            name: "Titanium Safe X1",
            description:
                "Premium heavy-duty titanium safe with advanced digital locking system and fire-resistant protection.",
            price: 25000,
            available: true,
            images: [
                "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=1200&auto=format&fit=crop",
            ],
        },

        {
            _id: 2,
            name: "Office Vault Pro",
            description:
                "Modern office security vault designed for documents, cash, and confidential items.",
            price: 42000,
            available: true,
            images: [
                "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
            ],
        },

        {
            _id: 3,
            name: "Digital Locker Elite",
            description:
                "Advanced digital locker with fingerprint lock and premium steel body protection.",
            price: 36000,
            available: true,
            images: [
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
            ],
        },

        {
            _id: 4,
            name: "Fireproof Safe Ultra",
            description:
                "Fire-resistant premium safe designed for jewelry shops and high-value assets.",
            price: 55000,
            available: true,
            images: [
                "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
            ],
        },

        {
            _id: 5,
            name: "Home Security Safe",
            description:
                "Compact home security safe with digital password protection and strong locking mechanism.",
            price: 18000,
            available: true,
            images: [
                "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop",
            ],
        },
    ];

    const [search, setSearch] = useState("");

    // Filter Products
    const filteredProducts = allProducts.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="bg-[#0F172A] min-h-screen text-white pt-28">

            {/* Hero */}
            <section className="max-w-7xl mx-auto px-5 lg:px-10 py-16">

                <div className="text-center">

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                        Our Premium
                        <span className="text-[#D4AF37]"> Products</span>
                    </h1>

                    <p className="text-gray-400 mt-5 text-lg max-w-3xl mx-auto leading-relaxed">
                        Explore our premium collection of modern safes,
                        digital lockers, office vaults, and advanced
                        security solutions.
                    </p>

                </div>

                {/* Search Bar */}
                <div className="max-w-2xl mx-auto mt-12">

                    <div className="relative">

                        <input
                            type="text"
                            placeholder="Search products..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full bg-[#111827] border border-[#D4AF37]/10 focus:border-[#D4AF37] outline-none px-6 py-4 rounded-full text-white pl-14"
                        />

                        <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-[#D4AF37]" />

                    </div>

                </div>

                {/* Products Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <ProductCard
                                key={product._id}
                                product={product}
                            />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20">

                            <h2 className="text-3xl font-bold text-white">
                                No Products Found
                            </h2>

                            <p className="text-gray-400 mt-4">
                                Try searching with another keyword.
                            </p>

                        </div>
                    )}

                </div>

            </section>

        </div>
    );
};

export default Products;