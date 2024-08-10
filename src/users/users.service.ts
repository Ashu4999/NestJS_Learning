import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user-dto';

@Injectable()
export class UsersService {
    private users = [
        {
            "id": 1,
            "name": "Leanne Graham",
            "email": "Sincere@april.biz",
            "role": "INTERN",
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "email": "Shanna@melissa.tv",
            "role": "INTERN",
        },
        {
            "id": 3,
            "name": "Clementine Bauch",
            "email": "Nathan@yesenia.net",
            "role": "ENGINEER",
        },
        {
            "id": 4,
            "name": "Patricia Lebsack",
            "email": "Julianne.OConner@kory.org",
            "role": "ENGINEER",
        },
        {
            "id": 5,
            "name": "Chelsey Dietrich",
            "email": "Lucio_Hettinger@annie.ca",
            "role": "ADMIN",
        }
    ];

    findAll(role?: "INTERN" | "ADMIN" | "ENGINEER") {
        if (role) {
            let usersPerRole = this.users.filter(user => user.role === role);
            if (!usersPerRole.length)
                throw new NotFoundException("Users for given role are not found");
        }
        return this.users;
    }

    findOne(id: number) {
        const user = this.users.find(user => user.id === id);
        if (!user) 
            throw new NotFoundException("User Not Found");
        return user;
    }

    create(createUserDto: CreateUserDto) {
        const useByHighestId = [...this.users].sort((a, b) => a.id - b.id);
        const newUser = {
            id: useByHighestId[useByHighestId.length - 1] ? useByHighestId[useByHighestId.length - 1].id + 1 : 1,
            ...createUserDto
        }
        this.users.push(newUser);
        return newUser;
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        let updateUserIndex = this.users.findIndex(user => user.id === id);
        this.users[updateUserIndex] = { ...this.users[updateUserIndex], ...updateUserDto };
        return this.findOne(id);
    }

    delete(id: number) {
        const removedUser = this.findOne(id);

        this.users = this.users.filter(user => user.id !== id);
        return removedUser;
    }
}
