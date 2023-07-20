

import Image from "next/image";
import Input from "../atom/Input";


export default function iconAlin() {
    return (
        <>
            {/* <!-- Application Logo --> */}
            <div class="flex pt-4">
                <a href="/">
                    <img class="h-11 w-11 transition-transform duration-500 ease-in-out hover:rotate-[360deg]"
                        src="/images/app-logo.svg" alt="logo" />
                </a>
            </div>
        </>
    );
};
