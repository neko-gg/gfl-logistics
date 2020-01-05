import {strings} from './localization';

export const defaults = {
    activeStep: 0,

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
