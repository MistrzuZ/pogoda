import React from 'react';
import { Select } from 'antd';
import Cities from './list.json';

const { Option } = Select;

class City extends React.PureComponent {
    constructor() {
        super()
        this.state = {
            followedCities: undefined
        }
        this.cities = [];
    }

    componentWillMount() {
        console.log(new Date());
        this.cities = Cities.map((city, i) => {
            if (city.country === "PL" && i < 1000) {
                return <Option key={city.id}>{city.name}</Option>
            }
            return null;
        });
    }

    // followCities = value => followCities => {
    //     this.props({followCities: value})
    //     console.log(this.state.followCities)
    //     this.props.handleChange(value)
    // }

    // async componentDidMount() {
    //     this.getData();
    // }

    // getData = async () => {
    //     const response = await fetch('https://cors.io/?http://bulk.openweathermap.org/sample/city.list.json.gz');
    //     const data = await response.json();
    //     console.log(data);
    // }

    render() {
        return(
            <div>
                <h3>Follow your favorite city:</h3>
                <Select ref='test' value={this.props.followed} mode="tags" style={{ width: '100%' }} placeholder="Tags Mode" onChange={this.props.handleChange('followedCities')}>
                    {this.cities}
                </Select>
            </div>
        )
    }
}

export default City