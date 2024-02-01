import NextAuth from "next-auth";
import {authOptions} from "@/app/lib/auth/auth";

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};

// export default NextAuth({
//     providers: [
//         CredentialsProvider({
//             name: "Credentials",
//             credentials: {
//                 username: {label: "Username", type: "text", placeholder: "jsmith"},
//                 password: {label: "Password", type: "password"}
//             },
//             async authorize(credentials, req) {
//                 const user = {id: "1", name: "J Smith", email: "jsmith@example.com"}
//
//                 if (user) {
//                     return user;
//                 } else {
//                     return null;
//                 }
//             }
//         })
//     ]
// })
