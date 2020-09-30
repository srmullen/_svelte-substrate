import Task from './Task.svelte';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Task',
  excludeStories: /.*Data$/
};

export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask')
};

export const taskData = {
  id: '1',
  title: 'Test Task',
  state: 'Task_INBOX',
  updated_at: new Date(2019, 0, 1, 9, 0)
};

export const Default = () => ({
  Component: Task,
  props: {
    task: {
      ...taskData
    }
  },
  on: {
    ...actionsData,
  }
});

export const Pinned = () => ({
  Component: Task,
  props: {
    task: {
      ...taskData,
      state: 'TASK_PINNED'
    }
  },
  on: {
    ...actionsData
  }
});

export const Archinved = () => ({
  Component: Task,
  props: {
    task: {
      ...taskData,
      state: 'TASK_ARCHIVED'
    }
  },
  on: {
    ...actionsData
  }
});