import { connect } from 'react-redux';
import { navigate } from '../../../../shared/actions';
import { userMainPage } from './PHDOneDetails';
import { IPHDOneDetailsDataProps } from './types/IPHDOneDetailsDataProps';
import { IPHDOneDetailsDispatchProps } from './types/IPHDOneDetailsDispatchProps';
import * as data from '../../../../data';

const mapStateToProps = (state: object): IPHDOneDetailsDataProps => ({
    eventData: data.phdOneDetails.selectors.getPHDOneDetails(state),
    locationsData: data.phdOneDetails.selectors.getLocationDetails(state)
});

const mapDispatchToProps: IPHDOneDetailsDispatchProps = {
    fetchPHDOneDetails: data.phdOneDetails.actions.fetchPHDOneDetailsStarted,
    fetchLocationDetails: data.phdOneDetails.actions.fetchLocationDetailsStarted,
    fetchLayoutData: data.phdOneDetails.actions.fetchLayoutDataStarted,
    onNavigate: navigate
};

export const PHDOneDetailsContainer = connect<
    IPHDOneDetailsDataProps,
    IPHDOneDetailsDispatchProps
>(mapStateToProps, mapDispatchToProps)(userMainPage);
