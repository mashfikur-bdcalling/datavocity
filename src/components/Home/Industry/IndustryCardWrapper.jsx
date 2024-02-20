import IndustryCard from "./IndustryCard";

const IndustryCardWrapper = () => {
  return (
    <div>
      {/* card wrapper */}
      <div className="grid 2xl:grid-cols-3 gap-y-6 gap-x-6 ">
        <IndustryCard cardTitle={"Automotive"} cardType3={true}>
          New technologies have changed how automotive dealerships do business.
          We help manage your IT services by increasing the speed and efficiency
          of your transactions and enhancing your communications.
        </IndustryCard>
        <IndustryCard cardTitle={"Education"} cardType2={true}>
          New technologies have changed how automotive dealerships do business.
          We help manage your IT services by increasing the speed and efficiency
          of your transactions and enhancing your communications.
        </IndustryCard>
        <IndustryCard cardTitle={"Financial"} cardType1={true}>
          New technologies have changed how automotive dealerships do business.
          We help manage your IT services by increasing the speed and efficiency
          of your transactions and enhancing your communications.
        </IndustryCard>
        <IndustryCard cardTitle={"Healthcare"} cardType2={true}>
          New technologies have changed how automotive dealerships do business.
          We help manage your IT services by increasing the speed and efficiency
          of your transactions and enhancing your communications.
        </IndustryCard>
        <IndustryCard cardTitle={"Public Sector"} cardType1={true}>
          New technologies have changed how automotive dealerships do business.
          We help manage your IT services by increasing the speed and efficiency
          of your transactions and enhancing your communications.
        </IndustryCard>
        <IndustryCard cardTitle={"SMBs"} cardType3={true}>
          New technologies have changed how automotive dealerships do business.
          We help manage your IT services by increasing the speed and efficiency
          of your transactions and enhancing your communications.
        </IndustryCard>
      </div>
    </div>
  );
};

export default IndustryCardWrapper;
