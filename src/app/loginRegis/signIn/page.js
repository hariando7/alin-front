import Link from "next/link";
import Image from "next/image";

// import HeroImg from "@/components/signIn/heroImg";
import FormSignIn from "@/components/organisme/formSignIn";
import HeroSignIn from "@/components/organisme/heroSignIn";

export default function signUp() {
    return (
        <>
            <HeroSignIn></HeroSignIn>
            <FormSignIn></FormSignIn>
        </>
    );
}