//window seat number positions
// considering 5 seats in a row splitted by 3 2
const windowSeatArr = [
    1, 4, 6, 9, 11, 14, 16, 19, 21, 24, 26, 29, 31, 34, 36, 39
]
export const ticketListGenerator = (numberOfSeat = 40, randomCloseSeat = false) => {
    let ticketList = [];
    for (let i = 1; i <= numberOfSeat; i++) {
        let bookedStatus = randomCloseSeat ? generateRandomBoolean() : false
        ticketList.push({
            id: i,
            status: bookedStatus,
            isWindowSeat: windowSeatArr.includes(i),
            userDetails: {
                name: "",
                age: "",
                gender: "",
                proofID: "",
                proofNO: "",
                additionalInfo: {}
            }
        })
    }
    return ticketList
}

const generateRandomBoolean = (i) => {
    return Math.ceil(Math.random() * 10) % 2 === 0;
}