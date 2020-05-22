import React from 'react';

import Paper from '@material-ui/core/Paper';
import Slider from '@material-ui/core/Slider';

import { strings } from '../localization';

export default class GflDialogContent extends React.Component {

    render() {
        switch (this.props.dialogState.selected) {
            case strings.drawer.time:
                return (
                    <span>
                        <Paper className={this.props.classes.dialogPaper}>
                            <div>{strings.formatString(0 === this.props.checkFrequency ? strings.checkFrequency.answerConstantly : 1 === this.props.checkFrequency ? strings.checkFrequency.answerSingular : strings.checkFrequency.answerPlural,
                                                       this.props.spanImportantContent(0 === this.props.checkFrequency ? strings.checkFrequency.answerConstantlyValue : this.props.checkFrequency))}</div>
                            <Slider className={this.props.classes.slider}
                                    defaultValue={this.props.checkFrequency}
                                    onChange={(event, newValue) => this.props.setCheckFrequency(newValue)}
                                    getAriaValueText={value => strings.formatString(0 === value ? strings.checkFrequency.handleLabelConstantly : 1 === value ? strings.checkFrequency.handleLabelSingular : strings.checkFrequency.handleLabelPlural, value)}
                                    valueLabelFormat={value => strings.formatString(strings.checkFrequency.valueLabel, value)}
                                    valueLabelDisplay="off"
                                    step={1}
                                    min={0}
                                    max={24}/>
                        </Paper>
                        <Paper className={this.props.classes.dialogPaper}>
                            <div>{strings.formatString(1 === this.props.runTime ? strings.runTime.answerSingular : strings.runTime.answerPlural, this.props.spanImportantContent(this.props.runTime))}</div>
                            <Slider className={this.props.classes.slider}
                                    defaultValue={this.props.runTime}
                                    onChange={(event, newValue) => this.props.setRunTime(newValue)}
                                    getAriaValueText={value => strings.formatString(1 === value ? strings.runTime.handleLabelSingular : strings.runTime.handleLabelPlural, value)}
                                    valueLabelFormat={value => strings.formatString(strings.runTime.valueLabel, value)}
                                    valueLabelDisplay="off"
                                    step={1}
                                    min={1}
                                    max={24}/>
                        </Paper>
                    </span>);
            case strings.drawer.chapters:
                return (
                    <span>
                        <Paper className={this.props.classes.dialogPaper}>
                            <div>{this.props.unlockedChapters[0] === this.props.unlockedChapters[1]
                                  ? strings.formatString(strings.unlockedChapters.answerSingle, this.props.spanImportantContent(strings.formatString(strings.unlockedChapters.single, this.props.unlockedChapters[0])))
                                  : strings.formatString(strings.unlockedChapters.answerRange, this.props.spanImportantContent(strings.formatString(strings.unlockedChapters.range, this.props.unlockedChapters[0], this.props.unlockedChapters[1])))}</div>
                            <Slider className={this.props.classes.slider}
                                    defaultValue={this.props.unlockedChapters}
                                    onChange={(event, newValue) => this.props.setUnlockedChapters(newValue)}
                                    getAriaValueText={value => strings.formatString(strings.unlockedChapters.handleLabel, value)}
                                    valueLabelDisplay="off"
                                    step={1}
                                    min={0}
                                    max={11}/>
                        </Paper>
                    </span>);
            case strings.drawer.resources:
                return (
                    <span>{this.props.resources.map(resource => (
                        <Paper key={resource.name} className={this.props.classes.dialogPaper}>
                            <div>{strings.formatString(strings.resourceWeights.answer, this.props.spanImportantContent(strings.formatString(strings.resourceWeights.multiplier, resource.weight)), this.props.spanImportantContent(resource.name))}</div>
                            <Slider className={this.props.classes.slider}
                                    defaultValue={resource.weight}
                                    onChange={(event, newValue) => resource.weightSetter(newValue)}
                                    getAriaValueText={value => strings.formatString(strings.resourceWeights.handleLabel, value)}
                                    valueLabelFormat={value => strings.formatString(strings.resourceWeights.valueLabel, value)}
                                    valueLabelDisplay="off"
                                    step={1}
                                    min={0}
                                    max={10}/>
                        </Paper>))}
                    </span>);
            case strings.drawer.items:
                return (
                    <span>{this.props.items.map(item => (
                        <Paper key={item.name} className={this.props.classes.dialogPaper}>
                            <div>{strings.formatString(strings.itemWeights.answer, this.props.spanImportantContent(strings.formatString(strings.itemWeights.multiplier, item.weight)), this.props.spanImportantContent(item.name))}</div>
                            <Slider className={this.props.classes.slider}
                                    defaultValue={item.weight}
                                    onChange={(event, newValue) => item.weightSetter(newValue)}
                                    getAriaValueText={value => strings.formatString(strings.itemWeights.handleLabel, value)}
                                    valueLabelFormat={value => strings.formatString(strings.itemWeights.valueLabel, value)}
                                    valueLabelDisplay="off"
                                    step={50}
                                    min={0}
                                    max={1000}/>
                        </Paper>))}
                    </span>);
            default:
                return null;
        }
    }

}
