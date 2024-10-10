// src/app/layout.tsx

import './globals.css';

export const metadata = {
  title: 'Summary AI',
  description: 'Welcome to Summary AI, we will summarize your images in a minute',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
