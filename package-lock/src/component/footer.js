import React from 'react';
import {Grid,Typography} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import backgroundImage from '../assets/DARK.jpg';

function Foot()
{
  return (
      
      <div style={{ backgroundColor: '#0b0019', color: '#000000', padding: '0px' }}>
           <div className="Home" >
         <Grid container spacing={2} style={{  textAlign: 'center', borderRadius: '50px', padding: '2px', color: 'white' }}>
             <Grid item xs={12} sm={6} md={3} style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <Typography variant="body1" style={{ marginRight: '50px' }}>
                    <Typography fontSize='22px' variant='h6'>About Our Movies</Typography>
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <li style={{ margin: '0 0 10px 0' }}>About us</li>
                        <li style={{ margin: '0 0 10px 0' }}>Contact us</li>
                        <li style={{ margin: '0 0 10px 0' }}>Privacy Policy</li>
                        <li style={{ margin: '0' }}>Blogs</li>  
                    </ul>
                </Typography>
            </Grid>
             <Grid item xs={12} sm={6} md={3} style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <Typography variant="body1" style={{ marginRight: '50px' }}>
                    <Typography fontSize='22px' variant='h6'>Movie Categories</Typography>
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <li style={{ margin: '0 0 10px 0' }}>Horror</li>
                        <li style={{ margin: '0 0 10px 0' }}>Thriller</li>
                        <li style={{ margin: '0 0 10px 0' }}>Drama</li>
                        <li style={{ margin: '0' }}>Action Based</li>  
                    </ul>
                </Typography>
            </Grid>
             <Grid item xs={12} sm={6} md={3} style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <Typography variant="body1" style={{ marginRight: '50px' }}>
                    <Typography fontSize='22px' variant='h6'>Drama Categories</Typography>
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <li style={{ margin: '0 0 10px 0' }}>Action Kings</li>
                        <li style={{ margin: '0 0 10px 0' }}>Drama Specialists</li>
                        <li style={{ margin: '0 0 10px 0' }}>Lover Boy</li>
                        <li style={{ margin: '0' }}>Comedian role</li>  
                    </ul>
                </Typography>
            </Grid>
             <Grid item xs={12} sm={6} md={3} style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <Typography variant="body1" style={{ marginRight: '50px' }}>
                    <Typography fontSize='22px' variant='h6'>HollyWood Movies</Typography>
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <li style={{ margin: '0 0 10px 0' }}>Marvel</li>
                        <li style={{ margin: '0 0 10px 0' }}>D.C</li>
                        <li style={{ margin: '0 0 10px 0' }}>Mission Impossible</li>
                        <li style={{ margin: '0' }}>Hangover</li>  
                    </ul>
                </Typography>
            </Grid>

            <Grid item xs={12}  sm={800} md={300} style={{ display: 'flex', justifyContent: 'space-evenly' }} >
                <Typography variant="body1">
                   <Typography>Search us on :</Typography>
                   <div className='sec'>
                    <InstagramIcon />
                    <FacebookIcon />
                    <TwitterIcon />
                    <YouTubeIcon />
                   </div>
                </Typography>
            </Grid>
        </Grid>
    </div>
    </div>
  )
}

export default Foot;