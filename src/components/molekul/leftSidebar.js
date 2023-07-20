

import Image from "next/image";
import Input from "../atom/Input";


export default function leftSidebar() {
    return (
        <>
            {/* <!-- Left: Sidebar Toggle Button --> */}
            <div class="h-7 w-7">
                <button
                    class="sidebar-toggle ml-0.5 flex h-7 w-7 flex-col justify-center space-y-1.5 text-primary outline-none focus:outline-none dark:text-accent-light/80">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </>
    );
};
