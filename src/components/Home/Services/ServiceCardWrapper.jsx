import ServiceCard from "./ServiceCard";

const ServiceCardWrapper = () => {
  return (
    <div>
      {/* card container */}
      <div className="grid grid-cols-2 gap-7">
        <ServiceCard
          cardType1={true}
          cardTitle={"Cloud + Data Center Transformation"}
        >
          From cloud strategy to implementation and cloud management, our
          industry-leading experts provide end-to-end solutions.
        </ServiceCard>
        <ServiceCard cardType2={true} cardTitle={"Consulting Service"}>
          From cloud strategy to implementation and cloud management, our
          industry-leading experts provide end-to-end solutions.
        </ServiceCard>
        <ServiceCard cardType3={true} cardTitle={"Financial Service"}>
          From cloud strategy to implementation and cloud management, our
          industry-leading experts provide end-to-end solutions.
        </ServiceCard>
        <ServiceCard cardType1={true} cardTitle={"Managed Service Provider"}>
          From cloud strategy to implementation and cloud management, our
          industry-leading experts provide end-to-end solutions.
        </ServiceCard>
        <ServiceCard cardType2={true} cardTitle={"Service Desk Management"}>
          From cloud strategy to implementation and cloud management, our
          industry-leading experts provide end-to-end solutions.
        </ServiceCard>
        <ServiceCard cardType3={true} cardTitle={"Technology Advisory"}>
          From cloud strategy to implementation and cloud management, our
          industry-leading experts provide end-to-end solutions.
        </ServiceCard>
        <ServiceCard
          cardType1={true}
          cardTitle={"Technology Sales & Procurement"}
        >
          From cloud strategy to implementation and cloud management, our
          industry-leading experts provide end-to-end solutions.
        </ServiceCard>
        <ServiceCard cardType2={true} cardTitle={"Consulting Service"}>
          From cloud strategy to implementation and cloud management, our
          industry-leading experts provide end-to-end solutions.
        </ServiceCard>
      </div>
    </div>
  );
};

export default ServiceCardWrapper;
