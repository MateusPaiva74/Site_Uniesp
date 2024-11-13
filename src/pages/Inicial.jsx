import React from 'react'
import {Box, Typography, Grid, Paper} from '@mui/material'

const Inicial = () => {
  return (
    <Box sx={{p : 4, backgroundColor: '#f0f0f0', borderRadius: '8px'}}>
        <Typography variant='h3' gutterBottom>
            Bem-vindo à faculdade UNIESP
        </Typography>
        <Paper elevation={3}sx={{ p: 3, mb: 4, backgroundColor: '#ffffff', borderRadius: '8px'}}>
            <Typography variant = 'body1'>
                A Faculdade UNIESP é uma instituição de Ensino Superior...
            </Typography>
            <Typography variant='body1' paragraph>
          Contamos com uma equipe de professores qualificados, uma infraestrutura moderna e uma metodologia de ensino que valoriza o aprendizado prático. Oferecemos diversos cursos nas áreas de tecnologia, negócios, saúde, entre outros, sempre com o objetivo de formar profissionais capacitados e comprometidos.
        </Typography>
        <Typography variant='body1' paragraph>
          A seguir, conheça mais sobre as áreas e as oportunidades que a Faculdade UNIESP oferece para você.
        </Typography>
        </Paper>
        <Grid container spacing= {4}>
            <Grid item xs={12} md={6}>
                <Paper elevation={3} sx={{p:3, backgroundColor: '#ffffff', borderRadius: '8px'}}>
                <img
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDJ8fGNvbGxlZ2V8ZW58MHx8fHwxNjI2NzUwNzY0&ixlib=rb-1.2.1&q=80&w=400"
              alt="Campus Life"
              style={{ width: '100%', borderRadius: '8px' }}
            />
                    <Typography variant='h6' gutterBottom mt={2}>
              Vida no Campus
            </Typography>
            <Typography variant='body2'>
              Um ambiente vibrante e acolhedor, com atividades que promovem o desenvolvimento pessoal e social dos alunos.
            </Typography>
                </Paper>
            </Grid>
        </Grid>
        <Grid item xs={12} md={6}>  
            <Paper elevation={3} sx={{p: 3, backgroundColor: '#ffffff', borderRadius: '8px'}}>
                <Typography variant='h5' gutterBottom>
                    Área Administrativa
                </Typography>
                <Typography variant='body1'>
                    Acesse a Área Administrativa para gerenciar notícias...
                </Typography>
            </Paper>
        </Grid>
    </Box>
  )
}

export default Inicial