// src/pages/LoginPage.tsx
import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Link, Container, Avatar } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined'; // Exemplo de ícone de caixa/inventário
import MedicationLiquidOutlinedIcon from '@mui/icons-material/MedicationLiquidOutlined'; // Exemplo de ícone de medicamento
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();

    let valid = true;

    if (!email || !isValidEmail(email)) {
      setEmailError(true);
      valid = false;
    } else {
      setEmailError(false);
    }

    if (!password) {
      setPasswordError(true);
      valid = false;
    } else {
      setPasswordError(false);
    }

    if (valid) {
      console.log('Tentativa de login com:', { email, password });
      // Simulação de login bem-sucedido: Redireciona para o dashboard
      navigate('/dashboard');
    }
  };

  const handleForgotPassword = () => {
    alert('Funcionalidade "Esqueceu a senha?" será implementada em breve.');
  };

  const handleFirstAccess = () => {
    alert('Funcionalidade "Primeiro acesso?" será implementada em breve. O admin deve registrar o e-mail primeiro.');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        bgcolor: 'background.default',
        overflow: 'hidden', // Importante para que os elementos animados não causem scrollbars
        position: 'relative', // Para posicionar os elementos flutuantes
      }}
    >
      {/* Keyframes para animação de flutuação e movimento */}
      <style>
        {`
        @keyframes floatEffect {
          0% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0.8; }
          25% { transform: translateY(-10px) translateX(5px) rotate(1deg); opacity: 0.9; }
          50% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.8; }
          75% { transform: translateY(10px) translateX(-5px) rotate(-1deg); opacity: 0.9; }
          100% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0.8; }
        }

        @keyframes fadeInOutFloat {
          0% { opacity: 0; transform: translateY(20px); }
          20% { opacity: 1; transform: translateY(0); }
          80% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-20px); }
        }

        @keyframes slideAcross {
          0% { transform: translateX(-100%); opacity: 0.5; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        `}
      </style>

      {/* Seção Visual/Destacada (lado esquerdo) */}
      <Box
        sx={{
          flex: 1,
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          p: 4,
          background: 'linear-gradient(135deg, #1976d2 0%, #64b5f6 100%)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
            backgroundSize: '200% 200%',
            animation: 'gradientShift 10s ease infinite alternate',
          },
          '@keyframes gradientShift': {
            '0%': { backgroundPosition: '0% 50%' },
            '100%': { backgroundPosition: '100% 50%' },
          }
        }}
      >
        {/* Adicione sua imagem do usuário/logo aqui */}
        {/* <img src="/path/to/your/image.png" alt="Logo" style={{ maxWidth: '80%', height: 'auto', marginBottom: '20px' }} /> */}
        <Typography variant="h3" component="h1" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold' }}>
          Easy Control
        </Typography>
        <Typography variant="h6" sx={{ textAlign: 'center' }}>
          Liberdade e autonomia para você ser o protagonista da sua evolução.
        </Typography>

        {/* --------- Elementos do Estoque Animados --------- */}
        {/* Caixa 1 */}
        <Box sx={{
          position: 'absolute', top: '10%', left: '15%', opacity: 0.8,
          animation: 'floatEffect 15s ease-in-out infinite alternate',
        }}>
          <Inventory2OutlinedIcon sx={{ fontSize: '70px', color: 'rgba(255,255,255,0.3)' }} />
        </Box>
        {/* Caixa 2 */}
        <Box sx={{
          position: 'absolute', bottom: '20%', right: '10%', opacity: 0.7,
          animation: 'floatEffect 18s ease-in-out infinite alternate-reverse',
        }}>
          <Inventory2OutlinedIcon sx={{ fontSize: '90px', color: 'rgba(255,255,255,0.2)' }} />
        </Box>
        {/* Medicamento 1 */}
        <Box sx={{
          position: 'absolute', top: '30%', right: '25%', opacity: 0.6,
          animation: 'floatEffect 12s ease-in-out infinite',
        }}>
          <MedicationLiquidOutlinedIcon sx={{ fontSize: '60px', color: 'rgba(255,255,255,0.4)' }} />
        </Box>
        {/* Prateleira (simulada por Box) */}
        <Box sx={{
          position: 'absolute', bottom: '5%', left: '30%', width: '150px', height: '15px',
          bgcolor: 'rgba(255,255,255,0.2)', borderRadius: '5px', opacity: 0.8,
          animation: 'floatEffect 20s ease-in-out infinite alternate',
        }} />
        {/* Escada (simulada por Box) */}
        <Box sx={{
          position: 'absolute', top: '40%', left: '5%', width: '20px', height: '100px',
          bgcolor: 'rgba(255,255,255,0.15)', borderRadius: '3px', opacity: 0.7,
          transform: 'rotate(-20deg)',
          animation: 'floatEffect 17s ease-in-out infinite',
        }} />
         {/* Outro Objeto (simulando um palete/caixa grande) */}
        <Box sx={{
          position: 'absolute', top: '70%', left: '5%', width: '80px', height: '40px',
          bgcolor: 'rgba(255,255,255,0.25)', borderRadius: '5px', opacity: 0.9,
          animation: 'floatEffect 14s ease-in-out infinite alternate-reverse',
        }} />

        {/* Elementos que "passam" pela tela (simulando entrada de estoque) */}
        <Box sx={{
          position: 'absolute', top: '15%', left: '-10%',
          animation: 'slideAcross 25s linear infinite',
          animationDelay: '0s', // Inicia imediatamente
        }}>
          <Inventory2OutlinedIcon sx={{ fontSize: '80px', color: 'rgba(255,255,255,0.1)' }} />
        </Box>
        <Box sx={{
          position: 'absolute', top: '60%', right: '-10%',
          animation: 'slideAcross 30s linear infinite reverse',
          animationDelay: '5s', // Atraso para um efeito escalonado
        }}>
          <MedicationLiquidOutlinedIcon sx={{ fontSize: '70px', color: 'rgba(255,255,255,0.15)' }} />
        </Box>
        {/* ------------------------------------------------ */}

      </Box>

      {/* Seção do Formulário de Login (lado direito) */}
      <Container
        component="section"
        maxWidth="xs"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          p: { xs: 2, sm: 3 },
          animation: 'fadeIn 1s ease-out',
          '@keyframes fadeIn': {
            '0%': { opacity: 0, transform: 'translateY(20px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            p: 4,
            boxShadow: 6,
            borderRadius: 3,
            bgcolor: 'background.paper',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main', animation: 'bounceIn 0.8s ease-out' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
            Entre com suas credenciais
          </Typography>
          <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1, width: '100%' }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-mail"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={emailError}
              helperText={emailError ? 'Por favor, insira um e-mail válido.' : ''}
              sx={{
                '& .MuiOutlinedInput-root': {
                  transition: 'border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&.Mui-focused fieldset': {
                    borderColor: 'primary.main',
                    boxShadow: '0 0 0 0.1rem rgba(25, 118, 210, 0.25)',
                  },
                },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={passwordError}
              helperText={passwordError ? 'A senha é obrigatória.' : ''}
              sx={{
                '& .MuiOutlinedInput-root': {
                  transition: 'border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&.Mui-focused fieldset': {
                    borderColor: 'primary.main',
                    boxShadow: '0 0 0 0.1rem rgba(25, 118, 210, 0.25)',
                  },
                },
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                py: 1.5,
                fontSize: '1.1rem',
                backgroundColor: '#4CAF50',
                '&:hover': {
                  backgroundColor: '#388E3C',
                  transform: 'scale(1.01)',
                  transition: 'transform 0.2s ease-in-out',
                },
              }}
            >
              Entrar
            </Button>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mt: 2 }}>
              <Link href="#" variant="body2" onClick={handleForgotPassword} sx={{ '&:hover': { textDecoration: 'underline' } }}>
                Esqueceu a senha?
              </Link>
              <Link href="#" variant="body2" onClick={handleFirstAccess} sx={{ '&:hover': { textDecoration: 'underline' } }}>
                Primeiro acesso?
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LoginPage;