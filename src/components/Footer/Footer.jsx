import React from 'react';
import fbIcon from '../../Assets/facebook.png';
import twitterIcon from '../../Assets/twitter.png';
import linkedInIcon from '../../Assets/instagram.png';
import { Box, styled, Typography, Container } from '@mui/material';

function Footer() {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-around',
    gap: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      textAlign: 'center',
    },
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  }));

  const FooterLink = styled('span')(({ theme }) => ({
    fontSize: '16px',
    color: '#000066',
    fontWeight: '300',
    cursor: 'pointer',
    '&:hover': {
      color: '#66B2FF',
    },
  }));

  return (
    <Box sx={{ py: 10, backgroundColor: '#FFF682' }}>
      <CustomContainer>
        <Box>
          <Typography
            sx={{
              fontSize: '20px',
              color: '#1C1C1D',
              fontWeight: '700',
              mb: 2,
            }}
          >
            Featured
          </Typography>
          <FooterLink>Guides</FooterLink>
          <br />
          <FooterLink>Services</FooterLink>
          <br />
          <FooterLink>Contact Us</FooterLink>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: '20px',
              color: '#1C1C1D',
              fontWeight: '700',
              mb: 2,
            }}
          >
            Overview
          </Typography>
          <FooterLink>Location</FooterLink>
          <br />
          <FooterLink>Partnership</FooterLink>
          <br />
          <FooterLink>Terms of Use & Privacy Policies</FooterLink>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: '20px',
              color: '#1C1C1D',
              fontWeight: '700',
              mb: 2,
            }}
          >
            Get in Touch
          </Typography>
          <Typography
            sx={{
              fontSize: '16px',
              color: '#7A7A7E',
              fontWeight: '500',
              mb: 2,
            }}
          >
            Keep in touch with our social media pages
          </Typography>
          <IconBox>
            <img src={fbIcon} alt="Facebook" style={{ cursor: 'pointer' }} />
            <img
              src={twitterIcon}
              alt="Twitter"
              style={{ cursor: 'pointer' }}
            />
            <img
              src={linkedInIcon}
              alt="Instagram"
              style={{ cursor: 'pointer' }}
            />
          </IconBox>
        </Box>
      </CustomContainer>
    </Box>
  );
}

export default Footer;
