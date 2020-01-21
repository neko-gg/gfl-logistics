import LocalizedStrings from 'react-localization';

export const strings = new LocalizedStrings(
    {
        en: {
            drawer: {
                time: 'Time',
                chapters: 'Chapters',
                resources: 'Resources',
                items: 'Items',
                tutorial: 'Tutorial',
                about: 'About'
            },
            joyride: {
                back: 'Back',
                close: 'Close',
                last: 'End',
                next: 'Next',
                skip: 'Skip',
                steps: [
                    {
                        title: "Welcome, Shikikan!",
                        content: "This web app helps you choose the best logistic support missions to run."
                    },
                    {
                        title: "Menu",
                        content: "Click the menu icon to choose your preferred settings."
                    },
                    {
                        title: "Settings",
                        content: "Here you can customize the various aspects of logistics: how long do you want to run them for, how often can you check you phone, etc..."
                    },
                    {
                        title: "Results",
                        content: "Logistics support missions will appear here, on the main page. Their value is calculated based on the settings you chose. Feel free to sort this table however you see fit. Good bye!"
                    }
                ]
            },
            checkFrequency: {
                question: 'How often can you check your phone?',
                answerConstantlyValue: 'constantly',
                answerConstantly: 'I can check my phone {0}.',
                answerSingular: 'I can check my phone every {0} hour.',
                answerPlural: 'I can check my phone every {0} hours.',
                valueLabel: '{0}h',
                handleLabelConstantly: 'Constantly',
                handleLabelSingular: '{0} hour',
                handleLabelPlural: '{0} hours'
            },
            runTime: {
                question: 'How long do you want to run logistics for?',
                answerSingular: 'I want to run logistics for {0} hour.',
                answerPlural: 'I want to run logistics for {0} hours.',
                valueLabel: '{0}h',
                handleLabelSingular: '{0} hour',
                handleLabelPlural: '{0} hours'
            },
            unlockedChapters: {
                question: 'Which chapters have you unlocked?',
                single: '{0}',
                range: '{0}-{1}',
                answerSingle: 'I have unlocked chapter {0}.',
                answerRange: 'I have unlocked chapters {0}.',
                handleLabel: 'Chapter {0}'
            },
            resourceWeights: {
                question: 'How much do you care about each resource?',
                multiplier: '{0}x',
                answer: 'I care {0} about {1}.',
                handleLabel: '{0}x',
                valueLabel: '{0}x',
                manpower: 'manpower',
                ammunition: 'ammunition',
                ration: 'ration',
                parts: 'parts'
            },
            itemWeights: {
                question: 'How much is each item worth to you?',
                multiplier: '{0}',
                answer: 'To me, {1} is worth {0}.',
                tDollContract: 'T-Doll Contract',
                equipmentContract: 'Equipment Contract',
                quickProductionContract: 'Quick Production Contract',
                quickRepairContract: 'Quick Repair Contract',
                token: 'Token'
            },
            results: {
                headers: {
                    mission: 'Mission',
                    runs: 'Runs',
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
