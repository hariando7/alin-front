import Link from "next/link";
import Image from "next/image";

// import HeroImg from "@/components/signIn/heroImg";
import FormSignUp from "@/components/organisme/formSignUp";
import HeroSignUp from "@/components/organisme/heroSignUp";

export default function signUp() {
    return (
        <>
            <HeroSignUp></HeroSignUp>
            <FormSignUp></FormSignUp>
        </>
    );
}