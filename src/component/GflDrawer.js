import React from 'react';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import {strings} from '../localization';

const checkElement = selector => null == document.querySelector(selector)
                                 ? new Promise(requestAnimationFrame).then(() => checkElement(selector))
                                 : Promise.resolve(true);

export const fakeDrawerClassName = () => 'fake-drawer-list';

export default class GflDrawer extends React.Component {

    drawerItems = () => [strings.drawer.time,
                         strings.drawer.chapters,
                         strings.drawer.resources,
                         strings.drawer.items];

    getListItem = () => (text) => (
        <ListItem button key={text} onClick={() => this.props.setDialogState({open: true, selected: text})}>
            <ListItemText primary={text}/>
        </ListItem>
    );

    componentDidUpdate(props, state, snapshot) {
        if (this.props.drawerState
            && this.props.joyrideState
            && this.props.joyrideHelper
            && this.props.joyrideHelper.info()
            && 1 === this.props.joyrideHelper.info().index) {
            checkElement(`.${this.props.classes.drawerList}`).then(() => {
                Array.from(document.getElementsByClassName(fakeDrawerClassName()))
                     .forEach(fakeDrawerList => fakeDrawerList.remove());

                const boundingClientRect = document.getElementsByClassName(this.props.classes.drawerList)[0].getBoundingClientRect();
                const fakeDrawerList = document.createElement("div");

                fakeDrawerList.style.position = 'absolute';
                fakeDrawerList.style.left = '0';
                fakeDrawerList.style.top = '0';
                fakeDrawerList.style.width = `${boundingClientRect.width}px`;
                fakeDrawerList.style.height = `${boundingClientRect.height}px`;
                fakeDrawerList.classList.add(fakeDrawerClassName());
                document.body.appendChild(fakeDrawerList);
            }).then(() => this.props.joyrideToDrawer());
        }
    }

    render() {
        return (
            <SwipeableDrawer open={this.props.drawerState}
                             onClose={() => this.props.setDrawerState(false)}
                             onOpen={() => this.props.setDrawerState(true)}>
                <div className={this.props.classes.drawerList}
                     role="presentation">
                    <List>
                        {this.drawerItems()
                             .map(this.getListItem())}
                    </List>
                    <Divider/>
                    <List>
                        <ListItem button onClick={() => this.props.resetJoyride()}>
                            <ListItemText primary={strings.drawer.tutorial}/>
                        </ListItem>
                    </List>
                    <Divider/>
                    <List>
                        <ListItem button onClick={() => this.props.setDrawerState(false)}>
                            <ListItemText primary={strings.drawer.about}/>
                        </ListItem>
                    </List>
                </div>
            </SwipeableDrawer>);
    }

}
