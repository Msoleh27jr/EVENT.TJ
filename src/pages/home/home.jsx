import React, { useState } from "react";
import { News } from "../../app/providers/lazy/lazy";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import FirstSecton from "../../shared/firstSectionHomePage/firstSecton";
import TheatresSoon from "../../shared/ui/custom/soon/theatres-soon";
import { data } from "../digets/dataBase";

const eventsData = [
  {
    id: 1,
    eventImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHWI6exsG33eBZhSmVZ8R9mYWzW451VJDKlw&s",
    eventName: "Shashmaqom Music Festival",
    eventSee: 65,
    eventDescription:
      "Традиционный фестиваль классической таджикской музыки Шашмаком, соберёт лучших исполнителей страны.",
    eventLocation: "Амфитеатр, Худжанд",
    eventDate: "15 июня 2025",
    eventTime: "19:00",
    eventTag: "Музыка",
  },
  {
    id: 2,
    eventImage:
      "https://i.ytimg.com/vi/6p1D2QGC3p0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAXY0qBa5LdtdGC9zpO7bEgtcRx3Q",
    eventName: "Judo Grand Slam Dushanbe 2025",
    eventSee: 120,
    eventDescription: "Международный турнир по дзюдо, этап IJF World Tour.",
    eventLocation: "Kasri Tennis, Душанбе",
    eventDate: "2–4 мая 2025",
    eventTime: "10:00",
    eventTag: "Спорт",
  },
  {
    id: 3,
    eventImage:
      "https://www.un-glaciers.org/sites/default/files/2024-10/logo_iygp_dark_full%20color.png",
    eventName: "International Conference on Glaciers’ Preservation",
    eventSee: 80,
    eventDescription: "Конференция ООН и Таджикистана по сохранению ледников.",
    eventLocation: "Kokhi Somon, Душанбе",
    eventDate: "29–31 мая 2025",
    eventTime: "09:00",
    eventTag: "Экология",
  },
  {
    id: 4,
    eventImage:
      "https://pressa.tj/wp-content/uploads/2025/03/omodagi-ba-navruz-24.jpg",
    eventName: "Navruz World Youth Festival",
    eventSee: 200,
    eventDescription:
      "Фестиваль для молодежи с культурной и спортивной программой.",
    eventLocation: "Душанбе + поездки в Истаравшан, Пенджикент, Худжанд",
    eventDate: "16–21 марта 2025",
    eventTime: "12:00",
    eventTag: "Культура",
  },
  {
    id: 5,
    eventImage:
      "https://www.france.fi/wp-content/uploads/2025/02/francophonie-2025-1098x617.jpg",
    eventName: "Francophonie Days 2025",
    eventSee: 50,
    eventDescription:
      "Фестиваль французской культуры: кино, квизы, мастер‑классы.",
    eventLocation: "Vatan Cinema и другие площадки, Душанбе",
    eventDate: "21 апреля – 2 мая 2025",
    eventTime: "18:00",
    eventTag: "Образование",
  },
  {
    id: 6,
    eventImage:
      "https://asiaplustj.info/sites/default/files/articles/258058/8.JPG",
    eventName: "Summer Fest: Food & Balloon Festival",
    eventSee: 180,
    eventDescription:
      "Фестиваль национальной кухни и воздушных шаров в Душанбе.",
    eventLocation: "Душанбе, большой стадион",
    eventDate: "Сентябрь 2025",
    eventTime: "11:00",
    eventTag: "Еда",
  },
  {
    id: 7,
    eventImage:
      "https://asiaplustj.info/sites/default/files/articles/279644/%D0%BF%D0%BB%D0%BE%D0%B2%20%D0%90%D0%B7%D0%B8%D1%8F-%D0%9F%D0%BB%D1%8E%D1%81.jpg",
    eventName: "Pilaf Festival",
    eventSee: 220,
    eventDescription: "Международный фестиваль плова в парке культуры Душанбе.",
    eventLocation: "Парк культуры, Душанбе",
    eventDate: "Октябрь 2025",
    eventTime: "07:00",
    eventTag: "Еда",
  },
  {
    id: 8,
    eventImage:
      "https://cdn.easteast.world/uploads/post_image/5836/image/74c4d85812a3446cb38a.jpg",
    eventName: "Roof of the World Music Festival",
    eventSee: 150,
    eventDescription: "Этно‑фестиваль музыки в Хороге, Памир.",
    eventLocation: "Парк, Хорог",
    eventDate: "Июль 2025",
    eventTime: "14:00",
    eventTag: "Музыка",
  },
  {
    id: 9,
    eventImage:
      "https://pamirtrips.com/wp-content/uploads/chabysh-horse-festival-hd-1.jpg",
    eventName: "At‑Chabysh Horse Festival",
    eventSee: 90,
    eventDescription: "Праздник конного спорта, бузкаши и поэзии в Мургабе.",
    eventLocation: "Мургаб, Памир",
    eventDate: "Вторая неделя июля 2025",
    eventTime: "10:00",
    eventTag: "Спорт",
  },
  {
    id: 10,
    eventImage:
      "https://adventuresoflilnicki.com/wp-content/uploads/2020/08/Bolshoi-Allo-Fann-Mountains-Tajikistan-8.jpg",
    eventName: "Tajik Mountain Traverse",
    eventSee: 70,
    eventDescription: "6‑дневный трейл‑рейс по Фанским горам (~165 км).",
    eventLocation: "Фанские горы",
    eventDate: "9–17 августа 2025",
    eventTime: "06:00",
    eventTag: "Экстрим",
  },
  {
    id: 11,
    eventImage:
      "https://eurasianeconomic.org/files/29990/side-pic-NYBklFsQE2IMWX5b1Ip6bc7niTHHAAB1.jpg",
    eventName: "Tajik Film Festival",
    eventSee: 140,
    eventDescription:
      "Фестиваль таджикского кино с показами фильмов, встречами с режиссёрами и мастер‑классами.",
    eventLocation: "Кинотеатр «Ватан», Душанбе",
    eventDate: "12–15 октября 2025",
    eventTime: "17:00",
    eventTag: "Кино",
  },
  {
    id: 12,
    eventImage:
      "https://eurasia-assembly.org/sites/default/files/styles/news_full/public/news/glavnaya_2_0.jpeg?itok=uZTJNhbU",
    eventName: "Silk Road Heritage Tour",
    eventSee: 110,
    eventDescription:
      "Путешествие по древнему Шёлковому пути с остановками в Истаравшане, Пенджикенте и Худжанде.",
    eventLocation: "Шёлковый путь, север Таджикистана",
    eventDate: "1–7 сентября 2025",
    eventTime: "08:00",
    eventTag: "История",
  },
];

