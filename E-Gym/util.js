module.exports = {
    age: function(timestamp) {
        const today = new Date()
        const birthDay = new Date(timestamp)

        let age = today.getFullYear() - birthDay.getFullYear()
        const month = today.getMonth() - birthDay.getMonth()

        today.getDate()
        birthDay.getDate()
        if(month > 0 || month == 0 || today && today.getDate() <= birthDay.getDate()) {
            age = age - 1
        }
        return age
    }
}