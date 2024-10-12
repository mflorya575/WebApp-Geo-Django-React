import React from 'react';

// React leaflet
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';

// Mui
import { Grid, AppBar, Typography } from '@mui/material';

// Map icons
import houseIconPng from '../Assets/Mapicons/house.png';
import apartmentIconPng from '../Assets/Mapicons/apartment.png';
import officeIconPng from '../Assets/Mapicons/office.png';


function Listings() {
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
  return (
    <Grid container>
      <Grid item xs={4}>
        <Typography variant='h1'>
          It is a long established fact that a reader will be distracted by
          the readable content of a page when looking at its layout. The point
          of using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it look
          like readable English. Many desktop publishing packages and web page editors
          now use Lorem Ipsum as their default model text, and a search for 'lorem
          ipsum' will uncover many web sites still in their infancy. Various versions
          have evolved over the years, sometimes by accident, sometimes on purpose
          (injected humour and the like).
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <AppBar position='sticky'>
          <div style={{ height: '100vh' }}>
            <MapContainer center={[51.505, -0.09]} zoom={14} scrollWheelZoom={true}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker icon={officeIcon} position={[51.480, -0.126]}>
                {/* <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup> */}
              </Marker>
            </MapContainer>
          </div>
        </AppBar>
      </Grid>
    </Grid>
  );
}

export default Listings
