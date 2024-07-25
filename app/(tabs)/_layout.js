import { Tabs } from "expo-router";

import { HomeIcon, UserIcon, ReservationsHistoryIcon, ScheduledReservationsIcon } from "../../components/Icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#F8CC1B", paddingBottom: 5, paddingTop: 5, height: 60 },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "white",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />
       <Tabs.Screen
        name="scheduled"
        options={{
          title: "Programadas",
          tabBarIcon: ({ color }) => <ScheduledReservationsIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="reservations"
        options={{
          title: "Reservas",
          tabBarIcon: ({ color }) => <ReservationsHistoryIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color }) => <UserIcon color={color} />,
        }}
      />
      
    </Tabs>
  );
}
