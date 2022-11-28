import BaseMenu from "./baseMenu";
import SmallItemMenu from "./smallItemMenu";

function CommunityMenu() {
  return (
    <BaseMenu>
      <div>
        <div className="p-4 space-y-3">
          <SmallItemMenu icon="discord" title="Discord" showArrow/>
          <SmallItemMenu icon="forum" title="Discussion Forum" showArrow/>
          <SmallItemMenu icon="telegram" title="Telegram" showArrow/>
          <SmallItemMenu icon="twitter" title="Twitter" showArrow/>
          <SmallItemMenu icon="youtube" title="Youtube" showArrow/>
          <SmallItemMenu icon="github" title="Github" showArrow/>
          <SmallItemMenu icon="instagram" title="Instagram" showArrow/>
          <SmallItemMenu icon="medium" title="Medium" showArrow/>
          <SmallItemMenu icon="facebook" title="Facebook" showArrow/>
        </div>
      </div>
    </BaseMenu>
  );
}

export default CommunityMenu;
