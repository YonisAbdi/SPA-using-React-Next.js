import { Inter } from "next/font/google";
import styles from './layout.module.css';
import "./globals.css";
import Navigation from "@/Components/Navigation/Navigations";
import { AuthProvider } from '@/Components/AuthContext';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <main className={styles.main}>
            <Navigation />
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
