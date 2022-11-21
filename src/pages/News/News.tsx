import { newsImages } from "~/assets/images";
import { useBackground } from "~/context";
import { Card } from "~/components/Card/";
import { useEffect } from "react";
import { Container, Content, IFrame } from "./styled-components";

export const News = () => {
  const { backgroundURL} = useBackground();
  return (
    <Container className="gap-2">
      <Card
        isLink={false}
        className="bottom-left gap p-2"
        img_url={backgroundURL}
        size="large"
      >
        <h1>
          Peru obtains 18 nominations <br /> in the World Travel Awards 2022
          South America
        </h1>
      </Card>
      <Content className="flex flex-column p-2 gap-1">
        <p>
          Peru and its tourist attractions achieved nominations in 18 categories
          in the recent South American edition of the prestigious World Travel
          Awards (WTA) 2022. The so-called ‘Oscars of Tourism‘ selected{" "}
          <strong>Machupicchu, Lima </strong>and<strong> Máncora</strong> as the
          country‘s main representatives to compete in the travel industry‘s
          most important gala. Therefore, Peru will once again participate in
          the category ’<strong>Atracción Turística Líder</strong>
          ’, ‘<strong>Leading Culinary Destination</strong>’ and ‘
          <strong>Leading Cultural Destination</strong>’ of the region, awards
          obtained in 2021 that consolidate our country as one of the most
          important tourist destinations in the region.
        </p>
        <h3>Nominations</h3>
        <p>
          Our Inca architectural jewel,
          <em>
            <a href="https://www.peru.travel/es/atractivos/machu-picchu">
              Machupicchu
            </a>
          </em>
          , competes in the category of ‘Best Tourist Attraction‘, an award it
          has already won at the regional and world the regional and global
          edition of the World Travel Awards 2021. On the other hand, our
          capital,
          <a href="https://www.peru.travel/es/destinos/lima">Lima</a>, managed
          to be nominated in 7 categories: ‘Best City Destination‘, ‘Best City
          Rest Destination‘, ‘Best City Best City Destination‘, ‘Best City
          Destination‘, ‘Best Business Travel Destination‘, ‘Best Sport Tourism
          business travel‘, ‘Best Sports Tourism Destination‘, ‘Best Romantic
          Destination‘ and ‘Best romantic destination‘ and ‘Best meeting and
          conference destination‘, while Mancora (
          <a href="https://www.peru.travel/es/destinos/lima">Piura</a>) makes
          its own in the ‘Best Beach Destination‘ category..
        </p>
        <IFrame
          className="center full-width"
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fvisitperu%2Fphotos%2Fa.225442820831168%2F7555061814535862%2F%3Ftype%3D3&width=500&show_text=true&height=680&appId"
          // style="border:none;overflow:hidden"
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></IFrame>
      </Content>
    </Container>
  );
};
