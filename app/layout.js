import '@styles/globals.css';
import NavBar from '@components/NavBar';


export const metadata = {
  title: 'Hostshare',
  description: 'Affordable adventures at your fingertips - Handle the cleaning fee and let your journey unfold',
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
      <body>
        <main className='app'>
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  )
}
export default RootLayout;

