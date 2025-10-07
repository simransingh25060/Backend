class ApiResponse {
    constructor(statusCode, data, message= "Success"){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400

    }
}

//statusCode:
//informational(100-199)
//success(200-299)
//redirection(300-399)
//client error(400-499)
//server error(500-599)


