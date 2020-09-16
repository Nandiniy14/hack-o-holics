import { IPHDDetails } from '../../types/IPHDDetails';
import { PACKAGE } from '../constants';
import { NAME } from './constants';

export const FETCH_PHD_ONE_DETAILS_STARTED = `${PACKAGE}/${NAME}/FETCH_PHD_ONE_DETAILS_STARTED`;
export const FETCH_PHD_ONE_DETAILS_SUCCEEDED = `${PACKAGE}/${NAME}/FETCH_PHD_ONE_DETAILS_SUCCEEDED`;
export const FETCH_PHD_ONE_DETAILS_FAILED = `${PACKAGE}/${NAME}/FETCH_PHD_ONE_DETAILS_FAILED`;
export const FETCH_LOCATION_DETAILS_STARTED = `${PACKAGE}/${NAME}/FETCH_LOCATION_DETAILS_STARTED`;
export const FETCH_LOCATION_DETAILS_SUCCEEDED = `${PACKAGE}/${NAME}/FETCH_LOCATION_DETAILS_SUCCEEDED`;
export const FETCH_LOCATION_DETAILS_FAILED = `${PACKAGE}/${NAME}/FETCH_LOCATION_DETAILS_FAILED`;

export const FETCH_LAYOUT_DATA_STARTED = `${PACKAGE}/${NAME}/FETCH_LAYOUT_DATA_STARTED`;

export const fetchPHDOneDetailsStarted = () => ({
    type: FETCH_PHD_ONE_DETAILS_STARTED
});

export const fetchPHDOneDetailsSucceeded = (data: IPHDDetails) => ({
    payload: data,
    type: FETCH_PHD_ONE_DETAILS_SUCCEEDED
});

export const fetchPHDOneDetailsFailed = () => ({
    type: FETCH_PHD_ONE_DETAILS_FAILED
});

export const fetchLocationDetailsStarted = () => ({
    type: FETCH_LOCATION_DETAILS_STARTED
})

export const fetchLocationDetailsSucceeded = (data: any) => ({
    payload: data,
    type: FETCH_LOCATION_DETAILS_SUCCEEDED
})
export const fetchLocationDetailsFailed = () => ({
    type: FETCH_LOCATION_DETAILS_FAILED
})

export const fetchLayoutDataStarted = (data: any) => ({
    payload: data,
    type: FETCH_LAYOUT_DATA_STARTED
})