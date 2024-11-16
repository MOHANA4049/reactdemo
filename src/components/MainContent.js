import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

function MainContent() {
  const products = [
    { id: 1, name: 'Product 1', image: 'https://in.images.search.yahoo.com/yhs/search?p=product+image&fr=yhs-sz-002&type=type80160-405445667&hspart=sz&hsimp=yhs-002&imgurl=https%3A%2F%2Fhelp.rangeme.com%2Fhc%2Farticle_attachments%2F360006928633%2Fwhat_makes_a_good_product_image.jpg#id=4&iurl=https%3A%2F%2Fhelp.rangeme.com%2Fhc%2Farticle_attachments%2F360006928633%2Fwhat_makes_a_good_product_image.jpg&action=click' },
    { id: 2, name: 'Product 2', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <Grid container spacing={3} sx={{ padding: '24px' }}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card>
            <CardMedia
              component="img"
              alt={product.name}
              height="140"
              image={product.image}
            />
            <CardContent>
              <Typography variant="h6" component="div">
                {product.name}
              </Typography>
              <Button variant="contained" color="primary" sx={{ marginTop: '8px' }}>
                View Product
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default MainContent;
