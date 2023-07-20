import Image from "next/image";
import Input from "../atom/Input";


export default function heroSignUp() {
    return (
        <>
            <div className="hidden w-full place-items-center lg:grid">
                <div className="w-full max-w-lg p-6">
                    <img
                        className="w-full"
                        id="hero-image-light"
                        src="/images/illustrations/dashboard-meet.svg"
                        alt="image"
                    />
                    {/* <img
                        className="w-full"
                        id="hero-image-dark"
                        src="/images/illustrations/dashboard-meet-dark.svg"
                        alt="image"
                    /> */}
                </div>
            </div>
        </>
    );
};
