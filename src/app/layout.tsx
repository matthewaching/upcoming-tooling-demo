import type { Metadata } from "next";
import "./styles.css";
import Link from "next/link";

export const metadata: Metadata = { title: "cat facts" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body>
                <div id="app">
                    <div className="basicNav">
                        <Link className="navButton" href='/'>cat facts</Link>
                        <Link className="navButton" href="/pics">cat pics</Link>
                    </div>
                    {children}
                </div>
            </body>
        </html>
    );
}
