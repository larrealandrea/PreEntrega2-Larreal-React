import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -5, 
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '4px',
  },
}));


const CartWidget = () => {
    return (
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={""} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
      );
}


export default CartWidget