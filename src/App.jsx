import { Container, CssBaseline, Box } from '@mui/material'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import BannerAd from './components/BannerAd'
import Inicial from './pages/Inicial'
import Faculdade from './pages/Faculdade'
import DpoLgpd from './pages/DpoLgpd'

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Container maxWidth='lg' sx={{ backgroundColor: '#f7f7f7', minHeight: '100vh', padding: '16px', borderRadius: '8px'  }}>
        <Box display="flex" alignItems="center" justifyContent="space-between" p={2} sx={{ backgroundColor: '#fff', borderRadius: '8px', boxShadow: 1 }}>
          <Navbar />
        </Box>

        <BannerAd />

        <Box mt={4}>

          <Routes>
            <Route path="/" element={<Inicial />} />
            <Route path="/a-faculdade" element={<Faculdade />} />
            <Route path="/dpo-lgpd" element={<DpoLgpd />} />
          </Routes>

        </Box>

      </Container>
    </BrowserRouter>
  )
}

export default App