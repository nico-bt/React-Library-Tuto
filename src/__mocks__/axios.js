const mockResponse = {
    data: {
        results: [
            { 
                name: {first: "Juan", last: "Random"},
                picture: { large: "https://randomuser.me/api/portraits/men/59.jpg"},
                login: { username: "TheRandomJuan"}
            },
            { 
                name: {first: "Juan2", last: "Random1"},
                picture: { large: "https://randomuser.me/api/portraits/men/59.jpg"},
                login: { username: "TheRandomJuan"}
            },
            { 
                name: {first: "Juan3", last: "Random2"},
                picture: { large: "https://randomuser.me/api/portraits/men/59.jpg"},
                login: { username: "TheRandomJuan"}
            },
            { 
                name: {first: "Juan4", last: "Random3"},
                picture: { large: "https://randomuser.me/api/portraits/men/59.jpg"},
                login: { username: "TheRandomJuan"}
            },
            { 
                name: {first: "Juan5", last: "Random4"},
                picture: { large: "https://randomuser.me/api/portraits/men/59.jpg"},
                login: { username: "TheRandomJuan"}
            }
        ]
    }
}

export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}