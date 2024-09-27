import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateData1727346663426 implements MigrationInterface {
  name = 'CreateData1727346663426';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "comments" (
                "id" SERIAL NOT NULL,
                "body" text NOT NULL,
                "type" character varying(20) NOT NULL DEFAULT 'comment',
                "user_id" integer,
                "post_id" integer,
                "created_at" TIMESTAMP DEFAULT now(),
                "created_by" bigint,
                "updated_at" TIMESTAMP DEFAULT now(),
                "updated_by" bigint,
                "deleted_at" TIMESTAMP,
                "deleted_by" bigint,
                CONSTRAINT "comment_pkey" PRIMARY KEY ("id")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "posts" (
                "id" SERIAL NOT NULL,
                "title" character varying(255) NOT NULL,
                "body" text NOT NULL,
                "user_id" integer,
                "created_at" TIMESTAMP DEFAULT now(),
                "created_by" bigint,
                "updated_at" TIMESTAMP DEFAULT now(),
                "updated_by" bigint,
                "deleted_at" TIMESTAMP,
                "deleted_by" bigint,
                CONSTRAINT "post_pkey" PRIMARY KEY ("id")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "users" (
                "id" SERIAL NOT NULL,
                "name" character varying(30) NOT NULL,
                "username" character varying(30) NOT NULL,
                "email" character varying(50) NOT NULL,
                "password" character varying(100) NOT NULL,
                "address" json NOT NULL,
                "phone" character varying(30) NOT NULL,
                "website" character varying(50) NOT NULL,
                "company" json NOT NULL,
                "created_at" TIMESTAMP DEFAULT now(),
                "created_by" bigint,
                "updated_at" TIMESTAMP DEFAULT now(),
                "updated_by" bigint,
                "deleted_at" TIMESTAMP,
                "deleted_by" bigint,
                CONSTRAINT "user_pkey" PRIMARY KEY ("id")
            )
        `);
    await queryRunner.query(`
            ALTER TABLE "comments"
            ADD CONSTRAINT "comment_user_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE "comments"
            ADD CONSTRAINT "comment_post_fkey" FOREIGN KEY ("post_id") REFERENCES "posts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE "posts"
            ADD CONSTRAINT "post_user_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);

    await queryRunner.query(`
            INSERT INTO users ( name, username, email, password, address, phone, website, company) VALUES
            ('Leanne Graham', 'Bret', 'Sincere@april.biz', '$2b$10$2XpE8Nnd3boFLJcSZ2JXR.XvANHYnfDlIc0W.NWBtYONsRWilealy',
                '{"street": "Kulas Light", "suite": "Apt. 556", "city": "Gwenborough", "zipcode": "92998-3874", "geo": {"lat": "-37.3159", "lng": "81.1496"}}', 
                '1-770-736-8031 x56442', 'hildegard.org', 
                '{"name": "Romaguera-Crona", "catchPhrase": "Multi-layered client-server neural-net", "bs": "harness real-time e-markets"}'
            ),
            ('Ervin Howell', 'Antonette', 'Shanna@melissa.tv', '$2b$10$2XpE8Nnd3boFLJcSZ2JXR.XvANHYnfDlIc0W.NWBtYONsRWilealy',
                '{"street": "Victor Plains", "suite": "Suite 879", "city": "Wisokyburgh", "zipcode": "90566-7771", "geo": {"lat": "-43.9509", "lng": "-34.4618"}}', 
                '010-692-6593 x09125', 'anastasia.net', 
                '{"name": "Deckow-Crist", "catchPhrase": "Proactive didactic contingency", "bs": "synergize scalable supply-chains"}'
            ),
            ('Clementine Bauch', 'Samantha', 'Nathan@yesenia.net', '$2b$10$2XpE8Nnd3boFLJcSZ2JXR.XvANHYnfDlIc0W.NWBtYONsRWilealy',
                '{"street": "Douglas Extension", "suite": "Suite 847", "city": "McKenziehaven", "zipcode": "59590-4157", "geo": {"lat": "-68.6102", "lng": "-47.0653"}}', 
                '1-463-123-4447', 'ramiro.info', 
                '{"name": "Romaguera-Jacobson", "catchPhrase": "Face to face bifurcated interface", "bs": "e-enable strategic applications"}'
            ),
            ('Patricia Lebsack', 'Karianne', 'Julianne.OConner@kory.org', '$2b$10$2XpE8Nnd3boFLJcSZ2JXR.XvANHYnfDlIc0W.NWBtYONsRWilealy',
                '{"street": "Hoeger Mall", "suite": "Apt. 692", "city": "South Elvis", "zipcode": "53919-4257", "geo": {"lat": "29.4572", "lng": "-164.2990"}}', 
                '493-170-9623 x156', 'kale.biz', 
                '{"name": "Robel-Corkery", "catchPhrase": "Multi-tiered zero tolerance productivity", "bs": "transition cutting-edge web services"}'
            ),
            ('Chelsey Dietrich', 'Kamren', 'Lucio_Hettinger@annie.ca', '$2b$10$2XpE8Nnd3boFLJcSZ2JXR.XvANHYnfDlIc0W.NWBtYONsRWilealy',
                '{"street": "Skiles Walks", "suite": "Suite 351", "city": "Roscoeview", "zipcode": "33263", "geo": {"lat": "-31.8129", "lng": "62.5342"}}', 
                '(254)954-1289', 'demarco.info', 
                '{"name": "Keebler LLC", "catchPhrase": "User-centric fault-tolerant solution", "bs": "revolutionize end-to-end systems"}'
            ),
            ('Mrs. Dennis Schulist', 'Leopoldo_Corkery', 'Karley_Dach@jasper.info', '$2b$10$2XpE8Nnd3boFLJcSZ2JXR.XvANHYnfDlIc0W.NWBtYONsRWilealy',
                '{"street": "Norberto Crossing", "suite": "Apt. 950", "city": "South Christy", "zipcode": "23505-1337", "geo": {"lat": "-71.4197", "lng": "71.7478"}}', 
                '1-477-935-8478 x6430', 'ola.org', 
                '{"name": "Considine-Lockman", "catchPhrase": "Synchronised bottom-line interface", "bs": "e-enable innovative applications"}'
            ),
            ('Kurtis Weissnat', 'Elwyn.Skiles', 'Telly.Hoeger@billy.biz', '$2b$10$2XpE8Nnd3boFLJcSZ2JXR.XvANHYnfDlIc0W.NWBtYONsRWilealy',
                '{"street": "Rex Trail", "suite": "Suite 280", "city": "Howemouth", "zipcode": "58804-1099", "geo": {"lat": "24.8918", "lng": "21.8984"}}', 
                '210.067.6132', 'elvis.io', 
                '{"name": "Johns Group", "catchPhrase": "Configurable multimedia task-force", "bs": "generate enterprise e-tailers"}'
            ),
            ('Nicholas Runolfsdottir V', 'Maxime_Nienow', 'Sherwood@rosamond.me', '$2b$10$2XpE8Nnd3boFLJcSZ2JXR.XvANHYnfDlIc0W.NWBtYONsRWilealy',
                '{"street": "Ellsworth Summit", "suite": "Suite 729", "city": "Aliyaview", "zipcode": "45169", "geo": {"lat": "-14.3990", "lng": "-120.7677"}}', 
                '586.493.6943 x140', 'jacynthe.com', 
                '{"name": "Abernathy Group", "catchPhrase": "Implemented secondary concept", "bs": "e-enable extensible e-tailers"}'
            ),
            ('Glenna Reichert', 'Delphine', 'Chaim_McDermott@dana.io', '$2b$10$2XpE8Nnd3boFLJcSZ2JXR.XvANHYnfDlIc0W.NWBtYONsRWilealy',
                '{"street": "Dayna Park", "suite": "Suite 449", "city": "Bartholomebury", "zipcode": "76495-3109", "geo": {"lat": "24.6463", "lng": "-168.8889"}}', 
                '(775)976-6794 x41206', 'conrad.com', 
                '{"name": "Yost and Sons", "catchPhrase": "Switchable contextually-based project", "bs": "aggregate real-time technologies"}'
            ),
            ('Clementina DuBuque', 'Moriah.Stanton', 'Rey.Padberg@karina.biz', '$2b$10$2XpE8Nnd3boFLJcSZ2JXR.XvANHYnfDlIc0W.NWBtYONsRWilealy',
                '{"street": "Kattie Turnpike", "suite": "Suite 198", "city": "Lebsackbury", "zipcode": "31428-2261", "geo": {"lat": "-38.2386", "lng": "57.2232"}}', 
                '024-648-3804', 'ambrose.net', 
                '{"name": "Hoeger LLC", "catchPhrase": "Centralized empowering task-force", "bs": "target end-to-end models"}'
            );

            `);

    await queryRunner.query(`
            INSERT INTO posts (user_id, title, body) VALUES
            (1, 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'),
            (1, 'qui est esse', 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'),
            (1, 'ea molestias quasi exercitationem repellat qui ipsa sit aut', 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut'),
            (1, 'eum et est occaecati', 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit'),
            (1, 'nesciunt quas odio', 'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque'),
            (1, 'dolorem eum magni eos aperiam quia', 'ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae'),
            (1, 'magnam facilis autem', 'dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas'),
            (1, 'dolorem dolore est ipsam', 'dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae'),
            (1, 'nesciunt iure omnis dolorem tempora et accusantium', 'consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas'),
            (1, 'optio molestias id quia eum', 'quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error'),
            (2, 'et ea vero quia laudantium autem', 'delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi'),
            (2, 'in quibusdam tempore odit est dolorem', 'itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio'),
            (2, 'dolorum ut in voluptas mollitia et saepe quo animi', 'aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam'),
            (2, 'voluptatem eligendi optio', 'fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum'),
            (2, 'eveniet quod temporibus', 'reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae'),
            (2, 'sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio', 'suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta'),
            (2, 'fugit voluptas sed molestias voluptatem provident', 'eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo'),
            (2, 'voluptate et itaque vero tempora molestiae', 'eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam'),
            (2, 'adipisci placeat illum aut reiciendis qui', 'illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas'),
            (2, 'doloribus ad provident suscipit at', 'qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo'),
            (3, 'asperiores ea ipsam voluptatibus modi minima quia sint', 'repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt'),
            (3, 'dolor sint quo a velit explicabo quia nam', 'eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse'),
            (3, 'maxime id vitae nihil numquam', 'veritatis unde neque eligendi\nquae quod architecto quo neque vitae\nest illo sit tempora doloremque fugit quod\net et vel beatae sequi ullam sed tenetur perspiciatis'),
            (3, 'autem hic labore sunt dolores incidunt', 'enim et ex nulla\nomnis voluptas quia qui\nvoluptatem consequatur numquam aliquam sunt\ntotam recusandae id dignissimos aut sed asperiores deserunt'),
            (3, 'rem alias distinctio quo quis', 'ullam consequatur ut\nomnis quis sit vel consequuntur\nipsa eligendi ipsum molestiae et omnis error nostrum\nmolestiae illo tempore quia et distinctio'),
            (3, 'est et quae odit qui non', 'similique esse doloribus nihil accusamus\nomnis dolorem fuga consequuntur reprehenderit fugit recusandae temporibus\nperspiciatis cum ut laudantium\nomnis aut molestiae vel vero'),
            (3, 'quasi id et eos tenetur aut quo autem', 'eum sed dolores ipsam sint possimus debitis occaecati\ndebitis qui qui et\nut placeat enim earum aut odit facilis\nconsequatur suscipit necessitatibus rerum sed inventore temporibus consequatur'),
            (3, 'delectus ullam et corporis nulla voluptas sequi', 'non et quaerat ex quae ad maiores\nmaiores recusandae totam aut blanditiis mollitia quas illo\nut voluptatibus voluptatem\nsimilique nostrum eum'),
            (3, 'iusto eius quod necessitatibus culpa ea', 'odit magnam ut saepe sed non qui\ntempora atque nihil\naccusamus illum doloribus illo dolor\neligendi repudiandae odit magni similique sed cum maiores'),
            (3, 'a quo magni similique perferendis', 'alias dolor cumque\nimpedit blanditiis non eveniet odio maxime\nblanditiis amet eius quis tempora quia autem rem\na provident perspiciatis quia'),
            (4, 'ullam ut quidem id aut vel consequuntur', 'debitis eius sed quibusdam non quis consectetur vitae\nimpedit ut qui consequatur sed aut in\nquidem sit nostrum et maiores adipisci atque\nquaerat voluptatem adipisci repudiandae'),
            (4, 'doloremque illum aliquid sunt', 'deserunt eos nobis asperiores et hic\nest debitis repellat molestiae optio\nnihil ratione ut eos beatae quibusdam distinctio maiores\nearum voluptates et aut adipisci ea maiores voluptas maxime'),
            (4, 'qui explicabo molestiae dolorem', 'rerum ut et numquam laborum odit est sit\nid qui sint in\nquasi tenetur tempore aperiam et quaerat qui in\nrerum officiis sequi cumque quod'),
            (4, 'magnam ut rerum iure', 'ea velit perferendis earum ut voluptatem voluptate itaque iusto\ntotam pariatur in\nnemo voluptatem voluptatem autem magni tempora minima in\nest distinctio qui assumenda accusamus dignissimos officia nesciunt nobis'),
            (4, 'id nihil consequatur molestias animi provident', 'nisi error delectus possimus ut eligendi vitae\nplaceat eos harum cupiditate facilis reprehenderit voluptatem beatae et\nest aut quod aut provident voluptas autem voluptas'),
            (4, 'fuga nam accusamus voluptas reiciendis itaque', 'ad mollitia et omnis minus architecto\ndeserunt temporibus reprehenderit ea reiciendis sunt\nlaboriosam quia consequatur sunt\nearum autem doloribus consequatur voluptatem temporibus'),
            (4, 'provident vel ut sit ratione est', 'debitis et eaque non officia sed nesciunt pariatur vel\nvoluptatem ipsam quis\nducimus aut sed nihil aut nostrum rerum est autem sunt rem'),
            (4, 'explicabo et eos deleniti nostrum ab id repellendus', 'voluptas quo tenetur perspiciatis explicabo natus autem numquam inventore\ndolores minus iure atque\nfugiat qui voluptas fugiat enim rerum et libero\nad voluptatem maiores'),
            (4, 'eos dolorem iste accusantium est eaque quam', 'corporis rerum ducimus vel eum accusantium\nmaxime aspernatur voluptatem rem veritatis deserunt est vero facere\nmolestiae explicabo quis\nquam eius dolores ullam distinctio'),
            (4, 'enim quo cumque', 'ut voluptatum aliquid illo tenetur qui omnis exercitationem\net architecto magnam ut consequatur qui voluptas\nmolestias aut fugiat autem\nvoluptas facere alias eligendi deleniti quidem qui sint nihil autem')
            `);

    await queryRunner.query(`
            INSERT INTO comments (post_id, user_id, body) VALUES
            (1, 1, 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'),
            (1, 2, 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et'),
            (1, 3, 'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione'),
            (1, 4, 'non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati'),
            (1, 5, 'harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et'),
            (2, 6, 'doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in'),
            (2, 7, 'maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor'),
            (2, 8, 'ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque'),
            (2, 9, 'sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus'),
            (2, 1, 'voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis'),
            (3, 1, 'ut dolorum nostrum id quia aut est\nfuga est inventore vel eligendi explicabo quis consectetur\naut occaecati repellat id natus quo est\nut blanditiis quia ut vel ut maiores ea'),
            (3, 1, 'expedita maiores dignissimos facilis\nipsum est rem est fugit velit sequi\neum odio dolores dolor totam\noccaecati ratione eius rem velit'),
            (3, 1, 'fuga eos qui dolor rerum\ninventore corporis exercitationem\ncorporis cupiditate et deserunt recusandae est sed quis culpa\neum maiores corporis et'),
            (3, 1, 'vel quae voluptas qui exercitationem\nvoluptatibus unde sed\nminima et qui ipsam aspernatur\nexpedita magnam laudantium et et quaerat ut qui dolorum'),
            (3, 1, 'nihil ut voluptates blanditiis autem odio dicta rerum\nquisquam saepe et est\nsunt quasi nemo laudantium deserunt\nmolestias tempora quo quia'),
            (4, 1, 'iste ut laborum aliquid velit facere itaque\nquo ut soluta dicta voluptate\nerror tempore aut et\nsequi reiciendis dignissimos expedita consequuntur libero sed fugiat facilis'),
            (4, 1, 'consequatur necessitatibus totam sed sit dolorum\nrecusandae quae odio excepturi voluptatum harum voluptas\nquisquam sit ad eveniet delectus\ndoloribus odio qui non labore'),
            (4, 1, 'veritatis voluptates necessitatibus maiores corrupti\nneque et exercitationem amet sit et\nullam velit sit magnam laborum\nmagni ut molestias'),
            (4, 1, 'doloribus est illo sed minima aperiam\nut dignissimos accusantium tempore atque et aut molestiae\nmagni ut accusamus voluptatem quos ut voluptates\nquisquam porro sed architecto ut'),
            (4, 2, 'qui harum consequatur fugiat\net eligendi perferendis at molestiae commodi ducimus\ndoloremque asperiores numquam qui\nut sit dignissimos reprehenderit tempore'),
            (5, 2, 'deleniti aut sed molestias explicabo\ncommodi odio ratione nesciunt\nvoluptate doloremque est\nnam autem error delectus'),
            (5, 2, 'qui ipsa animi nostrum praesentium voluptatibus odit\nqui non impedit cum qui nostrum aliquid fuga explicabo\nvoluptatem fugit earum voluptas exercitationem temporibus dignissimos distinctio\nesse inventore reprehenderit quidem ut incidunt nihil necessitatibus rerum'),
            (5, 2, 'voluptates provident repellendus iusto perspiciatis ex fugiat ut\nut dolor nam aliquid et expedita voluptate\nsunt vitae illo rerum in quos\nvel eligendi enim quae fugiat est'),
            (5, 2, 'repudiandae repellat quia\nsequi est dolore explicabo nihil et\net sit et\net praesentium iste atque asperiores tenetur'),
            (5, 2, 'sunt aut quae laboriosam sit ut impedit\nadipisci harum laborum totam deleniti voluptas odit rem ea\nnon iure distinctio ut velit doloribus\net non ex'),
            (6, 2, 'incidunt sapiente eaque dolor eos\nad est molestias\nquas sit et nihil exercitationem at cumque ullam\nnihil magnam et'),
            (6, 2, 'nisi vel quas ut laborum ratione\nrerum magni eum\nunde et voluptatem saepe\nvoluptas corporis modi amet ipsam eos saepe porro'),
            (6, 2, 'voluptatem repellendus quo alias at laudantium\nmollitia quidem esse\ntemporibus consequuntur vitae rerum illum\nid corporis sit id'),
            (6, 2, 'tempora voluptatem est\nmagnam distinctio autem est dolorem\net ipsa molestiae odit rerum itaque corporis nihil nam\neaque rerum error'),
            (6, 3, 'consequuntur quia voluptate assumenda et\nautem voluptatem reiciendis ipsum animi est provident\nearum aperiam sapiente ad vitae iste\naccusantium aperiam eius qui dolore voluptatem et'),
            (7, 3, 'quia incidunt ut\naliquid est ut rerum deleniti iure est\nipsum quia ea sint et\nvoluptatem quaerat eaque repudiandae eveniet aut'),
            (7, 3, 'aut est eveniet sit voluptatem\nexercitationem consequatur qui aliquid autem non\nquas distinctio sed qui voluptatum\ndolore occaecati impedit');
            `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE "posts" DROP CONSTRAINT "post_user_fkey"
        `);
    await queryRunner.query(`
            ALTER TABLE "comments" DROP CONSTRAINT "comment_post_fkey"
        `);
    await queryRunner.query(`
            ALTER TABLE "comments" DROP CONSTRAINT "comment_user_fkey"
        `);
    await queryRunner.query(`
            DROP TABLE "users"
        `);
    await queryRunner.query(`
            DROP TABLE "posts"
        `);
    await queryRunner.query(`
            DROP TABLE "comments"
        `);
  }
}
