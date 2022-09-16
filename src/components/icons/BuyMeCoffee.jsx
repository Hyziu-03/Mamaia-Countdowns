import { Link } from "react-router-dom";

const BuyMeCoffee = () => {
  return (
      <Link to="https://www.buymeacoffee.com/szymonhyziak">
          <img
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
              alt="Buy Me A Coffee"
              className="sponsorship"
          />
      </Link>
  );
}

export default BuyMeCoffee;
