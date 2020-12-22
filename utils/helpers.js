module.exports = {

    current_year: year => {
        let date = String(new Date())
        console.log('DATE: ', date)
        
        const thisYear = date.split(' ');
        console.log('THISYear: ', thisYear)
        console.log('THISYEAR: ', thisYear[3])

        // const thisXmas = '"'+thisYear[3]+'-12-25"'
        const thisXmas = thisYear[3]+'-12-25'
        console.log('THISXmas: ', thisXmas)

        return thisXmas
    }
}