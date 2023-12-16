import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../../Context/cartContext';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -5,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '4px',
  },
}));


const CartWidget = () => {

  const { cart } = useContext(CartContext)

  return (
    <NavLink to={`/cart`} >
      <IconButton aria-label="cart">
        <StyledBadge badgeContent={cart.length} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
    </NavLink>
  );
}


export default CartWidget