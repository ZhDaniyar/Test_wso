import React, { Component }  from 'react';
import HomeIcon from '@mui/icons-material/Home';
import TableChartIcon from '@mui/icons-material/TableChart';
import FolderIcon from '@mui/icons-material/Folder';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';

export const drawerItems=[
    {
        id: 0,
        icon: <HomeIcon />,
        label: 'Start Page',
        route: 'route',
    },
    {
        id: 1,
        icon: <TableChartIcon />,
        label: 'Official Inputs',
        route: 'route',
    },
    {
        id: 2,
        icon: <FolderIcon />,
        label: 'Scenarios',
        route: 'route',
    },
    {
        id: 3,
        icon: <SettingsInputComponentIcon />,
        label: 'Simulation',
        route: 'route',
    },
    {
        id: 4,
        icon: <DashboardIcon />,
        label: 'Dashboard',
        route: 'route',
    },
    {
        id: 5,
        icon: <SettingsIcon />,
        label: 'Settings',
        route: 'route',
    },
]