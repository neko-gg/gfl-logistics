import React from 'react';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Slider from '@material-ui/core/Slider';
import Step from '@material-ui/core/Step';
import Stepper from '@material-ui/core/Stepper';
import StepButton from '@material-ui/core/StepButton';
import StepContent from '@material-ui/core/StepContent';
import {StepLabel} from '@material-ui/core';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableSortLabel from '@material-ui/core/TableSortLabel';

import {defaults} from './settings';
import {useStyles} from './style';
import {strings} from './localization';
import {calculate} from "./calculator";


export default function LogisticsCalculator() {
    const classes = useStyles();

    const [activeStep, setActiveStep] = React.useState(defaults.activeStep);

    const [checkFrequency, setCheckFrequency] = React.useState(defaults.checkFrequency);
    const [runTime, setRunTime] = React.useState(defaults.runTime);
    const [unlockedChapters, setUnlockedChapters] = React.useState(defaults.unlockedChapters);

    const [manpowerWeight, setManpowerWeight] = React.useState(defaults.manpowerWeight);
    const [ammunitionWeight, setAmmunitionWeight] = React.useState(defaults.ammunitionWeight);
    const [rationWeight, setRationWeight] = React.useState(defaults.rationWeight);
    const [partsWeight, setPartsWeight] = React.useState(defaults.partsWeight);

    const [tDollContractWeight, setTDollContractWeight] = React.useState(defaults.tDollContractWeight);
    const [equipmentContractWeight, setEquipmentContractWeight] = React.useState(defaults.equipmentContractWeight);
    const [quickProductionContractWeight, setQuickProductionContractWeight] = React.useState(defaults.quickProductionContractWeight);
    const [quickRepairContractWeight, setQuickRepairContractWeight] = React.useState(defaults.quickRepairContractWeight);
    const [tokenWeight, setTokenWeight] = React.useState(defaults.tokenWeight);

    const [resultsOrder, setResultsOrder] = React.useState(defaults.resultsOrder);
    const [resultsOrderBy, setResultsOrderBy] = React.useState(defaults.resultsOrderBy);

    const resources = [
        {label: strings.resourceWeights.manpowerLabel, weight: manpowerWeight, weightSetter: setManpowerWeight},
        {label: strings.resourceWeights.ammunitionLabel, weight: ammunitionWeight, weightSetter: setAmmunitionWeight},
        {label: strings.resourceWeights.rationLabel, weight: rationWeight, weightSetter: setRationWeight},
        {label: strings.resourceWeights.partsLabel, weight: partsWeight, weightSetter: setPartsWeight}
    ];

    const items = [
        {label: strings.itemWeights.tDollContractLabel, weight: tDollContractWeight, weightSetter: setTDollContractWeight},
        {label: strings.itemWeights.equipmentContractLabel, weight: equipmentContractWeight, weightSetter: setEquipmentContractWeight},
        {label: strings.itemWeights.quickProductionContractLabel, weight: quickProductionContractWeight, weightSetter: setQuickProductionContractWeight},
        {label: strings.itemWeights.quickRepairContractLabel, weight: quickRepairContractWeight, weightSetter: setQuickRepairContractWeight},
        {label: strings.itemWeights.tokenLabel, weight: tokenWeight, weightSetter: setTokenWeight}
    ];

    const spanImportantContent = content => <span className={classes.importantContent}>{content}</span>;
    const spanImportantAnswer = answer => <span className={classes.importantAnswer}>{answer}</span>;

    const steps = [
        {
            question: strings.checkFrequency.question,
            answer: () => strings.formatString(0 === checkFrequency ? strings.checkFrequency.answerConstantly : 1 === checkFrequency ? strings.checkFrequency.answerSingular : strings.checkFrequency.answerPlural, spanImportantAnswer(0 === checkFrequency ? strings.checkFrequency.answerConstantlyValue : checkFrequency)),
            longAnswer: () => strings.formatString(0 === checkFrequency ? strings.checkFrequency.longAnswerConstantly : 1 === checkFrequency ? strings.checkFrequency.longAnswerSingular : strings.checkFrequency.longAnswerPlural, spanImportantContent(0 === checkFrequency ? strings.checkFrequency.longAnswerConstantlyValue : checkFrequency)),
            bigMargin: false,
            sliders: [{
                value: checkFrequency,
                setValue: setCheckFrequency,
                handleLabel: value => strings.formatString(0 === value ? strings.checkFrequency.handleLabelConstantly : 1 === value ? strings.checkFrequency.handleLabelSingular : strings.checkFrequency.handleLabelPlural, value),
                valueLabel: value => strings.formatString(strings.checkFrequency.valueLabel, value),
                label: null,
                labelDisplay: 'auto',
                bigMargin: false,
                step: 1,
                min: 0,
                max: 24
            }]
        },
        {
            question: strings.runTime.question,
            answer: () => strings.formatString(1 === runTime ? strings.runTime.answerSingular : strings.runTime.answerPlural, spanImportantAnswer(runTime)),
            longAnswer: () => strings.formatString(1 === runTime ? strings.runTime.longAnswerSingular : strings.runTime.longAnswerPlural, spanImportantContent(runTime)),
            bigMargin: false,
            sliders: [{
                value: runTime,
                setValue: setRunTime,
                handleLabel: value => strings.formatString(1 === value ? strings.runTime.handleLabelSingular : strings.runTime.handleLabelPlural, value),
                valueLabel: value => strings.formatString(strings.runTime.valueLabel, value),
                label: null,
                labelDisplay: 'auto',
                bigMargin: false,
                step: 1,
                min: 1,
                max: 24
            }]
        },
        {
            question: strings.unlockedChapters.question,
            answer: () => unlockedChapters[0] === unlockedChapters[1]
                          ? strings.formatString(strings.unlockedChapters.answerSingular, spanImportantAnswer(strings.formatString(strings.unlockedChapters.single, unlockedChapters[0])))
                          : strings.formatString(strings.unlockedChapters.answerPlural, spanImportantAnswer(strings.formatString(strings.unlockedChapters.range, unlockedChapters[0], unlockedChapters[1]))),
            longAnswer: () => unlockedChapters[0] === unlockedChapters[1]
                              ? strings.formatString(strings.unlockedChapters.longAnswerSingle, spanImportantContent(strings.formatString(strings.unlockedChapters.single, unlockedChapters[0])))
                              : strings.formatString(strings.unlockedChapters.longAnswerRange, spanImportantContent(strings.formatString(strings.unlockedChapters.range, unlockedChapters[0], unlockedChapters[1]))),
            bigMargin: false,
            sliders: [{
                value: unlockedChapters,
                setValue: setUnlockedChapters,
                handleLabel: value => strings.formatString(strings.unlockedChapters.handleLabel, value),
                valueLabel: value => value,
                label: null,
                labelDisplay: 'auto',
                bigMargin: false,
                step: 1,
                min: 0,
                max: 10
            }]
        },
        {
            question: strings.resourceWeights.question,
            answer: () => strings.formatString(strings.resourceWeights.answer,
                                               spanImportantAnswer(strings.formatString(strings.resourceWeights.multiplier, manpowerWeight)),
                                               spanImportantAnswer(strings.formatString(strings.resourceWeights.multiplier, ammunitionWeight)),
                                               spanImportantAnswer(strings.formatString(strings.resourceWeights.multiplier, rationWeight)),
                                               spanImportantAnswer(strings.formatString(strings.resourceWeights.multiplier, partsWeight))),
            longAnswer: () => strings.formatString(strings.resourceWeights.longAnswer,
                                                   ...resources.map(resource => spanImportantContent(strings.formatString(strings.resourceWeights.multiplier, resource.weight)))),
            bigMargin: true,
            sliders: resources.map(resource => ({
                value: resource.weight,
                setValue: resource.weightSetter,
                handleLabel: value => strings.formatString(strings.resourceWeights.handleLabel, value),
                valueLabel: value => strings.formatString(strings.resourceWeights.valueLabel, value),
                label: resource.label,
                bigMargin: true,
                labelDisplay: 'on',
                step: 1,
                min: 0,
                max: 10
            }))
        },
        {
            question: strings.itemWeights.question,
            answer: () => strings.formatString(strings.itemWeights.answer,
                                               spanImportantAnswer(strings.formatString(strings.itemWeights.multiplier, tDollContractWeight)),
                                               spanImportantAnswer(strings.formatString(strings.itemWeights.multiplier, equipmentContractWeight)),
                                               spanImportantAnswer(strings.formatString(strings.itemWeights.multiplier, quickProductionContractWeight)),
                                               spanImportantAnswer(strings.formatString(strings.itemWeights.multiplier, quickRepairContractWeight)),
                                               spanImportantAnswer(strings.formatString(strings.itemWeights.multiplier, tokenWeight))),
            longAnswer: () => strings.formatString(strings.itemWeights.longAnswer,
                                                   ...items.map(item => spanImportantContent(strings.formatString(strings.itemWeights.multiplier, item.weight)))),
            bigMargin: true,
            sliders: items.map(item => ({
                value: item.weight,
                setValue: item.weightSetter,
                handleLabel: value => value,
                valueLabel: value => value,
                label: item.label,
                bigMargin: true,
                labelDisplay: 'on',
                step: 50,
                min: 0,
                max: 1000
            }))
        }
    ];

    const handleReset = () => {
        setActiveStep(defaults.activeStep);

        setCheckFrequency(defaults.checkFrequency);
        setRunTime(defaults.runTime);
        setUnlockedChapters(defaults.unlockedChapters);

        setManpowerWeight(defaults.manpowerWeight);
        setAmmunitionWeight(defaults.ammunitionWeight);
        setRationWeight(defaults.rationWeight);
        setPartsWeight(defaults.partsWeight);

        setTDollContractWeight(defaults.tDollContractWeight);
        setEquipmentContractWeight(defaults.equipmentContractWeight);
        setQuickProductionContractWeight(defaults.quickProductionContractWeight);
        setQuickRepairContractWeight(defaults.quickRepairContractWeight);
        setTokenWeight(defaults.tokenWeight);

        setResultsOrder(defaults.resultsOrder);
        setResultsOrderBy(defaults.resultsOrderBy);
    };

    const handleResultsSort = header => event => {
        setResultsOrder(resultsOrderBy === header && resultsOrder === 'desc' ? 'asc' : 'desc');
        setResultsOrderBy(header);
    };

    return (
        <div className={classes.root}>
            <div className={classes.title}>Girls' Frontline logistics calculator</div>
            <Stepper className={classes.stepper} nonLinear orientation="vertical" activeStep={activeStep}>
                {steps.map((step, index) => (
                    <Step key={step.question}>
                        <StepButton onClick={() => setActiveStep(index)}>
                            <StepLabel className={classes.stepLabel}>{step.question}{activeStep !== index ? (<div className={classes.answer}>{step.answer()}</div>) : null}</StepLabel>
                        </StepButton>
                        <StepContent>
                            <div>
                                <div className={step.bigMargin ? classes.sliderDescription : null}>{step.longAnswer()}</div>
                                {step.sliders.map((slider, sliderKey) => (
                                    <span key={sliderKey} className={slider.bigMargin ? classes.labelledSlider : null}>
                                        {slider.label ? <span className={classes.sliderLabel}>{slider.label}</span> : null}
                                        <Slider key={sliderKey} className={classes.slider}
                                                defaultValue={slider.value}
                                                onChange={(event, newValue) => slider.setValue(newValue)}
                                                getAriaValueText={slider.handleLabel}
                                                valueLabelDisplay={slider.labelDisplay}
                                                step={slider.step}
                                                marks
                                                valueLabelFormat={slider.valueLabel}
                                                min={slider.min}
                                                max={slider.max}/>
                                    </span>
                                ))}
                            </div>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>{strings.results.headers.mission}</TableCell>
                            {[strings.results.headers.runs,
                              strings.results.headers.manpower,
                              strings.results.headers.ammunition,
                              strings.results.headers.ration,
                              strings.results.headers.parts,
                              strings.results.headers.value].map(header => <TableCell key={header} align="right" sortDirection={resultsOrderBy === header ? resultsOrder : false}>
                                <TableSortLabel active={resultsOrderBy === header} direction={resultsOrderBy === header ? resultsOrder : 'desc'} onClick={handleResultsSort(header)}>{header}</TableSortLabel>
                            </TableCell>)}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {calculate({
                                       runTime: runTime,
                                       checkFrequency: checkFrequency,
                                       unlockedChapters: unlockedChapters,
                                       manpower: manpowerWeight,
                                       ammunition: ammunitionWeight,
                                       ration: rationWeight,
                                       parts: partsWeight,
                                       tDollContract: tDollContractWeight,
                                       equipmentContract: equipmentContractWeight,
                                       quickProductionContract: quickProductionContractWeight,
                                       quickRepairContract: quickRepairContractWeight,
                                       token: tokenWeight
                                   }
                        ).sort((a, b) => {
                            let comparison = 0;
                            switch (resultsOrderBy) {
                                case strings.results.headers.runs:
                                    comparison = a.runs - b.runs;
                                    break;
                                case strings.results.headers.manpower:
                                    comparison = a.rewards.resources.manpower - b.rewards.resources.manpower;
                                    break;
                                case strings.results.headers.ammunition:
                                    comparison = a.rewards.resources.ammunition - b.rewards.resources.ammunition;
                                    break;
                                case strings.results.headers.ration:
                                    comparison = a.rewards.resources.ration - b.rewards.resources.ration;
                                    break;
                                case strings.results.headers.parts:
                                    comparison = a.rewards.resources.parts - b.rewards.resources.parts;
                                    break;
                                case strings.results.headers.value:
                                default:
                                    comparison = a.value - b.value;
                            }
                            return 'asc' === resultsOrder ? comparison : -1 * comparison;
                        }).map(mission => (
                            <TableRow key={mission.chapter + '-' + mission.mission}>
                                <TableCell component="th" scope="row">{mission.chapter}-{mission.mission}</TableCell>
                                <TableCell align="right">{mission.runs}</TableCell>
                                <TableCell align="right">{mission.rewards.resources.manpower * mission.runs}</TableCell>
                                <TableCell align="right">{mission.rewards.resources.ammunition * mission.runs}</TableCell>
                                <TableCell align="right">{mission.rewards.resources.ration * mission.runs}</TableCell>
                                <TableCell align="right">{mission.rewards.resources.parts * mission.runs}</TableCell>
                                <TableCell align="right">{mission.value}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Button className={classes.button} onClick={handleReset} color="secondary">Reset</Button>
        </div>
    );
}
