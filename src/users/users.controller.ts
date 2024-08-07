import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Get() //GET /users
    findAll(@Query('role') role?: "INTERN" | "ADMIN" | "ENGINEER") {
        return "In users get";
    }

    @Get(":id") //GET /users/:id 
    findOne(@Param("id") id: string) {
        return { id }
    }

    @Post() //Post /users
    create(@Body() user: {}) {
        console.log(user);
        return user;
    }


    @Patch(":id") //UPDATE /users/:id 
    update(@Param("id") id: string, @Body() userUpdate: {}) {
        return { id, ...userUpdate };
    }

    @Delete(":id") //DELETE /users/:id
    delete(@Param("id") id: string) {
        return { message: `User ${id} deleted successfully.` };
    }
}
