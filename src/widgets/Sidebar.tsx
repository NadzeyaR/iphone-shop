'use client';
import React from "react";
import {Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";
import Logo from "../../public/navbar/Logo";
import useLang from "../hooks/useLang";
import {setLang} from "../context/Lang";
import {AllowedLangs} from "../constants/lang";

const Sidebar = () => {
    const {lang, translations} = useLang();

    const handleSwitchLang = (lang : string) => {
        setLang(lang as AllowedLangs)
        localStorage.setItem('lang', JSON.stringify(lang))
    }

    const handleSwitchToRu = () => handleSwitchLang('ru')
    const handleSwitchToEn = () => handleSwitchLang('en')

    return (
        <Navbar>
            <NavbarBrand>
                <p className="font-bold text-inherit">
                    <Link href={'/'}>
                        <Logo/>
                    </Link>
                </p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-6" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#">
                        {translations[lang].sidebar.menu_home}
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="#" aria-current="page">
                        {translations[lang].sidebar.menu_catalog}
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        {translations[lang].sidebar.menu_contact}
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        {translations[lang].sidebar.menu_about}
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">
                        {translations[lang].sidebar.login}
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        {translations[lang].sidebar.Sign_up}
                    </Button>
                </NavbarItem>
                <NavbarItem className={'border-1 rounded-xl px-2 py-1.5 border-primary'} >
                    <button
                        onClick={handleSwitchToRu}
                        style={lang === 'ru' ? {color : '#6ee7b7'} : {color : '#d1d5db'}}>RU</button>
                    <button
                        onClick={handleSwitchToEn}
                        className={'ml-2'}
                        style={lang === 'en' ? {color : '#6ee7b7'} : {color : '#d1d5db'}}>EN</button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}

export default Sidebar;