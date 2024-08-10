import { Injectable } from '@nestjs/common';

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
            return this.users.filter(user => user.role === role);
        }
        return this.users;
    }

    findOne(id: number) {
        const user = this.users.find(user => user.id === id);
        return user;
    }

    create(user: { name: string, email: string, role: "INTERN" | "ADMIN" | "ENGINEER" }) {
        const useByHighestId = [...this.users].sort((a, b) => a.id - b.id);
        const newUser = {
            id: useByHighestId[useByHighestId.length - 1] ? useByHighestId[useByHighestId.length - 1].id + 1 : 1,
            ...user
        }
        this.users.push(newUser);
        return newUser;
    }

    update(id: number, updatedUser: { name?: string, email?: string, role?: "INTERN" | "ADMIN" | "ENGINEER" }) {
        let updateUserIndex = this.users.findIndex(user => user.id === id);
        this.users[updateUserIndex] = { ...this.users[updateUserIndex], ...updatedUser };
        return this.findOne(id);
    }

    delete(id: number) {
        const removedUser = this.findOne(id);

        this.users = this.users.filter(user => user.id !== id);
        return removedUser;
    }
}
