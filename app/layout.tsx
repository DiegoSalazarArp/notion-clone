import { Toaster } from "sonner";
import { ConvexClientProvider } from "@/components/providers/convex-provider";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ModalProvider } from "@/components/providers/modal-provider";
import { EdgeStoreProvider } from "../lib/edgestore";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notion",
  description: "All your notes, tasks, and wikis in one place.",
  // Se borra el fav.icon y se agrega lo siguiente para que se pueda ver en modo oscuro
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/notion.svg",
        href: "/notion.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/notion-dark.svg",
        href: "/notion-dark.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ConvexClientProvider>
          <EdgeStoreProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
              storageKey="notion-theme-2"
            >
              <Toaster position="bottom-center" />
              <ModalProvider />
              {children}
            </ThemeProvider>
          </EdgeStoreProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
