use hotel_bookings;

db.bookings.insertMany([
    {
        name: "Smith",
        email: "smith@gmail.com",
        checkedIn: false
    },
    {
        name: "Johnson",
        email: "johnson@gmail.com",
        checkedIn: true
    },
    {
        name: "Beckham",
        email: "beckham@gmail.com",
        checkedIn: false
    },
]);