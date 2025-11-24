import { Fab, Grid, OutlinedInput } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import type { User } from "../../../types/User";
import Logo from "../elements/Logo";
import { Add } from "@mui/icons-material";

export type SidebarHeaderProps = {
  onChangeQuery: (query: string) => void;
  onChangeUsers?: (users: User[]) => void;
};

function SidebarHeader({ onChangeQuery }: SidebarHeaderProps) {
  return (
    <Grid>
      <Grid display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
        <Logo />
        <Fab color="primary" size="small" aria-label="add">
          <Add />
        </Fab>
      </Grid>
      <OutlinedInput
        sx={{ marginTop: 2 }}
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
