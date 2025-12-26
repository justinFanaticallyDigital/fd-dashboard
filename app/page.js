export default function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      padding: '2rem',
    }}>
      <h1 style={{
        fontSize: '4rem',
        fontWeight: 'bold',
        color: 'white',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
        marginBottom: '1rem',
      }}>
        Hello World!
      </h1>
      <p style={{
        fontSize: '1.5rem',
        color: 'rgba(255, 255, 255, 0.9)',
        textAlign: 'center',
      }}>
        Welcome to FD Dashboard
      </p>
    </main>
  )
}
