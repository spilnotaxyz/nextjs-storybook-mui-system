import { Box, Container } from '@mui/system'
import Link from 'next/link'

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        MUI v5 + Next.js with TypeScript example
        <Link href="/about">Go to the about page</Link>
      </Box>
    </Container>
  )
}
