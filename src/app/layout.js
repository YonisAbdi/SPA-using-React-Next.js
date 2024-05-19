"use client";

import './globals.css'; // Make sure this path is correct
import Navigation from '../Components/Navigation/Navigations';
import styles from './layout.module.css';
import { AuthProvider } from '../Components/AuthContext';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.main}>
        <AuthProvider>
          <main>
            <Navigation />
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
