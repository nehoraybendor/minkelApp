const express = require("express");
const path = require("path");
const http = require("http");
const cors = require("cors");
const { initializeApp } = require('firebase-admin/app');
const cred = require('./cred.json');
const { routesInit, mainRouter } = require("./src/routers/configRoutes")
const { initDB } = require("./src/db/mongoConnect")


var admin = require("firebase-admin");
const fb = initializeApp({
    credential: admin.credential.cert(cred)
});

initDB()
const app = express();
// מאפשר גם לדומיין שלא קשור לשרת לבצע בקשה 
app.use(cors());
// מגדיר לשרת שהוא יכול לקבל מידע מסוג ג'ייסון בבאדי בבקשות שהם לא גט
app.use(express.json());



// דואג שתקיית פאבליק כל הקבצים בה יהיו חשופים לצד לקוח
app.use(express.static(path.join(__dirname, "public")));

// פונקציה שמגדירה את כל הראוטים הזמנים באפליקציית
// צד שרת שלנו
routesInit(app);

app.use(mainRouter)

// הגדרת שרת עם יכולות אפ שמייצג את האקספרס
const server = http.createServer(app);
// משתנה שיגדיר על איזה פורט אנחנו נעבוד
// אנסה לבדוק אם אנחנו על שרת אמיתי ויאסוף את הפורט משם אם לא ואנחנו לוקאלי יעבוד על 3002
let port = process.env.PORT || 8595;
// הפעלת השרת והאזנה לפורט המבוקש
server.listen(port, () => {
    console.log("listening on port " + port);
});

