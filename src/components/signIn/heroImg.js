import Image from "next/image";
import Input from "../atom/Input";


export default function HeroImg() {
    return (
        <>
            <div className="hidden w-full place-items-center lg:grid">
                <div className="w-full max-w-lg p-6">
                    <Image
                        className="w-full"
                        id="hero-image-light"
                        src="/images/illustrations/dashboard-check.svg"
                        alt="image"
                        width={500} height={500}
                    />
                </div>
            </div>
        </>
    );
};
