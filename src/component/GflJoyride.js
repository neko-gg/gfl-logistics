import React from 'react';
import ReactJoyride, {ACTIONS, EVENTS, LIFECYCLE, STATUS} from 'react-joyride';

import {strings} from '../localization';
import {fakeDrawerClassName} from './GflDrawer';

export default class GflJoyride extends React.Component {

    handleJoyrideCallback = data => {
        const {index, lifecycle, status, action, type} = data;

        const closeActions = [ACTIONS.STOP, ACTIONS.CLOSE, ACTIONS.SKIP];
        const finishedStatuses = [STATUS.FINISHED, STATUS.SKIPPED];
        const nextEvents = [EVENTS.STEP_AFTER, EVENTS.TARGET_NOT_FOUND];

        if (nextEvents.includes(type)) {
            if (LIFECYCLE.COMPLETE === lifecycle && ACTIONS.NEXT === action && 1 === index && !this.props.drawerState) {
                this.props.setDrawerState(true);
            } else if (LIFECYCLE.COMPLETE === lifecycle && ACTIONS.PREV === action && 2 === index && this.props.drawerState) {
                this.props.setDrawerState(false);
                this.props.setJoyrideStep(1);
            } else if (LIFECYCLE.COMPLETE === lifecycle && ACTIONS.NEXT === action && 2 === index && this.props.drawerState) {
                this.props.setDrawerState(false);
                this.props.setJoyrideStep(3);
            } else if (LIFECYCLE.COMPLETE === lifecycle && ACTIONS.PREV === action && 3 === index && !this.props.drawerState) {
                this.props.setDrawerState(true);
                this.props.setJoyrideStep(2);
            } else {
                this.props.setJoyrideStep(index + (action === ACTIONS.PREV ? -1 : 1));
            }
        } else if (finishedStatuses.includes(status) || closeActions.includes(action)) {
            this.props.setDrawerState(false);
            this.props.setJoyrideState(false);
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
    };

    joyrideSteps = [
        {
            title: strings.joyride.steps[0].title,
            content: strings.joyride.steps[0].content,
            placement: "center",
            target: "body",
            disableBeacon: true
        },
        {
            title: strings.joyride.steps[1].title,
            content: strings.joyride.steps[1].content,
            placement: "bottom-start",
            target: `.${this.props.classes.menuButton}`,
            disableBeacon: true,
            spotlightClicks: true
        },
        {
            title: strings.joyride.steps[2].title,
            content: strings.joyride.steps[2].content,
            placement: "bottom-start",
            target: `.${fakeDrawerClassName()}`,
            disableBeacon: true
        },
        {
            title: strings.joyride.steps[3].title,
            content: strings.joyride.steps[3].content,
            placement: "auto",
            target: `.${this.props.classes.results}`,
            disableBeacon: true
        }
    ];

    render() {
        return (
            <ReactJoyride className={this.props.classes.root}
                          getHelpers={this.props.getHelpers}
                          continuous
                          scrollToFirstStep
                          showProgress
                          showSkipButton
                          disableOverlayClose
                          styles={{options: {zIndex: 1500}}}
                          locale={{
                              back: strings.joyride.back,
                              close: strings.joyride.close,
                              last: strings.joyride.last,
                              next: strings.joyride.next,
                              skip: strings.joyride.skip
                          }}
                          run={this.props.joyrideState}
                          stepIndex={this.props.joyrideStep}
                          steps={this.joyrideSteps}
                          callback={this.handleJoyrideCallback}/>);
    }

}
