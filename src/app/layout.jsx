import './globals.css'

export const metadata = {
  title: 'swnck',
  description: 'My Personal Website',
  themeColor: '#000eff'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  )
}
