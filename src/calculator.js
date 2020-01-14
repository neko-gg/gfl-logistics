import missions from './res/missions.json';

export const calculate = configuration => {
    const secondsInAHour = 3600;
    const percentMultiplier = 0.01;

    const effectiveTime = time => Math.max(time, configuration.checkFrequency * secondsInAHour);
    const getRuns = time => Math.max(1, Math.floor(configuration.runTime * secondsInAHour / effectiveTime(time)));

    const mapValue = (mission, runs) => ({
        chapter: mission.chapter,
        mission: mission.mission,
        runs: runs,
        rewards: {
            resources: {
                manpower: mission.rewards.resources.manpower * runs,
                ammunition: mission.rewards.resources.ammunition * runs,
                ration: mission.rewards.resources.ration * runs,
                parts: mission.rewards.resources.parts * runs
            },
            items: {
                tDollContract: mission.rewards.items.tDollContract * runs,
                equipmentContract: mission.rewards.items.equipmentContract * runs,
                quickProductionContract: mission.rewards.items.quickProductionContract * runs,
                quickRepairContract: mission.rewards.items.quickRepairContract * runs,
                token: mission.rewards.items.token * runs
            }
        },
        value: (mission.rewards.resources.manpower * configuration.manpower +
                mission.rewards.resources.ammunition * configuration.ammunition +
                mission.rewards.resources.ration * configuration.ration +
                mission.rewards.resources.parts * configuration.parts +
                mission.rewards.items.tDollContract * percentMultiplier * configuration.tDollContract +
                mission.rewards.items.equipmentContract * percentMultiplier * configuration.equipmentContract +
                mission.rewards.items.quickProductionContract * percentMultiplier * configuration.quickProductionContract +
                mission.rewards.items.quickRepairContract * percentMultiplier * configuration.quickRepairContract +
                mission.rewards.items.token * percentMultiplier * configuration.token)
               * runs
    });

    return missions.flatMap(missions => missions.missions.map(mission => ({...mission, chapter: missions.chapter})))
                   .filter(mission => mission.time <= configuration.runTime * secondsInAHour)
                   .filter(mission => mission.chapter >= configuration.unlockedChapters[0])
                   .filter(mission => mission.chapter <= configuration.unlockedChapters[1])
                   .map(mission => mapValue(mission, getRuns(mission.time)));
};
