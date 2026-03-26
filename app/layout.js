import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Kismat Pharmacy College | Best Pharmacy College',
  description:
    'Kismat Pharmacy College offers quality pharmaceutical education with modern facilities and expert faculty.',
  keywords: 'pharmacy college, B.Pharm, D.Pharm, M.Pharm, Pharm.D, pharmaceutical education',
  openGraph: {
    title: 'Kismat Pharmacy College | Best Pharmacy College',
    description:
      'Kismat Pharmacy College offers quality pharmaceutical education with modern facilities and expert faculty.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
