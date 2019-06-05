import React from 'react'
import { Card } from 'antd';

class Info extends React.Component {
    state = {
        loading: false,
        citiesInfo: undefined
    }

    async componentDidMount() {
        if (this.props.followed) {
            this.getData(this.props.followed);
        }
    }

    getData = followed => {
        const citiesInfo = [];
        this.setState({ loading: true })
        followed.map( async id => {
            const response = await fetch(`https://cors.io/?https://openweathermap.org/data/2.5/weather?id=${id}&appid=b6907d289e10d714a6e88b30761fae22`);
            const data = await response.json();
            citiesInfo.push(data);
        })
        this.setState({citiesInfo, loading: false})
    }
    render() {
        console.log(this.state.citiesInfo)
        const { citiesInfo } = this.state
        return(
            <div style={{display: 'flex'}}>
                {
                    (citiesInfo && this.state.loading === false) ?
                    citiesInfo.map((city, i) => {
                        return (<Card key={i} style={{ width: 300, margin: '5px' }} title={city.name}>
                                    <p>Temperatura: {city.main.temp}</p>
                                    <p>Wilgotność: {city.main.humidity}</p>
                                </Card>
                        )
                    })
                    :
                    <h3>Select follow city</h3>
                    }
            </div>
        )
    }
}

export default Info