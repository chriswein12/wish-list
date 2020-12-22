module.exports = {

    current_year: year => {
        let current_year = this.wishlists.createdAt.split('-');
        console.log('current_year: ', current_year)
        
        const thisYear = current_year[0]
        console.log('thisYear: ', thisYear)

        const thisXmas = thisYear+'-12-25'
        console.log('thisXmas: ', thisXmas)

        return thisXmas
    }
}