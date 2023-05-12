import { StoriesProvider } from "../advancedState/storiesProvider";
import { AdvancedStateInner } from "../advancedState/advancedStateInner";

export function AdvancdedSate() {
  return (
    <StoriesProvider>
      <AdvancedStateInner />
    </StoriesProvider>
  );
}
