<template>
  
    <div>

        <div class="container-fluid">

            <h1 class="mt-4">This is {{ title }} page</h1>

            <div class="card bg-info text-white">
                <div class="card-header text-center">
                    <h1>Weather of {{ weather.name }}</h1>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-4">
                            <h4>Temperature</h4>
                            <p><img :src="icon" alt="weather icon"></p>
                            <h1>{{ getTemperature() }} &#8451;</h1>
                            <span>{{ weather.weather[0].description }}</span>
                        </div>
                        <div class="col-md-4">
                            <h4>Wind & Pressure</h4>
                            <h3>Wind: {{ weather.wind.speed }} m/s ({{ weather.wind.deg }} &#8451;)</h3>
                            <h3>Humidity: {{ weather.main.humidity }} %</h3>
                            <h3>Pressure: {{ weather.main.pressure }} hpa</h3>
                        </div>
                        <div class="col-md-4">
                            <h4>Other</h4>
                            <h3>Max Temperature: {{ getMaxTemperature() }} &#8451;</h3>
                            <h3>Min Temperature: {{ getMinTemperature() }} &#8451;</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <form @submit.prevent="getWeatherInfo()">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="city"><h4>Enter City Name:</h4></label>
                                <input type="text" class="form-control" id="city" v-model="city">
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </div>

    </div>

</template>

<script>

export default {
    head() {
        return {
            title: 'Weather',
            meta: [
                { charset: 'utf-8' },
                {
                    hid: 'description',
                    name: 'description',
                    content: 'My Amazing Weather Page'
                }
            ],
        }
    },
    data() {
        return {
            title: 'Weather',
            city: 'London',
            weather: {}
        }
    },
    computed: {
        icon() {
            return this.weather.weather ? `https://openweathermap.org/img/w/${this.weather.weather[0].icon}.png` : ''
        }
    },
    // it works before loading the component
    asyncData({params, $axios, store}) {
        var url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${process.env.WEATHER_APP_ID}`
        return $axios.$get(url)
                .then(res => {
                    return { weather: res }
                })
                .catch((e) => {
                    error({ statusCode: 404, message: 'Weather not found!' })
                })
    },
    created() {
        this.getWeatherInfo()
    },
    methods: {
        getWeatherInfo() {
            var url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${process.env.WEATHER_APP_ID}`
            this.$axios.$get(url).then(res => (this.weather = res))
        },
        getTemperature() {
            return Math.round(this.weather.main.temp - 273)
        },
        getMaxTemperature() {
            return Math.round(this.weather.main.temp_max - 273)
        },
        getMinTemperature() {
            return Math.round(this.weather.main.temp_min - 273)
        }
    }
}

</script>

<style>

</style>
