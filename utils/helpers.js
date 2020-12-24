module.exports = {

    // sets default value for 'event_date' to Christmas Day of the current year
    current_year: year => {
        let date = String(new Date())
        const thisYear = date.split(' ');
        const thisXmas = thisYear[3]+'-12-25'

        return thisXmas
    }
}