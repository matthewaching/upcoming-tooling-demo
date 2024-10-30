import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = { title: "cat facts" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body>
                <div id="app">
                    {children}
                </div>
            </body>
        </html>
    );
}
