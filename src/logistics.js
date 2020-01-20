import React from 'react';

import Button from '@material-ui/core/Button';

import {defaults} from './settings';
import {useStyles} from './style';
import {strings} from './localization';
import GflDialog from './component/GflDialog';
import GflResults from './component/GflResults';
import GflDrawer from './component/GflDrawer';
import GflAppBar from './component/GflAppBar';
import GflJoyride from './component/GflJoyride';

export default function LogisticsCalculator() {
    const classes = useStyles();

    const [joyrideState, setJoyrideState] = React.useState(defaults.joyrideState);
    const [joyrideStep, setJoyrideStep] = React.useState(defaults.joyrideStep);
    const [joyrideHelper, setJoyrideHelper] = React.useState(defaults.joyrideHelper);

    const [drawerState, setDrawerState] = React.useState(defaults.drawerState);
    const [dialogState, setDialogState] = React.useState(defaults.dialogState);

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
        {name: strings.resourceWeights.manpower, weight: manpowerWeight, weightSetter: setManpowerWeight},
        {name: strings.resourceWeights.ammunition, weight: ammunitionWeight, weightSetter: setAmmunitionWeight},
        {name: strings.resourceWeights.ration, weight: rationWeight, weightSetter: setRationWeight},
        {name: strings.resourceWeights.parts, weight: partsWeight, weightSetter: setPartsWeight}
    ];

    const items = [
        {name: strings.itemWeights.tDollContract, weight: tDollContractWeight, weightSetter: setTDollContractWeight},
        {name: strings.itemWeights.equipmentContract, weight: equipmentContractWeight, weightSetter: setEquipmentContractWeight},
        {name: strings.itemWeights.quickProductionContract, weight: quickProductionContractWeight, weightSetter: setQuickProductionContractWeight},
        {name: strings.itemWeights.quickRepairContract, weight: quickRepairContractWeight, weightSetter: setQuickRepairContractWeight},
        {name: strings.itemWeights.token, weight: tokenWeight, weightSetter: setTokenWeight}
    ];

    const handleReset = () => {
        setDrawerState(defaults.drawerState);
        setDialogState(defaults.dialogState);

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

    const spanImportantContent = content => <span className={classes.importantContent}>{content}</span>;

    const joyrideToDrawer = () => setJoyrideStep(2);
    const resetJoyride = () => {
        setDrawerState(false);
        setJoyrideStep(0);
        setJoyrideState(true);
    };

    return (
        <div className={classes.root}>
            <GflJoyride classes={classes}
                        getHelpers={setJoyrideHelper}
                        drawerState={drawerState}
                        setDrawerState={setDrawerState}
                        joyrideState={joyrideState}
                        setJoyrideState={setJoyrideState}
                        joyrideStep={joyrideStep}
                        setJoyrideStep={setJoyrideStep}/>

            <GflAppBar classes={classes}
                       setDrawerState={setDrawerState}/>

            <GflDrawer classes={classes}
                       drawerState={drawerState}
                       setDrawerState={setDrawerState}
                       setDialogState={setDialogState}
                       joyrideState={joyrideState}
                       joyrideHelper={joyrideHelper}
                       joyrideToDrawer={joyrideToDrawer}
                       resetJoyride={resetJoyride}/>

            <GflDialog classes={classes}
                       spanImportantContent={spanImportantContent}
                       dialogState={dialogState}
                       setDialogState={setDialogState}
                       checkFrequency={checkFrequency}
                       setCheckFrequency={setCheckFrequency}
                       runTime={runTime}
                       setRunTime={setRunTime}
                       unlockedChapters={unlockedChapters}
                       setUnlockedChapters={setUnlockedChapters}
                       resources={resources}
                       items={items}/>

            <GflResults classes={classes}
                        resultsOrder={resultsOrder}
                        setResultsOrder={setResultsOrder}
                        resultsOrderBy={resultsOrderBy}
                        setResultsOrderBy={setResultsOrderBy}
                        runTime={runTime}
                        checkFrequency={checkFrequency}
                        unlockedChapters={unlockedChapters}
                        manpower={manpowerWeight}
                        ammunition={ammunitionWeight}
                        ration={rationWeight}
                        parts={partsWeight}
                        tDollContract={tDollContractWeight}
                        equipmentContract={equipmentContractWeight}
                        quickProductionContract={quickProductionContractWeight}
                        quickRepairContract={quickRepairContractWeight}
                        token={tokenWeight}/>

            <Button className={classes.button}
                    onClick={handleReset}
                    color="secondary">
                Reset
            </Button>
        </div>
    );
}
