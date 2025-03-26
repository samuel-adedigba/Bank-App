export const getCardStyles = (key: string) => {
  switch (key) {
    case "balance":
      return {
        iconColor: "bg-[#FFF5D9]",
        logo: "/money_icon.png",
      };
    case "income":
      return {
        iconColor: "bg-[#E7EDFF]",
        logo: "/income_icon.png",
      };
    case "expense":
      return {
        iconColor: "bg-[#FFE0EB]",
        logo: "/expense_icon.png",
      };
    case "saving":
      return {
        iconColor: "bg-[#DCFAF4]",
        logo: "/savings_icon.png",
      };
    case "total_investment":
      return {
        iconColor: "bg-[#DCFAF4]",
        logo: "/money_icon.png",
      };
    case "no_investment":
      return {
        iconColor: "bg-[#DCFAF4]",
        logo: "/investment_icon.png",
      };
    case "rate":
      return {
        iconColor: "bg-[#DCFAF4]",
        logo: "/rate_icon.png",
      };
    case "apple":
      return {
        iconColor: "bg-[#FFE0EB]",
        logo: "/apple_icon.png",
      };
    case "samsung":
      return {
        iconColor: "bg-[#E7EDFF]",
        logo: "/samsung_icon.png",
      };
    case "tesla":
      return {
        iconColor: "bg-[#FFF5D9]",
        logo: "/tesla_icon.png",
      };
    case "credi-card1":
      return {
        iconColor: "bg-[#E7EDFF]",
        logo: "/credit-card 1.png",
      };
    case "credi-card2":
      return {
        iconColor: "bg-[#FFE0EB]",
        logo: "/credit-card 2.png",
      };
    case "credi-card3":
      return {
        iconColor: "bg-[#FFF5D9]",
        logo: "/credit_card 3.png",
      };
      case "personal_loans":
        return {
          iconColor: "bg-[#E7EDFF]",
          logo: "/personal_icon.png",
        };
      case "corporate_loans":
        return {
          iconColor: "bg-[#FFF5D9]",
          logo: "/corporate_loan.png",
        };
      case "business_loans":
        return {
          iconColor: "bg-[#FFE0EB]",
          logo: "/business_loan.png",
        };
      case "custom_loans":
        return {
          iconColor: "bg-[#FFE0EB]",
          logo: "/custom_loan.png",
        };
        case "insurance":
          return {
            iconColor: "bg-[#E7EDFF]",
            logo: "/insurance.png",
          };
        case "safety":
          return {
            iconColor: "bg-[#DCFAF8]",
            logo: "/safety.png",
          };
        case "shopping":
          return {
            iconColor: "bg-[#FFF5D9]",
            logo: "/shopping.png",
          };
    default:
      return { iconColor: "", logo: "" };
  }
};