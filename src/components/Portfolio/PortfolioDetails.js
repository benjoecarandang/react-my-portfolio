import {Container, SectionHeadings} from "../../UI";
import { useParams } from "react-router-dom"

const PortfolioDetails = (props) => {
	const params = useParams();

	//query find(id), pass details
	
  return (
    <section>
      <div>
        <Container>
          <SectionHeadings
            tagline="Portfolio"
            title="Virtuallio Time Tracker"
            description={[null]}
          />

					<h1 className="text-white">
						Insert Gallery of Project {params.id}
					</h1>
        </Container>
      </div>
    </section>
  );
};

export default PortfolioDetails;
