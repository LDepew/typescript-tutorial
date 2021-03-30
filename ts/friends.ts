class Friend {
    name: string;
    age: number;
    email: string;
    bff: boolean;

    constructor(name: string, age: number, email: string, bff: boolean = false) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.bff = bff;
    }

    print(): void {
        console.log('${this.name} | ${this.age} | ${this.email} |${this.bff}');
    }
}


let friends: Friend[] = [];

friends.push(new Friend("George", 238, "geo@washington.com", true));
friends.push(new Friend("Tom", 237, "tom@jefferson.com"));
friends.push(new Friend("Abe", 236, "abe@lincoln.com"));
friends.push(new Friend("Ronny", 104, "ronny@reagan.com"));
friends.push(new Friend("Billy", 83, "billy@clinton.com"));
for (let friend of friends) {
    friend.print();
}