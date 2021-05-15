module.exports = {
    date(timestamps) {
        const date = new Date(timestamps)

        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)

        return {
            day,
            month,
            year,
            iso: `${year}-${month}-${day}`,
            birthday: `${day}/${month}`,
            format: `${day}/${month}/${year }`
        }
    }
}