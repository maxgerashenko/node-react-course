import { AdvancedStateInner } from '../advancedState/advancedStateInner';
import { StoriesProvider } from '../advancedState/storiesProvider';

export function AdvancdedSate() {
  StoriesProvider;
  return (
    <StoriesProvider>
      <AdvancedStateInner />
    </StoriesProvider>
  );
}
