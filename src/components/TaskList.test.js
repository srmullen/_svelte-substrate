import PureTaskList from './PureTaskList.svelte';
import { render } from '@testing-library/svelte';
import { withPinnedTasksData } from './PureTaskList.stories';

test('TaskList', async () => {
  const { container } = await render(PureTaskList, {
    props: {
      tasks: withPinnedTasksData
    }
  });
  expect(container.firstChild.children[0].classList.contains('TASK_PINNED')).toBe(true);
});