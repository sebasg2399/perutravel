import React, { useEffect } from "react";
import { backgroundImages } from "~/assets/images";
import { Card } from "~/components/Card";
import { useBackground } from "~/context";
import { Container, Content } from "./styled-components";

export const About = () => {
  const { backgroundURL } = useBackground();

  return (
    <Container className="gap-2">
      <Card
        isLink={false}
        size="large"
        className="bottom-left p-2"
        img_url={backgroundURL}
      >
        <h1>About Peru</h1>
        <h2>Panorama General</h2>
        <p>Perú, el tercer país más grande de Sudamérica</p>
      </Card>
      <Content className="flex flex-column gap-1 p-2">
        <p>
          This is a demo for a travel information page, made with React and
          Vite. All code and design are from my own, if you're interested in my
          work please contact me.
        </p>

        <ul className="p-1">
          <li>
            <h4>
              <b>Contact Information</b>
            </h4>
          </li>
          <li>
            <b>Phone: </b>+51913508946
          </li>
          <li>
            <b>E-mail: </b>
            <a href="mailto:sebas_23_1999@outlook.com">
              sebas_23_1999@outlook.com
            </a>
          </li>
          <li>
            <b>Linkedin: </b>
            <a href="https://www.linkedin.com/in/sebastian-garcia-melendez-b27975215/">
              Go to Linkedin
            </a>
          </li>
          <li>
            <b>Github: </b>
            <a href="https://github.com/sebasg2399">Go to Github</a>
          </li>
        </ul>
      </Content>
    </Container>
  );
};
