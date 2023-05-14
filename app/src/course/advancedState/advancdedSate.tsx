import { StoriesProvider } from '../advancedState/storiesProvider';
import { AdvancedStateInner } from '../advancedState/advancedStateInner';

export function logComponent(componentName = ''): true {
  console.log('B:' + componentName);
  return true;
}

export const AdvancdedSate = () =>
  logComponent('AdvancdedSate') && (
    <StoriesProvider>
      <AdvancedStateInner />
    </StoriesProvider>
  );
