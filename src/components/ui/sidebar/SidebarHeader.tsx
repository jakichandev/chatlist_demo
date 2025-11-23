import { Grid, Typography, OutlinedInput } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import type { User } from "../../../types/User";

export type SidebarHeaderProps = {
  onChangeQuery: (query: string) => void;
  onChangeUsers?: (users: User[]) => void;
};

function SidebarHeader({ onChangeQuery }: SidebarHeaderProps) {
  return (
    <Grid>
      <Typography variant="h5">Messages</Typography>
      <OutlinedInput
        sx={{ marginTop: 1 }}
        size="small"
        placeholder="Search a contact"
        fullWidth
        endAdornment={<SearchRoundedIcon />}
        onChange={(e) => {
          const value = e.target.value as string;
          onChangeQuery(value);
        }}
      />
    </Grid>
  );
}

export default SidebarHeader;
