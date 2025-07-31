// src/pages/DashboardPage.tsx
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Card,
  CardContent,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material';
import { useThemeContext } from '../contexts/ThemeContext';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import ArticleIcon from '@mui/icons-material/Article';
import FilterListIcon from '@mui/icons-material/FilterList';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// Ícones para os cards
import InventoryIcon from '@mui/icons-material/Inventory';
import ScheduleIcon from '@mui/icons-material/Schedule';
import DangerousIcon from '@mui/icons-material/Dangerous';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

// Importar os componentes de gráfico
import ProductStatusPieChart from '../components/charts/ProductStatusPieChart';
import StorageBarChart from '../components/charts/StorageBarChart';

const DashboardPage: React.FC = () => {
  const { toggleColorMode, mode } = useThemeContext();

  // Estados para o menu de filtros de período
  const [anchorElFilter, setAnchorElFilter] = useState<null | HTMLElement>(null);
  const openFilterMenu = Boolean(anchorElFilter);
  const [openDatePicker, setOpenDatePicker] = useState(false);

  // Estados para o período personalizado
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  const handleClickFilterMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElFilter(event.currentTarget);
  };

  const handleCloseFilterMenu = (filterType: string) => {
    setAnchorElFilter(null);
    if (filterType === 'Personalizado') {
      setOpenDatePicker(true);
    } else {
      console.log(`Filtro selecionado: ${filterType}`);
      // TODO: Lógica para aplicar filtros de período pré-definidos
    }
  };

  const handleApplyDateFilter = () => {
    if (startDate && endDate) {
      console.log('Filtro de data personalizado aplicado:', { startDate, endDate });
      // TODO: Chamar API com o período selecionado
    }
    setOpenDatePicker(false);
  };

  // Funções de navegação
  const handleCadastrarProduto = () => {
    console.log('Navegar para Cadastrar Produto');
    // Futuro: navigate('/products/new');
  };

  const handleImportarDados = () => {
    console.log('Navegar para Importar Dados');
    // Futuro: navigate('/import');
  };

  const handleVerRelatorio = () => {
    console.log('Navegar para Ver Relatório');
    // Futuro: navigate('/reports');
  };

  // Dados simulados para os gráficos e cards
  const mockData = {
    totalProducts: 1250,
    expiringSoon: 45,
    expiredProducts: 12,
    warnings: 'Atenção: 3 produtos com vencimento hoje!',
    chartDataStatus: [
      { name: 'Vencido', value: 12 },
      { name: 'Próximo de Vencer', value: 45 },
      { name: 'Ok', value: 1193 },
    ],
    chartDataStorage: [
      { name: 'Galpão A', value: 500 },
      { name: 'Galpão B', value: 300 },
      { name: 'Armário 1', value: 200 },
      { name: 'Refrigerador', value: 250 },
    ],
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3, bgcolor: 'background.default', minHeight: '100vh', color: 'text.primary' }}>
      {/* Barra de Título e Ações Superiores */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar sx={{ width: 56, height: 56, mr: 2, bgcolor: 'primary.main' }}>
            <AccountCircleIcon sx={{ fontSize: 40 }} />
          </Avatar>
          <Typography variant="h4" component="h1">
            Olá, Usuário do Easy Control!
          </Typography>
        </Box>
        <Box>
          <IconButton onClick={toggleColorMode} color="inherit">
            {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Box>
      </Box>

      {/* Cards de Resumo */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)'
          },
          gap: 3,
          mb: 4
        }}
      >
        {/* Card 1 - Total de Produtos */}
        <Card 
          raised 
          sx={{ 
            transition: 'all 0.3s ease-in-out',
            cursor: 'pointer',
            '&:hover': { 
              transform: 'translateY(-4px) scale(1.01)',
              boxShadow: (theme) => theme.shadows[8],
              bgcolor: 'primary.light',
              '& .card-icon': {
                transform: 'rotate(360deg)',
                color: 'white'
              },
              '& .card-title': {
                color: 'white'
              },
              '& .card-value': {
                color: 'white',
                transform: 'scale(1.05)'
              }
            }
          }}
        >
          <CardContent sx={{ position: 'relative', overflow: 'hidden' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
              <Typography 
                variant="subtitle1" 
                color="text.secondary" 
                gutterBottom
                className="card-title"
                sx={{ transition: 'color 0.3s ease-in-out', mb: 0 }}
              >
                Total de Produtos em Estoque
              </Typography>
              <InventoryIcon 
                className="card-icon"
                sx={{ 
                  fontSize: 40, 
                  color: 'primary.main',
                  transition: 'all 0.5s ease-in-out'
                }} 
              />
            </Box>
            <Typography 
              variant="h4" 
              component="div"
              className="card-value"
              sx={{ 
                fontWeight: 'bold',
                transition: 'all 0.3s ease-in-out'
              }}
            >
              {mockData.totalProducts}
            </Typography>
            {/* Efeito de onda de fundo */}
            <Box
              sx={{
                position: 'absolute',
                top: -50,
                right: -50,
                width: 100,
                height: 100,
                borderRadius: '50%',
                bgcolor: 'primary.main',
                opacity: 0.1,
                transition: 'all 0.3s ease-in-out',
                '.MuiCard-root:hover &': {
                  transform: 'scale(2)',
                  opacity: 0.2
                }
              }}
            />
          </CardContent>
        </Card>

        {/* Card 2 - Vencimento Próximo */}
        <Card 
          raised 
          sx={{ 
            transition: 'all 0.3s ease-in-out',
            cursor: 'pointer',
            '&:hover': { 
              transform: 'translateY(-4px) scale(1.01)',
              boxShadow: (theme) => theme.shadows[8],
              bgcolor: 'warning.light',
              '& .card-icon': {
                transform: 'rotate(-10deg) scale(1.1)',
                color: 'white'
              },
              '& .card-title': {
                color: 'white'
              },
              '& .card-value': {
                color: 'white',
                transform: 'scale(1.05)'
              }
            }
          }}
        >
          <CardContent sx={{ position: 'relative', overflow: 'hidden' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
              <Typography 
                variant="subtitle1" 
                color="text.secondary" 
                gutterBottom
                className="card-title"
                sx={{ transition: 'color 0.3s ease-in-out', mb: 0 }}
              >
                Vencimento Próximo (7 dias)
              </Typography>
              <ScheduleIcon 
                className="card-icon"
                sx={{ 
                  fontSize: 40, 
                  color: 'warning.main',
                  transition: 'all 0.5s ease-in-out'
                }} 
              />
            </Box>
            <Typography 
              variant="h4" 
              component="div" 
              color="warning.main"
              className="card-value"
              sx={{ 
                fontWeight: 'bold',
                transition: 'all 0.3s ease-in-out'
              }}
            >
              {mockData.expiringSoon}
            </Typography>
            <Box
              sx={{
                position: 'absolute',
                top: -50,
                right: -50,
                width: 100,
                height: 100,
                borderRadius: '50%',
                bgcolor: 'warning.main',
                opacity: 0.1,
                transition: 'all 0.3s ease-in-out',
                '.MuiCard-root:hover &': {
                  transform: 'scale(2)',
                  opacity: 0.2
                }
              }}
            />
          </CardContent>
        </Card>

        {/* Card 3 - Produtos Vencidos */}
        <Card 
          raised 
          sx={{ 
            transition: 'all 0.3s ease-in-out',
            cursor: 'pointer',
            '&:hover': { 
              transform: 'translateY(-4px) scale(1.01)',
              boxShadow: (theme) => theme.shadows[8],
              bgcolor: 'error.light',
              '& .card-icon': {
                transform: 'shake 0.5s ease-in-out',
                animation: 'shake 0.5s ease-in-out',
                color: 'white'
              },
              '& .card-title': {
                color: 'white'
              },
              '& .card-value': {
                color: 'white',
                transform: 'scale(1.05)'
              }
            },
            '@keyframes shake': {
              '0%, 100%': { transform: 'translateX(0)' },
              '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-2px)' },
              '20%, 40%, 60%, 80%': { transform: 'translateX(2px)' }
            }
          }}
        >
          <CardContent sx={{ position: 'relative', overflow: 'hidden' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
              <Typography 
                variant="subtitle1" 
                color="text.secondary" 
                gutterBottom
                className="card-title"
                sx={{ transition: 'color 0.3s ease-in-out', mb: 0 }}
              >
                Produtos Vencidos
              </Typography>
              <DangerousIcon 
                className="card-icon"
                sx={{ 
                  fontSize: 40, 
                  color: 'error.main',
                  transition: 'all 0.3s ease-in-out'
                }} 
              />
            </Box>
            <Typography 
              variant="h4" 
              component="div" 
              color="error.main"
              className="card-value"
              sx={{ 
                fontWeight: 'bold',
                transition: 'all 0.3s ease-in-out'
              }}
            >
              {mockData.expiredProducts}
            </Typography>
            <Box
              sx={{
                position: 'absolute',
                top: -50,
                right: -50,
                width: 100,
                height: 100,
                borderRadius: '50%',
                bgcolor: 'error.main',
                opacity: 0.1,
                transition: 'all 0.3s ease-in-out',
                '.MuiCard-root:hover &': {
                  transform: 'scale(2)',
                  opacity: 0.2
                }
              }}
            />
          </CardContent>
        </Card>

        {/* Card 4 - Avisos Importantes */}
        <Card 
          raised 
          sx={{ 
            transition: 'all 0.3s ease-in-out',
            cursor: 'pointer',
            '&:hover': { 
              transform: 'translateY(-4px) scale(1.01)',
              boxShadow: (theme) => theme.shadows[8],
              bgcolor: 'info.light',
              '& .card-icon': {
                transform: 'scale(1.2)',
                animation: 'pulse 1s ease-in-out infinite',
                color: 'white'
              },
              '& .card-title': {
                color: 'white'
              },
              '& .card-value': {
                color: 'white'
              }
            },
            '@keyframes pulse': {
              '0%, 100%': { opacity: 1 },
              '50%': { opacity: 0.7 }
            }
          }}
        >
          <CardContent sx={{ position: 'relative', overflow: 'hidden' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
              <Typography 
                variant="subtitle1" 
                color="text.secondary" 
                gutterBottom
                className="card-title"
                sx={{ transition: 'color 0.3s ease-in-out', mb: 0 }}
              >
                Avisos Importantes
              </Typography>
              <NotificationsActiveIcon 
                className="card-icon"
                sx={{ 
                  fontSize: 40, 
                  color: 'info.main',
                  transition: 'all 0.3s ease-in-out'
                }} 
              />
            </Box>
            <Typography 
              variant="h6" 
              component="div"
              className="card-value"
              sx={{ 
                transition: 'all 0.3s ease-in-out'
              }}
            >
              {mockData.warnings}
            </Typography>
            <Box
              sx={{
                position: 'absolute',
                top: -50,
                right: -50,
                width: 100,
                height: 100,
                borderRadius: '50%',
                bgcolor: 'info.main',
                opacity: 0.1,
                transition: 'all 0.3s ease-in-out',
                '.MuiCard-root:hover &': {
                  transform: 'scale(2)',
                  opacity: 0.2
                }
              }}
            />
          </CardContent>
        </Card>
      </Box>

      {/* Filtros e Ações Rápidas */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Box>
          <Button
            id="filter-button"
            aria-controls={openFilterMenu ? 'filter-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openFilterMenu ? 'true' : undefined}
            onClick={handleClickFilterMenu}
            variant="outlined"
            startIcon={<FilterListIcon />}
            endIcon={<ArrowDropDownIcon />}
          >
            Filtrar Período
          </Button>
          <Menu
            id="filter-menu"
            anchorEl={anchorElFilter}
            open={openFilterMenu}
            onClose={() => setAnchorElFilter(null)}
            MenuListProps={{
              'aria-labelledby': 'filter-button',
            }}
          >
            <MenuItem onClick={() => handleCloseFilterMenu('Semana')}>Semana</MenuItem>
            <MenuItem onClick={() => handleCloseFilterMenu('Quinzena')}>Quinzena</MenuItem>
            <MenuItem onClick={() => handleCloseFilterMenu('Mês')}>Mês</MenuItem>
            <MenuItem onClick={() => handleCloseFilterMenu('Personalizado')}>Período Personalizado</MenuItem>
          </Menu>
        </Box>
        <Box>
          <Button variant="contained" startIcon={<AddIcon />} sx={{ mr: 2 }} onClick={handleCadastrarProduto}>
            Cadastrar Produto
          </Button>
          <Button variant="outlined" startIcon={<UploadFileIcon />} sx={{ mr: 2 }} onClick={handleImportarDados}>
            Importar Dados
          </Button>
          <Button variant="outlined" startIcon={<ArticleIcon />} onClick={handleVerRelatorio}>
            Ver Relatório
          </Button>
        </Box>
      </Box>

      {/* Gráficos */}
      <Box sx={{ display: 'flex', gap: 3, flexDirection: { xs: 'column', md: 'row' } }}>
        <Box sx={{ flex: 1 }}>
          <Paper elevation={3} sx={{ p: 2, minHeight: 420, height: 420 }}>
            <Typography variant="h6" gutterBottom>
              Produtos por Status de Vencimento
            </Typography>
            <ProductStatusPieChart data={mockData.chartDataStatus} />
          </Paper>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Paper elevation={3} sx={{ p: 2, minHeight: 420, height: 420 }}>
            <Typography variant="h6" gutterBottom>
              Quantidade por Local de Armazenagem
            </Typography>
            <StorageBarChart data={mockData.chartDataStorage} />
          </Paper>
        </Box>
      </Box>

      {/* Dialog para Seleção de Data Personalizada */}
      <Dialog open={openDatePicker} onClose={() => setOpenDatePicker(false)}>
        <DialogTitle>Selecionar Período Personalizado</DialogTitle>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: '300px' }}>
          <TextField
            label="Data de Início"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Data de Fim"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDatePicker(false)}>Cancelar</Button>
          <Button onClick={handleApplyDateFilter} variant="contained" disabled={!startDate || !endDate}>
            Aplicar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default DashboardPage;