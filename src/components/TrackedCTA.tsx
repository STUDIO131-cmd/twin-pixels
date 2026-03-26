import { useCallback } from "react";
import { useFacebookTracking } from "@/hooks/useFacebookTracking";

interface TrackedCTAProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

/**
 * Wrapper around <a> that fires InitiateCheckout on click.
 * Drop-in replacement for any CTA anchor linking to #preco or checkout.
 */
const TrackedCTA = ({ children, onClick, ...props }: TrackedCTAProps) => {
  const { trackInitiateCheckout } = useFacebookTracking();

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      trackInitiateCheckout({
        productIds: ["IMERSAO-JORNADA"],
        numItems: 1,
        value: 47.0,
        currency: "BRL",
      });
      onClick?.(e);
    },
    [trackInitiateCheckout, onClick]
  );

  return (
    <a {...props} onClick={handleClick}>
      {children}
    </a>
  );
};

export default TrackedCTA;
