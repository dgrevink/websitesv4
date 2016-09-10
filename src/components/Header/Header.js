import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import * as CONSTANTS from '../../config';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer() {
    this.setState({open: !this.state.open})
  }

  render() {
    return (
      <div>
        <AppBar
          title={<span style={classes.title}>{CONSTANTS.name}</span>}
          onLeftIconButtonTouchTap={this.toggleDrawer}
          iconElementRight={<FlatButton label="Save" />}
        />
        <Drawer
          docked={false}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
          >
          <AppBar title={CONSTANTS.name}
            onLeftIconButtonTouchTap={this.toggleDrawer}
          />
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}
