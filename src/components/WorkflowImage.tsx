import { memo } from "react";
import ImageFrame from "./ImageFrame";

// Premium hero-like workflow image component
function WorkflowImage() {
  return (
    <div className="relative w-full max-w-[680px] lg:max-w-[760px] mx-auto">
      <ImageFrame
        src="/Focused Support Automation.webp"
        alt="Focused support automation met Cusmato workflows"
        aspectRatio="16/9"
        variant="dark"
        showGlow={true}
        loading="lazy"
      />
    </div>
  );
}

export default memo(WorkflowImage);
