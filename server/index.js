import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
// Routers
import studentRoutes from './routes/student.js'

const app = express();

app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));

app.use(cors());
app.use('/students', studentRoutes);

const CONNECTION_URL = "mongodb+srv://aagusfernandez02:44006022@alumnos.iqojy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        //useFindAndModify: false
    }).then(() => app.listen(PORT, () => console.log(`Conexión establecida y ejecutándose en el puerto: ${PORT}`)))
    .catch((err) => console.log(err.message))