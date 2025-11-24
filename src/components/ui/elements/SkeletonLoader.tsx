import { Box, Skeleton } from "@mui/material";

function SkeletonWithAvatar() {
  return (
    <Box display="flex" alignItems={"center"} gap={2} padding={2}>
      <Skeleton variant="circular" width={40} height={40} animation="wave" />
      <Skeleton variant="rounded" animation="wave" width={"80%"} height={30} />
    </Box>
  );
}

function SkeletonLoader() {
  return (
    <Box display="flex" flexDirection={"column"} gap={1} padding={2}>
      <SkeletonWithAvatar />
      <SkeletonWithAvatar />
      <SkeletonWithAvatar />
    </Box>
  );
}

export default SkeletonLoader;
