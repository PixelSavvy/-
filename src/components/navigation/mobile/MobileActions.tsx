import BecomeSellerButton from "@/components/buttons/BecomeSellerButton";
import OrderButton from "@/components/buttons/OrderButton";

const MobileActions = () => {
  return (
    <div className="flex items-center justify-between gap-4 lg:hidden md:gap-6">
      <BecomeSellerButton />
      <OrderButton
        className="hidden bg-danger text-background focus:bg-danger/90 hover:bg-danger/90 sm:inline"
        label="შეუკვეთე ახლავე"
      />
    </div>
  );
};

export default MobileActions;
