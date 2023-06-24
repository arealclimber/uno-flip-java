// "use client";

import './globals.css';
import {Inter} from 'next/font/google';
// import ThemeProvider from './providers/theme_provider';

const inter = Inter({subsets: ['latin']});

// export const metadata = {
// 	title: 'UNO Flip',
// 	description: 'UNO Flip Game',
// };

// const DynamicContextProvider = dynamic(
// 	() => import('../providers/theme_provider').then((mod) => mod.default),
// 	{
// 		ssr: false,
// 	}
// );

export default async function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang="en">
			{/* <ThemeProvider> */}
				<body className={inter.className}>{children}</body>
			{/* </ThemeProvider> */}
		</html>
	);
}

// export default dynamic(()=> Promise.resolve(RootLayout),{ssr:false}) 


