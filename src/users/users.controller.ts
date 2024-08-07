import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get() //GET /users
    findAll(@Query('role') role?: "INTERN" | "ADMIN" | "ENGINEER") {
        return this.usersService.findAll();
    }

    @Get(":id") //GET /users/:id 
    findOne(@Param("id") id: string) {
        return this.usersService.findOne(parseInt(id));
    }

    @Post() //Post /users
    create(@Body() user: { name: string, email: string, role: 'INTERN' | 'ENGINEER' | 'ADMIN' }) {
        return this.usersService.create(user);
    }

    @Patch(":id") //UPDATE /users/:id 
    update(@Param("id") id: string, @Body() userUpdate: { name?: string, email?: string, role?: 'INTERN' | 'ENGINEER' | 'ADMIN' }) {
        return this.usersService.update(parseInt(id), userUpdate);
    }

    @Delete(":id") //DELETE /users/:id
    delete(@Param("id") id: string) {
        return this.usersService.delete(parseInt(id));
    }
}
