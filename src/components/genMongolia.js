export const genWeekDay = (value) => {
    switch (value) {
        case 'Sun':
            return 'Ням';
        case 'Mon':
            return 'Дав';
        case 'Tue':
            return 'Мяг';
        case 'Wed':
            return 'Лха';
        case 'Thur':
            return 'Пүр';
        case 'Fri':
            return 'Баа';
        case 'Sat':
            return 'Бям';
        case 'Sunday':
            return 'Ням';
        case 'Monday':
            return 'Даваа';
        case 'Tuesday':
            return 'Мягмар';
        case 'Wednesday':
            return 'Лхагва';
        case 'Thursday':
            return 'Пүрэв';
        case 'Friday':
            return 'Баасан';
        case 'Saturdday':
            return 'Бямба';
        default:
            return value;
    }
};

export const weatherDesc = (value) => {
    console.log(value);
    switch (value.toLowerCase()) {
        case 'thunderstorm with light rain':
        case 'thunderstorm with rain':
        case 'thunderstorm with heavy rain':
        case 'light thunderstorm':
        case 'thunderstorm':
        case 'heavy thunderstorm':
        case 'ragged thunderstorm':
        case 'thunderstorm with light drizzle':
        case 'thunderstorm with drizzle':
        case 'thunderstorm with heavy drizzle':
            return 'Дуу цахилгаантай бороо';

        case 'light intensity drizzle':
        case 'drizzle':
        case 'heavy intensity drizzle':
        case 'light intensity drizzle rain':
        case 'drizzle rain':
        case 'heavy intensity drizzle rain':
        case 'shower rain and drizzle':
        case 'heavy shower rain and drizzle':
        case 'shower drizzle':
            return 'Шиврээ бороо';

        case 'light rain':
        case 'rain':
        case 'moderate rain':
        case 'heavy intensity rain':
        case 'very heavy rain':
        case 'extreme rain':
        case 'freezing rain':
        case 'light intensity shower rain':
        case 'shower rain':
        case 'heavy intensity shower rain':
        case 'ragged shower rain':
            return 'Бороо';

        case 'light snow':
        case 'snow':
        case 'heavy snow':
        case 'sleet':
        case 'light shower sleet':
        case 'shower sleet':
        case 'light rain and snow':
        case 'rain and snow':
        case 'light shower snow':
        case 'shower snow':
        case 'heavy shower snow':
            return 'Цастай';
        case 'mist':
        case 'smoke':
            return 'Утаатай';
        case 'haze':
        case 'sand/dust whirls':
        case 'fog':
            return 'Манантай';
        case 'sand':
        case 'dust':
            return 'Тоостой';
        case 'volcanic ash':
        case 'squalls':
        case 'tornado':
            return 'Хуй салхи';
        case 'clear':
        case 'clear sky':
            return 'Цэлмэг';
        case 'few clouds: 11-25%':
        case 'scattered clouds: 25-50%':
        case 'broken clouds: 51-84%':
        case 'overcast clouds: 85-100%':
            return 'Үүлэрхэг';
        default:
            return 'Бусад нөхцөл';
    }
};

export const toMon = (value) => {
    var array = value.split(',');

    return genWeekDay(array[0]) + ', ' + array[1];
};
