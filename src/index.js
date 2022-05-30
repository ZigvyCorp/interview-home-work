const express = require('express');
const methodOverride = require('method-override')
const handlebars = require('express-handlebars');
const path = require('path');
const router = require('./routers');
const sortMiddleware = require('./app/middlewares/SortMiddleware');
const db = require('./config/db');
// connect database
db.connect();
const app = express();
const port = 3000;
// set path public
app.use(express.static(path.join(__dirname, '/public')));
// middleware
// submit data form body-parser version 4.16 trở lên được tích hơp, dưới 4.16 phải cài đặt
app.use(
    express.urlencoded({
        extended: true,
    }),
);
// submit by javascript code
app.use(express.json());
app.use(methodOverride('_method'));
//template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
            sortable: (field, sort) => {
                const sortType = field === sort.column ? sort.type : 'default';
                const icons = {
                    default: 'oi oi-elevator',
                    asc: 'oi oi-sort-ascending',
                    desc: 'oi oi-sort-descending'
                };
                const types = {
                    default: 'desc',
                    asc: 'desc',
                    desc: 'asc'
                }
                const icon = icons[sortType];
                const type = types[sortType];
                return `<a href="?_sort&column=${field}&type=${type}">
                            <span class="${icon}"></span>
                        </a>  `
            },
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));
//custom middleware
app.use(sortMiddleware);
// router init
router(app);

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
