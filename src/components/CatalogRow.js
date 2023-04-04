import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Card } from "../UI";
import tw, { styled } from "twin.macro";

const CatalogRow = ({ data, movie_card_width = 430 }) => {
  const slides = data.map((item, key) => {
    return (
      <Card
        id={item.id}
        className="mr-4 !mb-0"
        imageSrc={item.imageSrc}
        title={item.title}
        description={item.description}
        tags={item.tags}
        gradientProperty={item.gradientProperty}
        repoLink={item.repoLink}
        websiteLink={item.websiteLink}
        key={key}
      />
    );
  });

  const [scrolX, setScrollX] = useState(0);
  let listW = slides.length * movie_card_width;

  const handleLeftArrow = () => {
    let x = scrolX + Math.round(Math.round(window.innerWidth / 2));

    if (x > 0) {
      x = 0;
    }

    setScrollX(x);
  };

  const handleRightArrow = () => {
    let x = scrolX - Math.round(window.innerWidth / 2);

    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW;
    }

    setScrollX(x);
  };

  if (data)
    return (
      <StyledCatalogRow>
        <StyledCatalogList className="catalog-row-list-area"
          style={{
            marginLeft: `${scrolX}px`,
            width: `${listW}px`
          }}
        >
          <StyledNavigationArrows
            className="navigate-left"
            position="left"
            onClick={() => handleLeftArrow()}
          >
            <FontAwesomeIcon
              style={{ color: "white", fontSize: "50px" }}
              icon={faChevronLeft}
            />
          </StyledNavigationArrows>
          <StyledNavigationArrows
            className="navigate-right"
            position="right"
            onClick={() => handleRightArrow()}
          >
            <FontAwesomeIcon
              style={{ color: "white", fontSize: "50px" }}
              icon={faChevronRight}
            />
          </StyledNavigationArrows>
          {slides}
        </StyledCatalogList>
      </StyledCatalogRow>
    );
}

const StyledNavigationArrows = styled.div(({ position }) => [
  tw`absolute flex items-center w-10 h-full justify-center bg-black bg-opacity-80 cursor-pointer opacity-0 z-50 transition-all
`,
  position === "right" ? tw`right-0 top-0` : tw`left-0 top-0`
]);

const StyledCatalogRow = styled.div(tw`
  w-['98vw'] relative mx-auto overflow-hidden pt-5 rounded-lg
`);

const StyledCatalogList = styled.div(tw`
  flex flex-row mx-auto transition-all
`);

export default CatalogRow;