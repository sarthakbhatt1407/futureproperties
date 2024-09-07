import React from "react";
import styled from "styled-components";
import PcNav from "../components/PcNav";
import MobileBottomNavigation from "../components/MobileBottomNavigation";
import { Select, Space } from "antd";
import { Link } from "react-router-dom";
import ReadyToLaunch from "../components/ReadyToLaunch";
import Footer from "../components/Footer";
const MainBox = styled.div`
  position: relative;
  height: 100svh;
`;
const ContentBox = styled.div`
  height: 100svh;
  overflow: scroll;
  @media only screen and (min-width: 0px) and (max-width: 700px) {
    height: 91.5svh;
  }
`;
const HeadingAndSearch = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin: auto;
  span {
    text-transform: capitalize;
    color: #777;
    font-size: 1rem;
    margin-bottom: -2.3rem;
    margin: 1rem 0;
  }
  h1 {
    font-size: 3rem;
    font-weight: 400;
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: black;
  }
  @media only screen and (max-width: 1099px) {
    width: 100%;
    h1 {
      font-size: 2rem;
      margin-top: 1rem;
      margin-bottom: 0rem;
      padding: 0 1rem;
    }
    span {
      font-size: 0.8rem;
      margin: 0;
      margin-left: 1rem;
    }
  }
`;

const FilterAndSearchBox = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  width: 40%;
  @media only screen and (max-width: 1099px) {
    width: 95%;
    margin: auto;
    justify-content: center;
    align-items: center;
    margin-top: -1rem;
  }
`;
const Input = styled.input`
  width: 70%;
  padding: 1rem 2rem;
  border: 1px solid #e8e8e8;
  border-radius: 3rem;
  box-shadow: 0.1rem 0.2rem 0.5rem #eaeaea;
  outline: none;
  @media only screen and (max-width: 1099px) {
    width: 70%;
  }
`;
const DetailPara = styled.p`
  color: #777;
  font-size: 1.6rem;
  @media only screen and (max-width: 1099px) {
    padding: 1rem;
    font-size: 1.2rem;
  }
`;
const ResultAndFilter = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  margin: auto;
  @media only screen and (max-width: 1099px) {
    width: 97%;
    flex-direction: column;
    align-items: start;
    margin-top: -1rem;
  }
`;

const PropertiesBox = styled.div`
  /* display: flex;

  align-items: center;
  gap: 1rem;
  padding: 1rem 0.2rem 1rem 0.5rem;
  a {
    text-decoration: none;
    margin: 0;
  }
  &::-webkit-scrollbar {
    display: none;
  } */
  width: 90%;
  margin: 3rem auto;
`;

const PropertyBox = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem 0;
  box-shadow: 0.1rem 0.1rem 0.5rem #eeeded;
  border-radius: 0.4rem;
  overflow: hidden;
  a {
    border-radius: 0.4rem;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 2rem;
    text-decoration: none;
    height: 30svh;
    @media only screen and (min-width: 0px) and (max-width: 700px) {
      flex-direction: column;
      height: fit-content;
      gap: 0.9rem;
    }
  }
  img {
    width: 25rem;
    height: 100%;
  }
  div {
    padding: 1rem 0.3rem;
    display: flex;
    width: 60%;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    span {
      font-size: 1.2rem;
      color: #5f5f5f;
      margin-top: 1rem;
    }
    p {
      color: black;
      margin: -0.9rem 0;
      font-weight: 400;
      text-transform: capitalize;
      font-size: 1.8rem;
      letter-spacing: 0.07rem;
    }
  }
  @media only screen and (min-width: 0px) and (max-width: 700px) {
    img {
      width: 100%;
      height: 100%;
    }
    div {
      width: 90%;
      justify-content: start;
      gap: 0.5rem;
      span {
        font-size: 0.8rem;
      }
      p {
        font-size: 1.1rem;
      }
    }
  }
`;

