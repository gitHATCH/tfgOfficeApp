import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const CircleInfoIcon = (props) => (
  <FontAwesome6 name="circle-info" size={24} color="white" {...props} />
);

export const HomeIcon = (props) => (
  <MaterialCommunityIcons name="home" size={32} color="white" {...props} />
);

export const UserIcon = (props) => (
  <MaterialCommunityIcons name="account" size={32} color="white" {...props} />
);

export const ReservationsHistoryIcon = (props) => (
  <MaterialCommunityIcons name="clock-time-eight" size={32} color="white" {...props} />
);

export const ScheduledReservationsIcon = (props) => (
  <MaterialCommunityIcons name="calendar-week-begin" size={32} color="white" {...props} />
);
