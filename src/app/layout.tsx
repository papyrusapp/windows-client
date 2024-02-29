import StyledComponentsRegistry from "@/lib/registry";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import GlobalStyles from "./styles/globalStyles";
import ThemeWrapper from "./styles/themeWrapper";
import { App } from "./styles/style";
import Title from "./components/title/title";
import MainSection from "./components/mainSection/mainSection";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Scribble",
  description: "Markdown editor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <ThemeWrapper>
            <App>
              <Title />
              <MainSection>{children}</MainSection>
            </App>
          </ThemeWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
