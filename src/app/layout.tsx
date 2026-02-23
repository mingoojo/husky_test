import type { Metadata } from "next"
import Script from "next/script"

export const metadata : Metadata = {
  title: "MJ Dev Blog",
  description: "MJ Dev Blog",
}

export default function RootLayout({ children } : {children : React.ReactNode}) {
  const x = 1
  console.log(x)

  return (
    <html lang="ko">
      <Script
        src="https://cdn.jsdelivr.net/npm/gifler@0.1.0/gifler.min.js"
        strategy="afterInteractive"
      />
      <body>
        12312312312
        {children}
      </body>
    </html>
  )
}
