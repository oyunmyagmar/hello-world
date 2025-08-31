import { Card, Description } from "@/components";

const Home = () => {
  return (
    <div>
      <div>
        <Card image="nike1.jpeg"></Card>
        <Card image="nike2.jpeg"></Card>
        <Card image="nike3.jpeg"></Card>
      </div>
      <div>
        <Description
          text="Every utility class in Tailwind can be applied conditionally at different
      breakpoints, which makes it a piece of cake to build complex responsive
      interfaces without ever leaving your HTML."
        ></Description>
        <Description text="Then to add a utility but only have it take effect at a certain breakpoint, all you need to do is prefix the utility with the breakpoint name, followed by the : character:"></Description>
      </div>
    </div>
  );
};
export default Home;
