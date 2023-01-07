import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Stack,
  Typography,
  Grid,
  Box,
} from '@mui/material';
import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import { GlobalContext } from '../services/context/GlobalContext';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  maximumFractionDigits: 0,
  currency: 'USD'
});

export const GownCard = ({gown}) => {
  const { incrementBasket, decrementBasket } = useContext(GlobalContext);
  const [buttonStatus, setButtonStatus] = useState(true);

  const handleAdd = () => {
    incrementBasket()
    setButtonStatus(false)
  }

  const handleRemove = () => {
    decrementBasket()
    setButtonStatus(true)
  }

  return (
    <Card sx={{mr:1, ml:1}}>
        <Grid container>
          <Grid item xs={5}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="100%"
              image="/gown.png"
            />
          </Grid>
          <Grid item xs={7} container  p={1}>
            <Typography gutterBottom variant="h5" >
              {gown.name}
            </Typography>
            <Typography gutterBottom variant="h4" color="text.secondary">
              {formatter.format(gown.price)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {gown.description}
            </Typography>
            <Box sx={{width:'100%'}} >
              {buttonStatus ?
                <Button variant="outlined" size="small"  fullWidth
                  onClick={handleAdd}
                  >Añadir</Button>
              :
                <Button variant="outlined" size="small" color="secondary" fullWidth
                  onClick={handleRemove}
                  >Remover</Button>
              }
            </Box>
          </Grid>
        </Grid>
    </Card>
  );
};

GownCard.defaultProps = {
  gown: {
    collection: '',
    name: '',
    price: '',
    description: '',
    isSelected: false,
  },
};

GownCard.propTypes = {
  gown: PropTypes.shape({
    collection: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    isSelected: PropTypes.bool,
  }),
};

export default GownCard;
