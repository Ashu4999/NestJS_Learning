import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Get() //GET /users
    findAll(@Query('role') role?: "INTERN" | "ADMIN" | "ENGINEER") {
        return this.userService.findAll(role);
    }

    @Get(":id") //GET /users/:id 
    findOne(@Param("id") id: string) {
        return this.userService.findOne(+id);
    }

    @Post() //Post /users
    create(@Body() user: { name: string, email: string, role: "INTERN" | "ADMIN" | "ENGINEER" }) {
        return this.userService.create(user);
    }


    @Patch(":id") //UPDATE /users/:id 
    update(@Param("id") id: string, @Body() userUpdate: {}) {
        return this.userService.update(+id, userUpdate);
    }

    @Delete(":id") //DELETE /users/:id
    delete(@Param("id") id: string) {
        return this.userService.delete(+id);
    }
}
