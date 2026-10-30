import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { BookingProvider } from "@/context/booking-context";
import { ReservationModal } from "@/components/ui/reservation-modal";

const serifFont = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050B07",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Pousada Recanto dos Pássaros | Chalés no Sana, Macaé RJ",
  description:
    "Refúgio de charme para casais e famílias no Sana, Macaé - RJ. Chalés espaçosos com varanda e rede, rio de águas cristalinas dentro da pousada, piscinas naturais e deck solário, café da manhã colonial farto e 100% Pet Friendly. Reserve direto!",
  keywords: [
    "Pousada Recanto dos Pássaros",
    "Pousada no Sana",
    "Chalés no Sana Macaé",
    "Pousada Pet Friendly Sana RJ",
    "Pousada com rio no Sana",
    "Pousada para casais Sana",
    "Melhor pousada Sana Macaé",
    "Sana Chalés",
    "Reserva direta Recanto dos Pássaros",
    "Hospedagem ecoturismo Macaé"
  ],
  authors: [{ name: "Pousada Recanto dos Pássaros", url: "https://simplereservasapp.darionicoq.workers.dev/recanto-dos-passaros" }],
  creator: "Pousada Recanto dos Pássaros",
  publisher: "Pousada Recanto dos Pássaros",
  category: "travel",
  metadataBase: new URL("https://simplereservasapp.darionicoq.workers.dev"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://simplereservasapp.darionicoq.workers.dev/recanto-dos-passaros",
    title: "Pousada Recanto dos Pássaros | Chalés, Rio Privativo e Descanso no Sana RJ",
    description:
      "Chalés de charme com varanda e rede, rio cristalino na propriedade, deck solário à beira d'água, café da manhã farto da roça e acolhimento 100% Pet Friendly. Garanta a melhor tarifa direta.",
    siteName: "Pousada Recanto dos Pássaros",
    images: [
      {
        url: "/recanto/hero-pousada-real.jpg",
        width: 1200,
        height: 630,
        alt: "Pousada Recanto dos Pássaros - Chalés no Sana, Macaé RJ",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/icon-32.png?v=4", sizes: "32x32", type: "image/png" },
      { url: "/icon-16.png?v=4", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico?v=4", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png?v=4", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${serifFont.variable} ${sansFont.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/icon-32.png?v=4" type="image/png" sizes="32x32" />
        <link rel="icon" href="/icon-16.png?v=4" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon.ico?v=4" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=4" sizes="180x180" />
        <link rel="manifest" href="/manifest.webmanifest?v=4" />
      </head>
      <body className="font-sans bg-[#050B07] text-white antialiased selection:bg-[#C29D59] selection:text-[#050B07]">
        <BookingProvider>
          {children}
          <ReservationModal />
        </BookingProvider>
      </body>
    </html>
  );
}
