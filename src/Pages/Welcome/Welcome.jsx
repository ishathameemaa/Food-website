import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/system';
import Custombtn from '../../components/CustomBtn/Custmbtn';
import welcome from '../../Assets/welcome.png';

const Welcome = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: '64px',
    color: '#fff',
    fontWeight: 'bold',
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down('sm')]: {
      fontSize: '40px',
    },
  }));

  return (
    <Box sx={{ backgroundColor: '#FED801', minHeight: '80vh' }}>
      <Container>
        <CustomBox>
          <Box sx={{ flex: '1' }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: '18px',
                color: '#687690',
                fontWeight: '500',
                mt: 10,
                mb: 4,
              }}
            >
              Welcome to Techflix Restaurant
            </Typography>
            <Title variant="h1">
              Discover a place where you'll love to eat.
            </Title>
            <Typography
              variant="body2"
              sx={{ fontSize: '18px', color: '#5A6473', my: 4 }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus ipsa perferendis quod vero iste pariatur, accusamus
              vitae minima ipsum veniam! Eum quisquam cupiditate minus saepe
              rerum quae consectetur. Temporibus, natus.
            </Typography>
            <Custombtn
              backgroundColor="#0F1B4C"
              color="#fff"
              buttonText="More About Us"
              welcomeBtn={true}
            />
          </Box>
          <Box sx={{ flex: '1.20' }}>
            <img
              src={welcome}
              alt="welcome"
              style={{ maxWidth: '100%', marginBottom: '2rem' }}
            />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default Welcome;
