import Ionicons from "@expo/vector-icons/Ionicons";

import type { IconProps } from "@/shared/interfaces";

export const SearchIcon = ({ ...props }: IconProps) => (
  <Ionicons name="search" {...props} />
);
