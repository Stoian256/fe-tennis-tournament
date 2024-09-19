import React, {useState, useEffect, useRef} from 'react';
import {AppBar, Toolbar, Typography, Button, Menu, MenuItem, makeStyles, IconButton} from '@material-ui/core';
import {Link} from 'react-router-dom';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    menu: {
        '& .MuiPaper-root': {
            backgroundColor: '#3f51b5',
        },
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        padding: theme.spacing(1),
        borderRadius: '14px',
        transition: 'color 0.3s, background-color 0.3s',
        '&:hover': {
            backgroundColor: 'white',
            color: 'blue',
        },
    },
    button: {
        padding: 0,
        minWidth: 'auto',
        margin: theme.spacing(0, 1), // Add margin between buttons
    },
}));

const menuItems = [
    {path: '/profile', label: 'Player Profile'},
    {path: '/tournaments', label: 'Tournament List'},
    {path: '/rankings', label: 'Rankings'},
    {path: '/results', label: 'Results and Statistics'},
    {path: '/news', label: 'News and Updates'},
    {path: '/settings', label: 'Settings'},
    {path: '/help', label: 'Help and Support'},
    {path: '/logout', label: 'Logout'},
];

function NavigationBar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [visibleItems, setVisibleItems] = useState(menuItems.length);
    const toolbarRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            if (toolbarRef.current) {
                const toolbarWidth = toolbarRef.current.offsetWidth;
                const buttonWidth = 120;
                const availableSpace = toolbarWidth - 200;
                const maxVisibleItems = Math.max(2, Math.floor(availableSpace / buttonWidth));
                setVisibleItems(maxVisibleItems);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar ref={toolbarRef}>
                    <Typography variant="h6" className={classes.title}>
                        Ping Pong Championships
                    </Typography>
                    {menuItems.slice(0, visibleItems).map((item) => (
                        <Button key={item.path} className={classes.button}>
                            <Link to={item.path} className={classes.link}>
                                {item.label}
                            </Link>
                        </Button>
                    ))}
                    {visibleItems < menuItems.length && (
                        <>
                            <IconButton
                                edge="end"
                                color="inherit"
                                aria-label="menu"
                                onMouseEnter={handleMenuOpen}
                            >
                                <MoreVertIcon/>
                            </IconButton>
                            <Menu
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onMouseLeave={handleMenuClose}
                                onClose={handleMenuClose}
                                className={classes.menu}
                            >
                                {menuItems.slice(visibleItems).map((item) => (
                                    <MenuItem key={item.path}>
                                        <Link to={item.path} className={classes.link}>
                                            {item.label}
                                        </Link>
                                    </MenuItem>
                                ))}
                            </Menu>

                        </>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavigationBar;
