import Footer from "@/components/include/Footer";
import Header from "@/components/include/Header";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AuthContextProvider } from "@/components/context/AuthContext";

export const metadata: Metadata = {
	title: "Blog App",
	description: "Generated by create next app"
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link
					href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
					rel="stylesheet"
				></link>
			</head>
			<body className="poppins-regular bg-gradient-to-r from-blue-50 to-indigo-100">
				<AuthContextProvider>
					<Header />
					{children}
					<Footer />
				</AuthContextProvider>
			</body>
		</html>
	);
}
