import { AdvancedStateInner } from '../advancedState/advancedStateInner';
import { StoriesProvider } from '../advancedState/storiesProvider';

export function AdvancdedSate() {
  const x = StoriesProvider;
  return (
    <StoriesProvider>
      <AdvancedStateInner />
    </StoriesProvider>
  );
}
