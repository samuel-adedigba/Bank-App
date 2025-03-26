import React from "react";
import Card from "../../components/UI/Atm-Card";

export interface AtmCardProps {
  id: string;
  balance: string;
  cardHolder: string;
  valid: string;
  cardNumber: string;
}

const getCardStyles = (id: string) => {
  switch (id) {
    case "1":
      return {
        bgColor: "bg-gradient-to-r from-[#4C49ED] to-[#0A06F4] text-white",
        chip: "/atm_chip.png",
        logo: "/atm_logo.png",
      };
    case "2":
      return {
        bgColor: "bg-[#FFFFFF] text-black",
        chip: "/chip_card2.png",
        logo: "/atm_logo2.png",
      };
    case "3":
      return {
        bgColor: "bg-gradient-to-r from-[#2D60FF] to-[#539BFF] text-white",
        chip: "/atm_chip.png",
        logo: "/atm_logo.png",
      };
    default:
      return {}
  }
};

export const AtmCardList: React.FC<{ data: AtmCardProps[], view: string }> = ({ data, view }) => {
  return (
    <div className="p-4 w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 ">
        <h2 className="text-xl font-semibold text-[#343C6A]">My Cards</h2>
        <button className="text-[#343C6A] text-base font-bold md:pr-0 pr-14">  {view}</button>
      </div>

      {/* Scrollable Card List */}
      <div className="relative w-full overflow-hidden">
        <div
          className={`flex gap-6 overflow-x-auto scrollbar-hide px-0 pb-2 snap-x snap-mandatory pr-10`}
          style={{
            scrollBehavior: "smooth",
            WebkitOverflowScrolling: "touch",
            overscrollBehaviorX: "contain",
          }}
        >
          {data.length === 1 ? (
            // Single card should take full width
            <div className="flex justify-center w-full">
              <CardComponent item={data[0]} />
            </div>
          ) : (
            data.map((item) => <CardComponent key={item.id} item={item} />)
          )}
        </div>
      </div>
    </div>
  );
};

const CardComponent: React.FC<{ item: AtmCardProps }> = ({ item }) => {
  const { bgColor, chip, logo } = getCardStyles(item.id);

  return (
    <div
      className="snap-center shrink-0 w-[90%] max-w-[360px] sm:w-[320px] md:w-[280px] lg:w-[320px]"
    >
      <Card className={`relative rounded-3xl shadow-md mx-auto ${bgColor} p-4`}>
        <div className="flex justify-between">
          <div>
            <p className="text-sm font-light">Balance</p>
            <div className="text-xl font-semibold">{item.balance}</div>
          </div>
          <img src={chip} alt="chip-card" className="w-12" />
        </div>

        <div className="mt-6">
          <div className="flex justify-between text-sm">
            <div>
              <p className="font-thin text-sm">CARD HOLDER</p>
              <p className="font-normal text-lg">{item.cardHolder}</p>
            </div>
            <div>
              <p className="font-thin">VALID THRU</p>
              <p className="font-medium text-base">{item.valid}</p>
            </div>
          </div>

          <div className="flex justify-between items-center mt-4">
            <span className="text-lg font-normal">{item.cardNumber}</span>
            <img src={logo} alt="card-logo" className="w-10" />
          </div>
        </div>
      </Card>
    </div>
  );
};
