import React, { useEffect, useRef } from "react";

const Paypal = () => {
  const paypalButtonRef = useRef();

  useEffect(() => {
    // Initialize PayPal button only once when component mounts
    const paypalInstance = window.paypal.Buttons({
      createOrder: (data, actions, err) => {
        return actions.order.create({
          intent: "CAPTURE",
          purchase_units: [
            {
              description: "Cool looking table",
              amount: {
                currency_code: "USD",
                value: 650.0,
              },
            },
          ],
        });
      },
      onApprove: async (data, actions) => {
        const order = await actions.order.capture();
        console.log(order);
      },
      onError: (err) => {
        console.log(err);
      },
    });

    // Render PayPal button inside the ref container
    paypalInstance.render(paypalButtonRef.current);

    // Clean up the PayPal instance when the component unmounts
    return () => {
      paypalInstance.close(); // Close and clean up the PayPal button instance
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <>
      <div ref={paypalButtonRef}></div>
    </>
  );
};

export default Paypal;
