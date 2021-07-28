import React from "react";
import Carousel from "./Carousel";
import Tab from "./Tab";
import TabContent from "./TabContent";

interface Props {}

const RewardsTabArea: React.FC<Props> = (props) => {
  return (
    <Carousel title="Get your favorites for free">
      <Tab
        title={
          <>
            25<span className="text-sm text-gold md:text-base">★</span>
          </>
        }
      >
        <TabContent
          title="Customize your drink"
          desc="Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favorite syrup."
          image="https://www.starbucks.com/weblx/images/rewards/reward-tiers/025.png"
          image-alt="Coffee in cup"
        />
      </Tab>
      <Tab
        title={
          <>
            50<span className="text-sm text-gold md:text-base">★</span>
          </>
        }
      >
        <TabContent
          title="Brewed hot coffee, bakery item or hot tea"
          desc="Pair coffee cake or an almond croissant with your fresh cup of hot brew."
          image="https://www.starbucks.com/weblx/images/rewards/reward-tiers/050.png"
          image-alt="brewed Hot coffee and burger"
        />
      </Tab>
      <Tab
        title={
          <>
            150<span className="text-sm text-gold md:text-base">★</span>
          </>
        }
      >
        <TabContent
          title="Handcrafted drink, hot breakfast or parfait"
          desc="Have a really good morning with a breakfast sandwich, oatmeal or your favorite drink."
          image="https://www.starbucks.com/weblx/images/rewards/reward-tiers/150.png"
          image-alt="handcrafted drinks and burger"
        />
      </Tab>
      <Tab
        title={
          <>
            200<span className="text-sm text-gold md:text-base">★</span>
          </>
        }
      >
        <TabContent
          title="Salad, sandwich or protein box"
          desc="Nourish your day with a hearty Chipotle Chicken Wrap or Eggs & Cheese Protein Box."
          image="https://www.starbucks.com/weblx/images/rewards/reward-tiers/200.png"
          image-alt="salad, sandwich, eggs etc."
        />
      </Tab>
      <Tab
        title={
          <>
            400<span className="text-sm text-gold md:text-base">★</span>
          </>
        }
      >
        <TabContent
          title="Select merchandise or at-home coffee"
          desc="Take home a signature cup, a bag of coffee or your choice of select coffee accessories."
          image="https://www.starbucks.com/weblx/images/rewards/reward-tiers/400.png"
          image-alt="coffee cup and coffee bag"
        />
      </Tab>
    </Carousel>
  );
};

export default React.memo(RewardsTabArea);
