const projects = [
  {
    title: "COVID-19 RADAR",
    description:
      "A COVID-19 dashboard application consisting of worldwide and Indonesia COVID-19 stats, timeline chart, live cases and prevention tips in an easy to use UI. It is built with the power of web components which make it easy to scale and maintenance as the UI is consisted of multiple components.",
    image: "/images/covid19-radar.png",
    projectLink: "https://covid19radar.netlify.app/",
    githubLink: "https://github.com/rizkyzhang/covid19-radar",
    isScrapingProject: false,
  },
  {
    title: "LQ45 Stocks REST API",
    description:
      "A REST API that shows historical data of all LQ45 stocks. The historical data is consisted of open price, close price, high price, low price, adjusted close price and trade volume. The data is obtained by the combination web scraping and yfinance library.",
    image: "/images/lq45-api.png",
    projectLink: "https://lq45api.herokuapp.com/api",
    githubLink: "https://github.com/rizkyzhang/lq45-api",
    isScrapingProject: false,
  },
  {
    title: "Yahoo Finance LQ45 Scraper",
    description:
      "A web scraper that scrape LQ45 stock list from kontan.co.id, then using it to fetch historical stocks data from yfinance library and finally save the data to remote MySQL server. The historical data can then be used for data analysis.",
    image: "/images/lq45-sql.png",
    projectLink:
      "https://colab.research.google.com/drive/14hbTQJIVPixBe_6JODN_YUNNljkgfaTs",
    isScrapingProject: true,
  },
  {
    title: "Promo Scraper",
    description:
      "A web scraper that scrape promo informations like cashback for several websites such as Ajaib, Bibit and Line Bank. The purpose of this project is to help gain promo informations faster without having to manually find the promo. The output is delivered in a clean and human readable format.",
    projectLink: "https://covid19radar.netlify.app/",
    image: "/images/promo-scraper.png",
    githubLink:
      "https://colab.research.google.com/drive/1_9wesHYkAMBjt2_87J2ii5cIffwkIBVn",
    isScrapingProject: true,
  },
  {
    title: "Football Radar",
    description:
      "A Progressive Web Application that shows football informations. The UI is built using Materialize CSS. As a PWA, it is capable of working in offline mode by using previously stored cache. Another notable feature is ability to store data in IndexedDB storage, as seen with the favorite team feature. It is also able to send push message from the server via Firebase Cloud Messaging integration.",
    image: "/images/football-radar.png",
    projectLink: "https://footballradar.netlify.app/",
    githubLink: "https://github.com/rizkyzhang/football-radar",
    isScrapingProject: false,
  },
];

export default projects;
