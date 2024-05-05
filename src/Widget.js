import React from 'react';
import './Widget.css'; // Import the CSS file
import logo from './FINALGETOVER.jpg';

export default function Widget() {
  const newsImages = [
    "https://s.yimg.com/ny/api/res/1.2/ssq0bX2QFr1mdrJVyK3VKw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD02OTk7Y2Y9d2VicA--/https://media.zenfs.com/en/cnn_articles_875/ebc36a7f6a9a55fca541010544e4c738",
    "https://s.yimg.com/ny/api/res/1.2/RMrJo50955qCqXHCtFObdQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD02OTk7Y2Y9d2VicA--/https://media.zenfs.com/en/cnn_articles_875/168b465963483444fc86d46fbbf10072",
    "https://s2-home-globo.glbimg.com/r6s8CQ9vikrYGEh9PjUT1uDTAlY=/26x12:542x302/fit-in/515x290/middle/smart/filters:strip_icc():strip_exif()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2024/n/q/RtyaJeT9a1IT8eZjijIQ/fotojet-2024-05-05t105056.151.jpg",
    "https://news-pctr.c.yimg.jp/uUzvQ3lML_bkIqyakc1vFhNrRI0RUQxg5aFkrX0xDg1_T0wXrbEJjtNGtrf1o9y3ZCnndWkH2LG2Odz5YYqgMsdmBzI20vCB8dIs9hhKwFqSfXIru26AwhWv-2_nCF25209oNZXCb9iSd1dLr3EeWJN8vDnIIOie31Tvtqaa86rRa5ttjNIv5DMt_VcahYE7EDEgEG8pdUkFE_j38v10aQ==",
    "https://neoreach.com/wp-content/uploads/2018/06/Top-10-Models-on-Instagram.jpeg",
    "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iONGBFFjFJ6c/v1/-1x-1.jpg"
  ];

  // URLs to link each image
  const imageLinks = [
    "https://www.yahoo.com/news/israel-close-al-jazeera-news-110320406.html",
    "https://www.yahoo.com/tech/boeing-nasa-longtime-partner-may-232303275.html",
    "https://g1.globo.com/sc/santa-catarina/noticia/2024/05/05/video-onibus-escolar-capinzal.ghtml",
    "https://news.yahoo.co.jp/articles/9cb738ec7e85f2c648f91710185b9537bca55611",
    "https://www.instagram.com/zlata.models/",
    "https://www.aljazeera.com/news/2024/3/28/amid-legal-woes-brazils-bolsonaro-seeks-passport-return-for-israel-trip"
  ];

  // Descriptions for each image
  const descriptions = [
    "Netanyahu: 'Al Jazeera will be closed in Israel'(CNN)",
    "Boeing and NASA decide to move forward with historic crewed launch of new spacecraft(CNN)",
    "Video: School Bus with 12 students in flooding, Brazil(globo.com)",
    "42-year-old Mamatare shows off swimsuit for the first time in 20 years, 55-year-old husband comedian and two children(Shiritsu Sports)",
    "Daily IG Model Page(Instagram)",
    "Amid legal woes, Brazil’s Bolsonaro seeks passport return for Israel trip(AlJazeera)"
  ];

  return (
    <div className="widget-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8">
          <div className="md:col-span-2">
             {/* Logo */}
             <div className="logo-container">
              <img src={logo} alt="GoNewsLogo" className="logo" style={{width:'200px', height:'200px'}} />
             </div>
            <div className="bg-white dark:bg-zinc-800 shadow rounded-lg p-4">
              <div className="center-content">
                <a href="https://therealnews.com/inside-the-student-intifada-a-roundtable-with-campus-organizers" target="_blank" rel="noopener noreferrer"> {/* Main image link */}
                    <img src="https://i0.wp.com/therealnews.com/wp-content/uploads/2024/05/GettyImages-2150308877-scaled.jpg?resize=1200%2C900&ssl=1" alt="Main" className="rounded-lg mb-4" style={{width:'600px', height:'350px'}} />
                </a>
                <h2 className="font-bold text-xl">Inside the ‘Student Intifada’: A roundtable with campus organizers(therealnews.com)'</h2>
                <p className="text-zinc-700 dark:text-zinc-300 mt-2">Students organizing for divestment from Stanford, Indiana University, University of Michigan, and other schools share experiences and lessons from the ground.</p>
              </div>
            </div>
            <div className="news-grid">
              {[...Array(6)].map((_, index) => (
                <div className="news-item" key={index}>
                  <a href={imageLinks[index]} target="_blank" rel="noopener noreferrer"> {/* Open link in new tab */}
                    <div className="image-container">
                      <img src={newsImages[index]} alt="News" className="news-image rounded-lg mr-4" />
                      <p>{descriptions[index]}</p> {/* Description underneath each picture */}
                    </div>
                  </a>
                </div>
              ))}
            </div>
            {/* Footer */}
            <div className="footer">
              G.O. News 2024
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
