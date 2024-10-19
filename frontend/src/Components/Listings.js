import React, { useState } from 'react';

// React leaflet
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';

// Mui
import {
  Grid,
  AppBar,
  Typography,
  Button,
  Card,
  CardHeader,
  CardMedia,
  CardContent
} from '@mui/material';
import { makeStyles } from '@mui/styles';

// Map icons
import houseIconPng from '../Assets/Mapicons/house.png';
import apartmentIconPng from '../Assets/Mapicons/apartment.png';
import officeIconPng from '../Assets/Mapicons/office.png';

// Assets
import img1 from '../Assets/img1.jpg';
import myListings from '../Data/Dummydata';


const useStyles = makeStyles({
  cardStyle: {
    margin: '0.5rem',
    border: '1px solid black',
    position: 'relative',
  },
  pictureStyle: {
    paddingRight: '1rem',
    paddingLeft: '1rem',
    height: '20rem',
    width: '30rem',
  },
  priceOverlay: {
    position: 'absolute',
    backgroundColor: 'green',
    zIndex: '1000',
    color: 'white',
    top: '100px',
    left: '20px',
    padding: '5px',
  },
});

function Listings() {
  const classes = useStyles();
  const houseIcon = new Icon({
    iconUrl: houseIconPng,
    iconSize: [40, 40],
  })
  const apartmentIcon = new Icon({
    iconUrl: apartmentIconPng,
    iconSize: [40, 40],
  })
  const officeIcon = new Icon({
    iconUrl: officeIconPng,
    iconSize: [40, 40],
  })

  const [latitude, setLatitude] = useState(51.505);
  const [longitude, setLongitude] = useState(-0.126);

  function GoEast(){
    setLatitude(51.505);
    setLongitude(-0.123);
  }

  function GoCenter(){
    setLatitude(51.505);
    setLongitude(-0.126);
  }

  return (
    <Grid container>
      <Grid item xs={4}>
        {myListings.map((listing)=>{
          return (
            <Card key={listing.id} className={classes.cardStyle}>
              <CardHeader
                // action={
                //   <IconButton aria-label="settings">
                //     <MoreVertIcon />
                //   </IconButton>
                // }
                title={listing.title}
              />
              <CardMedia
                className={classes.pictureStyle}
                component="img"
                image={listing.picture1}
                alt={listing.title}
              />
              <CardContent>
                <Typography variant="body2">
                  {listing.description.substring(0,200)}...
                </Typography>
              </CardContent>

              {listing.property_status === 'Sale' ? (
                <Typography className={classes.priceOverlay}>
                  {listing.listing_type}: $
                  {listing.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </Typography>
              ) : (
                <Typography className={classes.priceOverlay}>
                  {listing.listing_type}: $
                  {listing.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  / {listing.rental_frequency}
                </Typography>
              )}

              
              {/* <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions> */}
            </Card>
          )
        })}
      </Grid>
      <Grid item xs={8} style={{ marginTop: '0.5rem' }}>
        <AppBar position='sticky'>
          <div style={{ height: '100vh' }}>
            <MapContainer center={[51.505, -0.126]} zoom={14} scrollWheelZoom={true}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {myListings.map((listing)=>{
                function iconDisplay() {
                  if (listing.listing_type === 'House'){
                    return houseIcon;
                  } else if (listing.listing_type === 'Apartment'){
                    return apartmentIcon;
                  } else {
                    return officeIcon;
                  }
                }
                return (
                  <Marker
                  key={listing.id}
                  icon={iconDisplay()}
                  position={[ listing.location.coordinates[0], listing.location.coordinates[1] ]}
                  >
                    <Popup>
                      <Typography variant='h5'>{listing.title}</Typography>
                      <img src={listing.picture1} alt='img' style={{ height: '14rem', width: '18rem' }} />
                      <Typography variant='body1'>
                        {listing.description.substring(0, 150)}...
                      </Typography>
                      <Button variant='contained' fullWidth>Details</Button>
                    </Popup>
                  </Marker>
                )
              })}

              {/* <Marker icon={officeIcon} position={[latitude, longitude]}>
                <Popup>
                  <Typography variant='h5'>A title</Typography>
                  <img src={img1} alt='img' style={{ height: '14rem', width: '18rem' }} />
                  <Typography variant='body1'>
                    This is the some text below the title
                  </Typography>
                  <Button variant='contained' fullWidth>Link</Button>
                </Popup>
              </Marker> */}
            </MapContainer>
          </div>
        </AppBar>
      </Grid>
    </Grid>
  );
}

export default Listings
