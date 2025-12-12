
import { Autocomplete, TextField, Box } from '@mui/material'

const Sidebar = () => {

  const heroesMarvel = [
    { label: 'Iron Man' },
    { label: 'Captain America' },
    { label: 'Thor' },
    { label: 'Hulk' },
    { label: 'Black Widow' },
    { label: 'Hawkeye' },
    { label: 'Spider-Man' },
    { label: 'Doctor Strange' },
    { label: 'Black Panther' },
  ];

  return (
 
    <Box sx={{ padding: 2, border: '1px solid #ddd', borderRadius: '4px' }}>
      <h4>Héroes de Marvel</h4>
      
      <Autocomplete
        disablePortal
        id="combo-box-marvel"
        options={heroesMarvel} 
        sx={{ width: '100%', marginBottom: 3 }}
     
        renderInput={(params) => <TextField {...params} label="Elige un héroe" />}
      />
      
      <hr />

      <h4>Vídeo Destacado</h4>

      <div className="ratio ratio-16x9">
        <iframe 
          src="https://www.youtube.com/embed/0cXfbb39VQ4?si=k3bHMcDJ3KbCXRh6"
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
    </Box>
  )
}

export default Sidebar