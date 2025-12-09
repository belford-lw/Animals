import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import { card } from '../constants';

export default function ActionAreaCard() {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: 3,    
        p: 3,
      }}
    >
      {card.map((item, idx) => (
        <Card
          key={idx}
          sx={{
            height: 400,  
            borderRadius: 3,
            overflow: 'hidden',
            boxShadow: '0px 4px 16px rgba(0,0,0,0.12)',
            transition: '0.25s ease',
            '&:hover': {
              transform: 'translateY(-6px)',
              boxShadow: '0px 8px 24px rgba(0,0,0,0.2)',
            },
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <CardActionArea sx={{ height: '100%' }}>
            <CardMedia
              component="img"
              image={item.rasim}
              alt={item.nomi}
              sx={{
                height: 200,          
                width: '100%',
                objectFit: 'cover',       
                objectPosition: 'center',
              }}
            />

            <CardContent sx={{ flexGrow: 1 }}>
              <Typography
                gutterBottom
                variant="h6"
                sx={{
                  fontWeight: 600,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {item.nomi}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 3,
                  overflow: 'hidden',
                }}
              >
                {item.malumot}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}
