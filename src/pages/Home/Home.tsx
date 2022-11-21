import { backgroundImages, logoImages } from "~/assets/images";
import { useBackground } from "~/context/BackgroundContext";
import { Container, CardList } from "./styled-components";
import { useEffect } from "react";
import { Card } from "~/components/Card/";

export const Home = () => {
  const { backgroundURL } = useBackground();
  
  return (
    <Container>
      <Card
        className="bottom-left p-2"
        background_position_y="20%"
        img_url={backgroundURL}
        size="large"
      >
        <h2>
          Discover an amazing <br /> <span>Peru</span>
        </h2>
        <p>
          Peru is one of the world’s most varied countries. It is a
          multicultural nation, filled with traditions, a unique gastronomy and
          vast natural reserves. It is home to 12 UNESCO World Heritage Sites
          and 84 of the planet’s 117 life zones.
        </p>
      </Card>
      <h2>Destination</h2>
      <CardList className="gap-2">
        <Card className="bottom-left p-1 " img_url={backgroundImages.amazonas}>
          <h3>Selva, Amazonia</h3>
        </Card>
        <Card
          className="bottom-left p-1 "
          img_url={backgroundImages.huacachina}
        >
          <h3>Ica, Huacachina</h3>
        </Card>
        <Card
          className="bottom-left p-1 m-col-2"
          img_url={backgroundImages.lima}
        >
          <h3>Lima, Oldest City</h3>
        </Card>
      </CardList>
    </Container>
  );
};
