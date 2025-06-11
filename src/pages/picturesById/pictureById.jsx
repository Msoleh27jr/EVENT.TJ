import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PictureById = () => {
  const { id } = useParams();
  const [activeItem, setActiveItem] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const [allData] = useState([
    {
      id: 1,
      title: "В Ташкенте стартовал фестиваль цветов.",
      date: "1 мая",
      category: "Фестивали",
      imageUrl: "https://www.gazeta.uz/media/img/2025/05/IgvcSS17461014091353_l.webp",
      images: [
        {
          img: "https://eurasiatoday.ru/wp-content/uploads/2025/04/iPuxzq16519617654486_l.jpg?v=1745899671",
          desc: "Цветочная композиция на площади у Национальной библиотеки Узбекистана во время Ташкентского фестиваля цветов."
        },
        {
          img: "https://resizer.mail.ru/p/28d90474-fe1d-5cf9-8f87-061968dc2b07/AQAGyCzDzUwKka4FVRpn2qHogLbbNJ-x88HpEQDbRuLRYaz8K6Ovqgoc4V1DzI-wNLSoTKMWPOKMIzVI65dSzXkZgjo.jpg",
          desc: "Посетители фестиваля рассматривают яркие узоры из цветов и наслаждаются красотой цветущих инсталляций."
        },
        {
          img: "https://asi.org.ru/wp-content/uploads/2018/02/IMG_1168-e1519733613130.jpg",
          desc: "Сцена фестиваля, украшенная баннерами и живыми цветами, где проходят выступления артистов и музыкантов."
        }
      ],
      additionalInfo: {

        relatedFacts: [
          {
            factText: "Ташкентский фестиваль цветов проводится ежегодно и собирает тысячи посетителей со всего мира, становясь крупным международным событием.",
            factImage: "https://aktualno.uz/storage/15/5f/46/20886/conversions/%D1%86%D0%B2%D0%B5%D1%82%D1%8B-1-1.05-xl.jpg"
          },
          {
            factText: "В этом году было представлено более 500 видов растений, включая редкие и экзотические цветы, выращенные специально для этого события.",
            factImage: "https://storage.kun.uz/source/8/kxjggHaH1C5OaBnUamIfV7hY6tZrHmhF.jpg"
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
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqD6AF8vfWOijj0y6-lTJEyjswnrn_kW7xFQ&s",
          desc: "Разноцветные тюльпаны в ботаническом саду во время весеннего фестиваля, создающие яркие ковры и неповторимые пейзажи."
        },
        {
          img: "https://turpiter.ru/wp-content/uploads/2019/05/festival-tiulpanov-elagin-fotografiia-turist-foto.jpg",
          desc: "Гости фестиваля гуляют по цветочным аллеям, наслаждаясь ароматами и красотой природы, отдыхая от городской суеты."
        },
        {
          img: "https://static.insales-cdn.com/files/1/3326/2182398/original/%D1%86%D0%B2%D0%B5%D1%82%D1%8B_%D0%BD%D0%B0_%D0%BA%D0%BE%D0%BD%D1%84%D0%B5%D1%80%D0%B5%D0%BD%D1%86%D0%B8%D1%8E_%D0%B2_%D0%A0%D0%B8%D0%BA%D1%81%D0%BE%D1%81.jpg",
          desc: "Музыкальная сцена, украшенная живыми цветами, где проходят выступления местных артистов и проводятся культурные мероприятия."
        }
      ],
      additionalInfo: {relatedFacts: [
          {
            factText: "Ботанический сад Ташкента является одним из крупнейших в Центральной Азии, его площадь составляет более 60 гектаров, что делает его идеальным местом для прогулок.",
            factImage: "https://4traveler.me/sites/default/files/user_images/travel/uzbekistan/tashkent/2024/tashkent_botan/DSC01917.jpg"
          },
          {
            factText: "На его территории произрастает более 4500 видов растений со всего мира, включая редкие и исчезающие виды, поддерживаемые специальными программами.",
            factImage: "https://www.orexca.com/img/uzbekistan/tashkent/botanic-garden3.jpg"
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
          img: "https://www.gazeta.uz/media/img/2022/05/iPuxzq16519617654486_l.jpg",
          desc: "Колонны людей несут огромные цветочные скульптуры по площади, создавая незабываемое зрелище и атмосферу праздника."
        },
        {
          img: "https://tovary4you.ru/photos2/ya20.jpg",
          desc: "Цветочные арки и праздничное оформление главной улицы города, превращающие ее в цветущий тоннель."
        },
        {
          img: "https://amournsk.ru/upload/img/19-06-18/1.jpg",
          desc: "Дети с венками из живых цветов, радостно участвующие в шествии и дарящие улыбки прохожим, создавая атмосферу всеобщего веселья."
        }
      ],
      additionalInfo: {

        relatedFacts: [
          {
            factText: "Парад цветов является кульминацией весенних праздников, привлекая внимание как местных жителей, так и туристов со всего мира.",
            factImage: "https://khovar.tj/rus/wp-content/uploads/2019/03/Navruz-5.jpg"
          },
          {
            factText: "Для создания композиций используются сотни тысяч свежих цветов, тщательно подобранных флористами и дизайнерами, работающими над парадом.",
            factImage: "https://cveti32.ru/wp-content/uploads/2021/08/svezhie-cvety-1.jpg"
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
          img: "https://dpru.obs.ru-moscow-1.hc.sbercloud.ru/images/article/2023/12/27/48b91d4f-6543-4328-b950-94217a3493fb_F.jpg",
          desc: "Потрясающие световые инсталляции и проекции на зданиях в ночи, создающие футуристический и завораживающий пейзаж."
        },
        {
          img: "https://catalonialife.com/sites/default/files/blog-images/img_20240202_225458_small.jpg",
          desc: "Толпы людей наблюдают шоу под музыку и свет, завороженно следя за каждым движением лучей и наслаждаясь атмосферой праздника."
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQshh9reA7ntCHevPVoahL2kfQClxhJ4IP5NA&s",
          desc: "Заключительный фейерверк над цветочной площадкой, озаряющий ночное небо яркими всполохами и оставляющий незабываемые впечатления."
        }
      ],
      additionalInfo: {relatedFacts: [
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
          img: "https://lh4.googleusercontent.com/9wx2XKgBAgfQfOFsK1f0uC-NE9D-eKSuo_8ic-kQgUD_rrExFElPmDnYZ8C2QPFBvEDH5MAQYTpd5QuPK2f-_Tbs2ElpBpq36fZTItDkmOGUosFL2HQXeZTqhFLTbSYZS6tMseODzJMHaJtKYiFpSY0",
          desc: "Крупные планы редких орхидей и суккулентов, демонстрирующих необычные формы и расцветки, привлекающие внимание ценителей."
        },
        {
          img: "https://24tv.ua/resources/photos/news/202505/2831416.jpg?v=1748265569000",
          desc: "Садоводы демонстрируют свои лучшие достижения и проводят мастер-классы для посетителей, делясь секретами выращивания."
        },
        {
          img: "https://zvetnoe.ru/upload/images/blog/020/17.jpg",
          desc: "Интерактивные стенды для создания букетов, где каждый может попробовать себя в роли флориста и создать свою уникальную композицию."
        }
      ],
      additionalInfo: {

        relatedFacts: [
          {
            factText: "На выставке представлены виды растений из тропических лесов и пустынь, адаптированные к местным условиям и демонстрирующие свою устойчивость.",
            factImage: "https://murman.tv/images/news/2023/04/24/11028/cveti.jpg"
          },
          {
            factText: "Посетители могут получить консультации по уходу за экзотическими цветами от ведущих специалистов и узнать о последних достижениях в области цветоводства.",
            factImage: "https://storage01.sb.by/iblock/39a/39a67106c3fc5fb6ea0051b5d9fc2492/b0e52d3df4462093e889d1882499c2ea.jpg"
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
          img: "https://nastgaz.by/wp-content/uploads/2023/09/IMG_9321-1024x683.jpg",
          desc: "Участники конкурса создают сложные цветочные композиции, демонстрируя свое мастерство и креативность, используя различные техники и материалы."
        },
        {
          img: "https://static.tildacdn.com/tild6336-6662-4261-b432-333235303437/615A1242.jpg",
          desc: "Жюри оценивает работы флористов, учитывая оригинальность, технику и гармонию композиции, а также инновационный подход."
        },
        {
          img: "https://www.wuor.ru/upload/resize_cache/iblock/fa2/770_514_1/z191isnrkeg6kajpxl1xqg4m56nsicj7.jpeg",
          desc: "Победители получают награды на церемонии закрытия, под аплодисменты публики и коллег, отмечая их вклад в искусство флористики."
        }
      ],
      additionalInfo: {relatedFacts: [
          {
            factText: "Конкурс проводится в нескольких номинациях, включая свадебную, авангардную и классическую флористику, что позволяет участникам проявить свои таланты.",
            factImage: "https://rcek.by/wp-content/uploads/2021/02/ukrasim-Belarus-tsvetami-1.jpg"
          },
          {
            factText: "Лучшие работы будут представлены на международных выставках и получат широкое признание, способствуя развитию флористического искусства.",
            factImage: "https://openchina.com.ua/wp-content/uploads/the_25th_china_international_petroleum__petrochmical_technology_and_equipment_exhibition.jpg"
          }
        ]
      }
    },

  ]);

  useEffect(() => {
    if (id) {
      const foundItem = allData.find(item => item.id === parseInt(id));
      setActiveItem(foundItem);
      setSelectedImageIndex(0);
    }
  }, [id, allData]);

  if (!activeItem) {
    return <div className="text-center p-4 text-xl">Загрузка или элемент не найден...</div>;
  }


  const currentInnerImage = activeItem.images?.[selectedImageIndex];

  return (
    <div className="flex flex-col md:flex-row gap-5 p-5 mx-auto">

      <div className="flex-grow-[3] md:w-[65%] p-5 border border-gray-200 rounded-lg shadow-md text-center">

        <img
          src={activeItem.imageUrl}
          alt={activeItem.title}
          className="max-w-full h-auto rounded-md mb-4 object-cover w-full max-h-[500px]"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "https://via.placeholder.com/800x500/CCCCCC/888888?text=Ошибка+загрузки+основного+изображения";
          }}
        />


        <h2 className="text-3xl font-semibold mb-2 text-gray-800">{activeItem.title}</h2>
        <p className="text-lg text-gray-600 mb-3">{activeItem.date} · {activeItem.category}</p>


        {activeItem.images && activeItem.images.length > 1 && (
          <div className="flex justify-center gap-2 mt-4 flex-wrap mb-6">
            {activeItem.images.map((img, index) => (
              <img
                key={index}
                src={img.img}
                className={`w-20 h-16 object-cover rounded-sm cursor-pointer border-2 ${selectedImageIndex === index ? 'border-blue-500' : 'border-transparent'} hover:border-blue-300 transition-colors duration-200`}
                onClick={() => setSelectedImageIndex(index)}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "https://via.placeholder.com/80x60/BBBBBB/777777?text=Ошибка";
                }}
              />
            ))}
          </div>
        )}


        {currentInnerImage && (
          <img
            src={currentInnerImage.img}
            alt={currentInnerImage.desc}
            className="max-w-full h-auto rounded-md mb-4 object-cover w-full max-h-[400px]"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "https://via.placeholder.com/800x400/DDDDDD/666666?text=Ошибка+загрузки+доп.изображения";
            }}
          />
        )}

        {currentInnerImage?.desc && (
          <p className="text-base text-gray-700 leading-relaxed mb-6 text-left">{currentInnerImage.desc}</p>
        )}{activeItem.additionalInfo?.relatedFacts && activeItem.additionalInfo.relatedFacts.length > 0 && (
          <div className="mt-6 pt-4 border-t border-gray-200 text-left">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Интересные факты</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeItem.additionalInfo.relatedFacts.slice(0, 2).map((fact, index) => (
                <div key={index} className="border border-gray-300 rounded-lg p-3">
                  <img
                    src={fact.factImage}
                    alt={`Факт ${index + 1}`}
                    className="w-full h-32 object-cover rounded-md mb-2"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "https://via.placeholder.com/300x200/BBBBBB/777777?text=Ошибка";
                    }}
                  />
                  <p className="text-sm text-gray-700">{fact.factText}</p>
                </div>
              ))}
            </div>
          </div>
        )}



      </div>


      <div className="flex-grow-[2] md:w-[35%] flex flex-col gap-4 p-5 border border-gray-200 rounded-lg shadow-sm overflow-y-auto max-h-[80vh]">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">Так же вам может быть интересно</h3>
        {allData.filter(item => item.id !== activeItem.id).map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 p-3 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50 transition-colors duration-200 ease-in-out"
            onClick={() => {
              setActiveItem(item);
              setSelectedImageIndex(0);
            }}
          >
            <img
              src={item.imageUrl || (item.images && item.images[0]?.img)}
              alt={item.title}
              className="w-24 h-16 object-cover rounded-sm"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "https://via.placeholder.com/150x100/BBBBBB/777777?text=Ошибка";
              }}
            />
            <div>
              <h3 className="text-base font-medium text-gray-700 m-0">{item.title}</h3>
              <p className="text-sm text-gray-500 m-0">{item.date} · {item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PictureById;