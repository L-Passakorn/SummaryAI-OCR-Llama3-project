// src/app/layout.tsx

import './globals.css';

export const metadata = {
  title: 'My Landing Page',
  description: 'Welcome to my cool landing page',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
