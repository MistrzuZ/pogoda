import React from 'react'
import { Card } from 'antd';

class Info extends React.Component {
    state = {
        loading: false,
        citiesInfo: undefined
    }

    async componentDidMount() {
        if (this.props.followed) {
            this.getData()
            setInterval(this.getData, 60000)
        }
    }

    getData = async () => {
        const followed = this.props.followed
        const response = await fetch(`https://api.openweathermap.org/data/2.5/group?id=${followed}&units=metric&appid=c8dcba9ce84fd9fb41e9b6b88061ed68`)
        const data = await response.json()
        this.setState({ citiesInfo: data.list })
        console.log(this.state.citiesInfo)
    }

    render() {
        const { citiesInfo } = this.state
        return(
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {
                    (citiesInfo) ?
                    citiesInfo.map((city, i) => {
                        return (<Card key={i} style={{ width: 300, margin: '5px' }} title={city.name}>
                                    <p>Temperatura: {city.main.temp}</p>
                                    <p>Wilgotność: {city.main.humidity}</p>
                                </Card>
                        )
                    })
                    : <h3>First please follow some city!</h3>
                    }
            </div>
        )
    }
}

export default Info