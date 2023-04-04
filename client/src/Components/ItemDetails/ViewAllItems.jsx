import React,{useEffect} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
// import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux'; // hooks
import { Button, Box, Typography, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import { getProducts as listProducts } from '../../redux/actions/productActions';


const Image = styled('img')({
    width: 'auto',
    height: 150
})

const Text = styled(Typography)`
    font-size: 14px;
    margin-top: 5px
`
export default function ViewAllItems() {
    const getProducts = useSelector(state => state.getProducts);
    const { products, error } = getProducts;
    

    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(listProducts())
    // }, [dispatch])
    console.log(products);

  return (<>
    <Typography variant='h3' style={{marginLeft:"5rem", marginTop:"5rem"}}>All Products</Typography>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    {
        products.map(temp =>(<>
            <Link to={`/product/${temp.id}`} style={{textDecoration: 'none'}}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
            <Avatar alt="Remy Sharp" sx={{ width: 56, height: 56 }} src={temp.url} />
            </ListItemAvatar>
            <ListItemText
            style={{marginLeft:'20px'}}
            primary={temp.title.shortTitle}
            secondary={
                <React.Fragment>
                <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                >
                    {temp.title.longTitle}
                </Typography>
                <Typography>
                    <span style={{ fontSize: 20 }}>₹{temp.price.cost}</span>&nbsp;&nbsp;&nbsp; 
                    <span style={{ color: '#878787' }}><strike>₹{temp.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                    <span style={{ color: '#388E3C' }}>{temp.price.discount} off</span>
                </Typography>
                {temp.discount + " using SBI Credit Card"} 
                </React.Fragment>
            }
            />
            </ListItem>
            <Divider variant="inset" component="li" />
            </Link>
            </>
        )
        )
}
    </List>
    </>
  );
}
