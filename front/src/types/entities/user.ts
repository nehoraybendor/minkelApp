export interface userInDB {
    uid: string;
    age: number;
    gender: string;

}
export interface createUserResponse extends userInDB {
    date_created: string;
}
