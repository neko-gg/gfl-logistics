import React from 'react';

import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

import GflDialogContent from './GflDialogContent';

export default class GflDialog extends React.Component {

    render() {
        return (
            <Dialog maxWidth={false}
                    open={this.props.dialogState.open}
                    onClose={() => this.props.setDialogState({open: false})}>
                <DialogTitle>{this.props.dialogState.selected || ""}</DialogTitle>
                <DialogContent dividers className={this.props.classes.dialogContent}>
                    <div className={this.props.classes.root}>
                        <GflDialogContent classes={this.props.classes}
                                          spanImportantContent={this.props.spanImportantContent}
                                          dialogState={this.props.dialogState}
                                          checkFrequency={this.props.checkFrequency}
                                          setCheckFrequency={this.props.setCheckFrequency}
                                          runTime={this.props.runTime}
                                          setRunTime={this.props.setRunTime}
                                          unlockedChapters={this.props.unlockedChapters}
                                          setUnlockedChapters={this.props.setUnlockedChapters}
                                          resources={this.props.resources}
                                          items={this.props.items}/>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => this.props.setDialogState({open: false})} color="primary">Ok</Button>
                </DialogActions>
            </Dialog>);
    }

}
