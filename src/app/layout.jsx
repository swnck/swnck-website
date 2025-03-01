import './globals.css'
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";

export const metadata = {
  title: 's-luca',
  description: 'My Personal Website',
  themeColor: '#22c55e'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <GoogleAnalytics ga_id={"G-BNYFK1HJGY"}/>
          {children}
      </body>
    </html>
  )
}
