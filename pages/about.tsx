import { Box, Container } from '@mui/system'

export default function About() {
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
      </Box>
    </Container>
  )
}
