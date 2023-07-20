

import Image from "next/image";
import Input from "../atom/Input";


export default function infoCrypto2() {
    return (
        <>
            {/* <!-- infoCrypto2 --> */}
            <div
                class="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5 lg:grid-cols-2 lg:gap-6"
            >
                <div
                    class="rounded-lg bg-primary p-4 transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/50 dark:bg-accent dark:shadow-accent/50 dark:hover:shadow-accent/50"
                >
                    <div
                        class="flex h-10 w-10 items-center justify-center rounded-lg bg-white/90"
                    >
                        <i
                            class="fa-brands fa-btc text-xl text-primary dark:text-accent"
                        ></i>
                    </div>
                    <p class="mt-3 text-base font-medium text-white">Bitcoin</p>
                    <div class="mt-8">
                        <p class="mt-3 text-xl font-medium text-white">$3,252.54</p>
                        <p class="mt-1 text-indigo-100">0.846616 BTC</p>
                    </div>
                </div>
                <div
                    class="rounded-lg bg-warning p-4 transition-shadow duration-300 hover:shadow-lg hover:shadow-warning/50"
                >
                    <div
                        class="flex h-10 w-10 items-center justify-center rounded-lg bg-white/90"
                    >
                        <i class="fa-solid fa-litecoin-sign text-xl text-warning"></i>
                    </div>
                    <p class="mt-3 text-base font-medium text-white">Litecoin</p>
                    <div class="mt-8">
                        <p class="mt-3 text-xl font-medium text-white">$6,955.89</p>
                        <p class="mt-1 text-amber-50">16.5562 LTC</p>
                    </div>
                </div>
                <div
                    class="rounded-lg bg-info p-4 transition-shadow duration-300 hover:shadow-lg hover:shadow-info/50"
                >
                    <div
                        class="flex h-10 w-10 items-center justify-center rounded-lg bg-white/90"
                    >
                        <i class="fa-brands fa-ethereum text-xl text-info"></i>
                    </div>
                    <p class="mt-3 text-base font-medium text-white">Ethereum</p>
                    <div class="mt-8">
                        <p class="mt-3 text-xl font-medium text-white">$7,654.26</p>
                        <p class="mt-1 text-sky-100">11.7946 ETH</p>
                    </div>
                </div>
                <div
                    class="rounded-lg bg-secondary p-4 transition-shadow duration-300 hover:shadow-lg hover:shadow-secondary/50"
                >
                    <div
                        class="flex h-10 w-10 items-center justify-center rounded-lg bg-white/90"
                    >
                        <i
                            class="fa-solid fa-bitcoin-sign text-xl text-secondary"
                        ></i>
                    </div>
                    <p class="mt-3 text-base font-medium text-white">
                        Bitcoin Cash
                    </p>
                    <div class="mt-8">
                        <p class="mt-3 text-xl font-medium text-white">$10,365.97</p>
                        <p class="mt-1 text-pink-100">4.85423 BCH</p>
                    </div>
                </div>
            </div>
        </>
    );
};
