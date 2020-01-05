import LocalizedStrings from 'react-localization';

export const strings = new LocalizedStrings(
    {
        en: {
            checkFrequency: {
                question: 'How often can you check your phone?',
                answerConstantlyValue: 'Constantly',
                answerConstantly: '{0}.',
                answerSingular: 'Every {0} hour.',
                answerPlural: 'Every {0} hours.',
                longAnswerConstantlyValue: 'constantly',
                longAnswerConstantly: 'I can check my phone {0}.',
                longAnswerSingular: 'I can check my phone every {0} hour.',
                longAnswerPlural: 'I can check my phone every {0} hours.',
                valueLabel: '{0}h',
                handleLabelConstantly: 'Constantly',
                handleLabelSingular: '{0} hour',
                handleLabelPlural: '{0} hours'
            },
            runTime: {
                question: 'How long do you want to run logistics for?',
                answerSingular: 'For {0} hour.',
                answerPlural: 'For {0} hours.',
                longAnswerSingular: 'I want to run logistics for {0} hour.',
                longAnswerPlural: 'I want to run logistics for {0} hours.',
                valueLabel: '{0}h',
                handleLabelSingular: '{0} hour',
                handleLabelPlural: '{0} hours'
            },
            unlockedChapters: {
                question: 'Which chapters have you unlocked?',
                single: '{0}',
                range: '{0}-{1}',
                answerSingular: 'Chapter {0}.',
                answerPlural: 'Chapters {0}.',
                longAnswerSingle: 'I have unlocked chapter {0}.',
                longAnswerRange: 'I have unlocked chapters {0}.',
                handleLabel: 'Chapter {0}'
            },
            resourceWeights: {
                question: 'How much do you care about each resource?',
                multiplier: '{0}x',
                answer: '{0}\xa0manpower, {1}\xa0ammunition, {2}\xa0ration, {3}\xa0parts.',
                longAnswer: 'I care: {0}\xa0about\xa0manpower, {1}\xa0about\xa0ammunition, {2}\xa0about\xa0ration, and {3}\xa0about\xa0parts.',
                handleLabel: '{0}x',
                valueLabel: '{0}x',
                manpowerLabel: 'Manpower',
                ammunitionLabel: 'Ammunition',
                rationLabel: 'Ration',
                partsLabel: 'Parts'
            },
            itemWeights: {
                question: 'How much is each item worth to you?',
                multiplier: '{0}',
                answer: 'T-Doll\xa0Contract\xa0{0}, Equipment\xa0Contract\xa0{1}, Quick\xa0Production\xa0Contract\xa0{2}, Quick\xa0Repair\xa0Contract\xa0{3}, Token\xa0{4}.',
                longAnswer: 'To me, a\xa0T-Doll\xa0Contract\xa0is\xa0worth\xa0{0}, an\xa0Equipment\xa0Contract\xa0is\xa0worth\xa0{1}, a\xa0Quick\xa0Production\xa0Contract\xa0is\xa0worth\xa0{2}, a\xa0Quick\xa0Repair\xa0Contract\xa0is\xa0worth\xa0{3}, and a\xa0Token\xa0is\xa0worth\xa0{4}.',
                tDollContractLabel: 'T-Doll Contract',
                equipmentContractLabel: 'Equipment Contract',
                quickProductionContractLabel: 'Quick Production Contract',
                quickRepairContractLabel: 'Quick Repair Contract',
                tokenLabel: 'Token'
            },
            results: {
                headers: {
                    mission: 'Mission',
                    manpower: 'Manpower',
                    ammunition: 'Ammunition',
                    ration: 'Ration',
                    parts: 'Parts',
                    tDollContract: 'T-Doll Contract',
                    equipmentContract: 'Equipment Contract',
                    quickProductionContract: 'Quick Production Contract',
                    quickRepairContract: 'Quick Repair Contract',
                    token: 'Token',
                    value: 'Value'
                }
            }
        }
    });
