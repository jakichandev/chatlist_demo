import { Avatar, Grid, Typography } from "@mui/material"
function ChatHeader({ img, name } : {img?: string, name?: string}) {
  return (
    <Grid sx={{backgroundColor: "whiteSmoke", width: "100%"}} container alignItems="center" padding={2} gap={2}>
      <Avatar src={img} />
      <Typography variant="h5">{name}</Typography>
    </Grid>
  )
}

export default ChatHeader