const AllNews = () => {
  const newsArticle = [
    {
      title: "Stamp duties in India's Tier-1 , 2, 3 cities",
      desc: "Our user-friendly platform simplifies the real estate journey. Start by browsing our extensive listings of homes and properties",
      image:
        "https://www.rajyasameeksha.com/Uploads/7c3fe97e-1d0d-4f93-beb8-566e492dd953.jpg",
      summary:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste aliquid facilis quasi possimus, quo impedit eius amet officiis hic, suscipit soluta exercitationem explicabo asperiores earum voluptatem nobis velit ad, distinctio sint officia nam est? Accusamus magni ipsum voluptatum excepturi rerum eius rem repellat voluptate soluta. Maxime inventore eius eaque labore pariatur in recusandae ut commodi ea tempora explicabo iure, neque possimus dicta qui fuga consequuntur error maiores praesentium. Possimus perferendis harum quae, culpa similique sit enim, autem blanditiis cumque optio nam ex quo qui animi repudiandae placeat molestiae consequuntur eos dolore itaque. Vel quibusdam laboriosam illo dolorem? Tempore ratione, odio eos eaque odit earum pariatur nemo facilis qui eligendi officiis. Tenetur ipsa, laboriosam quis cum ullam repudiandae totam cupiditate alias fugiat laborum mollitia eligendi qui enim! Dolorum, ratione eos. Accusantium nemo fugiat eligendi beatae molestiae dolorum corporis quia pariatur asperiores perferendis quam non recusandae est facere, architecto voluptatem labore ex veritatis voluptates quas. Illum provident unde consequuntur. Sunt nobis quibusdam animi, fugiat eveniet quo a tenetur porro id nihil, non voluptatum est saepe aliquam aut voluptatem totam provident hic ea nesciunt. Molestias quia exercitationem quibusdam voluptate perspiciatis, ea, ut repellendus iusto voluptatibus nesciunt vitae tenetur fugit est blanditiis deserunt placeat delectus culpa at inventore. Modi quam, distinctio impedit aut perferendis porro vitae repudiandae repellendus laboriosam, eum nulla veniam voluptatem iure voluptatum rerum velit amet. Nisi excepturi numquam incidunt eius non quidem, facere rerum consectetur enim temporibus voluptatem animi omnis magnam hic error cumque accusantium, nostrum aliquam placeat mollitia assumenda recusandae accusamus? Dolorum, corporis? Cumque iure ipsa sit neque doloremque soluta dignissimos nulla dolores repellendus quae molestiae pariatur, eum nesciunt doloribus laborum, asperiores quam quaerat, provident consectetur autem! Maiores neque fuga minima ratione repudiandae laudantium? Asperiores porro ratione et animi libero autem illo laborum ea consequuntur. Esse, ipsum. Doloremque, aspernatur animi.",
    },
    {
      title: "Stamp duties in India's Tier-1 , 2, 3 cities",
      desc: "Our user-friendly platform simplifies the real estate journey. Start by browsing our extensive listings of homes and properties",
      image:
        "https://www.rajyasameeksha.com/Uploads/7c3fe97e-1d0d-4f93-beb8-566e492dd953.jpg",
      summary:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste aliquid facilis quasi possimus, quo impedit eius amet officiis hic, suscipit soluta exercitationem explicabo asperiores earum voluptatem nobis velit ad, distinctio sint officia nam est? Accusamus magni ipsum voluptatum excepturi rerum eius rem repellat voluptate soluta. Maxime inventore eius eaque labore pariatur in recusandae ut commodi ea tempora explicabo iure, neque possimus dicta qui fuga consequuntur error maiores praesentium. Possimus perferendis harum quae, culpa similique sit enim, autem blanditiis cumque optio nam ex quo qui animi repudiandae placeat molestiae consequuntur eos dolore itaque. Vel quibusdam laboriosam illo dolorem? Tempore ratione, odio eos eaque odit earum pariatur nemo facilis qui eligendi officiis. Tenetur ipsa, laboriosam quis cum ullam repudiandae totam cupiditate alias fugiat laborum mollitia eligendi qui enim! Dolorum, ratione eos. Accusantium nemo fugiat eligendi beatae molestiae dolorum corporis quia pariatur asperiores perferendis quam non recusandae est facere, architecto voluptatem labore ex veritatis voluptates quas. Illum provident unde consequuntur. Sunt nobis quibusdam animi, fugiat eveniet quo a tenetur porro id nihil, non voluptatum est saepe aliquam aut voluptatem totam provident hic ea nesciunt. Molestias quia exercitationem quibusdam voluptate perspiciatis, ea, ut repellendus iusto voluptatibus nesciunt vitae tenetur fugit est blanditiis deserunt placeat delectus culpa at inventore. Modi quam, distinctio impedit aut perferendis porro vitae repudiandae repellendus laboriosam, eum nulla veniam voluptatem iure voluptatum rerum velit amet. Nisi excepturi numquam incidunt eius non quidem, facere rerum consectetur enim temporibus voluptatem animi omnis magnam hic error cumque accusantium, nostrum aliquam placeat mollitia assumenda recusandae accusamus? Dolorum, corporis? Cumque iure ipsa sit neque doloremque soluta dignissimos nulla dolores repellendus quae molestiae pariatur, eum nesciunt doloribus laborum, asperiores quam quaerat, provident consectetur autem! Maiores neque fuga minima ratione repudiandae laudantium? Asperiores porro ratione et animi libero autem illo laborum ea consequuntur. Esse, ipsum. Doloremque, aspernatur animi.",
    },
    {
      title: "Stamp duties in India's Tier-1 , 2, 3 cities",
      desc: "Our user-friendly platform simplifies the real estate journey. Start by browsing our extensive listings of homes and properties",
      image:
        "https://www.rajyasameeksha.com/Uploads/7c3fe97e-1d0d-4f93-beb8-566e492dd953.jpg",
      summary:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste aliquid facilis quasi possimus, quo impedit eius amet officiis hic, suscipit soluta exercitationem explicabo asperiores earum voluptatem nobis velit ad, distinctio sint officia nam est? Accusamus magni ipsum voluptatum excepturi rerum eius rem repellat voluptate soluta. Maxime inventore eius eaque labore pariatur in recusandae ut commodi ea tempora explicabo iure, neque possimus dicta qui fuga consequuntur error maiores praesentium. Possimus perferendis harum quae, culpa similique sit enim, autem blanditiis cumque optio nam ex quo qui animi repudiandae placeat molestiae consequuntur eos dolore itaque. Vel quibusdam laboriosam illo dolorem? Tempore ratione, odio eos eaque odit earum pariatur nemo facilis qui eligendi officiis. Tenetur ipsa, laboriosam quis cum ullam repudiandae totam cupiditate alias fugiat laborum mollitia eligendi qui enim! Dolorum, ratione eos. Accusantium nemo fugiat eligendi beatae molestiae dolorum corporis quia pariatur asperiores perferendis quam non recusandae est facere, architecto voluptatem labore ex veritatis voluptates quas. Illum provident unde consequuntur. Sunt nobis quibusdam animi, fugiat eveniet quo a tenetur porro id nihil, non voluptatum est saepe aliquam aut voluptatem totam provident hic ea nesciunt. Molestias quia exercitationem quibusdam voluptate perspiciatis, ea, ut repellendus iusto voluptatibus nesciunt vitae tenetur fugit est blanditiis deserunt placeat delectus culpa at inventore. Modi quam, distinctio impedit aut perferendis porro vitae repudiandae repellendus laboriosam, eum nulla veniam voluptatem iure voluptatum rerum velit amet. Nisi excepturi numquam incidunt eius non quidem, facere rerum consectetur enim temporibus voluptatem animi omnis magnam hic error cumque accusantium, nostrum aliquam placeat mollitia assumenda recusandae accusamus? Dolorum, corporis? Cumque iure ipsa sit neque doloremque soluta dignissimos nulla dolores repellendus quae molestiae pariatur, eum nesciunt doloribus laborum, asperiores quam quaerat, provident consectetur autem! Maiores neque fuga minima ratione repudiandae laudantium? Asperiores porro ratione et animi libero autem illo laborum ea consequuntur. Esse, ipsum. Doloremque, aspernatur animi.",
    },
    {
      title: "Stamp duties in India's Tier-1 , 2, 3 cities",
      desc: "Our user-friendly platform simplifies the real estate journey. Start by browsing our extensive listings of homes and properties",
      image:
        "https://www.rajyasameeksha.com/Uploads/7c3fe97e-1d0d-4f93-beb8-566e492dd953.jpg",
      summary:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste aliquid facilis quasi possimus, quo impedit eius amet officiis hic, suscipit soluta exercitationem explicabo asperiores earum voluptatem nobis velit ad, distinctio sint officia nam est? Accusamus magni ipsum voluptatum excepturi rerum eius rem repellat voluptate soluta. Maxime inventore eius eaque labore pariatur in recusandae ut commodi ea tempora explicabo iure, neque possimus dicta qui fuga consequuntur error maiores praesentium. Possimus perferendis harum quae, culpa similique sit enim, autem blanditiis cumque optio nam ex quo qui animi repudiandae placeat molestiae consequuntur eos dolore itaque. Vel quibusdam laboriosam illo dolorem? Tempore ratione, odio eos eaque odit earum pariatur nemo facilis qui eligendi officiis. Tenetur ipsa, laboriosam quis cum ullam repudiandae totam cupiditate alias fugiat laborum mollitia eligendi qui enim! Dolorum, ratione eos. Accusantium nemo fugiat eligendi beatae molestiae dolorum corporis quia pariatur asperiores perferendis quam non recusandae est facere, architecto voluptatem labore ex veritatis voluptates quas. Illum provident unde consequuntur. Sunt nobis quibusdam animi, fugiat eveniet quo a tenetur porro id nihil, non voluptatum est saepe aliquam aut voluptatem totam provident hic ea nesciunt. Molestias quia exercitationem quibusdam voluptate perspiciatis, ea, ut repellendus iusto voluptatibus nesciunt vitae tenetur fugit est blanditiis deserunt placeat delectus culpa at inventore. Modi quam, distinctio impedit aut perferendis porro vitae repudiandae repellendus laboriosam, eum nulla veniam voluptatem iure voluptatum rerum velit amet. Nisi excepturi numquam incidunt eius non quidem, facere rerum consectetur enim temporibus voluptatem animi omnis magnam hic error cumque accusantium, nostrum aliquam placeat mollitia assumenda recusandae accusamus? Dolorum, corporis? Cumque iure ipsa sit neque doloremque soluta dignissimos nulla dolores repellendus quae molestiae pariatur, eum nesciunt doloribus laborum, asperiores quam quaerat, provident consectetur autem! Maiores neque fuga minima ratione repudiandae laudantium? Asperiores porro ratione et animi libero autem illo laborum ea consequuntur. Esse, ipsum. Doloremque, aspernatur animi.",
    },
    {
      title: "Stamp duties in India's Tier-1 , 2, 3 cities",
      desc: "Our user-friendly platform simplifies the real estate journey. Start by browsing our extensive listings of homes and properties",
      image:
        "https://www.rajyasameeksha.com/Uploads/7c3fe97e-1d0d-4f93-beb8-566e492dd953.jpg",
      summary:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste aliquid facilis quasi possimus, quo impedit eius amet officiis hic, suscipit soluta exercitationem explicabo asperiores earum voluptatem nobis velit ad, distinctio sint officia nam est? Accusamus magni ipsum voluptatum excepturi rerum eius rem repellat voluptate soluta. Maxime inventore eius eaque labore pariatur in recusandae ut commodi ea tempora explicabo iure, neque possimus dicta qui fuga consequuntur error maiores praesentium. Possimus perferendis harum quae, culpa similique sit enim, autem blanditiis cumque optio nam ex quo qui animi repudiandae placeat molestiae consequuntur eos dolore itaque. Vel quibusdam laboriosam illo dolorem? Tempore ratione, odio eos eaque odit earum pariatur nemo facilis qui eligendi officiis. Tenetur ipsa, laboriosam quis cum ullam repudiandae totam cupiditate alias fugiat laborum mollitia eligendi qui enim! Dolorum, ratione eos. Accusantium nemo fugiat eligendi beatae molestiae dolorum corporis quia pariatur asperiores perferendis quam non recusandae est facere, architecto voluptatem labore ex veritatis voluptates quas. Illum provident unde consequuntur. Sunt nobis quibusdam animi, fugiat eveniet quo a tenetur porro id nihil, non voluptatum est saepe aliquam aut voluptatem totam provident hic ea nesciunt. Molestias quia exercitationem quibusdam voluptate perspiciatis, ea, ut repellendus iusto voluptatibus nesciunt vitae tenetur fugit est blanditiis deserunt placeat delectus culpa at inventore. Modi quam, distinctio impedit aut perferendis porro vitae repudiandae repellendus laboriosam, eum nulla veniam voluptatem iure voluptatum rerum velit amet. Nisi excepturi numquam incidunt eius non quidem, facere rerum consectetur enim temporibus voluptatem animi omnis magnam hic error cumque accusantium, nostrum aliquam placeat mollitia assumenda recusandae accusamus? Dolorum, corporis? Cumque iure ipsa sit neque doloremque soluta dignissimos nulla dolores repellendus quae molestiae pariatur, eum nesciunt doloribus laborum, asperiores quam quaerat, provident consectetur autem! Maiores neque fuga minima ratione repudiandae laudantium? Asperiores porro ratione et animi libero autem illo laborum ea consequuntur. Esse, ipsum. Doloremque, aspernatur animi.",
    },
    {
      title: "Stamp duties in India's Tier-1 , 2, 3 cities",
      desc: "Our user-friendly platform simplifies the real estate journey. Start by browsing our extensive listings of homes and properties",
      image:
        "https://www.rajyasameeksha.com/Uploads/7c3fe97e-1d0d-4f93-beb8-566e492dd953.jpg",
      summary:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste aliquid facilis quasi possimus, quo impedit eius amet officiis hic, suscipit soluta exercitationem explicabo asperiores earum voluptatem nobis velit ad, distinctio sint officia nam est? Accusamus magni ipsum voluptatum excepturi rerum eius rem repellat voluptate soluta. Maxime inventore eius eaque labore pariatur in recusandae ut commodi ea tempora explicabo iure, neque possimus dicta qui fuga consequuntur error maiores praesentium. Possimus perferendis harum quae, culpa similique sit enim, autem blanditiis cumque optio nam ex quo qui animi repudiandae placeat molestiae consequuntur eos dolore itaque. Vel quibusdam laboriosam illo dolorem? Tempore ratione, odio eos eaque odit earum pariatur nemo facilis qui eligendi officiis. Tenetur ipsa, laboriosam quis cum ullam repudiandae totam cupiditate alias fugiat laborum mollitia eligendi qui enim! Dolorum, ratione eos. Accusantium nemo fugiat eligendi beatae molestiae dolorum corporis quia pariatur asperiores perferendis quam non recusandae est facere, architecto voluptatem labore ex veritatis voluptates quas. Illum provident unde consequuntur. Sunt nobis quibusdam animi, fugiat eveniet quo a tenetur porro id nihil, non voluptatum est saepe aliquam aut voluptatem totam provident hic ea nesciunt. Molestias quia exercitationem quibusdam voluptate perspiciatis, ea, ut repellendus iusto voluptatibus nesciunt vitae tenetur fugit est blanditiis deserunt placeat delectus culpa at inventore. Modi quam, distinctio impedit aut perferendis porro vitae repudiandae repellendus laboriosam, eum nulla veniam voluptatem iure voluptatum rerum velit amet. Nisi excepturi numquam incidunt eius non quidem, facere rerum consectetur enim temporibus voluptatem animi omnis magnam hic error cumque accusantium, nostrum aliquam placeat mollitia assumenda recusandae accusamus? Dolorum, corporis? Cumque iure ipsa sit neque doloremque soluta dignissimos nulla dolores repellendus quae molestiae pariatur, eum nesciunt doloribus laborum, asperiores quam quaerat, provident consectetur autem! Maiores neque fuga minima ratione repudiandae laudantium? Asperiores porro ratione et animi libero autem illo laborum ea consequuntur. Esse, ipsum. Doloremque, aspernatur animi.",
    },
    {
      title: "Stamp duties in India's Tier-1 , 2, 3 cities",
      desc: "Our user-friendly platform simplifies the real estate journey. Start by browsing our extensive listings of homes and properties",
      image:
        "https://www.rajyasameeksha.com/Uploads/7c3fe97e-1d0d-4f93-beb8-566e492dd953.jpg",
      summary:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste aliquid facilis quasi possimus, quo impedit eius amet officiis hic, suscipit soluta exercitationem explicabo asperiores earum voluptatem nobis velit ad, distinctio sint officia nam est? Accusamus magni ipsum voluptatum excepturi rerum eius rem repellat voluptate soluta. Maxime inventore eius eaque labore pariatur in recusandae ut commodi ea tempora explicabo iure, neque possimus dicta qui fuga consequuntur error maiores praesentium. Possimus perferendis harum quae, culpa similique sit enim, autem blanditiis cumque optio nam ex quo qui animi repudiandae placeat molestiae consequuntur eos dolore itaque. Vel quibusdam laboriosam illo dolorem? Tempore ratione, odio eos eaque odit earum pariatur nemo facilis qui eligendi officiis. Tenetur ipsa, laboriosam quis cum ullam repudiandae totam cupiditate alias fugiat laborum mollitia eligendi qui enim! Dolorum, ratione eos. Accusantium nemo fugiat eligendi beatae molestiae dolorum corporis quia pariatur asperiores perferendis quam non recusandae est facere, architecto voluptatem labore ex veritatis voluptates quas. Illum provident unde consequuntur. Sunt nobis quibusdam animi, fugiat eveniet quo a tenetur porro id nihil, non voluptatum est saepe aliquam aut voluptatem totam provident hic ea nesciunt. Molestias quia exercitationem quibusdam voluptate perspiciatis, ea, ut repellendus iusto voluptatibus nesciunt vitae tenetur fugit est blanditiis deserunt placeat delectus culpa at inventore. Modi quam, distinctio impedit aut perferendis porro vitae repudiandae repellendus laboriosam, eum nulla veniam voluptatem iure voluptatum rerum velit amet. Nisi excepturi numquam incidunt eius non quidem, facere rerum consectetur enim temporibus voluptatem animi omnis magnam hic error cumque accusantium, nostrum aliquam placeat mollitia assumenda recusandae accusamus? Dolorum, corporis? Cumque iure ipsa sit neque doloremque soluta dignissimos nulla dolores repellendus quae molestiae pariatur, eum nesciunt doloribus laborum, asperiores quam quaerat, provident consectetur autem! Maiores neque fuga minima ratione repudiandae laudantium? Asperiores porro ratione et animi libero autem illo laborum ea consequuntur. Esse, ipsum. Doloremque, aspernatur animi.",
    },
  ];
  const defaultField = [
    {
      value: "Popularity",
      label: "Popularity",
    },
  ];
  return (
    <MainBox>
      <ContentBox>
        <PcNav show={true} />
        <HeadingAndSearch>
          <span>Home / News</span>
          <h1>News and Article</h1>
        </HeadingAndSearch>
        <ResultAndFilter>
          <DetailPara>Showing all results</DetailPara>{" "}
          <FilterAndSearchBox>
            <Input type="text" id="search" placeholder="Search News..." />

            <Select
              defaultValue="Popularity"
              style={{
                width: "15rem",
                height: "3rem",
              }}
              dropdownStyle={{
                textTransform: "capitalize",
                width: "fit-content",
              }}
              //   onChange={handleChange}
              options={defaultField}
            />
          </FilterAndSearchBox>
        </ResultAndFilter>
        <PropertiesBox>
          {newsArticle.map((p) => {
            return (
              <PropertyBox key={p.image}>
                <Link to={"/news/1"}>
                  <img src={p.image} alt="" />
                  <div>
                    <p>{p.title}</p>
                    <span>{p.desc}</span>
                  </div>
                </Link>
              </PropertyBox>
            );
          })}
        </PropertiesBox>
        <ReadyToLaunch />
        <Footer />
      </ContentBox>

      <MobileBottomNavigation />
    </MainBox>
  );
};

export default AllNews;
