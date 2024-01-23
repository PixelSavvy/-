import { Link } from "react-router-dom";

import useHref from "@/hooks/useHref";

import { Button } from "../ui";

interface OrderButtonProps {
  label: string;
  className: string;
}

const OrderButton: React.FC<OrderButtonProps> = ({ label, className }) => {
  const mobileHref = "fb-messenger://user-thread/105974154577392";

  const desktopHref = "https://www.facebook.com/messages/t/105974154577392";

  const { href } = useHref(mobileHref, desktopHref);

  const classes = `${className}`;

  return (
    <Button className={classes}>
      <Link to={href} target="_blank" tabIndex={-1}>
        {label}
      </Link>
    </Button>
  );
};

export default OrderButton;
