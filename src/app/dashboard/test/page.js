import Link from "next/link";
import Image from "next/image";
import InputText from "@/components/atom/InputText";
import Button from "@/components/molekul/buttonSignIn";
// import InputTextt from "@/components/signIn/heroImg";
import FooterSignInUp from "@/components/molekul/foterSignInUp";

import ButtonGithub from "@/components/molekul/buttonGithub";

import FormSignIn from "@/components/organisme/formSignIn";
import FormSignUp from "@/components/organisme/formSignUp";
import HeroSignIn from "@/components/organisme/heroSignIn";
import HeroSignUp from "@/components/organisme/heroSignUp";


import FormDateRange from "@/components/organisme/formDateRange";
import FormExternalElements from "@/components/organisme/formExternalElements";

import UserActivity from "@/components/organisme/userActivity";



export default function SignIn() {
    return (
        <>
            <InputText></InputText>
            {/* <InputTextt></InputTextt> */}
            <Button></Button>
            <FooterSignInUp></FooterSignInUp>
            <ButtonGithub></ButtonGithub>
            <FormSignIn></FormSignIn>
            <FormSignUp></FormSignUp>
            <HeroSignIn></HeroSignIn>
            <HeroSignUp></HeroSignUp>

            <UserActivity></UserActivity>

            <FormDateRange></FormDateRange>
            <FormExternalElements></FormExternalElements>

            


        </>
    );
}