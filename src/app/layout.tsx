import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { useUser } from "@clerk/nextjs";

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

export const metadata: Metadata = {
  title: "Sir Zain",
  description: "",
  icons: {
    icon: "/picture/fotor-202504052935.png", // single string, no array
  },
};
const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  </ClerkProvider>
  );
}



