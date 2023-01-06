import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Stack,
  Typography,
  Grid,
} from '@mui/material';
import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import { GlobalContext } from '../services/context/GlobalContext';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
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
    <Card sx={{mr:1, ml:1}} >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/gown.png"
      />
      <CardContent>
        <Grid container mb={2}>
          <Grid item xs={6}>
            <Typography gutterBottom variant="h5" m={0}>
              {gown.name}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary" mt={-1} ml={0.2}>
          La boheme
        </Typography>
          </Grid>
          <Grid item xs={6} container sx={{ justifyContent: 'flex-end' }}>
            <Typography gutterBottom variant="h5" color="text.secondary">
              {formatter.format(gown.price)}
            </Typography>
          </Grid>
        </Grid>

        <Typography variant="body2" color="text.secondary">
          {gown.description}
        </Typography>
      </CardContent>
      <CardActions>
        {buttonStatus ?
          <Button variant="outlined" size="small"
            onClick={handleAdd}
            >Añadir</Button>
        :
          <Button variant="outlined" size="small" color="secondary"
            onClick={handleRemove}
            >Remover</Button>
        }
      </CardActions>
    </Card>
  );
};

GownCard.defaultProps = {
  gown: {
    name: '',
    price: '',
    description: '',
    isSelected: false,
  },
};

GownCard.propTypes = {
  gown: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    isSelected: PropTypes.bool,
  }),
};

export default GownCard;
