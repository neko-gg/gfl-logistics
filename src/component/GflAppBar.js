import React from 'react';
import AppBar from '@material-ui/core/AppBar/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export default class GflAppBar extends React.Component {

    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start"
                                className={this.props.classes.menuButton}
                                color="inherit"
                                aria-label="menu"
                                onClick={() => this.props.setDrawerState(true)}>
                        <MenuIcon/>
                    </IconButton>
                    <div className={this.props.classes.title}>Girls'&nbsp;Frontline logistics&nbsp;calculator</div>
                </Toolbar>
            </AppBar>);
    }

}
