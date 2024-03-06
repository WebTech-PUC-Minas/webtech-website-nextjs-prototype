import './globals.css'

export const metadata = {
  title: 'WebTech',
  description: 'WebTech website prototype',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
