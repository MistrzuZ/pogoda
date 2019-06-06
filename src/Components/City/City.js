import React from 'react';
import { Select, Checkbox, Row, Col } from 'antd';
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
        this.cities = Cities.map((city, i) => {
            if (city.country === "PL" && i < 10000) {
                // return <Option key={city.id}>{city.name}</Option>
                return <Col key={i} span={8}><Checkbox value={city.id}>{city.name}</Checkbox></Col>
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
        // return(
        //     <div>
        //         <h3>Follow your favorite city:</h3>
        //         <Select mode="multiple" value={this.props.followed} style={{ width: '100%' }} placeholder="Select your city" onChange={this.props.handleChange('followedCities')}>
        //             {this.cities}
        //         </Select>
        //     </div>
        // )
        return(
            <Checkbox.Group style={{ width: '100%' }} onChange={this.props.handleChange('followedCities')}>
                <h3>Follow your favorite city:</h3>
                {this.props.match.url}
                <Row>
                    {this.cities}
                </Row>
            </Checkbox.Group>
        )
    }
}

export default City