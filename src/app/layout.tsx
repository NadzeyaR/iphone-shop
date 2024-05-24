import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {NextUIProvider} from "@nextui-org/system";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import {Container} from "../shared/Container";
import Dropdown from "../shared/Dropdown";
import Sidebar from "../widgets/Sidebar";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {


    return (
        <html lang="en">
        <body className={inter.className}>
        <NextUIProvider>
            <NextThemesProvider attribute="class" enableSystem>
                <Container>
                    <Sidebar/>
                    {children}
                    <div className={'flex w-full pr-4 items-center sm:hidden fixed z-10 bottom-0'}>
                        <Dropdown/>
                    </div>
                    <div className={'h-32'} ></div>
                </Container>
            </NextThemesProvider>
        </NextUIProvider>
        </body>
        </html>
    );
}
