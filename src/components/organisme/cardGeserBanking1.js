import Image from "next/image";
import Input from "../atom/Input";


export default function cardGeserBanking1() {
    return (
        <>
            {/* <!-- cardGeserBanking1 --> */}
            <div id="cards-carousel" class="swiper h-40 w-64">
                <div class="swiper-wrapper">
                    <div
                        class="swiper-slide relative flex h-full flex-col overflow-hidden rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 p-5"
                    >
                        <div class="grow">
                            <img
                                class="h-3"
                                src="images/payments/cc-visa-white.svg"
                                alt="image"
                            />
                        </div>
                        <div class="text-white">
                            <p class="text-lg font-semibold tracking-wide">$2,139.22</p>
                            <p class="mt-1 text-xs font-medium">**** **** **** 8945</p>
                        </div>
                        <div
                            class="absolute top-0 right-0 -m-3 h-24 w-24 rounded-full bg-white/20"
                        ></div>
                    </div>
                    <div
                        class="swiper-slide relative flex h-full flex-col overflow-hidden rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 p-5"
                    >
                        <div class="grow">
                            <img
                                class="h-3"
                                src="images/payments/cc-visa-white.svg"
                                alt="image"
                            />
                        </div>
                        <div class="text-white">
                            <p class="text-lg font-semibold tracking-wide">$2,139.22</p>
                            <p class="mt-1 text-xs font-medium">**** **** **** 8945</p>
                        </div>
                        <div
                            class="absolute bottom-0 right-0 -m-3 h-24 w-24 rounded-full bg-white/20"
                        ></div>
                    </div>
                    <div
                        class="swiper-slide relative flex h-full flex-col overflow-hidden rounded-xl bg-gradient-to-br from-info to-info-focus p-5"
                    >
                        <div class="grow">
                            <img
                                class="h-3"
                                src="images/payments/cc-visa-white.svg"
                                alt="image"
                            />
                        </div>
                        <div class="text-white">
                            <p class="text-lg font-semibold tracking-wide">$2,139.22</p>
                            <p class="mt-1 text-xs font-medium">**** **** **** 8945</p>
                        </div>
                        <div
                            class="absolute top-0 right-0 -m-3 h-24 w-24 rounded-full bg-white/20"
                        ></div>
                    </div>
                </div>
            </div>
        </>
    );
};
