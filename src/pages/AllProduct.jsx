import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import ProductItem from "../components/allProduct/ProductItem";
import Paginate from "../components/paginate/Paginate";
import { toast } from "react-toastify";
import { Col, Form, InputGroup } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { useParams } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function AllProduct() {
    const { key } = useParams(); //search key from header
    const [products, setProducts] = useState([
        {
            id: "1",
            name: "iPhone 13 Pro Max",
            price: 1099.99,
            originalPrice: 900.25,
            categoryId: 1,
            brand: 1,
            featured: false,
            year: 2022,
            status: true,
            detail: "<p><br></p><table><tbody><tr><td><div>Display</div></td><td><div>6.7-inch Super Retina XDR display with ProMotion technology</div></td></tr><tr><td><div>Processor</div></td><td><div>A15 Bionic chip with 6-core CPU, 5-core GPU</div></td></tr><tr><td><div>RAM</div></td><td><div>8GB</div></td></tr><tr><td><div>Storage</div></td><td><div>512GB</div></td></tr><tr><td><div>Rear camera</div></td><td><div>12MP Wide Camera + 12MP Ultra Wide Camera + 12MP Telephoto Camera</div></td></tr><tr><td><div>Front camera</div></td><td><div>12MP TrueDepth front camera with Portrait mode, Night mode, Deep Fusion, and HDR Dolby Vision recording</div></td></tr><tr><td><div>Battery life</div></td><td><div>6000mAh (typical) battery capacity.</div></td></tr></tbody></table>",
            describe:
                "The iPhone 13 Pro Max is the latest addition to Apple's iPhone lineup. It is the largest and most advanced iPhone ever created by Apple. The phone features a stunning 6.68-inch OLED display with a resolution of 2778 x 1284 pixels at 458 PPI. The display is protected by Ceramic Shield, which is tougher than any smartphone glass.\n\nThe iPhone 13 Pro Max is powered by the A15 Bionic chip, which is the fastest chip ever in a smartphone. The chip features a 6-core CPU and a 5-core GPU, which delivers up to 50% faster graphics performance than any other smartphone.\n\nThe phone features an all-new Ultra Wide camera with autofocus which enables macro photography natively on iPhone, a new Wide camera, and a new Telephoto camera with increased 3x optical zoom. The camera system also features Night mode and Deep Fusion technology, which allows you to take stunning photos even in low light conditions.\n\nThe iPhone 13 Pro Max is available in five colors: Alpine Green, Silver, Gold, Graphite, and Sierra Blue. The phone is also available in three storage options: 128GB, 256GB, and 512GB.\n\nThe phone runs on iOS 15, which is the latest version of Apple's mobile operating system. iOS 15 introduces new features such as Focus mode, Live Text, and FaceTime enhancements. The phone also features MagSafe technology for faster wireless charging and better alignment.\n\nThe iPhone 13 Pro Max is water-resistant with an IP68 rating. It can withstand being submerged in up to six meters of water for up to thirty minutes. The phone also features Face ID for secure authentication and Apple Pay for contactless payments.\n\nIn conclusion, the iPhone 13 Pro Max is a powerful and advanced smartphone that offers an incredible user experience. With its stunning display, powerful A15 Bionic chip, and advanced camera system, it is the perfect phone for anyone who wants the best of the best.",
            color: ["Lumious White", "Ocean blue", "Phantom black", "Space green"],
            images: [
                "https://res.cloudinary.com/dck2nnfja/image/upload/v1688444875/products/1/iphone-13-starlight-1-600x600_klfjjt.jpg",
                "https://res.cloudinary.com/dck2nnfja/image/upload/v1688445151/products/1/iphone-13-xanh-1_kvgbxy.jpg",
                "https://res.cloudinary.com/dck2nnfja/image/upload/v1688444194/products/1/iphone-13-1-2_eiogf7.jpg",
                "https://res.cloudinary.com/dck2nnfja/image/upload/v1688444129/products/1/iphone-13-xanh-glr-1_qcftmv.jpg",
                "https://res.cloudinary.com/dck2nnfja/image/upload/v1688444226/products/1/iphone-13-1-3_wv8efd.jpg",
            ],
        },
        {
            id: "2",
            name: "Galaxy S21 Ultra 5G",
            price: 1379.99,
            originalPrice: 1275.25,
            categoryId: 1,
            brand: 3,
            featured: true,
            year: 2022,
            status: true,
            detail: "<p><br></p><table><tbody><tr><td><div>Display</div></td><td><div>6.7-inch Super Retina XDR display with ProMotion technology</div></td></tr><tr><td><div>Processor</div></td><td><div>A15 Bionic chip with 6-core CPU, 5-core GPU</div></td></tr><tr><td><div>RAM</div></td><td><div>8GB</div></td></tr><tr><td><div>Storage</div></td><td><div>512GB</div></td></tr><tr><td><div>Rear camera</div></td><td><div>12MP Wide Camera + 12MP Ultra Wide Camera + 12MP Telephoto Camera</div></td></tr><tr><td><div>Front camera</div></td><td><div>12MP TrueDepth front camera with Portrait mode, Night mode, Deep Fusion, and HDR Dolby Vision recording</div></td></tr><tr><td><div>Battery life</div></td><td><div>6000mAh (typical) battery capacity.</div></td></tr></tbody></table>",
            describe:
                "The Samsung Galaxy S21 Ultra 5G is a high-end smartphone that comes with a 6.8-inch Dynamic AMOLED 2X display with a resolution of 1440 x 3200 pixels. It is powered by an Exynos 2100 processor and runs on Android 11 with One UI 3.1. The phone has a quad-camera setup at the back with a 108-megapixel primary sensor, a 12-megapixel ultra-wide-angle lens, and two 10-megapixel telephoto lenses. It also has a 40-megapixel front-facing camera for selfies and video calls. Other features include an in-display fingerprint sensor, IP68 dust/water resistance, and support for wireless charging.",
            color: ["Phantom Silver", "Phantom Black"],
            images: [
                "https://res.cloudinary.com/dck2nnfja/image/upload/v1688445642/products/2/samsung-galaxy-s21-ultra-bac-600x600-1-200x200_whnbch.jpg",
                "https://res.cloudinary.com/dck2nnfja/image/upload/v1688445648/products/2/samsung-galaxy-s21-ultra-den-600x600-1-200x200_pz2iej.jpg",
                "https://res.cloudinary.com/dck2nnfja/image/upload/v1688445679/products/2/samsung-galaxy-s21-ultra-bac-3-org_djau92.jpg",
                "https://res.cloudinary.com/dck2nnfja/image/upload/v1688445682/products/2/samsung-galaxy-s21-ultra-bac-2-org_yv1o0g.jpg",
            ],
        },
        {
            id: "3",
            name: "Xiaomi Mi 11 Ultra",
            price: 1199.99,
            originalPrice: 1100.25,
            categoryId: 1,
            brand: 4,
            featured: true,
            year: 2022,
            status: true,
            detail: "<p><br></p><table><tbody><tr><td><div>Display</div></td><td><div>6.7-inch Super Retina XDR display with ProMotion technology</div></td></tr><tr><td><div>Processor</div></td><td><div>A15 Bionic chip with 6-core CPU, 5-core GPU</div></td></tr><tr><td><div>RAM</div></td><td><div>8GB</div></td></tr><tr><td><div>Storage</div></td><td><div>512GB</div></td></tr><tr><td><div>Rear camera</div></td><td><div>12MP Wide Camera + 12MP Ultra Wide Camera + 12MP Telephoto Camera</div></td></tr><tr><td><div>Front camera</div></td><td><div>12MP TrueDepth front camera with Portrait mode, Night mode, Deep Fusion, and HDR Dolby Vision recording</div></td></tr><tr><td><div>Battery life</div></td><td><div>6000mAh (typical) battery capacity.</div></td></tr></tbody></table>",
            describe:
                "The Xiaomi Mi 11 Ultra is a high-end smartphone that was released on April 2, 2021. It features a 6.81-inch AMOLED display with a resolution of 1440 x 3200 pixels and a refresh rate of 120Hz. The phone is powered by a Qualcomm Snapdragon 888 processor and runs on Android 11 with MIUI 12.5. It has a triple-camera setup at the back with a 50-megapixel primary sensor, a 48-megapixel ultra-wide-angle lens, and a 48-megapixel periscope telephoto lens. It also has a 20-megapixel front-facing camera for selfies and video calls. Other features include an in-display fingerprint sensor, IP68 dust/water resistance, and support for wireless charging. The phone comes with either 256GB or 512GB of internal storage and has no card slot.",
            color: ["Ceramic White", "Ceramic Black"],
            images: [
                "https://res.cloudinary.com/dck2nnfja/image/upload/v1688445954/products/3/1_prefps.jpg",
                "https://res.cloudinary.com/dck2nnfja/image/upload/v1688445954/products/3/2_krszpf.jpg",
                "https://res.cloudinary.com/dck2nnfja/image/upload/v1688445953/products/3/4_soln1w.jpg",
                "https://res.cloudinary.com/dck2nnfja/image/upload/v1688445954/products/3/3_s00si0.jpg",
            ],
        },
        {
            id: "4",
            name: "Pixel 6 Pro",
            price: 999.99,
            originalPrice: 900.25,
            categoryId: 1,
            brand: 2,
            featured: true,
            year: 2020,
            status: true,
            detail: "<p><br></p><table><tbody><tr><td><div>Display</div></td><td><div>6.7-inch Super Retina XDR display with ProMotion technology</div></td></tr><tr><td><div>Processor</div></td><td><div>A15 Bionic chip with 6-core CPU, 5-core GPU</div></td></tr><tr><td><div>RAM</div></td><td><div>8GB</div></td></tr><tr><td><div>Storage</div></td><td><div>512GB</div></td></tr><tr><td><div>Rear camera</div></td><td><div>12MP Wide Camera + 12MP Ultra Wide Camera + 12MP Telephoto Camera</div></td></tr><tr><td><div>Front camera</div></td><td><div>12MP TrueDepth front camera with Portrait mode, Night mode, Deep Fusion, and HDR Dolby Vision recording</div></td></tr><tr><td><div>Battery life</div></td><td><div>6000mAh (typical) battery capacity.</div></td></tr></tbody></table>",
            describe:
                "The Pixel 6 Pro is a top-tier Android phone with a superb camera, a dynamic 120Hz display, and pure Android software. It has some of the best processing in the business and can deliver excellent photos in challenging conditions. However, it falls behind on brightness and battery life, especially for hardcore gamers. It comes with a Google Tensor chipset and has a big 5003 mAh battery with 30W charging speed. On the back, it features a triple-camera setup with a 50 MP main sensor, Telefoto camera, and Ultra-wide sensor. It has 12 GB RAM and 512 GB storage.",
            color: ["Cloudy White", "Stormy Black"],
            images: [
                "https://res.cloudinary.com/dck2nnfja/image/upload/v1688446175/products/4/2_mscqnn.jpg",
                "https://res.cloudinary.com/dck2nnfja/image/upload/v1688446175/products/4/1_h3fwut.jpg",
                "https://res.cloudinary.com/dck2nnfja/image/upload/v1688446175/products/4/3_clkysh.webp",
                "https://res.cloudinary.com/dck2nnfja/image/upload/v1688446176/products/4/4_lxxpxn.jpg",
            ],
        },
        {
            id: "5",
            name: "iPad Pro",
            price: 1899.99,
            originalPrice: 1825.25,
            categoryId: 2,
            brand: 1,
            featured: true,
            year: 2021,
            status: true,
            detail: "<p><br></p><table><tbody><tr><td><div>Display</div></td><td><div>6.7-inch Super Retina XDR display with ProMotion technology</div></td></tr><tr><td><div>Processor</div></td><td><div>A15 Bionic chip with 6-core CPU, 5-core GPU</div></td></tr><tr><td><div>RAM</div></td><td><div>8GB</div></td></tr><tr><td><div>Storage</div></td><td><div>512GB</div></td></tr><tr><td><div>Rear camera</div></td><td><div>12MP Wide Camera + 12MP Ultra Wide Camera + 12MP Telephoto Camera</div></td></tr><tr><td><div>Front camera</div></td><td><div>12MP TrueDepth front camera with Portrait mode, Night mode, Deep Fusion, and HDR Dolby Vision recording</div></td></tr><tr><td><div>Battery life</div></td><td><div>6000mAh (typical) battery capacity.</div></td></tr></tbody></table>",
            describe:
                "The iPad Pro is Apple's high-end tablet computer with the following features: 1 A M2 chip for fast performance 2 Apple Pencil hover for precise input 3 ProRes video recording for professional quality 4 Bluetooth 5.3 and Wi-Fi 6E connectivity for fast data transfer 5 A Thunderbolt port for connecting external devices 6 A Liquid Retina XDR mini-LED display on the 12.9-inch model for stunning visuals 7 A 11-inch or 12.9-inch LED backlit Multi‑Touch display with ProMotion, wide color, and True Tone technologies 8 Up to 16GB of RAM and 2TB of storage",
            color: ["Silver", "Space gray"],
            images: [
                "https://res.cloudinary.com/dck2nnfja/image/upload/v1688447292/products/5/2_zameor.jpg",
                "https://res.cloudinary.com/dck2nnfja/image/upload/v1688447292/products/5/1_lumm9x.jpg",
                "https://res.cloudinary.com/dck2nnfja/image/upload/v1688447294/products/5/3_qmby0o.png",
                "https://res.cloudinary.com/dck2nnfja/image/upload/v1688447292/products/5/4_cdwmbp.jpg",
            ],
        },
        {
            id: "6",
            name: "Mi Pad 5",
            price: 480.99,
            originalPrice: 450,
            categoryId: 2,
            brand: 4,
            featured: true,
            year: 2022,
            status: true,
            detail: "<p><br></p><table><tbody><tr><td><div>Display</div></td><td><div>6.7-inch Super Retina XDR display with ProMotion technology</div></td></tr><tr><td><div>Processor</div></td><td><div>A15 Bionic chip with 6-core CPU, 5-core GPU</div></td></tr><tr><td><div>RAM</div></td><td><div>8GB</div></td></tr><tr><td><div>Storage</div></td><td><div>512GB</div></td></tr><tr><td><div>Rear camera</div></td><td><div>12MP Wide Camera + 12MP Ultra Wide Camera + 12MP Telephoto Camera</div></td></tr><tr><td><div>Front camera</div></td><td><div>12MP TrueDepth front camera with Portrait mode, Night mode, Deep Fusion, and HDR Dolby Vision recording</div></td></tr><tr><td><div>Battery life</div></td><td><div>6000mAh (typical) battery capacity.</div></td></tr></tbody></table>",
            describe:
                "The Mi Pad 5 is Xiaomi's high-end tablet computer with the following features: 1 A Qualcomm Snapdragon 860 processor with Adreno 640 GPU for fast performance 2 Android 11 with MIUI 12.5 custom skin out of the box 3 An 11-inch WQXGA display with a 16:10 aspect ratio, 120Hz refresh rate, and 240Hz sampling rate for stunning visuals 4 A single 13MP snapper on the back that can record 4K videos and an 8MP snapper on the front for selfies and video chats 5 Up to 6GB RAM and either 128GB or 256GB storage for ample space for your files and apps.",
            color: ["Cosmic Gray", "Pearl White", "Green"],
            images: [
                "https://res.cloudinary.com/dck2nnfja/image/upload/v1688447304/products/6/1_ccbkyv.jpg",
                "https://res.cloudinary.com/dck2nnfja/image/upload/v1688447303/products/6/2_xgb7bi.jpg",
                "https://res.cloudinary.com/dck2nnfja/image/upload/v1688447304/products/6/3_nxuuly.jpg",
                "https://res.cloudinary.com/dck2nnfja/image/upload/v1688447304/products/6/4_fnu7pb.png",
            ],
        },
        {
            id: "7",
            name: "Galaxy Tab S7+",
            price: 900.99,
            originalPrice: 850,
            categoryId: 2,
            brand: 3,
            featured: true,
            year: 2023,
            status: true,
            detail: "<p><br></p><table><tbody><tr><td><div>Display</div></td><td><div>6.7-inch Super Retina XDR display with ProMotion technology</div></td></tr><tr><td><div>Processor</div></td><td><div>A15 Bionic chip with 6-core CPU, 5-core GPU</div></td></tr><tr><td><div>RAM</div></td><td><div>8GB</div></td></tr><tr><td><div>Storage</div></td><td><div>512GB</div></td></tr><tr><td><div>Rear camera</div></td><td><div>12MP Wide Camera + 12MP Ultra Wide Camera + 12MP Telephoto Camera</div></td></tr><tr><td><div>Front camera</div></td><td><div>12MP TrueDepth front camera with Portrait mode, Night mode, Deep Fusion, and HDR Dolby Vision recording</div></td></tr><tr><td><div>Battery life</div></td><td><div>6000mAh (typical) battery capacity.</div></td></tr></tbody></table>",
            describe:
                "The Galaxy Tab S7+ is Samsung's high-end tablet computer with the following features: 1 A Qualcomm Snapdragon 865+ processor with Adreno 650 GPU for fast performance 2 Android 10 with One UI 2.5 custom skin out of the box 3 A 12.4-inch Super AMOLED display with a 120Hz refresh rate and a resolution of 2800 x 1752 pixels for stunning visuals 4 A dual-camera setup on the back that includes a 13MP primary sensor and a 5MP ultra-wide sensor, and an 8MP snapper on the front for selfies and video chats 5 Up to 8GB RAM and either 128GB or 256GB storage for ample space for your files and apps.",
            color: ["Mystic Black", "Mystic Bronze", "Mystic Silver"],
            images: [
                "https://res.cloudinary.com/dck2nnfja/image/upload/v1688447312/products/7/1_zsczyo.jpg",
                "https://res.cloudinary.com/dck2nnfja/image/upload/v1688447312/products/7/2_tumkzk.jpg",
                "https://res.cloudinary.com/dck2nnfja/image/upload/v1688447313/products/7/3_qaehyx.jpg",
                "https://res.cloudinary.com/dck2nnfja/image/upload/v1688447312/products/7/4_c04vev.jpg",
            ],
        },
        {
            id: "8",
            name: "iPad Air (2022)",
            price: 449.99,
            originalPrice: 420.25,
            categoryId: 2,
            brand: 1,
            featured: true,
            year: 2022,
            status: true,
            detail: "<p><br></p><table><tbody><tr><td><div>Display</div></td><td><div>6.7-inch Super Retina XDR display with ProMotion technology</div></td></tr><tr><td><div>Processor</div></td><td><div>A15 Bionic chip with 6-core CPU, 5-core GPU</div></td></tr><tr><td><div>RAM</div></td><td><div>8GB</div></td></tr><tr><td><div>Storage</div></td><td><div>512GB</div></td></tr><tr><td><div>Rear camera</div></td><td><div>12MP Wide Camera + 12MP Ultra Wide Camera + 12MP Telephoto Camera</div></td></tr><tr><td><div>Front camera</div></td><td><div>12MP TrueDepth front camera with Portrait mode, Night mode, Deep Fusion, and HDR Dolby Vision recording</div></td></tr><tr><td><div>Battery life</div></td><td><div>6000mAh (typical) battery capacity.</div></td></tr></tbody></table>",
            describe:
                "The iPad Air (2022) is the 5th generation model of the iPad Air series, and it was announced by Apple on March 8, 2022. It features the M1 chip, 5G, a new front camera with Center Stage, and a 10.9-inch Liquid Retina display. It comes in five colors and has Touch ID in the side power button.",
            color: ["Silver", "Pink", "Blue"],
            images: [
                "https://res.cloudinary.com/dck2nnfja/image/upload/v1688447313/products/8/1_e1uugz.jpg",
                "https://res.cloudinary.com/dck2nnfja/image/upload/v1688447313/products/8/2_avfzlf.jpg",
                "https://res.cloudinary.com/dck2nnfja/image/upload/v1688447313/products/8/3_qzk1wj.jpg",
                "https://res.cloudinary.com/dck2nnfja/image/upload/v1688447313/products/8/4_kipwjp.jpg",
            ],
        },
        {
            id: "9",
            name: "Dell XPS 13",
            price: 649.99,
            originalPrice: 620.25,
            categoryId: 3,
            brand: 5,
            featured: true,
            year: 2022,
            status: true,
            detail: "<p><br></p><table><tbody><tr><td><div>Display</div></td><td><div>6.7-inch Super Retina XDR display with ProMotion technology</div></td></tr><tr><td><div>Processor</div></td><td><div>A15 Bionic chip with 6-core CPU, 5-core GPU</div></td></tr><tr><td><div>RAM</div></td><td><div>8GB</div></td></tr><tr><td><div>Storage</div></td><td><div>512GB</div></td></tr><tr><td><div>Rear camera</div></td><td><div>12MP Wide Camera + 12MP Ultra Wide Camera + 12MP Telephoto Camera</div></td></tr><tr><td><div>Front camera</div></td><td><div>12MP TrueDepth front camera with Portrait mode, Night mode, Deep Fusion, and HDR Dolby Vision recording</div></td></tr><tr><td><div>Battery life</div></td><td><div>6000mAh (typical) battery capacity.</div></td></tr></tbody></table>",
            describe:
                "The Dell XPS 13 is a sleek and reliable laptop with a 13.4-inch touch-screen display and an 11th Gen Intel core processor. It has a super-slim bezel thanks to the InfinityEdge design and a super-tiny webcam on top of the screen. It comes in different colors, including silver, black, white, and frost, and has a high-quality aluminum and carbon-fiber or composite-fiber build. It is lightweight and easy to carry, weighing under 3 pounds and measuring 0.55 inches thin.",
            color: ["Platinum Silver with Black Carbon Fiber Palmrest"],
            images: [
                "https://res.cloudinary.com/dck2nnfja/image/upload/v1688447314/products/9/4_kuihgv.jpg",
                "https://res.cloudinary.com/dck2nnfja/image/upload/v1688447313/products/9/2_sor15t.webp",
                "https://res.cloudinary.com/dck2nnfja/image/upload/v1688447313/products/9/1_myo3rj.jpg",
                "https://res.cloudinary.com/dck2nnfja/image/upload/v1688447314/products/9/3_vtydm7.webp",
            ],
        },
        {
            id: "10",
            name: "HP Spectre x360 16",
            price: 1499.99,
            originalPrice: 1450.25,
            categoryId: 3,
            brand: 6,
            featured: true,
            year: 2022,
            status: true,
            detail: "<p><br></p><table><tbody><tr><td><div>Display</div></td><td><div>6.7-inch Super Retina XDR display with ProMotion technology</div></td></tr><tr><td><div>Processor</div></td><td><div>A15 Bionic chip with 6-core CPU, 5-core GPU</div></td></tr><tr><td><div>RAM</div></td><td><div>8GB</div></td></tr><tr><td><div>Storage</div></td><td><div>512GB</div></td></tr><tr><td><div>Rear camera</div></td><td><div>12MP Wide Camera + 12MP Ultra Wide Camera + 12MP Telephoto Camera</div></td></tr><tr><td><div>Front camera</div></td><td><div>12MP TrueDepth front camera with Portrait mode, Night mode, Deep Fusion, and HDR Dolby Vision recording</div></td></tr><tr><td><div>Battery life</div></td><td><div>6000mAh (typical) battery capacity.</div></td></tr></tbody></table>",
            describe:
                "The HP Spectre x360 16 is a high-performance laptop that's perfect for both work and play. It features a stunning 16-inch display with a resolution of 2560 x 1600 pixels and an aspect ratio of 16:10. The laptop is powered by an Intel Core i7 processor and comes with up to 32 GB of DDR4-3200 SDRAM and up to 1 TB of SSD storage. It also has an NVIDIA GeForce RTX 3050 Ti graphics card for smooth and seamless gaming. The laptop runs on Windows 10 Home or Windows 11 Home and has a battery life of up to 12 hours and 15 minutes. It's available in two colors: Poseidon Blue with Pale Brass accents and Dark Ash Silver with Copper Luxe accents.",
            color: ["Nightfall Black with Copper Luxe Accents"],
            images: [
                "https://res.cloudinary.com/dck2nnfja/image/upload/v1688447314/products/10/1_hy5bve.jpg",
                "https://res.cloudinary.com/dck2nnfja/image/upload/v1688447314/products/10/2_cdeplk.webp",
                "https://res.cloudinary.com/dck2nnfja/image/upload/v1688447314/products/10/3_z5gr6s.jpg",
                "https://res.cloudinary.com/dck2nnfja/image/upload/v1688447314/products/10/4_trtr1f.png",
            ],
        },
        {
            id: "11",
            name: "MacBook Pro M1",
            price: 1299.99,
            originalPrice: 1250.25,
            categoryId: 3,
            brand: 1,
            featured: true,
            year: 2020,
            status: true,
            detail: "<p><br></p><table><tbody><tr><td><div>Display</div></td><td><div>6.7-inch Super Retina XDR display with ProMotion technology</div></td></tr><tr><td><div>Processor</div></td><td><div>A15 Bionic chip with 6-core CPU, 5-core GPU</div></td></tr><tr><td><div>RAM</div></td><td><div>8GB</div></td></tr><tr><td><div>Storage</div></td><td><div>512GB</div></td></tr><tr><td><div>Rear camera</div></td><td><div>12MP Wide Camera + 12MP Ultra Wide Camera + 12MP Telephoto Camera</div></td></tr><tr><td><div>Front camera</div></td><td><div>12MP TrueDepth front camera with Portrait mode, Night mode, Deep Fusion, and HDR Dolby Vision recording</div></td></tr><tr><td><div>Battery life</div></td><td><div>6000mAh (typical) battery capacity.</div></td></tr></tbody></table>",
            describe:
                "The MacBook Pro M1 is a powerful laptop that's perfect for both personal and professional use. It features a 13.3-inch Retina display with True Tone technology and a resolution of 2560 x 1600 pixels. The laptop is powered by Apple's M1 chip and comes with up to 16 GB of unified memory and up to 2 TB of SSD storage. It also has an 8-core GPU for smooth and seamless graphics performance. The laptop runs on macOS Big Sur and has a battery life of up to 17 hours. It's available in two colors: Silver and Space Gray.",
            color: ["Silver", "Space Gray"],
            images: [
                "https://res.cloudinary.com/dck2nnfja/image/upload/v1688447314/products/11/1_rcfyh0.jpg",
                "https://res.cloudinary.com/dck2nnfja/image/upload/v1688447314/products/11/2_ie2s8s.png",
                "https://res.cloudinary.com/dck2nnfja/image/upload/v1688447315/products/11/3_r7k9mn.jpg",
                "https://res.cloudinary.com/dck2nnfja/image/upload/v1688447315/products/11/4_ouwt8t.jpg",
            ],
        },
        {
            id: "12",
            name: "Lenovo ThinkPad X1 Carbon Gen 9",
            price: 1599.99,
            originalPrice: 1540.25,
            categoryId: 3,
            brand: 7,
            featured: true,
            year: 2021,
            status: true,
            detail: "<p><br></p><table><tbody><tr><td><div>Display</div></td><td><div>6.7-inch Super Retina XDR display with ProMotion technology</div></td></tr><tr><td><div>Processor</div></td><td><div>A15 Bionic chip with 6-core CPU, 5-core GPU</div></td></tr><tr><td><div>RAM</div></td><td><div>8GB</div></td></tr><tr><td><div>Storage</div></td><td><div>512GB</div></td></tr><tr><td><div>Rear camera</div></td><td><div>12MP Wide Camera + 12MP Ultra Wide Camera + 12MP Telephoto Camera</div></td></tr><tr><td><div>Front camera</div></td><td><div>12MP TrueDepth front camera with Portrait mode, Night mode, Deep Fusion, and HDR Dolby Vision recording</div></td></tr><tr><td><div>Battery life</div></td><td><div>6000mAh (typical) battery capacity.</div></td></tr></tbody></table>",
            describe:
                "The Lenovo ThinkPad X1 Carbon Gen 9 is a high-performance laptop that's perfect for business use. It features a 14-inch display with a resolution of 1920 x 1080 pixels or 2560 x 1440 pixels. The laptop is powered by an Intel Core i5 or i7 processor and comes with up to 16 GB of LPDDR4x memory and up to 2 TB of PCIe SSD storage. It also has an Intel Iris Xe graphics card for smooth and seamless graphics performance. The laptop runs on Windows 10 Pro or Windows 11 Pro and has a battery life of up to 16 hours. It's available in two colors: Black and Silver.",
            color: ["Black"],
            images: [
                "https://res.cloudinary.com/dck2nnfja/image/upload/v1688447315/products/12/1_m9pdde.png",
                "https://res.cloudinary.com/dck2nnfja/image/upload/v1688447315/products/12/2_mwpx6b.webp",
                "https://res.cloudinary.com/dck2nnfja/image/upload/v1688447315/products/12/3_wo7qlv.webp",
                "https://res.cloudinary.com/dck2nnfja/image/upload/v1688447315/products/12/4_nonots.webp",
            ],
        },
    ]); //productlist that use for display
    const [categories, setCategories] = useState([
        {
            id: "1",
            name: "Smart phone",
        },
        {
            id: "2",
            name: "Tablet",
        },
        {
            id: "3",
            name: "Laptop",
        },
        {
            id: "4",
            name: "Smart watch",
        },
    ]); //category
    const [brands, setBrands] = useState([
        {
            id: "1",
            name: "Apple",
            logo: "",
        },
        {
            id: "2",
            name: "Google",
            logo: "",
        },
        {
            id: "3",
            name: "Samsung",
            logo: "",
        },
        {
            id: "4",
            name: "Xiaomi",
            logo: "",
        },
        {
            id: "5",
            name: "Dell",
            logo: "",
        },
        {
            id: "6",
            name: "HP",
            logo: "",
        },
        {
            id: "7",
            name: "Lenovo",
            logo: "",
        },
        {
            id: "8",
            name: "Fibit",
            logo: "",
        },
        {
            id: "9",
            name: "Garmin",
            logo: "",
        },
    ]); //brands
    const [isLoading, setIsLoading] = useState(false); //loading effect

    // filtering
    const [nameSearch, setNameSearch] = useState(key ? key : "");
    const [brand_f, setBrand_f] = useState([]);
    const [year_f, setYear_f] = useState([]);
    const [category_f, setCategory_f] = useState([]);
    const [max_f, setMax_f] = useState("");
    const [min_f, setMin_f] = useState("");
    //

    //pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };
    //

    //category & brand
    // useEffect(() => {
    //     fetch(`http://localhost:9999/categories`)
    //         .then((res) => res.json())
    //         .then((json) => setCategories(json));
    // }, []);

    // useEffect(() => {
    //     fetch(`http://localhost:9999/brands`)
    //         .then((res) => res.json())
    //         .then((json) => setBrands(json));
    // }, []);
    //

    var currentYear = new Date().getFullYear();
    const years = [currentYear--, currentYear--, currentYear--, currentYear--];

    // const handleFilter = (page) => {
    // var url = `http://localhost:9999/products/?_page=${page}&_limit=12`;

    // if (nameSearch) {
    //     url += `&name_like=${nameSearch}`;
    // }

    // if (brand_f.length !== 0) {
    //     brand_f?.map((b) => (url += "&brand=" + b));
    // }
    // if (category_f.length !== 0) {
    //     category_f?.map((b) => (url += "&categoryId=" + b));
    // }
    // if (year_f.length !== 0) {
    //     year_f?.map((b) => (url += "&year=" + b));
    // }
    // if (min_f !== "") {
    //     url += "&price_gte=" + min_f;
    // }
    // if (max_f !== "") {
    //     url += "&price_lte=" + max_f;
    // }
    // fetch(url)
    //     .then((res) => {
    //         const totalCount = res.headers.get("X-Total-Count");
    //         setTotalPages(Math.ceil(totalCount / 10));
    //         return res.json();
    //     })
    //     .then((json) => setProducts(json))
    //     .catch((err) => toast.error(err));
    // };

    // useEffect(() => {
    //     handleFilter(currentPage);
    // }, [currentPage, year_f, category_f, brand_f, max_f, min_f, nameSearch]);

    const SortProduct = (index) => {
        const newProducts = [...products];
        if (index === 0) newProducts.sort((a, b) => b.feartured - a.feartured);
        if (index === 1) newProducts.sort((a, b) => a.name.localeCompare(b.name));
        if (index === 2) newProducts.sort((a, b) => b.name.localeCompare(a.name));
        if (index === 3) newProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        if (index === 4) newProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        if (index === 5) newProducts.sort((a, b) => a.id - b.id);
        if (index === 6) newProducts.sort((a, b) => b.id - a.id);
        setProducts(newProducts);
    };

    const handleFilterValue = (attr) => {
        if (attr === "brand") {
            let box = document.getElementsByName("brand-Filter-Box");
            let temp = [];
            for (let i = 0; i < box.length; i++) {
                if (box[i].checked === true) {
                    temp = [...temp, box[i].value];
                }
            }
            setBrand_f(temp);
        }
        if (attr === "category") {
            let box = document.getElementsByName("cate-Filter-Box");
            let temp = [];
            for (let i = 0; i < box.length; i++) {
                if (box[i].checked === true) {
                    temp = [...temp, box[i].value];
                }
            }
            setCategory_f(temp);
        }
        if (attr === "year") {
            let box = document.getElementsByName("year-Filter-Box");
            let temp = [];
            for (let i = 0; i < box.length; i++) {
                if (box[i].checked === true) {
                    temp = [...temp, box[i].value];
                }
            }
            setYear_f(temp);
        }
    };
    return (
        <>
            <Header />
            <Container class1="store-wrapper home-wrapper-2 py-5">
                {/* <div className="filter-card mb-3">
                    <div>
                        <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                            {brands.map((b) => (
                                <div key={b.id}>
                                    <input
                                        onChange={() => handleFilterValue("brand")}
                                        name="brand-Filter-Box"
                                        type="checkbox"
                                        className="btn-check"
                                        id={"brandCheck" + b.id}
                                        autoComplete="off"
                                        value={b.id}
                                    />
                                    <label
                                        style={{ width: "150px" }}
                                        className="btn btn-outline-primary"
                                        htmlFor={"brandCheck" + b.id}
                                    >
                                        {b.name}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div> */}
                <div className="row">
                    <div className="col-3">
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">Shop By Categories</h3>

                            <div
                                className="btn-group d-flex flex-column"
                                role="group"
                                aria-label="Basic checkbox toggle button group"
                            >
                                {categories.map((c) => (
                                    <div key={c.id}>
                                        <input
                                            onChange={() => handleFilterValue("category")}
                                            name="cate-Filter-Box"
                                            type="checkbox"
                                            className="btn-check"
                                            id={"btncheck" + c.id}
                                            autoComplete="off"
                                            value={c.id}
                                        />
                                        <label
                                            style={{ width: "150px" }}
                                            className="btn btn-outline-primary"
                                            htmlFor={"btncheck" + c.id}
                                        >
                                            {c.name}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">Filter By</h3>
                            <div>
                                <h5 className="sub-title">Release year</h5>
                                <div
                                    className="btn-group d-flex flex-column"
                                    role="group"
                                    aria-label="Basic checkbox toggle button group"
                                >
                                    {years.map((y) => (
                                        <div key={y}>
                                            <input
                                                onChange={() => handleFilterValue("year")}
                                                name="year-Filter-Box"
                                                value={y}
                                                type="checkbox"
                                                className="btn-check"
                                                id={"yearCheck" + y}
                                                autoComplete="off"
                                            />
                                            <label
                                                style={{ width: "100px" }}
                                                className="btn btn-outline-primary"
                                                htmlFor={"yearCheck" + y}
                                            >
                                                {y}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                                <h5 className="sub-title">Price</h5>
                                <div className="d-flex align-items-center gap-10">
                                    <div className="form-floating">
                                        <input
                                            onChange={(e) => setMin_f(e.target.value)}
                                            type="email"
                                            className="form-control"
                                            id="floatingInput"
                                            placeholder="From"
                                        />
                                        <label htmlFor="floatingInput">From</label>
                                    </div>
                                    <div className="form-floating">
                                        <input
                                            onChange={(e) => setMax_f(e.target.value)}
                                            type="email"
                                            className="form-control"
                                            id="floatingInput1"
                                            placeholder="To"
                                        />
                                        <label htmlFor="floatingInput1">To</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="filter-sort-grid mb-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center gap-10">
                                    <p className="mb-0 d-block" style={{ width: "100px" }}>
                                        Sort By:
                                    </p>
                                    <select
                                        onChange={(e) => SortProduct(e.target.value)}
                                        name="sort"
                                        defaultValue={"manula"}
                                        className="form-control form-select"
                                        id="sort-box"
                                    >
                                        <option value="0">Featured</option>
                                        <option value="1">Alphabetically, A-Z</option>
                                        <option value="2">Alphabetically, Z-A</option>
                                        <option value="3">Price, low to high</option>
                                        <option value="4">Price, high to low</option>
                                        <option value="5">Date, old to new</option>
                                        <option value="6">Date, new to old</option>
                                    </select>
                                </div>
                                <Col xs={12} md={4}>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text>
                                            Search <BsSearch size={20} style={{ paddingLeft: "5px" }} className="m-0" />
                                        </InputGroup.Text>
                                        <Form.Control
                                            type="name"
                                            placeholder="Search by name..."
                                            value={nameSearch}
                                            onChange={(e) => setNameSearch(e.target.value)}
                                        />
                                    </InputGroup>
                                </Col>
                            </div>
                        </div>

                        <div className="products-list pb-5">
                            <div className="d-flex flex-wrap row">
                                {isLoading ? (
                                    <div className="spinner-grow" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                ) : (
                                    products.map((p) =>
                                        p.status ? (
                                            <div className="col-3" key={p.id}>
                                                <ProductItem
                                                    product={p}
                                                    brand={brands.map((b) => (b.id === p.brand ? b.name : ""))}
                                                ></ProductItem>
                                            </div>
                                        ) : (
                                            ""
                                        )
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pagination mb-3 justify-content-end">
                    <Paginate
                        currentPage={currentPage}
                        totalPages={totalPages}
                        handlePageChange={handlePageChange}
                        handlePrevPage={handlePrevPage}
                        handleNextPage={handleNextPage}
                    />
                </div>
            </Container>
            <Footer />
        </>
    );
}

export default AllProduct;
