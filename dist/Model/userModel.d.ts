import mongoose from "mongoose";
declare const UserModel: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    id: string;
    name: string;
    password: string;
    email: string;
    role: "admin" | "teacher" | "student";
    avatar: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    id: string;
    name: string;
    password: string;
    email: string;
    role: "admin" | "teacher" | "student";
    avatar: string;
}, {}, {
    timestamps: true;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    id: string;
    name: string;
    password: string;
    email: string;
    role: "admin" | "teacher" | "student";
    avatar: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    id: string;
    name: string;
    password: string;
    email: string;
    role: "admin" | "teacher" | "student";
    avatar: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    id: string;
    name: string;
    password: string;
    email: string;
    role: "admin" | "teacher" | "student";
    avatar: string;
}>, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    id: string;
    name: string;
    password: string;
    email: string;
    role: "admin" | "teacher" | "student";
    avatar: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default UserModel;
//# sourceMappingURL=userModel.d.ts.map