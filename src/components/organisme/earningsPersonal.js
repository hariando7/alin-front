

import Image from "next/image";
import Input from "../atom/Input";


export default function earningsPersonal() {
    return (
        <>
            {/* <!-- earningsPersonal --> */}
            <div
                class="card bg-gradient-to-r from-blue-500 to-indigo-600 px-5 pb-5"
            >
                <div>
                    <div class="ax-transparent-gridline mt-5 w-1/2">
                        <div id="earning-chart"></div>
                    </div>
                    <p
                        class="mt-3 text-base font-medium tracking-wide text-indigo-100"
                    >
                        Earnings
                    </p>
                    <p class="mt-4 font-inter text-2xl font-semibold">
                        <span class="text-indigo-100">$</span>
                        <span class="text-white">31.313</span>
                    </p>
                    <div
                        class="badge mt-2 rounded-full bg-black/20 text-indigo-50"
                    >
                        13 Members
                    </div>
                </div>
                <div
                    class="absolute bottom-0 right-0 overflow-hidden rounded-lg"
                >
                    <img
                        class="w-24 translate-x-1/4 translate-y-1/4 opacity-50"
                        src="images/illustrations/the-dollar.svg"
                        alt="image"
                    />
                </div>
            </div>
        </>
    );
};
