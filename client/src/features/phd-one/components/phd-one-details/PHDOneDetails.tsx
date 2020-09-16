import * as React from "react";
import { IPHDOneDetailsProps } from "./types/IPHDOneDetailsProps";
import "./phd-one-details.css";
import "semantic-ui-css/semantic.min.css";
import { Dropdown, Form } from "semantic-ui-react";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import { get } from "lodash";
import { string } from "prop-types";
import { SeatLayout } from "../../../seat-layout/components/SeatLayout";

export class userMainPage extends React.PureComponent<
  IPHDOneDetailsProps,
  {}
> {
  public state = {
    buildingsList: [],
    floorsList: [],
    location: "",
    selectedBuilding: string,
    selectedFloor: string
  };

  public componentDidMount() {
    this.props.fetchLocationDetails();
  }

  public render() {
    return (
      <div className="phd-one-details">
        <Form className="user-page__form">
          <p className="user-page__text">
            {" "}
            <b>Smart Solution For Work Space Management</b>
          </p>
          <Form.Group>
            <Form.Dropdown
              className={"location-dropdown"}
              placeholder="Search for location"
              fluid
              multiple={false}
              search
              selection
              options={this.props.locationsData}
              clearable
              defaultValue={false}
              noResultsMessage={null}
              onChange={this.handleChange}
            />
            <Form.Dropdown
              className={"location-dropdown"}
              placeholder="Select Building"
              fluid
              search
              selection
              multiple={false}
              options={this.state.buildingsList}
              clearable
              defaultValue={false}
              noResultsMessage={null}
              onChange={this.handleBuildingsListChange}
            />
            <Form.Dropdown
              className={"location-dropdown"}
              placeholder="Select Floor"
              fluid
              search
              selection
              multiple={false}
              options={this.state.floorsList}
              clearable
              defaultValue={false}
              noResultsMessage={null}
              onChange={this.handleFloorChange}
            />
            <DateRangePicker
              initialSettings={{
                startDate: "01/01/2020",
                endDate: "01/15/2020",
              }}
            >
              <input type="text" className="form-control col-4 user-page__date-picker" />
            </DateRangePicker>
            <Form.Button className="find-button">Find</Form.Button>
          </Form.Group>
        </Form>
        <div className='layout'>
          <SeatLayout />
        </div>
      </div>
    );
  }

  private handleChange = (e: any, { value }: any) => {
    this.setState({ location: value });
    const locationData = this.props.locationsData.find(
      (data: any) => data.name === value
    );
    if (locationData) {
      locationData.buildings.forEach((item: any) => {
        item.text = item.name;
        item.value = item.name;
      });
      this.setState({
        buildingsList: locationData.buildings,
      });
    }
  };

  private handleBuildingsListChange = (e: any, { value }: any) => {
    this.setState({
      selectedBuilding: value
    })
    const buildingsList = this.state.buildingsList.find(
      (data: any) => data.name === value
    );
      get(buildingsList,'floors', []).forEach((item: any) => {
        item.text = item.name;
        item.value = item.name;
      });
      this.setState({
        floorsList: get(buildingsList,'floors', []),
      });
  };

  private handleFloorChange = (e: any, { value }: any) => {
    this.setState({
      selectedFloor: value
    })
  }

    /**
     * Function to fetch the layout Data
     */
    private getTheLayoutdata = () => {
        this.props.fetchLayoutData({
          location: this.state.location,
          building: this.state.selectedBuilding,
          floor: this.state.selectedFloor
        });
    };
}
