import './globals.css'

export const metadata = {
  title: 'FD Dashboard',
  description: 'Fanatically Digital Dashboard',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
