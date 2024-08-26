import React from 'react';
import CustomCard from '../../components/customCard/CustomCard'; // Use proper casing for the import
import { Box, Container, Typography } from '@mui/material'; // Correct import for MUI components
import { Data } from '../../StaticData/Data';
import { styled } from '@mui/material';

function Dishes() {
  const DishesBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(5),
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center', // Corrected from 'alignItem' to 'alignItems'
    },
  }));

  const PropertiesTextBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
  }));

  return (
    <Box sx={{ mt: 5, background: '#F5FAFE', py: 10 }}>
      <Container>
        <PropertiesTextBox>
          <Typography sx={{ color: '#5A6473', fontSize: '16px', mt: 1, ml: '13px' }}>
            Featured Dishes
          </Typography>
          <Typography sx={{ color: '#5A6473', fontSize: '16px', mt: 1, ml: '13px' }}>
            Explore a variety of South Indian dishes!
          </Typography>
        </PropertiesTextBox>
        <DishesBox>
          {Data.map((foodItem) => (
            <CustomCard
              key={foodItem.id}
              img={foodItem.img}
              price={foodItem.price}
              item={foodItem.item}
              likes={foodItem.likes}
              heart={foodItem.heart}
              share={foodItem.share}
            />
          ))}
        </DishesBox>
      </Container>
    </Box>
  );
}

export default Dishes;
