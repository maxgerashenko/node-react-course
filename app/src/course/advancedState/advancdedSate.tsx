import { AdvancedStateInner } from '../advancedState/advancedStateInner';
import { StoriesProvider } from '../advancedState/storiesProvider';

export function AdvancdedSate() {
  return (
    <StoriesProvider>
      <AdvancedStateInner />
    </StoriesProvider>
  );
}
