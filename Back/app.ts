import express from "express";
import path from "path";
import http from "http";
import cors from "cors";
import { initializeApp } from 'firebase-admin/app';
import cred from './cred.json';
import { mainRouter } from "./src/routers/configRoutes"
import { initDB } from "./src/db/mongoConnect"
import admin from 'firebase-admin'
import dotenv from 'dotenv'
import { mainErrorHandler } from './src/middlewares/Errors/errorHandler'
dotenv.config()
const fb = initializeApp({
    credential: admin.credential.cert((cred as any))
});

initDB()
const app = express();
// מאפשר גם לדומיין שלא קשור לשרת לבצע בקשה 
app.use(cors());
// מגדיר לשרת שהוא יכול לקבל מידע מסוג ג'ייסון בבאדי בבקשות שהם לא גט
app.use(express.json());




// דואג שתקיית פאבליק כל הקבצים בה יהיו חשופים לצד לקוח
app.use(express.static(path.join(__dirname, "public")));



app.use(mainRouter)
app.use(mainErrorHandler)

// הגדרת שרת עם יכולות אפ שמייצג את האקספרס
const server = http.createServer(app);
// משתנה שיגדיר על איזה פורט אנחנו נעבוד
// אנסה לבדוק אם אנחנו על שרת אמיתי ויאסוף את הפורט משם אם לא ואנחנו לוקאלי יעבוד על 3002
let port = process.env.PORT || 8595;
// הפעלת השרת והאזנה לפורט המבוקש
server.listen(port, () => {
    console.log("listening on port " + port);
});

