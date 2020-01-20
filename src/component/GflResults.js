import React from 'react';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';

import {strings} from '../localization';
import {calculate} from '../calculator';

export default class GflResults extends React.Component {

    headers = () => [strings.results.headers.runs,
                     strings.results.headers.manpower,
                     strings.results.headers.ammunition,
                     strings.results.headers.ration,
                     strings.results.headers.parts,
                     strings.results.headers.value];

    calculateResults = () => calculate({
                                           runTime: this.props.runTime,
                                           checkFrequency: this.props.checkFrequency,
                                           unlockedChapters: this.props.unlockedChapters,
                                           manpower: this.props.manpower,
                                           ammunition: this.props.ammunition,
                                           ration: this.props.ration,
                                           parts: this.props.parts,
                                           tDollContract: this.props.tDollContract,
                                           equipmentContract: this.props.equipmentContract,
                                           quickProductionContract: this.props.quickProductionContract,
                                           quickRepairContract: this.props.quickRepairContract,
                                           token: this.props.token
                                       }
    );

    sortResults = () => (a, b) => {
        let comparison = 0;
        switch (this.props.resultsOrderBy) {
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
        return 'asc' === this.props.resultsOrder ? comparison : -1 * comparison;
    };

    handleResultsSort = header => () => {
        this.props.setResultsOrder(this.props.resultsOrderBy === header && this.props.resultsOrder === 'desc' ? 'asc' : 'desc');
        this.props.setResultsOrderBy(header);
    };

    getHeaderCell = () => header =>
        <TableCell key={header}
                   align="right"
                   sortDirection={this.props.resultsOrderBy === header ? this.props.resultsOrder : false}>
            <TableSortLabel active={this.props.resultsOrderBy === header}
                            direction={this.props.resultsOrderBy === header ? this.props.resultsOrder : 'desc'}
                            onClick={this.handleResultsSort(header)}>
                {header}
            </TableSortLabel>
        </TableCell>;

    getResultRow = () => mission => (
        <TableRow key={mission.chapter + '-' + mission.mission}>
            <TableCell component="th" scope="row">{mission.chapter}-{mission.mission}</TableCell>
            <TableCell align="right">{mission.runs}</TableCell>
            <TableCell align="right">{mission.rewards.resources.manpower}</TableCell>
            <TableCell align="right">{mission.rewards.resources.ammunition}</TableCell>
            <TableCell align="right">{mission.rewards.resources.ration}</TableCell>
            <TableCell align="right">{mission.rewards.resources.parts}</TableCell>
            <TableCell align="right">{mission.value}</TableCell>
        </TableRow>
    );

    render() {
        return (
            <TableContainer
                className={this.props.classes.results}
                component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>{strings.results.headers.mission}</TableCell>
                            {this.headers()
                                 .map(this.getHeaderCell())}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.calculateResults()
                             .sort(this.sortResults())
                             .map(this.getResultRow())}
                    </TableBody>
                </Table>
            </TableContainer>);
    }

}
