Code that needs to be created is as follows:

Collection for Salons

Salon: {
    name: "salon name",
    staff: {{
        name: "staff name",
        availability: {
            day: {mon: [9, 10, 11, 12, 1, 2, 3, 4],
                    tues: [9, 10, 11, 12, 1, 2, 3, 4],
                    wed: [9, 10, 11, 12, 1, 2, 3, 4],
                    thurs: [9, 10, 11, 12, 1, 2, 3, 4], 
                    fri: [9, 10, 11, 12, 1, 2, 3, 4]
                }
            }
        },{
        name: "staff name",
        availability: {
            day: {mon: [9, 10, 11, 12, 1, 2, 3, 4],
                    tues: [9, 10, 11, 12, 1, 2, 3, 4],
                    wed: [9, 10, 11, 12, 1, 2, 3, 4],
                    thurs: [9, 10, 11, 12, 1, 2, 3, 4], 
                    fri: [9, 10, 11, 12, 1, 2, 3, 4]
                }
            }
        },{
        name: "staff name",
        availability: {
            day: {mon: [9, 10, 11, 12, 1, 2, 3, 4],
                    tues: [9, 10, 11, 12, 1, 2, 3, 4],
                    wed: [9, 10, 11, 12, 1, 2, 3, 4],
                    thurs: [9, 10, 11, 12, 1, 2, 3, 4], 
                    fri: [9, 10, 11, 12, 1, 2, 3, 4]
                }
            }
        },{
        name: "staff name",
        availability: {
            day: {mon: [9, 10, 11, 12, 1, 2, 3, 4],
                    tues: [9, 10, 11, 12, 1, 2, 3, 4],
                    wed: [9, 10, 11, 12, 1, 2, 3, 4],
                    thurs: [9, 10, 11, 12, 1, 2, 3, 4], 
                    fri: [9, 10, 11, 12, 1, 2, 3, 4]
                }
            }
        },
    }
}

Collection for users:

Users: {
    {
        username: "username",
        phone: "phone",
        email: "email",
        name: "name",
        password: "authenticated"
    },{
        username: "username",
        phone: "phone",
        email: "email",
        name: "name",
        password: "authenticated"
    },{
        username: "username",
        phone: "phone",
        email: "email",
        name: "name",
        password: "authenticated"
    }
}


Collection for Bookings:

Booking: {
    username: {
        time: "time",
        date: "date",
        salon: "salon"
        staff: "staff"
    },
    username: {
        time: "time",
        date: "date",
        salon: "salon"
        staff: "staff"
    },
    username: {
        time: "time",
        date: "date",
        salon: "salon"
        staff: "staff"
    },
}