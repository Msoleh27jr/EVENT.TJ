import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Pictures = () => {
  const navigate = useNavigate(); 

  const [data] = useState([
    {
      id: 1,
      title: "В Ташкенте стартовал фестиваль цветов.",
      date: "1 мая",
      category: "Фестивали",
      imageUrl: "https://www.gazeta.uz/media/img/2025/05/IgvcSS17461014091353_l.webp",
      images: [
        {
          img: "https://www.gazeta.uz/media/img/2025/05/IgvcSS17461014091353_l.webp",
          desc: "Цветочная композиция на площади у Национальной библиотеки Узбекистана во время Ташкентского фестиваля цветов."
        },
        {
          img: "https://img.freepik.com/free-photo/beautiful-pink-peony-flowers_1203-2415.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user",
          desc: "Посетители фестиваля рассматривают яркие узоры из цветов и наслаждаются красотой цветущих инсталляций."
        },
        {
          img: "https://img.freepik.com/free-photo/flower-decoration-on-an-event_1359-2686.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user",
          desc: "Сцена фестиваля, украшенная баннерами и живыми цветами, где проходят выступления артистов и музыкантов."
        }
      ],
      additionalInfo: {
        aboutAuthor: {
          name: "Анна Иванова",
          bio: "Анна — опытный фотограф-репортажник, специализирующаяся на культурных событиях и фестивалях. Ее работы отличаются живой атмосферой и вниманием к деталям, передавая дух каждого мероприятия.",
          avatar: "https://img.freepik.com/free-photo/side-view-beautiful-woman-outdoors_23-2148722420.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user"
        },
        relatedFacts: [
          {
            factText: "Ташкентский фестиваль цветов проводится ежегодно и собирает тысячи посетителей со всего мира, становясь крупным международным событием.",
            factImage: "https://img.freepik.com/free-photo/garden-with-variety-colorful-flowers_181624-2139.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user"
          },
          {
            factText: "В этом году было представлено более 500 видов растений, включая редкие и экзотические цветы, выращенные специально для этого события.",
            factImage: "https://img.freepik.com/free-photo/beautiful-pink-and-purple-flowers-growing-in-a-garden_181624-34850.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user"
          }
        ]
      }
    },
    {
      id: 2,
      title: "Весенний фестиваль в ботаническом саду",
      date: "2 мая",
      category: "Фестивали",
      imageUrl: "https://img.freepik.com/free-photo/beautiful-garden-at-night_1112-258.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user",
      images: [
        {
          img: "https://img.freepik.com/free-photo/top-view-of-botanical-garden_23-2150992398.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user",
          desc: "Разноцветные тюльпаны в ботаническом саду во время весеннего фестиваля, создающие яркие ковры и неповторимые пейзажи."
        },
        {
          img: "https://img.freepik.com/free-photo/path-with-benches-in-botanical-garden_1268-14545.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user",
          desc: "Гости фестиваля гуляют по цветочным аллеям, наслаждаясь ароматами и красотой природы, отдыхая от городской суеты."
        },
        {
          img: "https://img.freepik.com/free-photo/concert-stage-surrounded-by-trees-at-night_1112-143.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user",
          desc: "Музыкальная сцена, украшенная живыми цветами, где проходят выступления местных артистов и проводятся культурные мероприятия."
        }
      ],
      additionalInfo: {
        aboutAuthor: {
          name: "Дмитрий Смирнов",
          bio: "Дмитрий — ландшафтный дизайнер и фотограф, увлеченный природными пейзажами. Его снимки передают всю красоту и гармонию флоры, подчеркивая уникальность каждого растения и уголка сада.",
          avatar: "https://img.freepik.com/free-photo/portrait-handsome-man-with-beard-garden_1112-132.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user"
        },
        relatedFacts: [
          {
            factText: "Ботанический сад Ташкента является одним из крупнейших в Центральной Азии, его площадь составляет более 60 гектаров, что делает его идеальным местом для прогулок.",
            factImage: "https://img.freepik.com/free-photo/botanical-garden-with-beautiful-flowers_1112-250.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user"
          },
          {
            factText: "На его территории произрастает более 4500 видов растений со всего мира, включая редкие и исчезающие виды, поддерживаемые специальными программами.",
            factImage: "https://img.freepik.com/free-photo/beautiful-plants-botanical-garden_1112-243.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user"
          }
        ]
      }
    },
    {
      id: 3,
      title: "Парад цветов на главной площади",
      date: "3 мая",
      category: "Фестивали",
      imageUrl: "https://s.rfi.fr/media/display/35d7a1a0-5baf-11ef-916e-005056a97e36/w:980/p:16x9/2024-08-15T114752Z_769966374_RC2BG9AT1FWC_RTRMADP_3_BELGIUM-FLOWERS.JPG",
      images: [
        {
          img: "https://img.freepik.com/free-photo/flower-parade-at-carnival-in-portugal_1203-3882.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user",
          desc: "Колонны людей несут огромные цветочные скульптуры по площади, создавая незабываемое зрелище и атмосферу праздника."
        },
        {
          img: "https://img.freepik.com/free-photo/flower-parade_1359-2516.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user",
          desc: "Цветочные арки и праздничное оформление главной улицы города, превращающие ее в цветущий тоннель."
        },
        {
          img: "https://img.freepik.com/free-photo/happy-family-at-a-parade_1150-1378.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user",
          desc: "Дети с венками из живых цветов, радостно участвующие в шествии и дарящие улыбки прохожим, создавая атмосферу всеобщего веселья."
        }
      ],
      additionalInfo: {
        aboutAuthor: {
          name: "Мария Петрова",
          bio: "Мария - фотограф, специализирующаяся на общегородских мероприятиях. Ее снимки передают энергию и масштаб событий, погружая зрителя в атмосферу праздника и радости.",
          avatar: "https://img.freepik.com/free-photo/happy-young-woman-with-camera_23-2147774130.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user"
        },
        relatedFacts: [
          {
            factText: "Парад цветов является кульминацией весенних праздников, привлекая внимание как местных жителей, так и туристов со всего мира.",
            factImage: "https://img.freepik.com/free-photo/people-attending-a-street-festival_1203-3888.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user"
          },
          {
            factText: "Для создания композиций используются сотни тысяч свежих цветов, тщательно подобранных флористами и дизайнерами, работающими над парадом.",
            factImage: "https://img.freepik.com/free-photo/colorful-flowers-decoration-on-a-street_1203-3935.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user"
          }
        ]
      }
    },
    {
      id: 4,
      title: "Ночной световой шоу-фестиваль",
      date: "3 мая",
      category: "Фестивали",
      imageUrl: "https://russian.shanghai.gov.cn/cmsres/36/3614705893d8458d9e468a1e152ec567/9f6b906bbc9d8fb520bc173e9ec37ed6.jpg",
      images: [
        {
          img: "https://img.freepik.com/free-photo/blue-stage-lights_1203-2479.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user",
          desc: "Потрясающие световые инсталляции и проекции на зданиях в ночи, создающие футуристический и завораживающий пейзаж."
        },
        {img: "https://img.freepik.com/free-photo/party-crowd-with-colorful-lights_23-2148782434.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user",
          desc: "Толпы людей наблюдают шоу под музыку и свет, завороженно следя за каждым движением лучей и наслаждаясь атмосферой праздника."
        },
        {
          img: "https://img.freepik.com/free-photo/fireworks-display_1203-2476.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user",
          desc: "Заключительный фейерверк над цветочной площадкой, озаряющий ночное небо яркими всполохами и оставляющий незабываемые впечатления."
        }
      ],
      additionalInfo: {
        aboutAuthor: {
          name: "Сергей Козлов",
          bio: "Сергей — мастер ночной фотографии, его работы создают волшебную атмосферу и передают всю магию световых шоу, делая невидимое видимым и подчеркивая их красоту.",
          avatar: "https://img.freepik.com/free-photo/portrait-of-a-male-photographer-in-a-park_23-2148202970.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user"
        },
        relatedFacts: [
          {
            factText: "Фестиваль света привлекает международных дизайнеров и художников, которые представляют свои уникальные проекты, создавая новые тенденции в световом искусстве.",
            factImage: "https://img.freepik.com/free-photo/colorful-light-show-at-night_23-2148782428.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user"
          },
          {
            factText: "Каждый год разрабатываются новые уникальные световые инсталляции, использующие передовые технологии и инновационные подходы к дизайну.",
            factImage: "https://img.freepik.com/free-photo/abstract-light-trails-in-motion_23-2148782431.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user"
          }
        ]
      }
    },
    {
      id: 5,
      title: "Выставка экзотических цветов",
      date: "4 мая",
      category: "Выставки",
      imageUrl: "https://gtrk-kaluga.ru/public/upload/news/17651/gallery/cvetov020213.jpg",
      images: [
        {
          img: "https://img.freepik.com/free-photo/beautiful-orchid-flowers_1203-2417.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user",
          desc: "Крупные планы редких орхидей и суккулентов, демонстрирующих необычные формы и расцветки, привлекающие внимание ценителей."
        },
        {
          img: "https://img.freepik.com/free-photo/woman-arranging-flowers-in-a-flower-shop_23-2148722423.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user",
          desc: "Садоводы демонстрируют свои лучшие достижения и проводят мастер-классы для посетителей, делясь секретами выращивания."
        },
        {
          img: "https://img.freepik.com/free-photo/flower-arranging-class_23-2147774133.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user",
          desc: "Интерактивные стенды для создания букетов, где каждый может попробовать себя в роли флориста и создать свою уникальную композицию."
        }
      ],
      additionalInfo: {
        aboutAuthor: {
          name: "Елена Фадеева",
          bio: "Елена — ботаник и фотограф, ее работы погружают в мир удивительных и редких растений. Она ищет вдохновение в каждом лепестке, раскрывая их скрытую красоту и уникальность.",
          avatar: "https://img.freepik.com/free-photo/portrait-of-a-woman-with-flowers_23-2148722415.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user"
        },
        relatedFacts: [
          {
            factText: "На выставке представлены виды растений из тропических лесов и пустынь, адаптированные к местным условиям и демонстрирующие свою устойчивость.",
            factImage: "https://img.freepik.com/free-photo/tropical-plants-in-a-botanical-garden_1112-257.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user"
          },
          {
            factText: "Посетители могут получить консультации по уходу за экзотическими цветами от ведущих специалистов и узнать о последних достижениях в области цветоводства.",factImage: "https://img.freepik.com/free-photo/gardener-working-in-greenhouse_1112-249.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user"
          }
        ]
      }
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
          desc: "Участники конкурса создают сложные цветочные композиции, демонстрируя свое мастерство и креативность, используя различные техники и материалы."
        },
        {
          img: "https://img.freepik.com/free-photo/judges-at-a-flower-show_1203-2411.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user",
          desc: "Жюри оценивает работы флористов, учитывая оригинальность, технику и гармонию композиции, а также инновационный подход."
        },
        {
          img: "https://img.freepik.com/free-photo/award-ceremony-at-a-flower-show_1203-2408.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user",
          desc: "Победители получают награды на церемонии закрытия, под аплодисменты публики и коллег, отмечая их вклад в искусство флористики."
        }
      ],
      additionalInfo: {
        aboutAuthor: {
          name: "Игорь Владимиров",
          bio: "Игорь — известный флорист и судья многих международных конкурсов. Его взгляд на искусство сочетания цветов уникален, он видит красоту в каждой детали и создает шедевры из растений.",
          avatar: "https://img.freepik.com/free-photo/close-up-male-florist-working_23-2148722421.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user"
        },
        relatedFacts: [
          {
            factText: "Конкурс проводится в нескольких номинациях, включая свадебную, авангардную и классическую флористику, что позволяет участникам проявить свои таланты.",
            factImage: "https://img.freepik.com/free-photo/floral-arrangement-on-a-table_1203-2407.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user"
          },
          {
            factText: "Лучшие работы будут представлены на международных выставках и получат широкое признание, способствуя развитию флористического искусства.",
            factImage: "https://img.freepik.com/free-photo/flower-arrangements_1203-2406.jpg?size=626&ext=jpg&ga=GA1.1.200378776.1717871400&semt=ais_user"
          }
        ]
      }
    },
   
  ]);

  const handleClick = (id) => {
    navigate(`/pictures/${id}`); 
  };
  const {t} = useTranslation()

  return (
    <div className='md:my-10'>
      <h1 className='text-[28px] font-bold mb-6'>{t("pictures")}</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {data.map((item) => (
          <div
            key={item.id}
            onClick={() => handleClick(item.id)} 
            className='rounded-xl overflow-hidden shadow-md border cursor-pointer hover:shadow-lg transition-shadow duration-200'
          >
            <img src={item.imageUrl} alt={item.title} className='w-full h-48 object-cover'
                 onError={(e) => {
                   e.currentTarget.onerror = null;
                   e.currentTarget.src = "https://via.placeholder.com/400x200/BBBBBB/777777?text=Ошибка+загрузки"; 
                 }}
            />
            <div className='p-4'>
              <p className='text-sm text-gray-500'>{item.date} · {item.category}</p>
              <h2 className='text-lg font-semibold mt-2'>{item.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pictures;