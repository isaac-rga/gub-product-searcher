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
  useMediaQuery
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
  const mobile = useMediaQuery('(min-width:600px)');
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

  const mobile_card = (
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
  )

  const desktop_card = (
    <>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/gown.png"
      />
      <CardContent>
        <Grid container mb={2}>
          <Grid item xs={6}>
            <Typography variant="subtitle2" color="text.secondary" m={0} ml={0.2}>
              La boheme
            </Typography>
            <Typography gutterBottom variant="h5" mt={-1} >
              {gown.name}
            </Typography>

          </Grid>
          <Grid item xs={6} container sx={{ justifyContent: 'flex-end' }}>
            <Typography gutterBottom variant="h4" color="text.secondary">
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
          <Button variant="outlined" size="small" fullWidth
            onClick={handleAdd}
            >Añadir</Button>
        :
          <Button variant="outlined" size="small" color="secondary" fullWidth
            onClick={handleRemove}
            >Remover</Button>
        }
      </CardActions>
    </>
  )

  return (
    <Card sx={{mr:1, ml:1}}>
      {mobile === true ? desktop_card : mobile_card}
    </Card>
  )
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
