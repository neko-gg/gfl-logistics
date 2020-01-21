import {strings} from './localization';
import Cookies from 'universal-cookie';

export const cookies = new Cookies();

export const defaults = {
    joyrideState: !cookies.get('tutorial'),
    joyrideStep: 0,
    joyrideHelper: undefined,

    drawerState: false,
    dialogState: {open: false, selected: strings.drawer.time},

    checkFrequency: 1,
    runTime: 4,
    unlockedChapters: [0, 10],

    manpowerWeight: 1,
    ammunitionWeight: 1,
    rationWeight: 1,
    partsWeight: 1,

    tDollContractWeight: 100,
    equipmentContractWeight: 100,
    quickProductionContractWeight: 100,
    quickRepairContractWeight: 100,
    tokenWeight: 100,

    resultsOrder: 'desc',
    resultsOrderBy: strings.results.headers.value
};