const Home = () => {
  const { t } = useTranslation();

  const [dataPic] = useState([
    {
      id: 1,
      title: "В Ташкенте стартовал фестиваль цветов.",
      date: "1 мая",
      category: "Фестивали",
      imageUrl:
        "https://www.gazeta.uz/media/img/2025/05/IgvcSS17461014091353_l.webp",
      images: [
        {
          img: "https://www.gazeta.uz/media/img/2025/05/IgvcSS17461014091353_l.webp",
          desc: "Цветочная композиция на площади у Национальной библиотеки Узбекистана во время Ташкентского фестиваля цветов.",
        },
        {
          img: "https://img.freepik.com/free-photo/beautiful-pink-peony-flowers_1203-2415.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user",
          desc: "Посетители фестиваля рассматривают яркие узоры из цветов и наслаждаются красотой цветущих инсталляций.",
        },
        {
          img: "https://img.freepik.com/free-photo/flower-decoration-on-an-event_1359-2686.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user",
          desc: "Сцена фестиваля, украшенная баннерами и живыми цветами, где проходят выступления артистов и музыкантов.",
        },
      ],
      additionalInfo: {
        aboutAuthor: {
          name: "Анна Иванова",
          bio: "Анна — опытный фотограф-репортажник, специализирующаяся на культурных событиях и фестивалях. Ее работы отличаются живой атмосферой и вниманием к деталям, передавая дух каждого мероприятия.",
          avatar:
            "https://img.freepik.com/free-photo/side-view-beautiful-woman-outdoors_23-2148722420.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user",
        },
        relatedFacts: [
          {
            factText:
              "Ташкентский фестиваль цветов проводится ежегодно и собирает тысячи посетителей со всего мира, становясь крупным международным событием.",
            factImage:
              "https://img.freepik.com/free-photo/garden-with-variety-colorful-flowers_181624-2139.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user",
          },
          {
            factText:
              "В этом году было представлено более 500 видов растений, включая редкие и экзотические цветы, выращенные специально для этого события.",
            factImage:
              "https://img.freepik.com/free-photo/beautiful-pink-and-purple-flowers-growing-in-a-garden_181624-34850.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user",
          },
        ],
      },
    },
    {
      id: 2,
      title: "Весенний фестиваль в ботаническом саду",
      date: "2 мая",
      category: "Фестивали",
      imageUrl:
        "https://img.freepik.com/free-photo/beautiful-garden-at-night_1112-258.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user",
      images: [
        {
          img: "https://img.freepik.com/free-photo/top-view-of-botanical-garden_23-2150992398.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user",
          desc: "Разноцветные тюльпаны в ботаническом саду во время весеннего фестиваля, создающие яркие ковры и неповторимые пейзажи.",
        },
        {
          img: "https://img.freepik.com/free-photo/path-with-benches-in-botanical-garden_1268-14545.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user",
          desc: "Гости фестиваля гуляют по цветочным аллеям, наслаждаясь ароматами и красотой природы, отдыхая от городской суеты.",
        },
        {
          img: "https://img.freepik.com/free-photo/concert-stage-surrounded-by-trees-at-night_1112-143.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user",
          desc: "Музыкальная сцена, украшенная живыми цветами, где проходят выступления местных артистов и проводятся культурные мероприятия.",
        },
      ],
      additionalInfo: {
        aboutAuthor: {
          name: "Дмитрий Смирнов",
          bio: "Дмитрий — ландшафтный дизайнер и фотограф, увлеченный природными пейзажами. Его снимки передают всю красоту и гармонию флоры, подчеркивая уникальность каждого растения и уголка сада.",
          avatar:
            "https://img.freepik.com/free-photo/portrait-handsome-man-with-beard-garden_1112-132.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user",
        },
        relatedFacts: [
          {
            factText:
              "Ботанический сад Ташкента является одним из крупнейших в Центральной Азии, его площадь составляет более 60 гектаров, что делает его идеальным местом для прогулок.",
            factImage:
              "https://img.freepik.com/free-photo/botanical-garden-with-beautiful-flowers_1112-250.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user",
          },
          {
            factText:
              "На его территории произрастает более 4500 видов растений со всего мира, включая редкие и исчезающие виды, поддерживаемые специальными программами.",
            factImage:
              "https://img.freepik.com/free-photo/beautiful-plants-botanical-garden_1112-243.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user",
          },
        ],
      },
    },
    {
      id: 3,
      title: "Парад цветов на главной площади",
      date: "3 мая",
      category: "Фестивали",
      imageUrl:
        "https://s.rfi.fr/media/display/35d7a1a0-5baf-11ef-916e-005056a97e36/w:980/p:16x9/2024-08-15T114752Z_769966374_RC2BG9AT1FWC_RTRMADP_3_BELGIUM-FLOWERS.JPG",
      images: [
        {
          img: "https://img.freepik.com/free-photo/flower-parade-at-carnival-in-portugal_1203-3882.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user",
          desc: "Колонны людей несут огромные цветочные скульптуры по площади, создавая незабываемое зрелище и атмосферу праздника.",
        },
        {
          img: "https://img.freepik.com/free-photo/flower-parade_1359-2516.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user",
          desc: "Цветочные арки и праздничное оформление главной улицы города, превращающие ее в цветущий тоннель.",
        },
        {
          img: "https://img.freepik.com/free-photo/happy-family-at-a-parade_1150-1378.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user",
          desc: "Дети с венками из живых цветов, радостно участвующие в шествии и дарящие улыбки прохожим, создавая атмосферу всеобщего веселья.",
        },
      ],
      additionalInfo: {
        aboutAuthor: {
          name: "Мария Петрова",
          bio: "Мария - фотограф, специализирующаяся на общегородских мероприятиях. Ее снимки передают энергию и масштаб событий, погружая зрителя в атмосферу праздника и радости.",
          avatar:
            "https://img.freepik.com/free-photo/happy-young-woman-with-camera_23-2147774130.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user",
        },
        relatedFacts: [
          {
            factText:
              "Парад цветов является кульминацией весенних праздников, привлекая внимание как местных жителей, так и туристов со всего мира.",
            factImage:
              "https://img.freepik.com/free-photo/people-attending-a-street-festival_1203-3888.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user",
          },
          {
            factText:
              "Для создания композиций используются сотни тысяч свежих цветов, тщательно подобранных флористами и дизайнерами, работающими над парадом.",
            factImage:
              "https://img.freepik.com/free-photo/colorful-flowers-decoration-on-a-street_1203-3935.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user",
          },
        ],
      },
    },
    {
      id: 4,
      title: "Ночной световой шоу-фестиваль",
      date: "3 мая",
      category: "Фестивали",
      imageUrl:
        "https://russian.shanghai.gov.cn/cmsres/36/3614705893d8458d9e468a1e152ec567/9f6b906bbc9d8fb520bc173e9ec37ed6.jpg",
      images: [
        {
          img: "https://img.freepik.com/free-photo/blue-stage-lights_1203-2479.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user",
          desc: "Потрясающие световые инсталляции и проекции на зданиях в ночи, создающие футуристический и завораживающий пейзаж.",
        },
        {
          img: "https://img.freepik.com/free-photo/party-crowd-with-colorful-lights_23-2148782434.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user",
          desc: "Толпы людей наблюдают шоу под музыку и свет, завороженно следя за каждым движением лучей и наслаждаясь атмосферой праздника.",
        },
        {
          img: "https://img.freepik.com/free-photo/fireworks-display_1203-2476.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user",
          desc: "Заключительный фейерверк над цветочной площадкой, озаряющий ночное небо яркими всполохами и оставляющий незабываемые впечатления.",
        },
      ],
      additionalInfo: {
        aboutAuthor: {
          name: "Сергей Козлов",
          bio: "Сергей — мастер ночной фотографии, его работы создают волшебную атмосферу и передают всю магию световых шоу, делая невидимое видимым и подчеркивая их красоту.",
          avatar:
            "https://img.freepik.com/free-photo/portrait-of-a-male-photographer-in-a-park_23-2148202970.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user",
        },
        relatedFacts: [
          {
            factText:
              "Фестиваль света привлекает международных дизайнеров и художников, которые представляют свои уникальные проекты, создавая новые тенденции в световом искусстве.",
            factImage:
              "https://img.freepik.com/free-photo/colorful-light-show-at-night_23-2148782428.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user",
          },
          {
            factText:
              "Каждый год разрабатываются новые уникальные световые инсталляции, использующие передовые технологии и инновационные подходы к дизайну.",
            factImage:
              "https://img.freepik.com/free-photo/abstract-light-trails-in-motion_23-2148782431.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user",
          },
        ],
      },
    },
    {
      id: 5,
      title: "Выставка экзотических цветов",
      date: "4 мая",
      category: "Выставки",
      imageUrl:
        "https://gtrk-kaluga.ru/public/upload/news/17651/gallery/cvetov020213.jpg",
      images: [
        {
          img: "https://img.freepik.com/free-photo/beautiful-orchid-flowers_1203-2417.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user",
          desc: "Крупные планы редких орхидей и суккулентов, демонстрирующих необычные формы и расцветки, привлекающие внимание ценителей.",
        },
        {
          img: "https://img.freepik.com/free-photo/woman-arranging-flowers-in-a-flower-shop_23-2148722423.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user",
          desc: "Садоводы демонстрируют свои лучшие достижения и проводят мастер-классы для посетителей, делясь секретами выращивания.",
        },
        {
          img: "https://img.freepik.com/free-photo/flower-arranging-class_23-2147774133.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user",
          desc: "Интерактивные стенды для создания букетов, где каждый может попробовать себя в роли флориста и создать свою уникальную композицию.",
        },
      ],
      additionalInfo: {
        aboutAuthor: {
          name: "Елена Фадеева",
          bio: "Елена — ботаник и фотограф, ее работы погружают в мир удивительных и редких растений. Она ищет вдохновение в каждом лепестке, раскрывая их скрытую красоту и уникальность.",
          avatar:
            "https://img.freepik.com/free-photo/portrait-of-a-woman-with-flowers_23-2148722415.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user",
        },
        relatedFacts: [
          {
            factText:
              "На выставке представлены виды растений из тропических лесов и пустынь, адаптированные к местным условиям и демонстрирующие свою устойчивость.",
            factImage:
              "https://img.freepik.com/free-photo/tropical-plants-in-a-botanical-garden_1112-257.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user",
          },
          {
            factText:
              "Посетители могут получить консультации по уходу за экзотическими цветами от ведущих специалистов и узнать о последних достижениях в области цветоводства.",
            factImage:
              "https://img.freepik.com/free-photo/gardener-working-in-greenhouse_1112-249.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user",
          },
        ],
      },
    },
    {
      id: 6,
      title: "Конкурс флористического искусства",
      date: "5 мая",
      category: "Конкурсы",
      imageUrl: "https://krasfair.ru/upload/medialibrary/4e6/img_6158.jpg",
      images: [
        {
          img: "https://img.freepik.com/free-photo/hands-making-a-flower-arrangement_1203-2409.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user",
          desc: "Участники конкурса создают сложные цветочные композиции, демонстрируя свое мастерство и креативность, используя различные техники и материалы.",
        },
        {
          img: "https://img.freepik.com/free-photo/judges-at-a-flower-show_1203-2411.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user",
          desc: "Жюри оценивает работы флористов, учитывая оригинальность, технику и гармонию композиции, а также инновационный подход.",
        },
        {
          img: "https://img.freepik.com/free-photo/award-ceremony-at-a-flower-show_1203-2408.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user",
          desc: "Победители получают награды на церемонии закрытия, под аплодисменты публики и коллег, отмечая их вклад в искусство флористики.",
        },
      ],
      additionalInfo: {
        aboutAuthor: {
          name: "Игорь Владимиров",
          bio: "Игорь — известный флорист и судья многих международных конкурсов. Его взгляд на искусство сочетания цветов уникален, он видит красоту в каждой детали и создает шедевры из растений.",
          avatar:
            "https://img.freepik.com/free-photo/close-up-male-florist-working_23-2148722421.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user",
        },
        relatedFacts: [
          {
            factText:
              "Конкурс проводится в нескольких номинациях, включая свадебную, авангардную и классическую флористику, что позволяет участникам проявить свои таланты.",
            factImage:
              "https://img.freepik.com/free-photo/floral-arrangement-on-a-table_1203-2407.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user",
          },
          {
            factText:
              "Лучшие работы будут представлены на международных выставках и получат широкое признание, способствуя развитию флористического искусства.",
            factImage:
              "https://img.freepik.com/free-photo/flower-arrangements_1203-2406.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user",
          },
        ],
      },
    },
  ]);

  let [datas] = useState([
    {
      id: 1,
      image: "https://www.kino-teatr.ru/movie/posters/big/4/0/176904.jpg",
      name: "Каратэ-пацан: Легенды",
      cinema: "kayhon",
      genres: [
        {
          genre: "Семейный",
          id: 1,
        },
        {
          genre: "Спорт",
          id: 2,
        },
        {
          genre: "Драма",
          id: 3,
        },
        {
          genre: "Боевик",
          id: 5,
        },
        {
          genre: "Анимадок",
          id: 4,
        },
      ],
      age: 12,
      time: "1 ч. 58 минут",
      country: "США",
      rating: 6.6,
      year: 2025,
      description:
        "Продолжение истории об американском мальчишке, победившем в соревнованиях по кунг-фу, и пожилом мастере, помогавшем ему в этом непростом деле.",
      role: "Джеки Чан, Джошуа Джексон, Арамис Найт, Ральф Маччио, Мин-На Вэнь, Шонетт Рене Уилсон, Сэди Стэнли, Уайатт Олефф, Бен Ван, Jennifer-Lynn Christie",
      video: "https://www.youtube.com/embed/55qOCxcLj6o&feature=youtu.be",
    },
    {
      id: 2,
      image:
        "https://upload.wikimedia.org/wikipedia/ru/thumb/1/19/Mission-_Impossible_%E2%80%93_The_Final_Reckoning.jpg/330px-Mission-_Impossible_%E2%80%93_The_Final_Reckoning.jpg",
      name: "Миссия невыполнима: Финальная расплата",
      cinema: "navruz",
      genres: [
        {
          genre: "Боевик",
          id: 1,
        },
        {
          genre: "Триллер",
          id: 2,
        },
        {
          genre: "Приключения",
          id: 3,
        },
      ],
      age: 16,
      time: "2ч 49мин",
      country: "США, Великобритания",
      rating: 7.6,
      year: 2025,
      description:
        "Итан Хант пытается разыскать инновационный искусственный интеллект, угрожающий существованию всего мира.",
      role: "Том Круз, Анджела Бассетт, Джанет МакТир, Ребекка Фергюсон, Ванесса Кирби, Шей Уигэм, Хейли Этвелл, Трэмелл Тиллман, Ханна Уэддингхэм, Кэти М. О’Брайан",
      video: "https://www.youtube.com/embed/1bsBFEr9_Ag",
    },
    {
      id: 3,
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSU13E6WdhYqkaVtEbYqIRZkoyik7J4iMMhdULtdwMmjSMuM07x",
      name: "Лило и Стич",
      cinema: "siema",
      genres: [
        {
          genre: "Семейный",
          id: 1,
        },
        {
          genre: "Анимация",
          id: 2,
        },
      ],
      age: 6,
      time: "1 ч. 25 минут",
      country: "США",
      rating: 7.2,
      year: 2025,
      description:
        "О дружбе, возникшей между девочкой по имени Лило и похожим на собаку/коалу пришельцем по имени Стич, который создан для создания хаоса и разрушений…",
      role: "Джейсон Скотт Ли, Зак Галифианакис, Кортни Б. Вэнс, Крис Сандерс, Тиа Каррере, Билли Магнуссен, Ханна Уэддингхэм, Sofia Lone, Сидни Агудонг, Maia Kealoha",
      video: "https://www.youtube.com/embed/5WXweoj_1Z0",
    },
    {
      id: 4,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGDkrEcx5SHpSuj2i6xBiFtFTbpe4tPEmWqg&s",
      name: "Игры возмездия",
      cinema: "vatan",
      genres: [
        {
          genre: "Боевик",
          id: 1,
        },
        {
          genre: "Триллер",
          id: 2,
        },
      ],
      age: 18,
      time: "1 ч. 26 минут",
      country: "Великобритания, США",
      rating: 3.4,
      year: "29 мая 2025",
      description:
        "Бокуши строит неприступную крепость, собирает в ней целый арсенал оружия и преданных ему ветеранов боевых действий. Правительство пытается проникнуть в организацию, чтобы узнать его планы. После нескольких неудачных попыток власти вербуют Нэша Кавано, бывшего спецназовца, который когда-то был учеником Бокуши. Наконец-то у Нэша появляется возможность отомстить человеку, который отнял у него все, включая любовь всей его жизни.",
      role: "Лоуренс Мэйсон, Роберт Де Ниро, Джон Легуизамо, Саид Тагмауи, Джейми Фокс, Скотт Иствуд, Рита Ора, Нора Арнезедер, Шамир Андерсон, Джои Бикиччи",
      video: "https://www.youtube.com/embed/3m3MjEQh0qE",
    },
  ]);
  const [modal, setModal] = useState(false);
  return (
    <div>
      <FirstSecton />
      {/* ////////////// events */}
      <hr className="my-5" />
      <h2 className="text-4xl font-bold">{t("events")}</h2>
      <section className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {eventsData.slice(0, 9).map((event) => (
          <div
            key={event.id}
            class="max-w-sm rounded-2xl shadow-lg overflow-hidden transform transition duration-600 group cursor-pointer dark:shadow-[#bababaae]"
          >
            <Link to={`events/${event.id}`}>
              <img
                class="w-full h-48 object-cover transform transition duration-700 group-hover:scale-110"
                src={event.eventImage}
                alt="{event.eventName}"
              />
              <div class="p-4">
                <p class="text-sm text-gray-500 mb-1">
                  <span>{event.eventDate}</span> ·
                  <span class="text-purple-600 font-medium">
                    {event.eventTag}
                  </span>
                </p>
                <h2 class="text-lg font-bold mb-1 group-hover:text-[#9F00FF] transition-all duration-500 text-[19px]">
                  {event.eventName}
                </h2>
                <p class="text-sm text-gray-700">{event.eventDescription}</p>
              </div>
            </Link>
          </div>
        ))}
        {modal &&
          eventsData.slice(9).map((event) => (
            <div
              key={event.id}
              class="max-w-sm rounded-2xl  shadow-lg bg-white overflow-hidden transform transition duration-600 group cursor-pointer"
            >
              <img
                class="w-full h-48 object-cover transform transition duration-700 group-hover:scale-110"
                src={event.eventImage}
                alt="{event.eventName}"
              />
              <div class="p-4">
                <p class="text-sm text-gray-500 mb-1">
                  <span>{event.eventDate}</span> ·
                  <span class="text-purple-600 font-medium">
                    {event.eventTag}
                  </span>
                </p>
                <h2 class="text-lg font-bold mb-1 group-hover:text-[#9F00FF] transition-all duration-500 text-[19px]">
                  {event.eventName}
                </h2>
                <p class="text-sm text-gray-700">{event.eventDescription}</p>
              </div>
            </div>
          ))}

        {!modal && (
          <button
            className="p-[10px_30px] text-white rounded-[10px] hover:bg-blue-600 bg-[#9F00FF] transform transition duration-600"
            onClick={() => setModal(true)}
          >
            Показать еще
          </button>
        )}
      </section>
      {/* /////////// digits */}
      <section className="my-10">
        <hr />
        <h3 className="text-4xl font-bold my-5">{t("digets")}</h3>
        {data &&
          data.map((el, i) => (
            <Link to={`digets/${i}`}>
              <div
                key={i}
                className="flex w-[100%] md:w-[65%] gap-[50px] items-center"
              >
                <p className="text-[52px] text-[#9F00FF] font-[700]">{i + 1}</p>
                <div
                  className="py-[20px] w-[100%]"
                  style={{
                    borderBottom:
                      i != datas.length - 1 ? "1px solid #ccc" : "none",
                  }}
                >
                  <h1 className="text-[#9F00FF] text-[18px] font-[600]">
                    {t(el.category)}
                  </h1>
                  <p className="text-[22px] font-[700] cursor-pointer hover:text-[#9F00FF]">
                    {t(el.name)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
      </section>
      {/* ....... movie */}
      <hr className="my-6" />
      <h2 className="text-4xl font-bold">{t("movie")}</h2>
      <section className="flex gap-[5%] my-5 overflow-x-scroll md:overflow-auto">
        {datas?.map((e) => {
          return (
            <Link key={e.id} to={`movie/${e.id}`}>
              <div className="w-[215px] m-auto md:m-0 h-[550px] overflow-hidden transform transition duration-600 group cursor-pointer">
                <div className="overflow-hidden rounded-[10px] mb-[20px] relative">
                  <img
                    src={e.image}
                    className="w-full h-[325px] object-cover transform transition duration-700 group-hover:scale-110 rounded-[10px]"
                    alt="image"
                  />
                  <div
                    style={{
                      backgroundColor:
                        e.rating < 5
                          ? "red"
                          : e.rating < 7
                          ? "#db8f00"
                          : "#43c443",
                    }}
                    className="absolute top-[15px] right-[15px] w-[30px] h-[20px] rounded-[4px] flex items-center justify-center text-[#FAFAFA]"
                  >
                    {e.rating}
                  </div>
                </div>
                <h3 className="font-bold group-hover:text-[#9F00FF] transition-all duration-500 text-[19px]">
                  {e.name}
                </h3>
                <h4 className="my-[15px] text-[18px] text-[#9F00FF]">
                  Расписание
                </h4>
                <div className="flex flex-wrap items-center gap-[5px]">
                  {e.genres.map((e) => {
                    return (
                      <h3
                        key={e.id}
                        className="h-[30px] flex items-center justify-center group-hover:text-[#FAFAFA] transition-all duration-500 px-[5px] group-hover:bg-[#9F00FF] rounded-[8px] text-[14px]"
                      >
                        {e.genre}
                      </h3>
                    );
                  })}
                </div>
              </div>
            </Link>
          );
        })}
      </section>
      <hr />
      <h2 className="my-5 font-bold text-4xl">{t("theatres")}</h2>
      <TheatresSoon />
      <hr />
      <News />
      <hr />
      <section className="md:my-20 my-10">
        <h1 className="text-[28px] font-bold mb-6">{t("pictures")}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dataPic.map((item) => (
            <div
              key={item.id}
              className="rounded-xl overflow-hidden shadow-md border cursor-pointer hover:shadow-lg transition-shadow duration-200"
            >
              <Link to={`pictures/${item.id}`}>
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src =
                      "https://via.placeholder.com/400x200/BBBBBB/777777?text=Ошибка+загрузки";
                  }}
                />
                <div className="p-4">
                  <p className="text-sm text-gray-500">
                    {item.date} · {item.category}
                  </p>
                  <h2 className="text-lg font-semibold mt-2">{item.title}</h2>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
