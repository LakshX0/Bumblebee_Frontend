import { Helmet } from 'react-helmet-async';
// @mui
import { styled } from '@mui/material/styles';
import { Avatar, Link, Container, Typography, Divider, Stack, Button } from '@mui/material';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
import Logo from '../components/logo';
import Iconify from '../components/iconify';
// sections
import { RegisterForm } from '../sections/auth/register';
import LogoURL from '../components/logo/logo.svg';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const StyledSection = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: 480,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  boxShadow: theme.customShadows.card,
  backgroundColor: theme.palette.background.default,
}));

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function LoginPage() {
  const mdUp = useResponsive('up', 'md');

  return (
    <>

      <StyledRoot>

        {mdUp && (
          <StyledSection style={{backgroundColor:"#754B83"}}>
          </StyledSection>
        )}

        <Container maxWidth="sm">
          <StyledContent>
          <center>
            <Avatar sx={{ width: 72, height: 72 }} src={LogoURL} style={{marginBottom:20}} />
            </center>
            <Typography variant="h4" gutterBottom>
              <center>Sign Up</center>
            </Typography>
            <RegisterForm />
          </StyledContent>
        </Container>
      </StyledRoot>
    </>
  );
}
