import { ArrowBack } from "@mui/icons-material";
import { Avatar, Grid, Typography, useMediaQuery } from "@mui/material"
import { Link } from "react-router";
function ChatHeader({ img, name } : {img?: string, name?: string}) {
  const isSmallScreen = useMediaQuery('(max-width:800px)');
  return (
    <Grid sx={{backgroundColor: "whiteSmoke", width: "100%"}} container alignItems="center" padding={2} gap={2}>
      {isSmallScreen && (
        <Link to="/">
          <ArrowBack />
        </Link>
      )}
      <Avatar src={img} />
      <Typography variant="h5">{name}</Typography>
    </Grid>
  )
}

export default ChatHeader