import Logo from "./../images/mylogo.png";
import Container from "./../UI/Container";

const Header = () => {
  return (
    <header>
      <nav>
        <Container>
          <div className="relative flex items-center justify-between h-24">
            <div className="flex-1 flex items-center justify-center">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="block h-16 w-auto invert z-10"
                  src={Logo}
                  alt="Workflow"
                />
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
