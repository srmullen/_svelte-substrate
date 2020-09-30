<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  function pinTask() {
    dispatch('onPinTask', {
      id: task.id
    });
  }

  function archiveTask() {
    dispatch('onArchiveTask', {
      id: task.id
    });
  }

  export let task = {
    id: '',
    title: '',
    state: '',
    updated_at: new Date()
  }

  $: isChecked = task.state === 'TASK_ARCHIVED';
</script>

<div class="list-item {task.state}">
  <label class="checkbox">
    <input type="checkbox" checked={isChecked} disabled name="checked" />
    <span class="checkbox-custom" on:click={archiveTask} />
  </label>
  <div class="title">
    <input type="text" value={task.title} readonly />
  </div>
  <div class="actions">
    {#if task.state !== 'TASK_ARCHIVED'}
      <a href="/" on:click|preventDefault={pinTask}>
        <span class="icon-star" />
      </a>
    {/if}
  </div>
</div>