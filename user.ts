import * as bcrypt from 'bcrypt';

export class User {
    private user: { name: string; password: string, isCarDealer?: boolean};
    private userList: { name: string; password: string }[] = [];

    constructor(name: string, password: string, isCarDealer?: boolean) {
        this.user = { name, password, isCarDealer };
    }

    register(newUser: { name: string; password: string}): void {
        const encryptedPassword = this.encryptPassword(newUser.password);
        const user = { name: newUser.name, password: encryptedPassword, isCarDealer: false};
        this.userList.push(user);
    }

    setCarDealer(): void {
        this.user.isCarDealer = true;
    }

    encryptPassword(password: string): string {
        const saltRounds = 10;
        const hashedPassword = bcrypt.hashSync(password, saltRounds);
        return hashedPassword;
    }

    getUserList(): { name: string; password: string }[] {
        return this.userList;
    }

    searchUser(username: string): string | void {
        const user = this.userList.find(user => user.name === username);
        if (user) {
            return user.name;
        }
    }
    
    connectUser(username: string, password: string): string {
        const user = this.userList.find(user => user.name === username);
        if (user) {
            const isPasswordCorrect = bcrypt.compareSync(password, user.password);
            if (isPasswordCorrect) {
                return 'Connected';
            } else {
                return 'Wrong password';
            }
        }
        return 'User not found';
    }

}